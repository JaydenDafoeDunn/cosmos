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
- **WASD** move · **mouse** look
- **hold left mouse** = fire the rifle (hitscan) · **right mouse** = paint the aimed tile
- **Esc** release/recapture the mouse

Painting spends your team's shared token pool (neutral tile = 1, enemy tile = 2).
Shooting deals damage; at 0 HP you die, a killfeed line appears, and you respawn
after the mode's delay. The bottom-left event log and top-right killfeed both come
over the wire from the server.

## What this slice proves (Milestone 0 → 3)
- **Client/server split from line one.** The host runs a `GameServer` *and* a
  `GameClient` — two separate `TileGrid`s in one process, synced only by network
  deltas, exactly as a remote client would be. No gameplay state is client-owned.
- **One ability pipeline.** Paint and shooting run through the *same*
  `use_ability()` → effect-primitive path (`SetTileOwner`, `Damage`). The engine
  never special-cases "painting" or "shooting" — they're data in
  `content/abilities`. A new ability is a new combination of existing primitives.
- **One mutation path.** Every tile change goes through `TileGrid.apply()`, which
  records attribution and emits `TileChanged`. Painting reuses it; so will
  objectives, mines, and air strikes.
- **Server-authoritative combat + attribution (TA §8.1).** Hitscan, damage,
  death, and respawn are all server-side. On death the server resolves the
  killer, damage-window assists, and the **painter assist** (die on painted
  ground → that tile's `owner_setter` gets credit) straight from the grid's
  attribution arrays — no history scan.
- **Rules as validation.** Painting, friendly-fire, and win conditions are gated
  by the mode's rule set; the server is the only authority. Switch `DEFAULT_MODE`
  in `main/main.gd` to `"team_deathmatch"` and painting turns off while the win
  condition becomes kills — **config only, zero code**. That's the architecture's
  acceptance test.
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
server/game_server.gd   authoritative sim: ability pipeline, combat, economy, replication
client/game_client.gd   greybox 3D render, FP controller, fire/paint, HUD, killfeed
main/main.gd            bootstrap + host/join/dedicated menu
content/                tile_types / abilities / loadouts / modes  (data)
```

## Deliberately NOT here yet (next slices, per the milestone plan)
- **Movement physics** — no collision, gravity, or cover yet; players slide on a
  flat plane and only the arena walls block the camera visually (not movement).
- **Token pickups** — pools start pre-filled so painting is testable now; world
  token entities are Milestone 4.
- **Ammo / reload, more effect primitives** — shooting is cooldown-gated with
  infinite ammo; `SpawnEntity`, `ApplyStatus`, `Displace`, etc. come with mines,
  grenades, and deployables.
- **Loadouts wired to input** — the five presets exist as data (`content/loadouts`)
  but everyone currently spawns with the same rifle+paint; slot binding is Milestone 5.
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
3. **Right-click** paints the aimed floor tile blue; the pool decrements; painting
   past ~60 tiles shows `AbilityDenied — not enough tokens` in the log.
4. Two instances: window 2's **Join** connects; each sees the other's capsule move;
   paints from either appear in both.
5. **Combat** (needs two players): hold **left mouse** at the other capsule — you
   see a tracer, the crosshair flashes on hit, their HP bar isn't shown but they
   die after ~6 hits, a killfeed line appears, and they respawn.
6. `godot --headless -- --server` prints "headless server up" and a client can join it.

Likely first-run nits to watch for (untested code): MultiMesh per-instance color
in the Compatibility renderer, `Vector3` RPC args over the wire, and
`look_at_from_position` on tracers. If any misbehave, paste the Godot error text
and I'll fix it fast.
