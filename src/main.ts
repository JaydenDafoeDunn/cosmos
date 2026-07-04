import * as THREE from 'three';
import { AU, byId, LY } from './data';
import { Engine, Labels, vlen, vsub } from './engine';
import { buildBodies } from './bodies';
import { Game } from './game';
import { UI } from './ui';
import { KidMode } from './kid';
import { Hands } from './hands';
import { BlackHoleView } from './blackhole';
import { Surface } from './surface';
import { ambient } from './sound';

const canvas = document.getElementById('c') as HTMLCanvasElement;
const engine = new Engine(canvas);
const objMap = buildBodies(engine);
const game = new Game(engine, objMap);
const ui = new UI(engine, game, objMap);
const kid = new KidMode(engine, game, objMap);
const hands = new Hands(engine, game, (s) => ui.toast(s));
const bh = new BlackHoleView(engine.renderer);
const surface = new Surface(engine.renderer);
const labels = new Labels(document.getElementById('labels')!, engine);

// solar neighbourhood star dust (representative filler within ~4,000 ly)
{
  let s = 20260704;
  const rnd = () => (s = (s * 48271) % 2147483647) / 2147483647;
  const n = 5000;
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const u = rnd() * 2 - 1, ph = rnd() * Math.PI * 2;
    const r = (4 + Math.pow(rnd(), 1.5) * 3996) * LY;
    const sq = Math.sqrt(1 - u * u);
    pos[i * 3] = sq * Math.cos(ph) * r; pos[i * 3 + 1] = u * r * 0.35; pos[i * 3 + 2] = sq * Math.sin(ph) * r;
    const t = rnd();
    col[i * 3] = 0.7 + t * 0.3; col[i * 3 + 1] = 0.75 + t * 0.2; col[i * 3 + 2] = 0.8 + (1 - t) * 0.2;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  engine.addCloud(g, [0, 0, 0], { size: 1.3, opacity: 0.8 });
}

// start: above Earth, looking at it
{
  const earth = objMap.get('earth')!;
  earth.update?.(engine.simTimeMs);
  // arrive on the sunlit side
  const d = vlen(earth.worldPos);
  const sunward = [-earth.worldPos[0] / d, -earth.worldPos[1] / d, -earth.worldPos[2] / d];
  engine.camPos = [
    earth.worldPos[0] + sunward[0] * 30000 + 12000,
    earth.worldPos[1] + sunward[1] * 30000 + 8000,
    earth.worldPos[2] + sunward[2] * 30000,
  ];
  engine.flyTo(earth, { dur: 0.1, standoffR: 6 });
  setTimeout(() => engine.select(null), 200);
}

const holes = engine.objs.filter((o) => o.body.kind === 'blackhole');

// ---- top bar buttons ----
const btnKid = document.getElementById('btn-kid')!;
btnKid.onclick = () => {
  kid.toggle(!kid.active);
  btnKid.textContent = kid.active ? '👨 Grown-up mode' : '🧒 Kid mode';
};
document.getElementById('btn-hands')!.onclick = () => hands.toggle();
const btnLens = document.getElementById('btn-lens')!;
const LENS_MODES = ['auto', 'high', 'low', 'off'] as const;
btnLens.onclick = () => {
  bh.mode = LENS_MODES[(LENS_MODES.indexOf(bh.mode) + 1) % LENS_MODES.length];
  btnLens.textContent = `Lensing: ${bh.label}`;
};
btnLens.textContent = `Lensing: ${bh.label}`;
const btnCockpit = document.getElementById('btn-cockpit')!;
const toggleCockpit = () => {
  const on = document.body.classList.toggle('cockpit');
  btnCockpit.textContent = on ? '🌌 Exterior' : '🎛 Cockpit';
  ui.toast(on ? '🎛 Cockpit view — V to exit' : 'Exterior view');
};
btnCockpit.onclick = toggleCockpit;
const btnInflate = document.getElementById('btn-inflate')!;
btnInflate.onclick = () => {
  engine.inflate = engine.inflate === 1 ? 50 : engine.inflate === 50 ? 1000 : 1;
  btnInflate.textContent = `🔍 Inflate ×${engine.inflate}`;
  ui.toast(engine.inflate === 1 ? 'True scale' : `⚠ Planet sizes exaggerated ×${engine.inflate} — NOT to scale`);
};

// ---- input: firing + surface look + shortcuts ----
addEventListener('keydown', (e) => {
  if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
  if (e.code === 'Space') { e.preventDefault(); if (!surface.active) game.firing = true; }
  if (e.code === 'KeyN') game.warpToMission();
  if (e.code === 'KeyV' && !surface.active) toggleCockpit();
  if (e.code === 'Escape' && surface.active) leaveSurface();
});
addEventListener('keyup', (e) => { if (e.code === 'Space') game.firing = false; });
canvas.addEventListener('pointerdown', (e) => {
  if (surface.active) return;
  if (e.button === 0 && (e.ctrlKey || e.metaKey)) game.firing = true;
});
addEventListener('pointerup', () => { if (!hands.active) game.firing = false; });
canvas.addEventListener('pointermove', (e) => {
  if (surface.active && (e.buttons & 1)) surface.look(e.movementX, e.movementY);
});

// ---- surface mode wiring ----
const surfHud = document.getElementById('surface-hud')!;
function enterSurface(bodyId: string) {
  const o = objMap.get(bodyId)!;
  surface.enter(o.body, kid.active);
  surfHud.style.display = 'flex';
  document.getElementById('surf-name')!.textContent =
    `🚶 ${o.body.name} — gravity ${surface.cfg.g} m/s² · ${surface.cfg.desc}` +
    (surface.imagination ? ' · 🎨 imagination mode: the plants & critters are pretend!' : '');
  ambient(surface.cfg.weather ?? (surface.cfg.airless ? null : 'wind'));
  if (kid.active) kid.say(`You landed on ${o.body.name}! ${surface.cfg.desc}`);
}
function leaveSurface() {
  surface.exit();
  surfHud.style.display = 'none';
  ambient(null);
  ui.toast('🚀 Back in the ship');
}
document.getElementById('btn-takeoff')!.onclick = leaveSurface;
surface.onExit = () => {};

// auto-offer walking after a "Land & walk" warp completes
setInterval(() => {
  if (ui.pendingWalk && !engine.travel) {
    const id = ui.pendingWalk;
    ui.pendingWalk = null;
    enterSurface(id);
  }
}, 400);

// double-click a landable body while standing on it → walk
canvas.addEventListener('dblclick', () => {
  if (surface.active) return;
  const near = engine.objs.find((o) =>
    ['planet', 'dwarf', 'moon'].includes(o.body.kind) &&
    !['jupiter', 'saturn', 'uranus', 'neptune'].includes(o.body.id) &&
    vlen(vsub(o.worldPos, engine.camPos)) < o.body.radiusKm * 1.5);
  if (near) enterSurface(near.body.id);
});

// ---- main loop ----
let uiTick = 0;
function loop() {
  requestAnimationFrame(loop);
  const dtReal = Math.min((performance.now() - engine.lastFrame) / 1000, 0.1);

  if (surface.active) {
    engine.lastFrame = performance.now();
    surface.update(dtReal, engine.keys);
    return;
  }

  // engine speed upgraded by game
  const baseMult = engine.speedMult;
  engine.speedMult = baseMult * game.speedFactor;
  const dt = engine.frame();
  engine.speedMult = baseMult;

  game.update(dt);
  game.startWaveIfNeeded();

  // black hole lensing overlay (replaces scene render when near a hole)
  bh.update(engine.camPos, engine.quat, holes);
  bh.tune(dt * 1000);
  if (bh.active && bh.mode === 'auto' && uiTick % 30 === 0) btnLens.textContent = `Lensing: ${bh.label}`;
  if (bh.active && bh.target) {
    document.getElementById('hud-alt')!.textContent =
      `⚫ ${(vlen(vsub(bh.target.worldPos, engine.camPos)) / bh.target.body.radiusKm).toFixed(1)} Schwarzschild radii from ${bh.target.body.name}`;
  }

  // CMB only becomes visible once you're at intergalactic distances
  const cmbMat = (engine as any).cmbMat as THREE.MeshBasicMaterial | undefined;
  if (cmbMat) {
    const dSun = engine.distFromSun();
    cmbMat.opacity = 0.3 * Math.min(Math.max((Math.log10(Math.max(dSun, 1)) - 21.5) / 1.5, 0), 1); // fade in past ~0.3 Gly
    cmbMat.visible = cmbMat.opacity > 0.01;
  }

  labels.update(kid.active);
  if (++uiTick % 6 === 0) { ui.tick(); ui.refreshGame(); }
}
requestAnimationFrame(loop);

// greet
ui.toast('Welcome to COSMOS — drag to look, W to fly, click anything. Press ? for help', true);
void AU; void byId;
