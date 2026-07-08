# ============================================================================
# Event catalog (TECHNICAL_ARCHITECTURE.md §8). String-keyed names; payloads
# are Dictionaries for now — promote to typed structs before Milestone 6.
# Server-authoritative events are published server-side and replicated down;
# presentation events are local. See net.gd for what crosses the wire.
# ============================================================================
class_name Events

const PLAYER_SPAWNED := "PlayerSpawned"
const PLAYER_DIED := "PlayerDied"
const TILE_CHANGED := "TileChanged"
const TERRITORY_COUNT := "TerritoryCount"
const TOKEN_COLLECTED := "TokenCollected"
const RESOURCE_SPENT := "ResourceSpent"
const ABILITY_USED := "AbilityUsed"
const ABILITY_DENIED := "AbilityDenied"
