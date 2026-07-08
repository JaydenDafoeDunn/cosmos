# ============================================================================
# Net (autoload) — the RPC surface between client and server (design doc §13).
#
# Why an autoload: Godot routes RPCs by node path, which must match on every
# peer. An autoload lives at the same path (/root/Net) on all peers, so we
# never hit path-mismatch bugs. Net owns no game logic; it forwards:
#   client intents  -> server   (any_peer -> authority)
#   server results  -> clients  (authority -> everyone, "call_local" so the
#                                host's own client view updates too)
#
# CLIENTS ARE UNTRUSTED. Intents are requests; the server validates every one
# through Rules + Resources before doing anything (see game_server.gd).
# ============================================================================
extends Node

var server: GameServer = null   # set on host/dedicated
var client: GameClient = null   # set on host/join

# ---- client -> server: intents ----
@rpc("any_peer", "call_remote", "reliable")
func submit_paint(x: int, y: int) -> void:
	if server:
		server.handle_paint_intent(multiplayer.get_remote_sender_id(), x, y)

@rpc("any_peer", "call_remote", "unreliable_ordered")
func submit_input(px: float, py: float) -> void:
	if server:
		server.set_player_input(multiplayer.get_remote_sender_id(), Vector2(px, py))

# ---- server -> clients: authoritative state ----
@rpc("authority", "call_local", "unreliable_ordered")
func push_snapshot(players: Array) -> void:
	if client:
		client.apply_snapshot(players)

@rpc("authority", "call_local", "reliable")
func push_tile_delta(deltas: PackedByteArray) -> void:
	if client:
		client.apply_tile_delta(deltas)

@rpc("authority", "call_local", "reliable")
func push_full_grid(owner_bytes: PackedByteArray, type_bytes: PackedByteArray, w: int, h: int) -> void:
	if client:
		client.load_full_grid(owner_bytes, type_bytes, w, h)

# Replicated notable events -> every client's on-screen event log (§8/§12).
@rpc("authority", "call_local", "reliable")
func push_event(name: String, text: String) -> void:
	if client:
		client.log_event(name, text)
