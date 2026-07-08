# ============================================================================
# TileGrid (TECHNICAL_ARCHITECTURE.md §5) — chunked structure-of-arrays.
# Tiles are NOT entities. Ownership/type/health are packed byte arrays.
#
# THE ONLY WRITE PATH is apply(): it validates nothing itself (callers pass a
# resolved, rules-checked mutation) but it is the single choke point that
# writes arrays, records attribution, maintains the O(1) ownership count,
# marks chunks dirty, and emits TileChanged. Abilities, objectives, scripts and
# modes all go through here — so attribution can never be missed or forged.
#
# Encoding:
#   owner:  0 = neutral, 1 = team A, 2 = team B ...  (team_id + 1)
#   type:   0 = normal, then the tile-type catalog (see Defs)
#   setter: 255 = system/none, else a per-match player slot (u8)
# ============================================================================
class_name TileGrid
extends RefCounted

const CHUNK := 16
const NEUTRAL := 0
const SYSTEM := 255

var w: int = 0
var h: int = 0
var server_side: bool = false

var owner: PackedByteArray = PackedByteArray()
var type: PackedByteArray = PackedByteArray()

# Server-only. Never replicated — clients learn credit from events, not arrays.
var health: PackedByteArray = PackedByteArray()
var owner_setter: PackedByteArray = PackedByteArray()
var type_setter: PackedByteArray = PackedByteArray()
var disabled: PackedByteArray = PackedByteArray()   # 1 = locked/sabotaged (no effect, no territory)

# Incrementally maintained ownership tally -> O(1) Territory Control win check.
var owner_counts: Dictionary = {}   # owner_byte -> count
var dirty_chunks: Dictionary = {}   # chunk_id -> true

func setup(width: int, height: int, is_server: bool) -> void:
	w = width
	h = height
	server_side = is_server
	var n := w * h
	owner = PackedByteArray(); owner.resize(n)   # 0 = neutral
	type = PackedByteArray(); type.resize(n)     # 0 = normal
	if server_side:
		health = PackedByteArray(); health.resize(n)
		owner_setter = PackedByteArray(); owner_setter.resize(n)
		type_setter = PackedByteArray(); type_setter.resize(n)
		disabled = PackedByteArray(); disabled.resize(n)
		for i in n:
			owner_setter[i] = SYSTEM
			type_setter[i] = SYSTEM
	owner_counts = {NEUTRAL: n}

func idx(x: int, y: int) -> int:
	return y * w + x

func in_bounds(x: int, y: int) -> bool:
	return x >= 0 and y >= 0 and x < w and y < h

func chunk_id(x: int, y: int) -> int:
	var cx := x / CHUNK
	var cy := y / CHUNK
	return cy * ((w + CHUNK - 1) / CHUNK) + cx

func owner_at(x: int, y: int) -> int:
	return owner[idx(x, y)] if in_bounds(x, y) else NEUTRAL

func count_by_owner(team: int) -> int:
	return owner_counts.get(team, 0)

func total_tiles() -> int:
	return w * h

# --- The single mutation API (server) --------------------------------------
# cause = { "kind": "ability"|"objective"|"script"|"environment",
#           "actor": <player_slot:int> | -1 (system), "ref": <def_id:String> }
# Returns true if anything actually changed.
func apply(x: int, y: int, set_owner: int, set_type: int, delta_health: int, cause: Dictionary, set_disabled: int = -1) -> bool:
	if not in_bounds(x, y):
		return false
	var i := idx(x, y)
	var old_owner := owner[i]
	var old_type := type[i]
	var actor := int(cause.get("actor", -1))
	var setter := SYSTEM if actor < 0 else actor
	var changed := false

	if set_owner >= 0 and set_owner != old_owner:
		owner_counts[old_owner] = owner_counts.get(old_owner, 0) - 1
		owner[i] = set_owner
		owner_counts[set_owner] = owner_counts.get(set_owner, 0) + 1
		if server_side:
			owner_setter[i] = setter
		changed = true

	if set_type >= 0 and set_type != old_type:
		type[i] = set_type
		if server_side:
			type_setter[i] = setter
		changed = true

	if server_side and set_disabled >= 0 and disabled[i] != set_disabled:
		disabled[i] = set_disabled
		changed = true

	if server_side and delta_health != 0:
		health[i] = clampi(health[i] + delta_health, 0, 255)
		changed = true

	if changed:
		dirty_chunks[chunk_id(x, y)] = true
		EventBus.publish(Events.TILE_CHANGED, {
			"x": x, "y": y,
			"owner": owner[i], "type": type[i],
			"old_owner": old_owner, "old_type": old_type,
			"disabled": (disabled[i] if server_side else 0),
			"cause": cause,
		})
	return changed

func is_disabled(x: int, y: int) -> bool:
	return in_bounds(x, y) and server_side and disabled[idx(x, y)] == 1

# --- Client-side delta application (no rules, no attribution, no event) -----
# The client mirrors authoritative state; it never originates gameplay changes.
func apply_replicated(x: int, y: int, own: int, typ: int) -> void:
	if not in_bounds(x, y):
		return
	var i := idx(x, y)
	if owner[i] != own:
		owner_counts[owner[i]] = owner_counts.get(owner[i], 0) - 1
		owner[i] = own
		owner_counts[own] = owner_counts.get(own, 0) + 1
	type[i] = typ

# Full-snapshot load for a joining client.
func load_snapshot(owner_bytes: PackedByteArray, type_bytes: PackedByteArray, width: int, height: int) -> void:
	setup(width, height, false)
	owner = owner_bytes.duplicate()
	type = type_bytes.duplicate()
	# rebuild the O(1) tally
	owner_counts = {}
	for b in owner:
		owner_counts[b] = owner_counts.get(b, 0) + 1
