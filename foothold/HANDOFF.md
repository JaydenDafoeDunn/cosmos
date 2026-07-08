# Foothold — Handoff & TODO

Working title for the territory-control team shooter. This file is the pickup
point for the **new repo** (a fresh Claude session won't have the prior chat
context — start it by reading this + `docs/`).

## Where things stand

**Engine decision:** Godot 4, greybox 3D, GL Compatibility renderer (low-end
laptop friendly), server-authoritative from line one, targeting **Steam + online
multiplayer**. Rationale and alternatives in `docs/`.

**Built so far (design-doc Milestones 0–5 + extensions), all greybox, all
online, all server-authoritative:**
- Client/server split (host runs both; two tile grids synced only by deltas).
- Chunked structure-of-arrays `TileGrid` with the single `apply()` mutation path
  + attribution (owner_setter / type_setter), and a `disabled` (locked) state.
- One ability pipeline: `use_ability()` → effect primitives
  (`SetTileOwner`, `SetTileType`, `Damage`, `AreaDamage`, `SetTileDisabled`).
- Shared, rules-gated, atomically-debited token economy; live territory %.
- Combat: hitscan, health, death, respawn, killfeed; kill / assist / **painter &
  placer** attribution read straight from the grid.
- Tile catalog live: Shock (DoT), Mine (detonate-on-enter), Heal, Slow, Shield
  (one-way team hitscan block), Speed (friendly buff), Stun (freeze).
- **Match-locked dual class:** each player picks TWO classes + one specialization
  each on a pre-match screen, Lock In, frozen for the match (server-enforced).
- 7 classes as data: Assault, Painter, Utility, Explosive, Wizard, **Healer**
  (heal / shield / speed), **Saboteur** (seize / disable).
- Two game modes differing by config only (Territory Control ↔ TDM).

**Controls:** WASD move · mouse look · hold LMB = Class-A weapon · RMB = Class-A
ability · F = Class-B ability · Esc mouse. See `README.md` to run.

## ⚠️ Critical caveat: none of this has been run
There is no Godot in the build environment, so the GDScript is authored to the
Godot 4 API but **unverified** (JSON all validates). **First real task in the new
repo: open it in Godot 4.3+, press F5, and fix whatever the Output/Debugger panel
reports.** Likely first-run nits: MultiMesh per-instance color in the
Compatibility renderer, `Vector3`/`Array` RPC args over the wire,
`look_at_from_position` on tracers, and the OptionButton selection screen. See the
first-run checklist in `README.md`.

## TODO backlog (roughly prioritized)

### 0. Get it running (do first)
Fix any parse/runtime errors from the first F5. Verify: host + 2-instance join,
paint, shoot/kill/respawn, dual-class Lock-In, hazards, shield blocks enemy fire.

### 1. Netcode hardening incl. FPS-standard hit registration (Milestone 6 — the big gate before Steam)
This is what "make hitboxes work how the FPS community likes" means, concretely.

**Current implementation (placeholder):** the server does an instant hitscan vs a
single per-player *sphere* at each player's **current** server position; local
movement is naively predicted with **no reconciliation**; remote players are drawn
straight from 20 Hz snapshots with **no interpolation buffer**; there is **no lag
compensation**. Online this will feel unfair — you aim at where an enemy is on
*your* screen, but the server tests against their newer position ("I hit them but
it didn't count").

**Target — server-side rewind / "favor the shooter"** (the Valve Source / CS /
Overwatch consensus):
1. **Client prediction + reconciliation** for your own movement: move instantly,
   send inputs stamped with a command tick, replay un-acked inputs when the
   server's authoritative state arrives.
2. **Entity interpolation** for other players: render them ~100 ms in the past
   from a snapshot buffer, smoothed — never extrapolate jitter.
3. **Server-side lag compensation (rewind):** the server keeps a short history
   (~1 s) of every player's hitboxes per tick. When processing a fire command, it
   rewinds all other players to what the **shooter** saw (command time = receive
   time − shooter RTT − shooter interpolation delay), runs the hit test *there*,
   then applies. If it hit on your screen, it hits.
4. **Per-limb hitboxes** (head / torso / limbs) with a headshot multiplier — not
   one sphere.
5. **Anti-cheat posture:** never trust a client "I hit X" claim. Client sends fire
   + aim ray + command tick; the server validates range/LOS/cooldown and does the
   rewound test authoritatively. Cap rewind time (reject absurd latencies).
6. **Tick rate** as high as feasible (sim ~60 Hz ideal; currently 30 Hz sim / 20
   Hz replication).

**Where:** mostly `server/game_server.gd` `_hitscan` + a per-player position-
history ring buffer + fire commands carrying the client's render time; plus a
client interpolation buffer and input-reconciliation loop. Do this before any
public playtest.

### 2. Entity system — deployables (`SpawnEntity`)
Turrets that tick and auto-fire (Utility's `deploy` signature is a no-op stub).
Server-owned entities, replicated like players. Unlocks Turret Mount tiles too.

### 3. Destructible tiles + Demolition passive
`Damage` should damage tile `health`; Cover tiles; Explosive's Demolition bonus vs
tiles. Tiles already carry `health` in the catalog.

### 4. Remaining content & feel
Ammo/reload; more effect primitives (`ApplyStatus`, `Displace`, `Heal`,
`ModifyResource`); token pickup entities (pools are pre-filled for now);
secondary weapon slot; jump pads; walls/ceilings.

### 5. Maps, movement, collision
Real greybox maps, collision + gravity + cover (players currently slide on a flat
plane; arena walls block the camera only). Then art.

### 6. Objectives, modes, teams (Milestones 7–8)
ObjectiveDefs (Capture Zone, Payload, Token Generator…), full team state, more
modes as config.

### 7. Accessibility (design pillar 4)
Ownership must be pattern + color, not color alone; colorblind-safe palette;
special-tile silhouettes + audio tells; minimap.

### 8. Steam integration
GodotSteam addon: Steamworks, lobbies, and **Steam Datagram Relay** for
connectivity (free NAT-punch + relay — no dedicated-server bill for early
access). Wire `SteamMultiplayerPeer` into the existing high-level multiplayer.

## Moving to the new repo

`foothold/` is a self-contained Godot project (its `project.godot` is the project
root). Move its **contents** to the new repo root so the new repo *is* the game.

**Simple (fresh start, no git history):**
```bash
git clone <NEW_REPO_URL> newgame
cd newgame
cp -a /path/to/cosmos/foothold/. .
git add -A
git commit -m "Import Foothold greybox v1"
git push origin main
```
Then in Godot: Import → select `project.godot` at the new repo root → F5.

**Optional (preserve foothold's commit history):**
```bash
# from a clone of cosmos
git subtree split --prefix=foothold -b foothold-only
git clone <NEW_REPO_URL> newgame && cd newgame
git pull ../cosmos foothold-only
git push origin main
```

In the new Claude session, add the new repo to the session (`add_repo`) and start
by reading `HANDOFF.md`, `docs/GAME_DESIGN_DOCUMENT.md`,
`docs/TECHNICAL_ARCHITECTURE.md`, and `README.md`.

## Cleaning up cosmos

`cosmos` is the COSMOS space-explorer project; Foothold only lived here
temporarily. Once Foothold is safely pushed to the new repo:
```bash
# in cosmos, on a branch
git rm -r foothold
git commit -m "Move Foothold to its own repo"
git push
```
That returns `cosmos` to being just the COSMOS explorer (`src/`, `index.html`, …).
