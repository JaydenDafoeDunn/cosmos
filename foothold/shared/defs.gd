# ============================================================================
# Defs (autoload) — the definition-asset loader (design doc §2 "Data over code").
# Loads all content JSON at startup into id-keyed dictionaries. Content is data;
# adding a tile type / ability / loadout / mode is a new file, not new code.
#
# Stored as JSON here for readability; in a mature project these become native
# resources (.tres). Every asset has a stable string `id` — the only
# cross-reference anywhere in content.
# ============================================================================
extends Node

const CONTENT_ROOT := "res://content"

var tile_types: Dictionary = {}   # id -> def
var abilities: Dictionary = {}
var loadouts: Dictionary = {}
var modes: Dictionary = {}

# Tile-type id -> stable numeric code used in the packed grid arrays.
# "normal" is always 0. Others get codes in load order; a real build would pin
# these in the asset so saved maps stay stable.
var tile_type_code: Dictionary = {"normal": 0}
var tile_type_by_code: Dictionary = {0: "normal"}

func _ready() -> void:
	_load_folder("tile_types", tile_types)
	_load_folder("abilities", abilities)
	_load_folder("loadouts", loadouts)
	_load_folder("modes", modes)
	_assign_tile_codes()
	print("[Defs] loaded: %d tile types, %d abilities, %d loadouts, %d modes"
		% [tile_types.size(), abilities.size(), loadouts.size(), modes.size()])

func _load_folder(folder: String, into: Dictionary) -> void:
	var path := "%s/%s" % [CONTENT_ROOT, folder]
	var dir := DirAccess.open(path)
	if dir == null:
		push_warning("[Defs] missing content folder: %s" % path)
		return
	for file in dir.get_files():
		if not file.ends_with(".json"):
			continue
		var text := FileAccess.get_file_as_string("%s/%s" % [path, file])
		var parsed: Variant = JSON.parse_string(text)
		if typeof(parsed) != TYPE_DICTIONARY or not parsed.has("id"):
			push_warning("[Defs] %s/%s: not an object with an 'id'" % [folder, file])
			continue
		into[parsed["id"]] = parsed

func _assign_tile_codes() -> void:
	var next := 1
	for id in tile_types.keys():
		if id == "normal":
			continue
		tile_type_code[id] = next
		tile_type_by_code[next] = id
		next += 1

func code_of(tile_type_id: String) -> int:
	return int(tile_type_code.get(tile_type_id, 0))
