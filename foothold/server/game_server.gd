# ============================================================================
# GameServer — the authoritative simulation (design doc §13, TA §3/§7).
# Runs on the host (listen-server) or a headless dedicated process. Owns tile
# state, token pools, player positions. Clients send INTENTS; the server
# validates every one through Rules + the economy before doing anything.
#
# Positions live on the XZ ground plane (Y is up). This is the same
# server-authoritative model regardless of how clients render it.
# ============================================================================
class_name GameServer
extends Node

const TILE := 2.0          # world units per grid tile
const MOVE_SPEED := 7.0    # units / second
const NET_DT := 0.05       # 20 Hz state broadcast
const TERR_DT := 1.0       # 1 Hz territory readout

var grid: TileGrid
var rules: Rules
var mode: Dictionary = {}
var team_pool: Dictionary = {}        # team_id -> tokens
var players: Dictionary = {}          # peer_id -> {pos, input, team, slot}
var world_w: float = 0.0
var world_h: float = 0.0

var _next_slot := 0
var _net_acc := 0.0
var _terr_acc := 0.0
var _pending := PackedByteArray()     # queued tile deltas (x,y,owner,type per 4 bytes)
var _ended := false

func start(mode_id: String = "territory_control") -> void:
	mode = Defs.modes.get(mode_id, {})
	rules = Rules.new()
	rules.seed(mode.get("rules", {}))
	var starting := int(mode.get("starting_tokens", 0))
	var teams := int(mode.get("teams", 2))
	for t in teams:
		team_pool[t] = starting

	grid = TileGrid.new()
	grid.setup(64, 64, true)
	world_w = grid.w * TILE
	world_h = grid.h * TILE

	EventBus.subscribe(Events.TILE_CHANGED, _on_tile_changed)
	multiplayer.peer_connected.connect(_on_peer_connected)
	multiplayer.peer_disconnected.connect(_on_peer_disconnected)
	print("[Server] mode=%s teams=%d start_tokens=%d grid=%dx%d"
		% [mode.get("id", "?"), teams, starting, grid.w, grid.h])

# ---- lifecycle -------------------------------------------------------------
func _on_peer_connected(id: int) -> void:
	add_player(id)
	# Bring the joiner up to date: full grid, then deltas keep them in sync.
	Net.push_full_grid.rpc_id(id, grid.owner, grid.type, grid.w, grid.h)

func _on_peer_disconnected(id: int) -> void:
	if players.has(id):
		players.erase(id)
		Net.push_event.rpc("PlayerLeft", "peer %d left" % id)

func add_player(id: int) -> void:
	var slot := _next_slot
	_next_slot += 1
	var teams := int(mode.get("teams", 2))
	var team := slot % teams
	players[id] = {"pos": _spawn_pos(team, slot), "input": Vector2.ZERO, "team": team, "slot": slot}
	EventBus.publish(Events.PLAYER_SPAWNED, {"id": id, "team": team, "slot": slot})
	Net.push_event.rpc("PlayerSpawned", "peer %d joined — Team %s" % [id, _team_name(team)])

func _spawn_pos(team: int, slot: int) -> Vector3:
	var margin := 8.0
	var x := margin if team == 0 else world_w - margin
	var z := fmod(margin + float(slot) * 4.0, maxf(world_h - margin, 1.0))
	return Vector3(x, 0.0, z)

# ---- intents (called via Net RPCs; caller is UNTRUSTED) --------------------
func set_player_input(id: int, wish: Vector2) -> void:
	if players.has(id):
		players[id]["input"] = wish.limit_length(1.0)

func handle_paint_intent(id: int, x: int, y: int) -> void:
	if not players.has(id):
		return
	if not rules.check("painting.enabled"):
		return _deny(id, "painting disabled in this mode")
	if not grid.in_bounds(x, y):
		return
	var team: int = players[id]["team"]
	var mine := team + 1
	var cur := grid.owner_at(x, y)
	if cur == mine:
		return  # already ours — no-op, no cost
	var is_enemy := cur != TileGrid.NEUTRAL and cur != mine
	if is_enemy and not rules.check("painting.enemy_tiles"):
		return _deny(id, "cannot paint enemy tiles")
	var cost := int(rules.value("painting.cost_enemy" if is_enemy else "painting.cost_neutral"))
	if int(team_pool.get(team, 0)) < cost:
		return _deny(id, "not enough tokens (%d/%d)" % [team_pool.get(team, 0), cost])

	# Atomic debit, then the ONE write path. Attribution rides along in `cause`.
	team_pool[team] = int(team_pool[team]) - cost
	EventBus.publish(Events.RESOURCE_SPENT, {"team": team, "amount": cost, "sink": "paint"})
	grid.apply(x, y, mine, -1, 0, {"kind": "ability", "actor": players[id]["slot"], "ref": "paint"})
	EventBus.publish(Events.ABILITY_USED, {"player": id, "ability": "paint", "target": Vector2i(x, y)})

func _deny(id: int, reason: String) -> void:
	EventBus.publish(Events.ABILITY_DENIED, {"player": id, "reason": reason})
	Net.push_event.rpc_id(id, "AbilityDenied", reason)  # to the caster only

# ---- simulation tick -------------------------------------------------------
func _physics_process(delta: float) -> void:
	for id in players:
		var p: Dictionary = players[id]
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
		snap.append([id, p["pos"].x, p["pos"].z, p["team"]])
	Net.push_snapshot.rpc(snap)

func _broadcast_territory() -> void:
	var total := grid.total_tiles()
	var a := grid.count_by_owner(1)
	var b := grid.count_by_owner(2)
	EventBus.publish(Events.TERRITORY_COUNT, {"a": a, "b": b, "total": total})
	Net.push_event.rpc("TerritoryCount", "A %d%%  ·  B %d%%   tokens A:%d B:%d"
		% [roundi(100.0 * a / total), roundi(100.0 * b / total), team_pool.get(0, 0), team_pool.get(1, 0)])
	# Win check (match end is Milestone 8; for now we just announce).
	if not _ended:
		var thr := float(mode.get("win", {}).get("threshold", 0.6))
		if mode.get("win", {}).get("type", "") == "territory":
			if float(a) / total >= thr:
				_ended = true
				Net.push_event.rpc("MatchEnd", "Team A holds %d%% — Territory Control win!" % roundi(thr * 100))
			elif float(b) / total >= thr:
				_ended = true
				Net.push_event.rpc("MatchEnd", "Team B holds %d%% — Territory Control win!" % roundi(thr * 100))

# ---- replication plumbing --------------------------------------------------
func _on_tile_changed(p: Dictionary) -> void:
	_pending.append(p["x"])
	_pending.append(p["y"])
	_pending.append(p["owner"])
	_pending.append(p["type"])

const TEAM_NAMES := ["A", "B", "C", "D"]
func _team_name(team: int) -> String:
	return TEAM_NAMES[team] if team < TEAM_NAMES.size() else str(team)
