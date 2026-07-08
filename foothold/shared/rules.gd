# ============================================================================
# Rules (TECHNICAL_ARCHITECTURE.md §6.6) — flat namespaced key->value store,
# seeded from a GameModeDef over engine defaults. Unknown keys fall back to
# defaults, so new rules never break old mode assets.
#
# Every server-side mutation path calls check()/value() BEFORE executing.
# This IS the server-side validation / anti-exploit layer (design doc §13) —
# there is no parallel anti-cheat logic to drift out of sync.
# ============================================================================
class_name Rules
extends RefCounted

# Engine defaults. Mode assets overlay these.
const DEFAULTS := {
	"painting.enabled": true,
	"painting.enemy_tiles": true,        # may reclaim enemy tiles (at a premium)
	"painting.cost_neutral": 1,
	"painting.cost_enemy": 2,
	"respawn.enabled": true,
	"tiles.destructible_walls": true,
	"credit.painter_assist": true,
}

var _values: Dictionary = {}

func seed(mode_rules: Dictionary) -> void:
	_values = DEFAULTS.duplicate(true)
	for k in mode_rules:
		_values[k] = mode_rules[k]

func value(key: String, fallback: Variant = null) -> Variant:
	if _values.has(key):
		return _values[key]
	if DEFAULTS.has(key):
		return DEFAULTS[key]
	return fallback

func check(key: String) -> bool:
	return bool(value(key, false))
