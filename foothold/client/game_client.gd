# ============================================================================
# GameClient — presentation only (design doc §13). Renders authoritative state
# in 3D greybox, sends INTENTS, predicts nothing but the local player's own
# movement (naive; proper reconciliation is Milestone 6).
#
# Rendering choices that keep a low-end laptop happy:
#   * The whole tile floor is ONE MultiMeshInstance3D (one draw call, per-tile
#     instance color) — never one node per tile (TA §5).
#   * No textures, no shadows, no post — greybox primitives only.
# ============================================================================
class_name GameClient
extends Node3D

const TILE := 2.0
const EYE := 1.6
const MOVE_SPEED := 7.0     # must match GameServer for clean prediction
const MOUSE_SENS := 0.0025
const SEND_DT := 0.05       # 20 Hz input upstream
const TEAM_NAMES := ["A", "B", "C", "D"]

var my_id := 0
var is_host := false
var grid: TileGrid

var my_pos := Vector3.ZERO
var my_team := 0
var yaw := 0.0
var pitch := 0.0
var _seeded := false        # adopt server spawn on first snapshot, then predict

var players: Dictionary = {}   # id -> {team, mesh:MeshInstance3D}
var floor_mm: MultiMeshInstance3D
var camera: Camera3D
var world_w := 0.0
var world_h := 0.0

var _send_acc := 0.0
var _log: Array[String] = []
var _status_label: Label
var _log_label: Label
var _peer_count := 0

func start(id: int, host: bool) -> void:
	my_id = id
	is_host = host
	if grid == null:                       # host, or full grid not yet arrived
		grid = TileGrid.new()
		grid.setup(64, 64, false)
	world_w = grid.w * TILE
	world_h = grid.h * TILE
	_build_world()
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
	log_event("Client", "%s started as peer %d" % ["HOST" if host else "CLIENT", id])

# ---- scene construction ----------------------------------------------------
func _build_world() -> void:
	var env := Environment.new()
	env.background_mode = Environment.BG_COLOR
	env.background_color = Color(0.04, 0.05, 0.07)
	env.ambient_light_source = Environment.AMBIENT_SOURCE_COLOR
	env.ambient_light_color = Color(0.45, 0.47, 0.52)
	env.ambient_light_energy = 1.0
	var we := WorldEnvironment.new()
	we.environment = env
	add_child(we)

	var sun := DirectionalLight3D.new()
	sun.rotation_degrees = Vector3(-55, -40, 0)
	sun.light_energy = 1.0
	add_child(sun)

	camera = Camera3D.new()
	camera.fov = 75
	camera.near = 0.05
	camera.far = 2000.0
	add_child(camera)

	_build_floor()
	_build_walls()
	_build_hud()

func _build_floor() -> void:
	var mm := MultiMesh.new()
	mm.transform_format = MultiMesh.TRANSFORM_3D
	mm.use_colors = true
	var tile_mesh := BoxMesh.new()
	tile_mesh.size = Vector3(TILE * 0.96, 0.2, TILE * 0.96)
	mm.mesh = tile_mesh
	mm.instance_count = grid.w * grid.h
	for ty in grid.h:
		for tx in grid.w:
			var i := ty * grid.w + tx
			var xf := Transform3D(Basis(), Vector3((tx + 0.5) * TILE, -0.1, (ty + 0.5) * TILE))
			mm.set_instance_transform(i, xf)
			mm.set_instance_color(i, _owner_color(grid.owner[i]))
	floor_mm = MultiMeshInstance3D.new()
	floor_mm.multimesh = mm
	var mat := StandardMaterial3D.new()
	mat.vertex_color_use_as_albedo = true
	mat.roughness = 1.0
	floor_mm.material_override = mat
	add_child(floor_mm)

func _build_walls() -> void:
	# Thin greybox boundary so the arena reads as a space.
	var h := 2.0
	var specs := [
		[Vector3(world_w * 0.5, h * 0.5, 0.0), Vector3(world_w, h, 0.4)],
		[Vector3(world_w * 0.5, h * 0.5, world_h), Vector3(world_w, h, 0.4)],
		[Vector3(0.0, h * 0.5, world_h * 0.5), Vector3(0.4, h, world_h)],
		[Vector3(world_w, h * 0.5, world_h * 0.5), Vector3(0.4, h, world_h)],
	]
	var mat := StandardMaterial3D.new()
	mat.albedo_color = Color(0.18, 0.19, 0.23)
	for s in specs:
		var m := MeshInstance3D.new()
		var box := BoxMesh.new()
		box.size = s[1]
		m.mesh = box
		m.position = s[0]
		m.material_override = mat
		add_child(m)

func _build_hud() -> void:
	var layer := CanvasLayer.new()
	add_child(layer)

	var cross := Label.new()
	cross.text = "+"
	cross.add_theme_font_size_override("font_size", 22)
	cross.set_anchors_preset(Control.PRESET_CENTER)
	cross.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	cross.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	layer.add_child(cross)

	_status_label = Label.new()
	_status_label.position = Vector2(12, 10)
	layer.add_child(_status_label)

	_log_label = Label.new()
	_log_label.set_anchors_preset(Control.PRESET_BOTTOM_LEFT)
	_log_label.position = Vector2(12, -160)
	_log_label.add_theme_font_size_override("font_size", 12)
	layer.add_child(_log_label)

# ---- per-frame: local input + prediction + camera --------------------------
func _process(delta: float) -> void:
	if camera == null:
		return
	var fa := (1.0 if Input.is_physical_key_pressed(KEY_W) else 0.0) - (1.0 if Input.is_physical_key_pressed(KEY_S) else 0.0)
	var ra := (1.0 if Input.is_physical_key_pressed(KEY_D) else 0.0) - (1.0 if Input.is_physical_key_pressed(KEY_A) else 0.0)
	var fwd := Vector3(-sin(yaw), 0.0, -cos(yaw))
	var right := Vector3(cos(yaw), 0.0, -sin(yaw))
	var wish3 := fwd * fa + right * ra
	var wish := Vector2.ZERO
	if wish3.length() > 0.001:
		wish3 = wish3.normalized()
		wish = Vector2(wish3.x, wish3.z)
		my_pos += Vector3(wish.x, 0.0, wish.y) * MOVE_SPEED * delta   # local prediction
		my_pos.x = clampf(my_pos.x, 0.5, world_w - 0.5)
		my_pos.z = clampf(my_pos.z, 0.5, world_h - 0.5)

	_send_acc += delta
	if _send_acc >= SEND_DT:
		_send_acc = 0.0
		_send_input(wish)

	# camera: yaw about Y, pitch about local X, at eye height
	var b := Basis(Vector3.UP, yaw) * Basis(Vector3.RIGHT, pitch)
	camera.transform = Transform3D(b, my_pos + Vector3(0.0, EYE, 0.0))

	if _status_label:
		_status_label.text = "%s  peer %d  Team %s  players:%d\nWASD move · mouse look · click paint · Esc release" % [
			"HOST" if is_host else "CLIENT", my_id, TEAM_NAMES[my_team] if my_team < TEAM_NAMES.size() else str(my_team), _peer_count]

func _input(event: InputEvent) -> void:
	if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
		yaw -= event.relative.x * MOUSE_SENS
		pitch = clampf(pitch - event.relative.y * MOUSE_SENS, -1.4, 1.4)
	elif event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
		if Input.mouse_mode != Input.MOUSE_MODE_CAPTURED:
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
		else:
			_paint_at_aim()
	elif event is InputEventKey and event.pressed and event.keycode == KEY_ESCAPE:
		Input.mouse_mode = Input.MOUSE_MODE_VISIBLE if Input.mouse_mode == Input.MOUSE_MODE_CAPTURED else Input.MOUSE_MODE_CAPTURED

func _paint_at_aim() -> void:
	# Ray from the camera to the ground plane (y = 0); paint that tile.
	var from := camera.global_position
	var dir := -camera.global_transform.basis.z
	if dir.y >= -0.001:
		return  # aiming at/above the horizon — no ground hit
	var t := -from.y / dir.y
	var hit := from + dir * t
	var tx := int(hit.x / TILE)
	var ty := int(hit.z / TILE)
	if grid.in_bounds(tx, ty):
		_send_paint(tx, ty)

# ---- intent send (host talks to its server directly; clients RPC peer 1) ----
func _send_input(wish: Vector2) -> void:
	if is_host and Net.server:
		Net.server.set_player_input(1, wish)
	else:
		Net.submit_input.rpc_id(1, wish.x, wish.y)

func _send_paint(x: int, y: int) -> void:
	if is_host and Net.server:
		Net.server.handle_paint_intent(1, x, y)
	else:
		Net.submit_paint.rpc_id(1, x, y)

# ---- authoritative state in (called by Net) --------------------------------
func apply_snapshot(snap: Array) -> void:
	_peer_count = snap.size()
	var present := {}
	for entry in snap:
		var id: int = entry[0]
		var pos := Vector3(entry[1], 0.0, entry[2])
		var team: int = entry[3]
		present[id] = true
		if id == my_id:
			if not _seeded:                 # adopt server spawn once, then trust local
				my_pos = pos
				my_team = team
				_seeded = true
			continue
		if not players.has(id):
			players[id] = {"team": team, "mesh": _make_avatar(team)}
		players[id]["mesh"].position = pos + Vector3(0.0, 0.8, 0.0)
	# drop avatars for players who left
	for id in players.keys():
		if not present.has(id):
			players[id]["mesh"].queue_free()
			players.erase(id)

func apply_tile_delta(deltas: PackedByteArray) -> void:
	var i := 0
	while i + 3 < deltas.size():
		var x := deltas[i]
		var y := deltas[i + 1]
		var own := deltas[i + 2]
		var typ := deltas[i + 3]
		grid.apply_replicated(x, y, own, typ)
		floor_mm.multimesh.set_instance_color(grid.idx(x, y), _owner_color(own))
		i += 4

func load_full_grid(owner_bytes: PackedByteArray, type_bytes: PackedByteArray, w: int, h: int) -> void:
	if grid == null:
		grid = TileGrid.new()
	grid.load_snapshot(owner_bytes, type_bytes, w, h)
	if floor_mm != null:                    # recolor existing instances
		for idx in grid.w * grid.h:
			floor_mm.multimesh.set_instance_color(idx, _owner_color(grid.owner[idx]))

func log_event(_name: String, text: String) -> void:
	_log.append("• " + text)
	if _log.size() > 8:
		_log = _log.slice(_log.size() - 8)
	if _log_label:
		_log_label.text = "\n".join(_log)

# ---- helpers ---------------------------------------------------------------
func _make_avatar(team: int) -> MeshInstance3D:
	var m := MeshInstance3D.new()
	var cap := CapsuleMesh.new()
	cap.radius = 0.4
	cap.height = 1.6
	m.mesh = cap
	var mat := StandardMaterial3D.new()
	mat.albedo_color = _team_color(team)
	m.material_override = mat
	add_child(m)
	return m

func _owner_color(o: int) -> Color:
	match o:
		1: return Color(0.16, 0.38, 0.85)   # Team A
		2: return Color(0.85, 0.22, 0.22)   # Team B
		_: return Color(0.13, 0.14, 0.17)   # neutral
	# TODO (Milestone 2 / accessibility §16): add per-team pattern, not color alone.

func _team_color(team: int) -> Color:
	return Color(0.30, 0.55, 1.0) if team == 0 else Color(1.0, 0.4, 0.4)
