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
const DISABLED_WIRE_BIT := 0x40   # high bit on the replicated type byte = locked/sabotaged
# Default dual-class combo until a player locks their own on the pre-match screen.
const DEFAULT_CLASS_A := "painter"
const DEFAULT_SPEC_A := "paint"
const DEFAULT_CLASS_B := "assault"
const DEFAULT_SPEC_B := "grenade"

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

var _shields: Dictionary = {}     # tile idx -> {center: Vector3, team: int}
var _next_slot := 0
var _net_acc := 0.0
var _terr_acc := 0.0
var _tile_acc := 0.0
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
		"classA": DEFAULT_CLASS_A, "specA": DEFAULT_SPEC_A,
		"classB": DEFAULT_CLASS_B, "specB": DEFAULT_SPEC_B, "locked": false,
		"primary": "sidearm", "rmb": "", "f2": "",
		"move_speed": MOVE_SPEED, "paint_cd_mult": 1.0, "paint_cost_delta": 0,
		"last_tile": Vector2i(-999, -999), "stunned_until": 0.0,
	}
	_derive_loadout(players[id])
	EventBus.publish(Events.PLAYER_SPAWNED, {"id": id, "team": team, "slot": slot})
	Net.push_event.rpc("PlayerSpawned", "peer %d joined — Team %s" % [id, _team_name(team)])

# Match-locked dual class (design doc §8: combine two presets). A player picks
# two classes + one specialization each, once, then it's frozen for the match.
func select_classes(id: int, class_a: String, spec_a: String, class_b: String, spec_b: String) -> void:
	if not players.has(id):
		return
	var p: Dictionary = players[id]
	if p["locked"]:
		_deny(id, "classes are locked for this match")
		return
	if not Defs.loadouts.has(class_a) or not Defs.loadouts.has(class_b):
		return
	p["classA"] = class_a
	p["specA"] = spec_a if spec_a in Defs.loadouts[class_a].get("specializations", []) else _first_spec(class_a)
	p["classB"] = class_b
	p["specB"] = spec_b if spec_b in Defs.loadouts[class_b].get("specializations", []) else _first_spec(class_b)
	p["locked"] = true
	_derive_loadout(p)
	_respawn(id)
	Net.push_event.rpc("Loadout", "peer %d locked %s(%s) + %s(%s)" % [id,
		Defs.loadouts[class_a].get("name", class_a), _ability_name(p["specA"]),
		Defs.loadouts[class_b].get("name", class_b), _ability_name(p["specB"])])

func _first_spec(cls: String) -> String:
	var specs: Array = Defs.loadouts.get(cls, {}).get("specializations", [])
	return specs[0] if specs.size() > 0 else ""

# Derive the runtime kit from the two chosen classes: Class A's weapon + Class A's
# spec (RMB) + Class B's spec (F); both passives apply.
func _derive_loadout(p: Dictionary) -> void:
	var ca: Dictionary = Defs.loadouts.get(p["classA"], {})
	var cb: Dictionary = Defs.loadouts.get(p["classB"], {})
	p["primary"] = ca.get("primary", "sidearm")
	p["rmb"] = p["specA"]
	p["f2"] = p["specB"]
	p["move_speed"] = MOVE_SPEED
	p["paint_cd_mult"] = 1.0
	p["paint_cost_delta"] = 0
	_apply_passive(p, ca.get("passive", ""))
	_apply_passive(p, cb.get("passive", ""))

func _apply_passive(p: Dictionary, passive: String) -> void:
	match passive:
		"sprint": p["move_speed"] = MOVE_SPEED * 1.4
		"faster_painting": p["paint_cd_mult"] = 0.5
		"improved_token_efficiency": p["paint_cost_delta"] = int(p["paint_cost_delta"]) - 1
		# "reduced_utility_cost" / "demolition": no effect until utilities / tile HP exist

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
	if players.has(id):
		use_ability(id, players[id]["primary"], {"origin": origin, "dir": dir})

func handle_signature_intent(id: int, origin: Vector3, dir: Vector3, tx: int, ty: int) -> void:
	if players.has(id) and players[id]["rmb"] != "":
		use_ability(id, players[id]["rmb"], {"origin": origin, "dir": dir, "tile": Vector2i(tx, ty)})

func handle_slot2_intent(id: int, origin: Vector3, dir: Vector3, tx: int, ty: int) -> void:
	if players.has(id) and players[id]["f2"] != "":
		use_ability(id, players[id]["f2"], {"origin": origin, "dir": dir, "tile": Vector2i(tx, ty)})

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
		var cd := float(ab.get("cooldown", 0.1))
		if ability_id == "paint":
			cd *= float(p.get("paint_cd_mult", 1.0))   # Painter passive
		p["cooldowns"][ability_id] = match_time + cd
		EventBus.publish(Events.ABILITY_USED, {"player": caster_id, "ability": ability_id})

# Each primitive has one server-side executor (TA §6.2). Returns false to abort
# the ability (e.g. can't pay) so the cooldown isn't consumed.
func _run_effect(eff: Dictionary, caster_id: int, p: Dictionary, target: Dictionary, ab: Dictionary) -> bool:
	match eff.get("op", ""):
		"SetTileOwner":
			return _eff_set_tile_owner(caster_id, p, target)
		"SetTileType":
			return _eff_set_tile_type(caster_id, p, target, eff, ab)
		"Damage":
			return _eff_damage(caster_id, p, target, eff, ab)
		"AreaDamage":
			return _eff_area_damage(caster_id, p, target, eff, ab)
		"SetTileDisabled":
			return _eff_set_tile_disabled(caster_id, p, target, ab)
		_:
			return true  # unknown op: no-op success (forward-compatible; e.g. SpawnEntity)

func _eff_set_tile_owner(caster_id: int, p: Dictionary, target: Dictionary) -> bool:
	if not rules.check("painting.enabled"):
		_deny(caster_id, "painting disabled in this mode")
		return false
	var tile: Vector2i = target.get("tile", Vector2i(-1, -1))
	if not grid.in_bounds(tile.x, tile.y):
		return false
	if grid.is_disabled(tile.x, tile.y):
		_deny(caster_id, "tile is sabotaged (locked)")
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
	var cost := maxi(1, int(rules.value("painting.cost_enemy" if is_enemy else "painting.cost_neutral")) + int(p.get("paint_cost_delta", 0)))
	if int(team_pool.get(team, 0)) < cost:
		_deny(caster_id, "not enough tokens (%d/%d)" % [team_pool.get(team, 0), cost])
		return false
	team_pool[team] = int(team_pool[team]) - cost
	EventBus.publish(Events.RESOURCE_SPENT, {"team": team, "amount": cost, "sink": "paint"})
	grid.apply(tile.x, tile.y, mine, -1, 0, {"kind": "ability", "actor": p["slot"], "ref": "paint"})
	return true

# Place a special tile type (shock/mine/heal/slow) on friendly ground. Same
# mutation path as paint, so attribution (type_setter) records the placer.
func _eff_set_tile_type(caster_id: int, p: Dictionary, target: Dictionary, eff: Dictionary, ab: Dictionary) -> bool:
	var tile: Vector2i = target.get("tile", Vector2i(-1, -1))
	if not grid.in_bounds(tile.x, tile.y):
		return false
	if grid.is_disabled(tile.x, tile.y):
		_deny(caster_id, "tile is sabotaged (locked)")
		return false
	var team: int = p["team"]
	if grid.owner_at(tile.x, tile.y) != team + 1:   # requirement: target_friendly_tile
		_deny(caster_id, "must target your own tile")
		return false
	var cost := int(ab.get("cost", {}).get("tokens", 0))
	if int(team_pool.get(team, 0)) < cost:
		_deny(caster_id, "not enough tokens (%d/%d)" % [team_pool.get(team, 0), cost])
		return false
	var code := Defs.code_of(String(eff.get("type", "normal")))
	if int(team_pool[team]) >= cost:
		team_pool[team] = int(team_pool[team]) - cost
		EventBus.publish(Events.RESOURCE_SPENT, {"team": team, "amount": cost, "sink": ab.get("id", "place")})
	grid.apply(tile.x, tile.y, -1, code, 0, {"kind": "ability", "actor": p["slot"], "ref": ab.get("id", "place")})
	return true

# Saboteur: toggle the lock on an enemy/neutral tile. Locking removes its effect
# and territory credit; an enemy Saboteur toggles it back (reverses). Costs the
# enemy-tile premium either way.
func _eff_set_tile_disabled(caster_id: int, p: Dictionary, target: Dictionary, ab: Dictionary) -> bool:
	var tile: Vector2i = target.get("tile", Vector2i(-1, -1))
	if not grid.in_bounds(tile.x, tile.y):
		return false
	var team: int = p["team"]
	if grid.owner_at(tile.x, tile.y) == team + 1:
		_deny(caster_id, "can't sabotage your own tile")
		return false
	var cost := int(ab.get("cost", {}).get("tokens", 2))
	if int(team_pool.get(team, 0)) < cost:
		_deny(caster_id, "not enough tokens (%d/%d)" % [team_pool.get(team, 0), cost])
		return false
	team_pool[team] = int(team_pool[team]) - cost
	EventBus.publish(Events.RESOURCE_SPENT, {"team": team, "amount": cost, "sink": "sabotage"})
	var new_state := 0 if grid.is_disabled(tile.x, tile.y) else 1
	grid.apply(tile.x, tile.y, -1, -1, 0, {"kind": "ability", "actor": p["slot"], "ref": "sabotage"}, new_state)
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
	# One-way team shield: an ENEMY shield tile absorbs the shot before it lands.
	var limit := best_t if best_id >= 0 else max_dist
	var block_t := _shield_block_dist(shooter_team, origin, dir, limit)
	if block_t >= 0.0:
		return {"id": -1, "point": origin + dir * block_t, "dist": block_t}
	return {"id": best_id, "point": origin + dir * best_t, "dist": best_t}

# Nearest enemy shield tile the ray crosses within max_check, or -1.
func _shield_block_dist(shooter_team: int, origin: Vector3, dir: Vector3, max_check: float) -> float:
	var best := -1.0
	for idx in _shields:
		var sh: Dictionary = _shields[idx]
		if int(sh["team"]) == shooter_team:
			continue  # your own shields never block you (one-way by team)
		var c: Vector3 = sh["center"]
		var t := _ray_box(origin, dir, Vector3(c.x - 1.0, 0.0, c.z - 1.0), Vector3(c.x + 1.0, 3.0, c.z + 1.0))
		if t > 0.05 and t <= max_check and (best < 0.0 or t < best):
			best = t
	return best

func _ray_box(origin: Vector3, dir: Vector3, bmin: Vector3, bmax: Vector3) -> float:
	var tmin := 0.0
	var tmax := 1.0e9
	for a in 3:
		if absf(dir[a]) < 1.0e-8:
			if origin[a] < bmin[a] or origin[a] > bmax[a]:
				return -1.0
		else:
			var t1 := (bmin[a] - origin[a]) / dir[a]
			var t2 := (bmax[a] - origin[a]) / dir[a]
			if t1 > t2:
				var tmp := t1; t1 = t2; t2 = tmp
			tmin = maxf(tmin, t1)
			tmax = minf(tmax, t2)
			if tmin > tmax:
				return -1.0
	return tmin

# Where an aimed "point" ability lands: the ground under the crosshair, else
# capped at range along the aim ray.
func _aim_point(origin: Vector3, dir: Vector3, max_dist: float) -> Vector3:
	if dir.y < -0.001:
		var t := -origin.y / dir.y
		if t <= max_dist:
			return origin + dir * t
	return origin + dir * max_dist

func _eff_area_damage(caster_id: int, p: Dictionary, target: Dictionary, eff: Dictionary, ab: Dictionary) -> bool:
	var origin: Vector3 = target.get("origin", Vector3.ZERO)
	var dir: Vector3 = target.get("dir", Vector3.FORWARD)
	if dir.length() < 0.001:
		return false
	dir = dir.normalized()
	var point := _aim_point(origin, dir, float(ab.get("range", 30.0)))
	var radius := float(eff.get("radius", 4.0))
	var dmg := int(eff.get("amount", 40))
	Net.push_tracer.rpc(caster_id, origin, point)
	Net.push_blast.rpc(point, radius)
	var ff := rules.check("combat.friendly_fire")
	for id in players.keys():
		if id == caster_id:
			continue
		var t: Dictionary = players[id]
		if not t["alive"]:
			continue
		if not ff and t["team"] == p["team"]:
			continue
		if (t["pos"] + Vector3(0.0, 0.9, 0.0)).distance_to(point) <= radius:
			_apply_damage(id, dmg, {"id": caster_id, "slot": p["slot"], "team": p["team"], "ref": ab.get("id", "blast")})
	return true

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
	var killer_label := ("peer%d" % source["id"]) if int(source["id"]) >= 0 else "hazard"
	var line := "%s %s  ▸  %s peer%d  [%s]%s" % [
		_team_name(source["team"]), killer_label,
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
	_tile_acc += delta
	var do_tile_tick := _tile_acc >= 0.5
	if do_tile_tick:
		_tile_acc = 0.0

	for id in players.keys():
		var p: Dictionary = players[id]
		if not p["alive"]:
			if match_time >= float(p["respawn_at"]):
				_respawn(id)
			continue

		# --- movement, with Slow / Speed fields (disabled tiles are inert) ---
		var cur := _tile_of(p["pos"])
		var here := _tile_def_at(cur)
		var owner_here := _tile_owner_team(cur)
		var speed := float(p.get("move_speed", MOVE_SPEED))
		match here.get("effect", ""):
			"slow":
				if owner_here >= 0 and p["team"] != owner_here:
					speed *= float(here.get("factor", 0.5))
			"speed":
				if owner_here >= 0 and p["team"] == owner_here:
					speed *= float(here.get("factor", 1.5))
		if match_time < float(p["stunned_until"]):
			speed = 0.0   # stunned: frozen in place
		var wish: Vector2 = p["input"]
		if wish != Vector2.ZERO and speed > 0.0:
			p["pos"] += Vector3(wish.x, 0.0, wish.y) * speed * delta
			p["pos"].x = clampf(p["pos"].x, 0.5, world_w - 0.5)
			p["pos"].z = clampf(p["pos"].z, 0.5, world_h - 0.5)
			cur = _tile_of(p["pos"])

		# --- on-enter effects: Mine detonation, Stun trap ---
		if cur != p["last_tile"]:
			p["last_tile"] = cur
			var d := _tile_def_at(cur)
			var ot := _tile_owner_team(cur)
			if ot >= 0 and p["team"] != ot:
				match d.get("effect", ""):
					"detonate_on_enter":
						_detonate_mine(cur.x, cur.y)
					"stun":
						p["stunned_until"] = match_time + float(d.get("duration", 1.0))
						grid.apply(cur.x, cur.y, -1, 0, 0, {"kind": "environment", "actor": -1, "ref": "stun_spent"})

		# --- Shock (DoT) / Heal (regen), every 0.5s ---
		if do_tile_tick and p["alive"]:
			var t := _tile_of(p["pos"])
			var def := _tile_def_at(t)
			var owner_team := _tile_owner_team(t)
			match def.get("effect", ""):
				"damage_over_time":
					if owner_team >= 0 and p["team"] != owner_team:
						_apply_damage(id, int(def.get("amount", 8)), _hazard_source(t, "shock"))
				"regen":
					if owner_team >= 0 and p["team"] == owner_team:
						p["hp"] = mini(MAX_HP, int(p["hp"]) + int(def.get("amount", 12)))

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
	# O(n) scan at 1 Hz so sabotaged (locked) tiles don't count toward territory.
	var a := 0
	var b := 0
	for i in total:
		if grid.disabled[i] == 1:
			continue
		match grid.owner[i]:
			1: a += 1
			2: b += 1
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
	var x: int = p["x"]
	var y: int = p["y"]
	var code: int = p["type"]
	var is_off: bool = int(p.get("disabled", 0)) == 1
	# Maintain the shield set used by hitscan (a disabled shield doesn't block).
	var i := grid.idx(x, y)
	if code == Defs.code_of("shield") and not is_off:
		_shields[i] = {"center": Vector3((x + 0.5) * TILE, 0.0, (y + 0.5) * TILE), "team": int(p["owner"]) - 1}
	else:
		_shields.erase(i)
	# Replicate: fold the disabled flag into the high bit of the type byte.
	_pending.append(x)
	_pending.append(y)
	_pending.append(p["owner"])
	_pending.append(code | (DISABLED_WIRE_BIT if is_off else 0))

func _ability_name(id: String) -> String:
	return Defs.abilities.get(id, {}).get("name", id)

func _deny(id: int, reason: String) -> void:
	EventBus.publish(Events.ABILITY_DENIED, {"player": id, "reason": reason})
	Net.push_event.rpc_id(id, "AbilityDenied", reason)

# ---- tile-effect helpers ---------------------------------------------------
func _tile_of(pos: Vector3) -> Vector2i:
	return Vector2i(int(pos.x / TILE), int(pos.z / TILE))

func _tile_def_at(t: Vector2i) -> Dictionary:
	if not grid.in_bounds(t.x, t.y):
		return {}
	if grid.disabled[grid.idx(t.x, t.y)] == 1:
		return {}   # sabotaged/locked tiles produce no effect
	var code: int = grid.type[grid.idx(t.x, t.y)]
	return Defs.tile_types.get(Defs.tile_type_by_code.get(code, "normal"), {})

func _tile_owner_team(t: Vector2i) -> int:
	if not grid.in_bounds(t.x, t.y):
		return -1
	return int(grid.owner[grid.idx(t.x, t.y)]) - 1   # -1 when neutral

func _id_for_slot(slot: int) -> int:
	for id in players:
		if int(players[id]["slot"]) == slot:
			return id
	return -1

# Credit for a tile hazard goes to whoever set that tile's type (the placer),
# read straight from the attribution array — valid even if they've disconnected.
func _hazard_source(t: Vector2i, ref: String) -> Dictionary:
	var slot: int = grid.type_setter[grid.idx(t.x, t.y)]
	return {"id": _id_for_slot(slot), "slot": slot, "team": _tile_owner_team(t), "ref": ref}

func _detonate_mine(tx: int, ty: int) -> void:
	var def := _tile_def_at(Vector2i(tx, ty))
	var center := Vector3((tx + 0.5) * TILE, 0.5, (ty + 0.5) * TILE)
	var radius := float(def.get("radius", 3))
	var dmg := int(def.get("amount", 90))
	var src := _hazard_source(Vector2i(tx, ty), "mine")
	Net.push_blast.rpc(center, radius)
	for id in players.keys():
		var t: Dictionary = players[id]
		if t["alive"] and t["team"] != src["team"] and (t["pos"] + Vector3(0.0, 0.9, 0.0)).distance_to(center) <= radius:
			_apply_damage(id, dmg, src)
	grid.apply(tx, ty, -1, 0, 0, {"kind": "environment", "actor": -1, "ref": "mine_spent"})  # consumed

func _team_name(team: int) -> String:
	return TEAM_NAMES[team] if team < TEAM_NAMES.size() else str(team)
