# Technical Architecture & Build Plan

Status: Draft v1. Companion to `GAME_DESIGN_DOCUMENT.md`. The engineering
contract: data schemas, event catalog, system interfaces, networking model,
milestone build order.

## 1. Named Patterns
| Design principle | Pattern | Consequence |
|---|---|---|
| World contains entities; build systems | ECS | Entities = IDs + components; systems process components |
| Systems communicate through events | Event bus (pub/sub) | No system references another's internals |
| Classes/modes/abilities are configuration | Data-driven | Content = definition assets; patches need no code |

## 2. Engine Recommendation
**Godot 4** (decided). Free/MIT, native desktop export (Steam-ready), built-in
high-level multiplayer + headless dedicated server, GL Compatibility renderer for
low-end hardware. Definition assets = Resources (`.tres`) or JSON. A 2D top-down
slice was considered for the first prototype; **Foothold instead starts in 3D
greybox** because gunfeel/movement is what decides a shooter and can't be
validated top-down.

## 3. Runtime Topology
Clients send intents; the server validates (Rules + Resources), executes effects,
emits events, replicates deltas. Client-originated events are presentation-only;
gameplay events exist only server-side and replicate down.

## 4. ECS Layout
Components are data only; systems are logic only (run order matters). Tiles are
NOT entities (see §5).

## 5. Tile Grid Implementation
**Storage:** chunked structure-of-arrays (owner, type, health, attribution).
Attribution arrays are server-only (never replicated — clients learn credit from
events). Player slots are per-match u8 indices.

**Mutation API (the only write path):**
`TileGrid.apply(pos, surface?, set_owner?, set_type?, delta_health?, cause,
set_disabled?)` → validates → writes arrays + attribution (owner_setter/
type_setter from cause.actor; system = 255) → marks dirty → emits `TileChanged`
carrying the cause. Abilities, objectives, scripts, modes all call this; none
touch arrays directly.

**Rendering:** ownership + type baked into per-chunk data (Foothold: one
MultiMesh, per-instance color). Never one node per tile.

**Replication:** per-chunk dirty deltas ~10 Hz; full compressed snapshot on join.
~50k tiles ≈ 200 KB raw, RLE compresses to a few KB.

**Fast queries:** owner_at(pos), count_by_owner(team) (incremental O(1)),
region_connected_to_spawn(team) (cached flood fill).

## 6. Data Schemas (definition assets)
Every asset has a stable string `id` — the only cross-reference in content.

- **AbilityDef:** id, targeting, range, cooldown, cost, requirements[], effects[].
- **Effect primitives (the only place new engine code is required):**
  SetTileOwner, SetTileType, Damage, ApplyStatus, SpawnEntity, Heal, Displace,
  ModifyResource. *(Foothold: + AreaDamage, SetTileDisabled.)* Each primitive has
  one server-side executor.
- **TileTypeDef:** id, code, name, effect, params, destructible, health.
- **LoadoutDef (class preset):** id, name, primary, secondary, signature/slots,
  passive. *(Foothold: + specializations[].)*
- **GameModeDef:** id, teams, win{type,threshold}, respawn, starting_tokens,
  allowed_loadouts, objectives, rules{}.
- **RulesSystem contract:** flat namespaced key→value, seeded from GameModeDef
  over engine defaults; `Rules.check(key)` before every mutation; unknown keys
  fall back to defaults so new rules never break old assets.

## 7. Ability Execution Pipeline (server)
One code path: resolve ability → check cooldown → check requirements → check/spend
cost → run effect primitives → set cooldown → emit AbilityUsed. Any failure
short-circuits with a typed denial replicated to the caster. Clients predict
presentation optimistically but never state.

## 8. Event Catalog
PlayerSpawned, PlayerDied(victim, killer?, assists[], cause, position),
TileChanged(pos, old, new, cause), TerritoryCount, TokenSpawned, TokenCollected,
ResourceSpent, AbilityUsed, AbilityDenied(→caster only), Utility*,
Objective*, MatchPhaseChanged. Coalesce high-frequency events; subscribers don't
mutate state synchronously (enqueue for next tick). The ordered server event
stream doubles as the replay/stats/telemetry format.

### 8.1 Kill & assist resolution
All damage carries a DamageSource resolved server-side: hitscan/melee → caster;
projectile → source_player stamped at spawn; deployable → placer; tile effect →
the tile's type_setter (mine kills belong to the placer, even after death);
objective/environment → none (killfeed shows the cause). On PlayerDied: Killer =
credited player of the killing blow; Assists = damagers within the window +
Painter assist (tile hazard or death on painted ground → tile's owner_setter).
Attribution is credit-only; it never gates gameplay.

## 9. Networking Details
Transport: engine high-level netcode (Godot SceneMultiplayer / ENet; Steam relay
for shipping). Dedicated headless server per match. Tick rates: sim 30 Hz, player
replication 20 Hz, tile/economy 10 Hz, events per tick. **Prediction:**
client-predicted movement + weapon feel with server reconciliation; tile
mutations and token spends are never predicted. Interest management: all tile
deltas to everyone (minimap), entity replication proximity-filtered.
Join-in-progress: snapshot + deltas. Security: clients untrusted; server
validates range/LOS/cooldown/cost — same Rules path. **Hit registration:** see
`HANDOFF.md` for the FPS-standard lag-compensation plan (server-side rewind /
favor-the-shooter) — Foothold's current build does NOT yet do this.

## 10. Milestone Build Plan
0. Skeleton — server+client connect, ECS scaffold, EventBus, def loader.
1. Tile grid — chunked grid, mutation API, ownership rendering, debug paint.
2. Events + HUD — replication, minimap ownership, territory counter.
3. Abilities + Paint — pipeline, requirements, primitives, Paint + one weapon.
4. Economy — token entities, pickup, shared pool, atomic debit.
5. Equipment + Loadouts — slots, LoadoutDefs, spawn with preset, all presets.
6. Hardening the netcode — prediction/reconciliation, join-in-progress,
   snapshot compression, packet-loss testing, **lag-compensated hit reg**.
7. Teams, Objectives, Rules — team state, ObjectiveDefs, full RulesSystem.
8. Game modes — GameModeDef loader, win conditions; TDM as config only.
9. First playtest loop — one map, bots/humans, telemetry, balance dashboard.

Networking is not a late milestone: the client/server split exists from
Milestone 0 and every system is server-authoritative from the start. Milestone 6
is hardening, not introducing, netcode.

*(Foothold status vs plan: Milestones 0–5 + tile hazards + dual-class + Healer/
Saboteur + Shield/Disable are scaffolded in greybox. Milestone 6 netcode
hardening — including proper hit registration — is the next major gate. See
`HANDOFF.md`.)*

## 11. Testing Strategy
Unit: effect primitives, requirement predicates, Rules.check, atomic debit
(property test), grid mutation + dirty tracking, flood fill. Simulation tests
(headless): scripted intents vs headless server. Attribution tests. Determinism
guard (replay a logged intent stream → same event stream). Soak: burst mutations,
flat memory/tick time. CI loads every GameModeDef and asserts it references only
existing systems/rules/assets.

## 12. Repository Layout (proposed)
`shared/` is the contract zone: schemas + executors live there so server and
client can never disagree. (Foothold: `shared/`, `server/`, `client/`,
`content/`.)

## 13. Risk Register
- Netcode retrofit — mitigated: client/server split from M0.
- Tile grid perf (node-per-tile trap) — mitigated: packed arrays + MultiMesh.
- Economy snowballing — comeback levers in mode config, telemetry.
- Effect-primitive sprawl — new primitives need design review.
- Mode logic leaking into systems — TDM-as-config acceptance test + CI mode
  validation.
- Painting feels unresponsive — optimistic presentation, measure before adding
  rollback.
