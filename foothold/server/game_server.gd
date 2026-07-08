# ============================================================================
# GameServer — the authoritative simulation (design doc §13, TA §3/§7/§8.1).
# Runs on the host (listen-server) or a headless dedicated process. Owns tile
# state, token pools, player positions, health, and combat. Clients send
# INTENTS; the server validates every one before doing anything.
#
# One code path for everything a player does: use_ability() reads an AbilityDef
# and runs its composable effect primitives (SetTileOwner, Damage, ...). Paint
# and shooting are the same pipeline — the engine never special-cases either.
#
# Positions live on the XZ ground plane (Y up).
# ============================================================================
class_name GameServer
extends Node

const TILE := 2.0
const MOVE_SPEED := 7.0
const MAX_HP := 100
const HIT_RADIUS := 0.6      # player hit sphere
const EYE := 1.6
const NET_DT := 0.05         # 20 Hz state broadcast
const TERR_DT := 1.0         # 1 Hz territory / score readout
const TEAM_NAMES := ["A", "B", "C", "D"]

var grid: TileGrid
var rules: Rules
var mode: Dictionary = {}
var team_pool: Dictionary = {}     # team -> tokens
var team_score: Dictionary = {}    # team -> kills
var players: Dictionary = {}       # peer_id -> player dict
var world_w := 0.0
var world_h := 0.0
var match_time := 0.0
var respawn_delay := 5.0

var _next_slot := 0
var _net_acc := 0.0
var _terr_acc := 0.0
var _pending := PackedByteArray()
var _ended := false

func start(mode_id: String = "territory_control") -> void:
	mode = Defs.modes.get(mode_id, {})
	rules = Rules.new()
	rules.seed(mode.get("rules", {}))
	var starting := int(mode.get("starting_tokens", 0))
	var teams := int(mode.get("teams", 2))
	for t in teams:
		team_pool[t] = starting
		team_score[t] = 0
	var r: Dictionary = mode.get("respawn", {})
	respawn_delay = 0.0 if r.get("mode", "") == "instant" else float(r.get("delay", 5))

	grid = TileGrid.new()
	grid.setup(64, 64, true)
	world_w = grid.w * TILE
	world_h = grid.h * TILE

	EventBus.subscribe(Events.TILE_CHANGED, _on_tile_changed)
	multiplayer.peer_connected.connect(_on_peer_connected)
	multiplayer.peer_disconnected.connect(_on_peer_disconnected)
	print("[Server] mode=%s teams=%d start_tokens=%d respawn=%.1fs" % [mode.get("id", "?"), teams, starting, respawn_delay])

# ---- lifecycle -------------------------------------------------------------
func _on_peer_connected(id: int) -> void:
	add_player(id)
	Net.push_full_grid.rpc_id(id, grid.owner, grid.type, grid.w, grid.h)

func _on_peer_disconnected(id: int) -> void:
	if players.has(id):
		players.erase(id)
		Net.push_event.rpc("PlayerLeft", "peer %d left" % id)

func add_player(id: int) -> void:
	var slot := _next_slot
	_next_slot += 1
	var team := slot % int(mode.get("teams", 2))
	players[id] = {
		"pos": _spawn_pos(team, slot), "input": Vector2.ZERO,
		"team": team, "slot": slot,
		"hp": MAX_HP, "alive": true, "respawn_at": 0.0,
		"cooldowns": {}, "damage_log": [],
	}
	EventBus.publish(Events.PLAYER_SPAWNED, {"id": id, "team": team, "slot": slot})
	Net.push_event.rpc("PlayerSpawned", "peer %d joined — Team %s" % [id, _team_name(team)])

func _spawn_pos(team: int, slot: int) -> Vector3:
	var margin := 8.0
	var x := margin if team == 0 else world_w - margin
	var z := fmod(margin + float(slot) * 4.0, maxf(world_h - margin, 1.0))
	return Vector3(x, 0.0, z)

# ---- intents (caller is UNTRUSTED) -----------------------------------------
func set_player_input(id: int, wish: Vector2) -> void:
	if players.has(id) and players[id]["alive"]:
		players[id]["input"] = wish.limit_length(1.0)

func handle_paint_intent(id: int, x: int, y: int) -> void:
	use_ability(id, "paint", {"tile": Vector2i(x, y)})

func handle_fire_intent(id: int, origin: Vector3, dir: Vector3) -> void:
	use_ability(id, "shoot", {"origin": origin, "dir": dir})

# ---- the one ability pipeline (TA §7) --------------------------------------
func use_ability(caster_id: int, ability_id: String, target: Dictionary) -> void:
	if not players.has(caster_id):
		return
	var p: Dictionary = players[caster_id]
	if not p["alive"]:
		return
	var ab: Dictionary = Defs.abilities.get(ability_id, {})
	if ab.is_empty():
		return
	if float(p["cooldowns"].get(ability_id, 0.0)) > match_time:
		return  # still cooling down (server-enforced rate limit)

	var ok := true
	for eff in ab.get("effects", []):
		if not _run_effect(eff, caster_id, p, target, ab):
			ok = false
			break
	if ok:
		p["cooldowns"][ability_id] = match_time + float(ab.get("cooldown", 0.1))
		EventBus.publish(Events.ABILITY_USED, {"player": caster_id, "ability": ability_id})

# Each primitive has one server-side executor (TA §6.2). Returns false to abort
# the ability (e.g. can't pay) so the cooldown isn't consumed.
func _run_effect(eff: Dictionary, caster_id: int, p: Dictionary, target: Dictionary, ab: Dictionary) -> bool:
	match eff.get("op", ""):
		"SetTileOwner":
			return _eff_set_tile_owner(caster_id, p, target)
		"Damage":
			return _eff_damage(caster_id, p, target, eff, ab)
		_:
			return true  # unknown op: no-op success (forward-compatible)

func _eff_set_tile_owner(caster_id: int, p: Dictionary, target: Dictionary) -> bool:
	if not rules.check("painting.enabled"):
		_deny(caster_id, "painting disabled in this mode")
		return false
	var tile: Vector2i = target.get("tile", Vector2i(-1, -1))
	if not grid.in_bounds(tile.x, tile.y):
		return false
	var team: int = p["team"]
	var mine := team + 1
	var cur := grid.owner_at(tile.x, tile.y)
	if cur == mine:
		return false  # already ours — no-op, no cost, no cooldown
	var is_enemy := cur != TileGrid.NEUTRAL and cur != mine
	if is_enemy and not rules.check("painting.enemy_tiles"):
		_deny(caster_id, "cannot paint enemy tiles")
		return false
	var cost := int(rules.value("painting.cost_enemy" if is_enemy else "painting.cost_neutral"))
	if int(team_pool.get(team, 0)) < cost:
		_deny(caster_id, "not enough tokens (%d/%d)" % [team_pool.get(team, 0), cost])
		return false
	team_pool[team] = int(team_pool[team]) - cost
	EventBus.publish(Events.RESOURCE_SPENT, {"team": team, "amount": cost, "sink": "paint"})
	grid.apply(tile.x, tile.y, mine, -1, 0, {"kind": "ability", "actor": p["slot"], "ref": "paint"})
	return true

func _eff_damage(caster_id: int, p: Dictionary, target: Dictionary, eff: Dictionary, ab: Dictionary) -> bool:
	var origin: Vector3 = target.get("origin", Vector3.ZERO)
	var dir: Vector3 = target.get("dir", Vector3.FORWARD)
	if dir.length() < 0.001:
		return false
	dir = dir.normalized()
	var max_dist := float(ab.get("range", 60.0))
	var hit := _hitscan(caster_id, p["team"], origin, dir, max_dist)
	var endp: Vector3 = hit["point"] if hit["id"] >= 0 else origin + dir * max_dist
	Net.push_tracer.rpc(caster_id, origin, endp)
	if hit["id"] >= 0:
		_apply_damage(hit["id"], int(eff.get("amount", 10)),
			{"id": caster_id, "slot": p["slot"], "team": p["team"], "ref": "shoot"})
		Net.push_hitmarker.rpc_id(caster_id)
	return true

# Ray vs player hit-spheres. No physics bodies — players are data (TA §5 ethos).
func _hitscan(shooter_id: int, shooter_team: int, origin: Vector3, dir: Vector3, max_dist: float) -> Dictionary:
	var ff := rules.check("combat.friendly_fire")
	var best_t := max_dist
	var best_id := -1
	for id in players:
		if id == shooter_id:
			continue
		var t: Dictionary = players[id]
		if not t["alive"]:
			continue
		if not ff and t["team"] == shooter_team:
			continue
		var center: Vector3 = t["pos"] + Vector3(0.0, 0.9, 0.0)
		var oc := origin - center
		var b := oc.dot(dir)
		var c := oc.dot(oc) - HIT_RADIUS * HIT_RADIUS
		var disc := b * b - c
		if disc < 0.0:
			continue
		var tt := -b - sqrt(disc)
		if tt < 0.0:
			tt = -b + sqrt(disc)
		if tt < 0.0 or tt > best_t:
			continue
		best_t = tt
		best_id = id
	return {"id": best_id, "point": origin + dir * best_t, "dist": best_t}

# ---- damage / death / attribution (TA §8.1) --------------------------------
func _apply_damage(victim_id: int, amount: int, source: Dictionary) -> void:
	if not players.has(victim_id):
		return
	var v: Dictionary = players[victim_id]
	if not v["alive"]:
		return
	v["hp"] = int(v["hp"]) - amount
	v["damage_log"].append({"id": source["id"], "time": match_time})
	if int(v["hp"]) <= 0:
		_kill(victim_id, source)

func _kill(victim_id: int, source: Dictionary) -> void:
	var v: Dictionary = players[victim_id]
	v["alive"] = false
	v["hp"] = 0
	v["input"] = Vector2.ZERO
	v["respawn_at"] = match_time + respawn_delay

	# Assists: distinct other damagers within the window.
	var assists: Array = []
	var window := float(rules.value("credit.assist_window", 8.0))
	var seen := {}
	for d in v["damage_log"]:
		if d["id"] == source["id"] or seen.has(d["id"]):
			continue
		if float(d["time"]) < match_time - window:
			continue
		seen[d["id"]] = true
		assists.append(d["id"])

	# Painter assist: victim died on painted ground -> that tile's owner_setter.
	var painter_note := ""
	if rules.check("credit.painter_assist"):
		var tx := int(v["pos"].x / TILE)
		var ty := int(v["pos"].z / TILE)
		if grid.in_bounds(tx, ty) and grid.owner_at(tx, ty) != TileGrid.NEUTRAL:
			var setter: int = grid.owner_setter[grid.idx(tx, ty)]
			if setter != TileGrid.SYSTEM and setter != int(source["slot"]):
				painter_note = "  (+painter assist: slot %d)" % setter

	if team_score.has(source["team"]):
		team_score[source["team"]] = int(team_score[source["team"]]) + 1

	EventBus.publish(Events.PLAYER_DIED, {
		"victim": victim_id, "killer": source["id"], "assists": assists,
		"cause": source["ref"], "position": v["pos"],
	})
	var line := "%s peer%d  ▸  %s peer%d  [%s]%s" % [
		_team_name(source["team"]), source["id"],
		_team_name(v["team"]), victim_id, source["ref"], painter_note]
	Net.push_killfeed.rpc(line)
	v["damage_log"].clear()

func _respawn(id: int) -> void:
	var p: Dictionary = players[id]
	p["alive"] = true
	p["hp"] = MAX_HP
	p["pos"] = _spawn_pos(p["team"], p["slot"])
	p["damage_log"].clear()

# ---- simulation tick -------------------------------------------------------
func _physics_process(delta: float) -> void:
	match_time += delta
	for id in players:
		var p: Dictionary = players[id]
		if not p["alive"]:
			if match_time >= float(p["respawn_at"]):
				_respawn(id)
			continue
		var wish: Vector2 = p["input"]
		if wish != Vector2.ZERO:
			p["pos"] += Vector3(wish.x, 0.0, wish.y) * MOVE_SPEED * delta
			p["pos"].x = clampf(p["pos"].x, 0.5, world_w - 0.5)
			p["pos"].z = clampf(p["pos"].z, 0.5, world_h - 0.5)

	_net_acc += delta
	if _net_acc >= NET_DT:
		_net_acc = 0.0
		_broadcast_snapshot()
		if _pending.size() > 0:
			Net.push_tile_delta.rpc(_pending)
			_pending = PackedByteArray()

	_terr_acc += delta
	if _terr_acc >= TERR_DT:
		_terr_acc = 0.0
		_broadcast_territory()

func _broadcast_snapshot() -> void:
	var snap := []
	for id in players:
		var p: Dictionary = players[id]
		snap.append([id, p["pos"].x, p["pos"].z, p["team"], int(p["hp"]), 1 if p["alive"] else 0])
	Net.push_snapshot.rpc(snap)

func _broadcast_territory() -> void:
	var total := grid.total_tiles()
	var a := grid.count_by_owner(1)
	var b := grid.count_by_owner(2)
	EventBus.publish(Events.TERRITORY_COUNT, {"a": a, "b": b, "total": total})
	Net.push_event.rpc("TerritoryCount", "A %d%% (kills %d)  ·  B %d%% (kills %d)  ·  tokens A:%d B:%d" % [
		roundi(100.0 * a / total), team_score.get(0, 0),
		roundi(100.0 * b / total), team_score.get(1, 0),
		team_pool.get(0, 0), team_pool.get(1, 0)])
	if not _ended:
		var win: Dictionary = mode.get("win", {})
		if win.get("type", "") == "territory":
			var thr := float(win.get("threshold", 0.6))
			if float(a) / total >= thr:
				_end("Team A — Territory Control win!")
			elif float(b) / total >= thr:
				_end("Team B — Territory Control win!")
		elif win.get("type", "") == "score":
			var thr2 := int(win.get("threshold", 75))
			if int(team_score.get(0, 0)) >= thr2:
				_end("Team A — score win!")
			elif int(team_score.get(1, 0)) >= thr2:
				_end("Team B — score win!")

func _end(text: String) -> void:
	_ended = true
	Net.push_event.rpc("MatchEnd", text)

# ---- replication plumbing --------------------------------------------------
func _on_tile_changed(p: Dictionary) -> void:
	_pending.append(p["x"])
	_pending.append(p["y"])
	_pending.append(p["owner"])
	_pending.append(p["type"])

func _deny(id: int, reason: String) -> void:
	EventBus.publish(Events.ABILITY_DENIED, {"player": id, "reason": reason})
	Net.push_event.rpc_id(id, "AbilityDenied", reason)

func _team_name(team: int) -> String:
	return TEAM_NAMES[team] if team < TEAM_NAMES.size() else str(team)
