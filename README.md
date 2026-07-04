# 🪐 COSMOS

A true-scale, interactive universe — and a space game — in one page.

**Play it:** https://jaydendafoedunn.github.io/cosmos/

## What's inside
- **True scale everywhere.** Real NASA/JPL sizes, distances and Keplerian orbits; real star positions (Gaia/Hipparcos); real black holes, neutron stars, magnetars, a quark-star candidate, galaxies out to the CMB. Directions and apparent sizes are always faithful; beyond ~67 AU radial distance is log-compressed for rendering (HUD shows true distances). Hypothetical objects are clearly badged.
- **Fly** (WASD + mouse, adaptive speed), **warp** to anything, **land and walk** on rocky worlds — real per-world gravity, procedural terrain, weather with synthesized sound. Alien flora/fauna appear only in clearly-labelled imagination mode.
- **Black hole lensing:** per-pixel ray-marched Schwarzschild geodesics with a Doppler-beamed accretion disk (High/Low quality).
- **Game:** lasers, enemy drones, missions across the solar system and beyond, points, ship upgrades.
- **Kid mode:** giant buttons, guided tour, read-aloud facts, no damage.
- **Hand control** (optional): steer by webcam via MediaPipe, loaded on demand, all on-device.

## Dev
```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # type-check + production build
```
Deploys to GitHub Pages automatically on push to `main`.

## Honesty notes
Star catalog is curated (~70 real objects), not exhaustive. The Milky Way particle field, cosmic web and belt particles are representative, procedurally placed. Voyager positions are approximate for 2026. Pulsar spins are slowed for visibility. Sizes flagged `SIZE UNCERTAIN` are genuinely debated in the literature.
