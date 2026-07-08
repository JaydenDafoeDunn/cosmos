# ============================================================================
# GameClient — presentation only (design doc §13). Renders authoritative state
# in 3D greybox, sends INTENTS, predicts only the local player's movement and
# its own weapon VFX (proper reconciliation is Milestone 6).
#
# Controls: WASD move · mouse look · HOLD LEFT = primary · RIGHT = signature
#           1-5 pick class · Esc mouse
# ============================================================================
class_name GameClient
extends Node3D

const TILE := 2.0
const EYE := 1.6
const MOVE_SPEED := 7.0      # base; loadout passive scales it (must match server)
const MOUSE_SENS := 0.0025
const SEND_DT := 0.05
const MAX_HP := 100.0
const TEAM_NAMES := ["A", "B", "C", "D"]
const LOADOUTS := ["assault", "painter", "utility", "explosive", "wizard"]

var my_id := 0
var is_host := false
var grid: TileGrid

var my_pos := Vector3.ZERO
var my_team := 0
var my_hp := 100
var my_alive := true
var my_loadout := "painter"
var _primary_cd := 0.07      # fire interval, from the loadout's primary ability
var _local_move_speed := MOVE_SPEED
var yaw := 0.0
var pitch := 0.0
var _seeded := false

var players: Dictionary = {}
var floor_mm: MultiMeshInstance3D
var camera: Camera3D
var world_w := 0.0
var world_h := 0.0

var _send_acc := 0.0
var _fire_cd := 0.0
var _hit_flash := 0.0
var _log: Array[String] = []
var _killfeed: Array[String] = []

var _status_label: Label
var _class_label: Label
var _log_label: Label
var _killfeed_label: Label
var _crosshair: Label
var _respawn_label: Label
var _hp_fill: ColorRect
var _peer_count := 0

func start(id: int, host: bool) -> void:
	my_id = id
	is_host = host
	if grid == null:
		grid = TileGrid.new()
		grid.setup(64, 64, false)
	world_w = grid.w * TILE
	world_h = grid.h * TILE
	_apply_local_loadout(my_loadout)
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
			mm.set_instance_transform(i, Transform3D(Basis(), Vector3((tx + 0.5) * TILE, -0.1, (ty + 0.5) * TILE)))
			mm.set_instance_color(i, _owner_color(grid.owner[i]))
	floor_mm = MultiMeshInstance3D.new()
	floor_mm.multimesh = mm
	var mat := StandardMaterial3D.new()
	mat.vertex_color_use_as_albedo = true
	mat.roughness = 1.0
	floor_mm.material_override = mat
	add_child(floor_mm)

func _build_walls() -> void:
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

	_crosshair = Label.new()
	_crosshair.text = "+"
	_crosshair.add_theme_font_size_override("font_size", 22)
	_crosshair.set_anchors_preset(Control.PRESET_CENTER)
	_crosshair.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	_crosshair.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	layer.add_child(_crosshair)

	_status_label = Label.new()
	_status_label.position = Vector2(12, 10)
	layer.add_child(_status_label)

	_killfeed_label = Label.new()
	_killfeed_label.set_anchors_preset(Control.PRESET_TOP_RIGHT)
	_killfeed_label.position = Vector2(-340, 10)
	_killfeed_label.custom_minimum_size = Vector2(330, 0)
	_killfeed_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	_killfeed_label.add_theme_font_size_override("font_size", 13)
	layer.add_child(_killfeed_label)

	_class_label = Label.new()
	_class_label.set_anchors_preset(Control.PRESET_BOTTOM_LEFT)
	_class_label.position = Vector2(12, -32)
	_class_label.add_theme_font_size_override("font_size", 13)
	layer.add_child(_class_label)

	_log_label = Label.new()
	_log_label.set_anchors_preset(Control.PRESET_BOTTOM_LEFT)
	_log_label.position = Vector2(12, -190)
	_log_label.add_theme_font_size_override("font_size", 12)
	layer.add_child(_log_label)

	var hp_bg := ColorRect.new()
	hp_bg.color = Color(0, 0, 0, 0.5)
	hp_bg.set_anchors_preset(Control.PRESET_CENTER_BOTTOM)
	hp_bg.position = Vector2(-102, -40)
	hp_bg.size = Vector2(204, 18)
	layer.add_child(hp_bg)
	_hp_fill = ColorRect.new()
	_hp_fill.color = Color(0.3, 0.85, 0.4)
	_hp_fill.position = Vector2(2, 2)
	_hp_fill.size = Vector2(200, 14)
	hp_bg.add_child(_hp_fill)

	_respawn_label = Label.new()
	_respawn_label.text = "RESPAWNING…"
	_respawn_label.set_anchors_preset(Control.PRESET_CENTER)
	_respawn_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	_respawn_label.add_theme_font_size_override("font_size", 28)
	_respawn_label.position = Vector2(0, 40)
	_respawn_label.visible = false
	layer.add_child(_respawn_label)

# ---- per-frame -------------------------------------------------------------
func _process(delta: float) -> void:
	if camera == null:
		return
	_fire_cd = maxf(0.0, _fire_cd - delta)
	if _hit_flash > 0.0:
		_hit_flash = maxf(0.0, _hit_flash - delta)
		if _hit_flash == 0.0 and _crosshair:
			_crosshair.modulate = Color.WHITE

	var wish := Vector2.ZERO
	if my_alive:
		var fa := (1.0 if Input.is_physical_key_pressed(KEY_W) else 0.0) - (1.0 if Input.is_physical_key_pressed(KEY_S) else 0.0)
		var ra := (1.0 if Input.is_physical_key_pressed(KEY_D) else 0.0) - (1.0 if Input.is_physical_key_pressed(KEY_A) else 0.0)
		var fwd := Vector3(-sin(yaw), 0.0, -cos(yaw))
		var right := Vector3(cos(yaw), 0.0, -sin(yaw))
		var wish3 := fwd * fa + right * ra
		if wish3.length() > 0.001:
			wish3 = wish3.normalized()
			wish = Vector2(wish3.x, wish3.z)
			my_pos += Vector3(wish.x, 0.0, wish.y) * _local_move_speed * delta
			my_pos.x = clampf(my_pos.x, 0.5, world_w - 0.5)
			my_pos.z = clampf(my_pos.z, 0.5, world_h - 0.5)
		if Input.mouse_mode == Input.MOUSE_MODE_CAPTURED and Input.is_mouse_button_pressed(MOUSE_BUTTON_LEFT) and _fire_cd <= 0.0:
			_fire()

	_send_acc += delta
	if _send_acc >= SEND_DT:
		_send_acc = 0.0
		_send_input(wish)

	var b := Basis(Vector3.UP, yaw) * Basis(Vector3.RIGHT, pitch)
	camera.transform = Transform3D(b, my_pos + Vector3(0.0, EYE, 0.0))

	_update_hud()

func _update_hud() -> void:
	if _status_label:
		_status_label.text = "%s  peer %d  Team %s  players:%d\nWASD · look · HOLD LMB primary · RMB signature · Esc" % [
			"HOST" if is_host else "CLIENT", my_id,
			TEAM_NAMES[my_team] if my_team < TEAM_NAMES.size() else str(my_team), _peer_count]
	if _class_label:
		var lo: Dictionary = Defs.loadouts.get(my_loadout, {})
		_class_label.text = "CLASS: %s   [1 Assault  2 Painter  3 Utility  4 Explosive  5 Wizard]" % lo.get("name", my_loadout)
	if _hp_fill:
		var frac := clampf(float(my_hp) / MAX_HP, 0.0, 1.0)
		_hp_fill.size = Vector2(200.0 * frac, 14.0)
		_hp_fill.color = Color(0.3, 0.85, 0.4).lerp(Color(0.9, 0.25, 0.25), 1.0 - frac)
	if _respawn_label:
		_respawn_label.visible = not my_alive

func _input(event: InputEvent) -> void:
	if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
		yaw -= event.relative.x * MOUSE_SENS
		pitch = clampf(pitch - event.relative.y * MOUSE_SENS, -1.4, 1.4)
	elif event is InputEventMouseButton and event.pressed:
		if event.button_index == MOUSE_BUTTON_LEFT and Input.mouse_mode != Input.MOUSE_MODE_CAPTURED:
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
		elif event.button_index == MOUSE_BUTTON_RIGHT and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED and my_alive:
			_signature_at_aim()
	elif event is InputEventKey and event.pressed:
		if event.keycode == KEY_ESCAPE:
			Input.mouse_mode = Input.MOUSE_MODE_VISIBLE if Input.mouse_mode == Input.MOUSE_MODE_CAPTURED else Input.MOUSE_MODE_CAPTURED
		elif event.keycode >= KEY_1 and event.keycode <= KEY_5:
			_select_loadout(LOADOUTS[event.keycode - KEY_1])

# ---- actions ---------------------------------------------------------------
func _fire() -> void:
	_fire_cd = _primary_cd
	var origin := camera.global_position
	var dir := -camera.global_transform.basis.z
	show_tracer(my_id, origin, origin + dir * 60.0)   # predicted VFX
	if is_host and Net.server:
		Net.server.handle_fire_intent(1, origin, dir)
	else:
		Net.submit_fire.rpc_id(1, origin, dir)

func _signature_at_aim() -> void:
	var origin := camera.global_position
	var dir := -camera.global_transform.basis.z
	var tx := -1
	var ty := -1
	if dir.y < -0.001:
		var hit := origin + dir * (-origin.y / dir.y)
		var itx := int(hit.x / TILE)
		var ity := int(hit.z / TILE)
		if grid.in_bounds(itx, ity):
			tx = itx
			ty = ity
	if is_host and Net.server:
		Net.server.handle_signature_intent(1, origin, dir, tx, ty)
	else:
		Net.submit_signature.rpc_id(1, origin, dir, tx, ty)

func _select_loadout(id: String) -> void:
	my_loadout = id
	_apply_local_loadout(id)
	if is_host and Net.server:
		Net.server.set_loadout(1, id)
	else:
		Net.submit_loadout.rpc_id(1, id)

func _apply_local_loadout(id: String) -> void:
	var lo: Dictionary = Defs.loadouts.get(id, {})
	var prim: String = lo.get("primary", "assault_rifle")
	_primary_cd = float(Defs.abilities.get(prim, {}).get("cooldown", 0.12))
	_local_move_speed = MOVE_SPEED * (1.4 if lo.get("passive", "") == "sprint" else 1.0)

func _send_input(wish: Vector2) -> void:
	if is_host and Net.server:
		Net.server.set_player_input(1, wish)
	else:
		Net.submit_input.rpc_id(1, wish.x, wish.y)

# ---- authoritative state in (called by Net) --------------------------------
func apply_snapshot(snap: Array) -> void:
	_peer_count = snap.size()
	var present := {}
	for entry in snap:
		var id: int = entry[0]
		var pos := Vector3(entry[1], 0.0, entry[2])
		var team: int = entry[3]
		var hp: int = entry[4]
		var alive: bool = entry[5] != 0
		present[id] = true
		if id == my_id:
			my_hp = hp
			if alive and not my_alive:
				_seeded = false
			my_alive = alive
			if not _seeded:
				my_pos = pos
				my_team = team
				_seeded = true
			continue
		if not players.has(id):
			players[id] = {"team": team, "mesh": _make_avatar(team)}
		var mesh: MeshInstance3D = players[id]["mesh"]
		mesh.position = pos + Vector3(0.0, 0.8, 0.0)
		mesh.visible = alive
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
	if floor_mm != null:
		for idx in grid.w * grid.h:
			floor_mm.multimesh.set_instance_color(idx, _owner_color(grid.owner[idx]))

# ---- combat feedback (called by Net) ---------------------------------------
func show_tracer(shooter_id: int, a: Vector3, b: Vector3) -> void:
	if shooter_id == my_id:
		return  # we already drew our own predicted tracer in _fire()
	if a.distance_to(b) < 0.05:
		return
	var m := MeshInstance3D.new()
	var box := BoxMesh.new()
	box.size = Vector3(0.04, 0.04, a.distance_to(b))
	m.mesh = box
	var mat := StandardMaterial3D.new()
	mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	mat.albedo_color = Color(1.0, 0.9, 0.5)
	m.material_override = mat
	add_child(m)
	var up := Vector3.UP
	if absf((b - a).normalized().dot(up)) > 0.99:
		up = Vector3.FORWARD
	m.look_at_from_position((a + b) * 0.5, b, up)
	get_tree().create_timer(0.06).timeout.connect(m.queue_free)

func show_blast(point: Vector3, radius: float) -> void:
	var m := MeshInstance3D.new()
	var s := SphereMesh.new()
	s.radius = radius
	s.height = radius * 2.0
	m.mesh = s
	m.position = point
	var mat := StandardMaterial3D.new()
	mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	mat.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	mat.albedo_color = Color(1.0, 0.6, 0.2, 0.4)
	m.material_override = mat
	add_child(m)
	get_tree().create_timer(0.18).timeout.connect(m.queue_free)

func show_hitmarker() -> void:
	_hit_flash = 0.12
	if _crosshair:
		_crosshair.modulate = Color(1.0, 0.4, 0.4)

func add_killfeed(text: String) -> void:
	_killfeed.append(text)
	if _killfeed.size() > 5:
		_killfeed = _killfeed.slice(_killfeed.size() - 5)
	if _killfeed_label:
		_killfeed_label.text = "\n".join(_killfeed)

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
		1: return Color(0.16, 0.38, 0.85)
		2: return Color(0.85, 0.22, 0.22)
		_: return Color(0.13, 0.14, 0.17)

func _team_color(team: int) -> Color:
	return Color(0.30, 0.55, 1.0) if team == 0 else Color(1.0, 0.4, 0.4)
