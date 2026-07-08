# Foothold (working title)

A territory-control team shooter. **Godot 4**, greybox 3D, server-authoritative,
built to ship on Steam with online multiplayer.

> Working name — rename freely. This is the real v1 codebase, not a throwaway
> prototype: the systems here (tile grid, shared economy, rules/validation,
> netcode, event bus) are engine-final. Only the *look* is greybox — capsules
> and boxes now, art later.

Companion design docs: `GAME_DESIGN_DOCUMENT.md` and `TECHNICAL_ARCHITECTURE.md`
(the schemas, event catalog, and milestone plan this implements).

## Run it

1. Install **Godot 4.3+** (standard build; no C# needed yet).
2. Open this `foothold/` folder as a project (`Import` → pick `project.godot`).
3. Press **F5**. Click **Host (listen server)**. You spawn in a 3D arena.

**Two players on one machine** (to see multiplayer):
- Editor menu: **Debug → Run Multiple Instances → 2 instances**, then F5.
- In window 1 click **Host**; in window 2 click **Join** (IP `127.0.0.1`).

**Headless dedicated server** (no window):
```
godot --headless --path . -- --server      # server only
godot --path . -- --join=127.0.0.1         # a client that auto-connects
```
Low-end laptop: the project already forces the **GL Compatibility** renderer and
uses no textures/shadows — it should run on integrated graphics.

## Controls
- **WASD** move · **mouse** look · **left-click** paint the tile you're aiming at
- **Esc** release/recapture the mouse

Painting spends your team's shared token pool (neutral tile = 1, enemy tile = 2).
Watch the bottom-left event log: `PlayerSpawned`, territory %, and `AbilityDenied`
(when the pool is empty) all come over the wire from the server.

## What this slice proves (Milestone 0 → 1)
- **Client/server split from line one.** The host runs a `GameServer` *and* a
  `GameClient` — two separate `TileGrid`s in one process, synced only by network
  deltas, exactly as a remote client would be. No gameplay state is client-owned.
- **One mutation path.** Every tile change goes through `TileGrid.apply()`, which
  records attribution and emits `TileChanged`. Painting reuses it; so will
  objectives, mines, and air strikes.
- **Rules as validation.** Painting is gated by the mode's rule set; the server
  is the only authority. Switch `DEFAULT_MODE` in `main/main.gd` to
  `"team_deathmatch"` and painting turns off — **config only, zero code**. That's
  the architecture's acceptance test.
- **Data-driven content.** Tile types, abilities, loadouts, and modes are JSON in
  `content/`, loaded at startup by `Defs`.

## Map of the code
```
shared/        the contract zone — used by both server and client
  events.gd      event-name catalog (§8)
  event_bus.gd   global pub/sub (§12)
  rules.gd       namespaced rule store + server validation (§6.6, §13)
  tile_grid.gd   chunked SoA grid + the single mutation API (§5)
  defs.gd        definition-asset loader (JSON -> id-keyed dicts)
  net.gd         all RPCs (autoload so node paths match on every peer)
server/game_server.gd   authoritative sim: intents, economy, replication
client/game_client.gd   greybox 3D render, FP controller, aim-to-paint, HUD
main/main.gd            bootstrap + host/join/dedicated menu
content/                tile_types / abilities / loadouts / modes  (data)
```

## Deliberately NOT here yet (next slices, per the milestone plan)
- **Shooting / damage / death / kill attribution** — the `shoot` ability and the
  `Damage`/`SpawnEntity` effect primitives (Milestone 3+). Movement has no
  collision or gravity yet (flat plane).
- **Token pickups** — pools start pre-filled so painting is testable now; world
  token entities are Milestone 4.
- **Client-side prediction/reconciliation** — the local player predicts its own
  movement naively; remote players render straight from 20 Hz snapshots. Proper
  netcode hardening is Milestone 6.
- **Accessibility patterns** — ownership is color-only for now; per-team
  pattern/texture is Milestone 2 (§16).
- **Tile-type rendering & special-tile geometry** — the grid stores type codes,
  but only ownership is drawn so far.

## First-run checklist (I authored this without a Godot editor to run it in)
Please sanity-check these on your first F5 and tell me what breaks:
1. Project imports with no script parse errors (check the Godot **Output**/**Debugger** panels).
2. **Host**: you can look around, WASD moves you, arena walls are visible.
3. Left-click paints the aimed floor tile blue; the pool decrements; painting past
   ~60 tiles shows `AbilityDenied — not enough tokens` in the log.
4. Two instances: window 2's **Join** connects; each sees the other's capsule move;
   paints from either appear in both.
5. `godot --headless -- --server` prints "headless server up" and a client can join it.

Likely first-run nits to watch for (untested code): MultiMesh per-instance color
in the Compatibility renderer, and RPC arg types over the wire. If any of these
misbehave, paste the Godot error text and I'll fix it fast.
