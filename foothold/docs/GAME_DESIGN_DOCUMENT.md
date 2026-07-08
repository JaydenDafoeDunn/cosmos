# Project Design Document — Core Architecture & Gameplay Foundation

Status: Draft v2.1. Companion: `TECHNICAL_ARCHITECTURE.md`.

## 1. Vision
**The battlefield is a resource.** Teams compete not only through combat, but by
claiming territory, spending shared resources, and physically altering the
environment to gain tactical advantages. Territory control matters as much as
mechanical skill. The game is built as modular systems rather than specific
classes or modes — new classes, abilities, and modes are added through
configuration, not code.

### Design Pillars
1. **The map is a player.** The battlefield evolves every match: new paths,
   fortified positions, hazards, opportunities.
2. **Shared economy forces teamwork.** One token pool per team — every
   expenditure is a team decision.
3. **Systems, not special cases.** Abilities, classes, objectives, and modes are
   data. The engine never knows what a "Painter" is.
4. **Readable at a glance.** Territory, ownership, and hazards must be legible in
   one look, at speed, under fire, and for colorblind players.

### Core Fantasy
You and your team terraform the arena into your home turf and force the enemy to
fight uphill on ground you designed.

## 2. Core Design Philosophy
- Build systems, not game modes. Modes configure systems.
- Build abilities, not classes. Classes are predefined loadouts.
- Systems communicate through events. No hardcoded dependencies.
- Data over code. Adding content = authoring a definition asset.
- Server is truth. Every gameplay-changing action is validated server-side.

## 3. World System
The World contains every gameplay entity and owns nothing else. Entity
categories: Players, Tiles, Tokens, Projectiles, Utility objects (deployables),
Objectives, Environmental objects. Entities are IDs with data components; systems
operate over components (ECS).

## 4. Tile System
Every playable surface (floors, walls, ceilings) is tiles. Each tile stores:
Position (+ orientation), Surface type, Owner (team id, not hardcoded to two),
Tile type, Health (optional), **Attribution** (who last set the owner, who last
set the type), Metadata.

**Tile type catalog (initial):** Normal, Shock, Mine, Heal, Slow, Jump Pad,
Cover, Turret Mount. *(Foothold adds Shield, Speed, Stun.)*

**The golden rule:** the Tile System does not know what changed a tile. All
modification goes through one mutation API, validated by the Rules System,
announced via `TileChanged`. The API always records **who** caused the change —
that single field makes kill credit, assists, and stats fall out for free.

**Attribution & credit (v2.1):**
- Kill credit: tile-effect damage (mine, shock) is attributed to the player who
  set that tile type — even across the map or after death.
- Painter assists: a kill enabled by painted ground credits the tile's owner.
- Non-player causes attribute to the system that acted.

**Tile lifecycle:** destroyed special tiles revert to Normal; placing a type
replaces the previous; optional ownership decay for unreinforced frontier tiles.

## 5. Painter Role & Territory
The Painter expands/reclaims territory by changing tile ownership.
- Neutral → Friendly: 1 token. Enemy → Friendly: 2 tokens (aggression is a real
  economic commitment). Costs live in ability config.
- Friendly tiles gate/grant: utility placement, ability requirements, forward
  spawns, objective bonuses, passive team bonuses.
- Counterplay: re-paint (at the premium), explosive neutralize (cheaper than
  conquest), objectives that flip regions, comeback levers in mode config.

## 6. Resource System
Primary resource: **Team Tokens**, existing physically in the world, collected by
touch, added to the team's shared pool, spent on painting/utility/abilities.
Debits are atomic server-side (no double-spend). Income is contested; spending is
a visible team conversation; sinks should outpace faucets late-match.

## 7. Ability System
Everything a player does is an ability — shooting included (a rifle is an ability
with a fast cooldown + ammo cost). Every ability defines Cost, Cooldown, Range,
Duration, Requirements (composable predicates), and **Effects**.

**Effects model** — an ability's payload is a list of composable effect
primitives: `SetTileOwner`, `SetTileType`, `Damage`, `ApplyStatus`,
`SpawnEntity`, `Heal`, `Displace`, `ModifyResource`. *(Foothold implements
SetTileOwner, SetTileType, Damage, AreaDamage, SetTileDisabled.)* New abilities
are new combinations of existing primitives. A new primitive is the only time
engine code changes.

## 8. Equipment & Loadout Systems
Each player has a loadout: Primary weapon · Secondary weapon · Ability slot 1 ·
Ability slot 2 · Passive. **Classes are predefined equipment presets — pure
data.**

| Preset | Primary | Signature | Passive |
|---|---|---|---|
| Assault | Assault Rifle | Frag Grenade | Sprint |
| Painter | SMG | Paint | Faster painting |
| Utility | Utility Tool | Deployable | Reduced utility cost |
| Explosive | Rocket Launcher | Breaching Charges | Demolition |
| Wizard | Energy Beam | Long-range area | Improved token efficiency |

Modes may allow **combining presets**; combination selects which preset fills
which slots — it never grants extra slots.

*(Foothold decision: each player locks TWO classes at match start — e.g. shield
Healer + Painter — plus one specialization per class; frozen until match end.
Added classes: Healer (heal/shield/speed), Saboteur (seize/disable).)*

## 9. Team System
Each team stores: Score, Tickets, Shared token pool, Spawn info, Controlled
objectives. Team count is a config value — nothing hardcodes "two teams."

## 10. Objective System
Modular components managing only their own state. Catalog: Capture Zone, Bomb
Site, Payload, Token Generator, King of the Hill, Extraction Point. Objectives
interact with the world through effect primitives and events, exactly like
abilities.

## 11. Rules System
Single authority for gameplay questions (can players paint? modify enemy tiles?
respawn? place utility?). Flat namespaced key→value store, seeded from the mode
over engine defaults. Every mutation path queries it — this is also the
server-side validation / anti-exploit layer.

## 12. Event System
Every system communicates through a global bus. Core events: PlayerSpawned,
PlayerDied, TileChanged, TokenCollected, AbilityUsed, UtilityDestroyed,
ObjectiveCaptured. Events carry attribution. Gameplay-state events originate
server-side only and replicate down; client events are presentation only.

## 13. Networking & Authority
Server-authoritative simulation (tile state, pools, cooldowns, health,
objectives). Clients send intents; server validates + executes + broadcasts.
Client prediction for movement/hitscan feel; server reconciliation. Atomic
economy. Delta replication for tiles. Validation = Rules System (no parallel
anti-cheat). See `TECHNICAL_ARCHITECTURE.md §9` and `HANDOFF.md` for the hit
registration / lag-compensation plan.

## 14. Scale Constraints
Players per match 12 (6v6) design center, support 4–16. Teams 2 (systems support
N). Grid up to ~64×64 floor + walls/ceilings ≈ 50k tiles. Tile mutations
sustained ~20/s, burst 200/s. Server tick 30 Hz sim; tile/economy 10 Hz. Match
10–20 min. Tiles are packed array data in chunked grids, never scene objects;
ownership rendering is a shader/texture concern.

## 15. Game Modes
A mode is one config asset: win condition, respawn rules, time limit, enabled
abilities, allowed loadouts, active objectives, token economy, rule values.
Territory Control (build first), Team Deathmatch, Search & Destroy, King of the
Hill. **Acceptance test:** after Territory Control ships, Team Deathmatch must be
config-only — zero engine changes.

## 16. Readability & Accessibility
Ownership uses color + pattern/texture (not color alone). Colorblind-safe
palette. Special tiles get distinct silhouettes/emissives + an audio tell. The
minimap renders ownership as the strategic layer.

## 17. Core Gameplay Loop
Spawn → fight for resources/objectives → collect tokens → spend (expand /
fortify / strike) → claim/reclaim tiles → exploit friendly territory → contest
enemy areas → repeat. Minute 1 and minute 15 should look like different maps.

## 18. Scope Boundaries
In scope (foundation): everything above, one map, Territory Control + TDM, the
five loadout presets. Out of scope for the foundation: meta-progression,
cosmetics, ranked, >1 match per process, console/mobile, spectator/replay (event
stream is designed to make replays feasible later).

## 19. Long-Term Goal
Adding a class/ability/objective/mode should need little or no change to the
underlying systems. The core stays stable while gameplay emerges from combining
reusable systems.

## 20. Open Questions
Engine choice (→ Godot 4, decided). Token drop sources. Painting UX (single /
spray / drag). Wall/ceiling ownership (floors-first). Friendly-fire/self-damage
on hazards. Exact friendly-territory passive bonuses.
