# ============================================================================
# Main — bootstrap. Chooses a role (host / join / dedicated) and wires up the
# GameServer and/or GameClient. Everything else is built in code so there is
# exactly one hand-authored .tscn (main.tscn) to trust.
#
# Run modes:
#   * In editor / normal launch  -> menu with Host and Join buttons.
#   * `--server`                 -> headless dedicated server (no client).
#   * `--client` / `--join=IP`   -> auto-connect to IP (default 127.0.0.1).
# Pass engine args after `--`, e.g.  godot --headless -- --server
# ============================================================================
extends Node3D

const PORT := 7777
const MAX_CLIENTS := 16
const DEFAULT_MODE := "territory_control"

var _menu: CanvasLayer
var _status: Label
var _ip_edit: LineEdit

func _ready() -> void:
	var uargs := OS.get_cmdline_user_args()
	var join_ip := ""
	var dedicated := false
	for a in uargs:
		if a == "--server":
			dedicated = true
		elif a == "--client":
			join_ip = "127.0.0.1"
		elif a.begins_with("--join="):
			join_ip = a.substr("--join=".length())

	if dedicated or DisplayServer.get_name() == "headless":
		_start_dedicated()
	elif join_ip != "":
		_build_menu()
		_join(join_ip)
	else:
		_build_menu()

# ---- role starts -----------------------------------------------------------
func _host() -> void:
	var peer := ENetMultiplayerPeer.new()
	var err := peer.create_server(PORT, MAX_CLIENTS)
	if err != OK:
		_set_status("Host failed (err %d) — port in use?" % err)
		return
	multiplayer.multiplayer_peer = peer
	_start_server(DEFAULT_MODE)
	_start_client(1, true)
	Net.server.add_player(1)   # host's own player
	_hide_menu()

func _join(ip: String) -> void:
	var peer := ENetMultiplayerPeer.new()
	var err := peer.create_client(ip, PORT)
	if err != OK:
		_set_status("Join failed (err %d)" % err)
		return
	multiplayer.multiplayer_peer = peer
	multiplayer.connected_to_server.connect(_on_connected, CONNECT_ONE_SHOT)
	multiplayer.connection_failed.connect(func(): _set_status("Connection failed — is a host running?"))
	_set_status("Connecting to %s:%d ..." % [ip, PORT])

func _on_connected() -> void:
	_start_client(multiplayer.get_unique_id(), false)
	_hide_menu()

func _start_dedicated() -> void:
	var peer := ENetMultiplayerPeer.new()
	var err := peer.create_server(PORT, MAX_CLIENTS)
	if err != OK:
		push_error("[Dedicated] create_server failed: %d" % err)
		return
	multiplayer.multiplayer_peer = peer
	_start_server(DEFAULT_MODE)
	print("[Dedicated] headless server up on port %d" % PORT)

func _start_server(mode_id: String) -> void:
	var s := GameServer.new()
	s.name = "GameServer"
	add_child(s)
	Net.server = s
	s.start(mode_id)

func _start_client(id: int, host: bool) -> void:
	var c := GameClient.new()
	c.name = "GameClient"
	add_child(c)
	Net.client = c
	c.start(id, host)

# ---- menu UI ---------------------------------------------------------------
func _build_menu() -> void:
	_menu = CanvasLayer.new()
	add_child(_menu)
	var center := CenterContainer.new()
	center.set_anchors_preset(Control.PRESET_FULL_RECT)
	_menu.add_child(center)
	var box := VBoxContainer.new()
	box.custom_minimum_size = Vector2(360, 0)
	box.add_theme_constant_override("separation", 10)
	center.add_child(box)

	var title := Label.new()
	title.text = "FOOTHOLD — greybox v1"
	title.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	title.add_theme_font_size_override("font_size", 24)
	box.add_child(title)

	var host_btn := Button.new()
	host_btn.text = "Host (listen server)"
	host_btn.pressed.connect(_host)
	box.add_child(host_btn)

	var row := HBoxContainer.new()
	box.add_child(row)
	_ip_edit = LineEdit.new()
	_ip_edit.text = "127.0.0.1"
	_ip_edit.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	row.add_child(_ip_edit)
	var join_btn := Button.new()
	join_btn.text = "Join"
	join_btn.pressed.connect(func(): _join(_ip_edit.text))
	row.add_child(join_btn)

	_status = Label.new()
	_status.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	box.add_child(_status)

func _set_status(text: String) -> void:
	if _status:
		_status.text = text
	print("[Main] ", text)

func _hide_menu() -> void:
	if _menu:
		_menu.queue_free()
		_menu = null
