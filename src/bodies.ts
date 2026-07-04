// Builds all visual objects from the catalog + procedural structures.
import * as THREE from 'three';
import {
  AU, LY, BODIES, Body, byId, GALACTIC_CENTER, GALACTIC_NORTH, MILKY_WAY_R,
  OBS_UNIVERSE_R, SUN_GC_DIST,
} from './data';
import { Engine, keplerPos, raDecToPos, SceneObj, V3 } from './engine';

const texCache = new Map<string, THREE.Texture>();

function canvasTex(key: string, draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void, w = 256, h = 128): THREE.Texture {
  let t = texCache.get(key);
  if (t) return t;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d')!, w, h);
  t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  texCache.set(key, t);
  return t;
}

function glowTex(): THREE.Texture {
  return canvasTex('glow', (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,255,255,0.45)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  }, 128, 128);
}

// Real imagery mosaics (NASA missions, packaged by solarsystemscope.com, CC-BY 4.0).
// Loaded async; procedural texture shows until then / if offline.
const REAL_TEX: Record<string, string> = {
  mercury: '2k_mercury.jpg', venus: '2k_venus_atmosphere.jpg', earth: '2k_earth_daymap.jpg',
  mars: '2k_mars.jpg', jupiter: '2k_jupiter.jpg', saturn: '2k_saturn.jpg',
  uranus: '2k_uranus.jpg', neptune: '2k_neptune.jpg', moon: '2k_moon.jpg',
};
const texLoader = new THREE.TextureLoader();
function loadRealTex(file: string, onto: THREE.Material & { map?: THREE.Texture | null }) {
  texLoader.load(`${import.meta.env.BASE_URL}tex/${file}`, (t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    onto.map = t;
    onto.needsUpdate = true;
  });
}

let rngState = 12345;
const rng = () => (rngState = (rngState * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;

function planetTexture(b: Body): THREE.Texture {
  return canvasTex(b.id, (ctx, w, h) => {
    const col = new THREE.Color(b.color);
    const rgb = (m: number, l = 0) => `rgb(${Math.min(255, col.r * 255 * m + l) | 0},${Math.min(255, col.g * 255 * m + l) | 0},${Math.min(255, col.b * 255 * m + l) | 0})`;
    ctx.fillStyle = rgb(1); ctx.fillRect(0, 0, w, h);
    rngState = b.id.length * 7919 + b.id.charCodeAt(0);
    const gas = ['jupiter', 'saturn', 'uranus', 'neptune'].includes(b.id);
    if (gas) {
      for (let y = 0; y < h; y += 2 + rng() * 6) {
        const m = 0.75 + rng() * 0.5;
        ctx.fillStyle = rgb(m);
        ctx.globalAlpha = 0.7;
        ctx.fillRect(0, y, w, 3 + rng() * 6);
      }
      if (b.id === 'jupiter') { // Great Red Spot
        ctx.globalAlpha = 0.9; ctx.fillStyle = '#b5462f';
        ctx.beginPath(); ctx.ellipse(w * 0.3, h * 0.62, 16, 8, 0, 0, 7); ctx.fill();
      }
    } else {
      for (let i = 0; i < 240; i++) {
        ctx.globalAlpha = 0.16;
        ctx.fillStyle = rng() > 0.5 ? rgb(1.25) : rgb(0.7);
        const r = 2 + rng() * 12;
        ctx.beginPath(); ctx.arc(rng() * w, rng() * h, r, 0, 7); ctx.fill();
      }
      if (b.id === 'earth') {
        ctx.globalAlpha = 0.95; ctx.fillStyle = '#3e8a4a';
        for (let i = 0; i < 26; i++) { const r = 6 + rng() * 16; ctx.beginPath(); ctx.arc(rng() * w, h * (0.18 + rng() * 0.64), r, 0, 7); ctx.fill(); }
        ctx.fillStyle = '#eef4f8'; ctx.globalAlpha = 1;
        ctx.fillRect(0, 0, w, 7); ctx.fillRect(0, h - 7, w, 7);
      }
      if (b.id === 'mars') { ctx.globalAlpha = 1; ctx.fillStyle = '#e8e2da'; ctx.fillRect(0, 0, w, 5); ctx.fillRect(0, h - 5, w, 5); }
    }
    ctx.globalAlpha = 1;
  });
}

function makeSprite(color: number, scale: number): THREE.Sprite {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTex(), color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  s.scale.setScalar(scale);
  return s;
}

const LABEL_PRI: Record<string, number> = {
  sun: 30, planet: 26, dwarf: 14, moon: 10, blackhole: 22, neutron: 18, quark: 18, whitedwarf: 14,
  star: 12, galaxy: 16, cluster: 8, quasar: 12, probe: 12, region: 8, exhibit: 14,
};

export function buildBodies(engine: Engine): Map<string, SceneObj> {
  const map = new Map<string, SceneObj>();

  for (const b of BODIES) {
    const group = new THREE.Group();
    const o: SceneObj = {
      body: b, group, worldPos: [0, 0, 0],
      labelMaxD: labelMax(b), labelPriority: LABEL_PRI[b.kind] ?? 8,
      angularPx: 0, distToCam: Infinity,
    };

    // --- position updater ---
    if (b.orbit) o.update = (t) => { o.worldPos = keplerPos(b.orbit!, t); };
    else if (b.parent) {
      o.update = (t) => {
        const p = map.get(b.parent!)!;
        const P = (b.moonPdays ?? 1) * 86400000;
        const ang = ((t / P) * 2 * Math.PI) % (2 * Math.PI) * Math.sign(b.moonPdays ?? 1);
        o.worldPos = [
          p.worldPos[0] + Math.cos(ang) * b.moonAKm!,
          p.worldPos[1],
          p.worldPos[2] + Math.sin(ang) * b.moonAKm!,
        ];
      };
    } else {
      const pos: V3 = b.distKm === 0 ? [0, 0, 0] : raDecToPos(b.ra!, b.dec!, b.distKm!);
      o.worldPos = pos;
    }
    o.update?.(engine.simTimeMs);

    // --- visuals ---
    const r = b.radiusKm;
    if (b.kind === 'sun' || b.kind === 'star') {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(r || 1, 32, 16),
        new THREE.MeshBasicMaterial({ color: b.color }),
      );
      group.add(mesh, makeSprite(b.color, (r || 1) * 6));
    } else if (b.kind === 'planet' || b.kind === 'dwarf' || b.kind === 'moon') {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(r, 48, 24),
        new THREE.MeshStandardMaterial({ map: planetTexture(b), roughness: 0.95 }),
      );
      if (b.ring) {
        const ringGeo = new THREE.RingGeometry(r * b.ring.inner, r * b.ring.outer, 96);
        { // radial UVs so a 1-D ring strip texture maps inner->outer
          const rp = ringGeo.attributes.position, ruv = ringGeo.attributes.uv;
          const ri = r * b.ring.inner, ro = r * b.ring.outer;
          for (let i = 0; i < rp.count; i++)
            ruv.setXY(i, (Math.hypot(rp.getX(i), rp.getY(i)) - ri) / (ro - ri), 0.5);
        }
        const ring = new THREE.Mesh(
          ringGeo,
          new THREE.MeshBasicMaterial({
            color: b.ring.color, side: THREE.DoubleSide, transparent: true, opacity: 0.55,
            map: canvasTex('ring', (ctx, w, h) => {
              for (let x = 0; x < w; x++) { ctx.globalAlpha = 0.3 + 0.7 * Math.abs(Math.sin(x * 0.35)); ctx.fillStyle = '#fff'; ctx.fillRect(x, 0, 1, h); }
            }, 128, 4),
          }),
        );
        ring.rotation.x = Math.PI / 2 - 0.15;
        group.add(ring);
        if (b.id === 'saturn') loadRealTex('2k_saturn_ring_alpha.png', ring.material as THREE.MeshBasicMaterial);
      }
      group.add(mesh);
      if (REAL_TEX[b.id]) loadRealTex(REAL_TEX[b.id], mesh.material as THREE.MeshStandardMaterial);
      o.onFrame = (oo, dtSim) => { if (b.rotationHrs) mesh.rotation.y += (dtSim / 3600 / b.rotationHrs) * 2 * Math.PI; };
    } else if (b.kind === 'blackhole') {
      const hole = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 16), new THREE.MeshBasicMaterial({ color: 0x000000 }));
      const ring = makeSprite(b.color, r * 6);
      const disk = new THREE.Mesh(
        new THREE.RingGeometry(r * 2.2, r * 6, 64),
        new THREE.MeshBasicMaterial({ color: b.color, side: THREE.DoubleSide, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }),
      );
      disk.rotation.x = Math.PI / 2 - 0.35;
      group.add(hole, ring, disk);
    } else if (b.kind === 'neutron' || b.kind === 'quark' || b.kind === 'whitedwarf') {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(Math.max(r, 1), 24, 12), new THREE.MeshBasicMaterial({ color: b.color }));
      const glow = makeSprite(b.color, Math.max(r, 1) * 30);
      group.add(mesh, glow);
      if (b.spinHz) {
        const beamMat = new THREE.MeshBasicMaterial({ color: b.color, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false });
        const bg = new THREE.Group();
        for (const s of [1, -1]) {
          const cone = new THREE.Mesh(new THREE.ConeGeometry(r * 8, r * 90, 12, 1, true), beamMat);
          cone.position.y = s * r * 45; cone.rotation.z = s > 0 ? Math.PI : 0;
          bg.add(cone);
        }
        bg.rotation.z = 0.4;
        group.add(bg);
        const spin = Math.min(b.spinHz, 3); // slowed for visibility
        o.onFrame = () => { bg.rotation.y = (performance.now() / 1000) * spin * 2 * Math.PI; glow.material.opacity = 0.6 + 0.4 * Math.sin(performance.now() / 90); };
      }
    } else if (b.kind === 'galaxy') {
      group.add(miniGalaxy(b, r));
    } else if (b.kind === 'exhibit' && b.id === 'whitehole') {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 16), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      group.add(mesh, makeSprite(0xdff4ff, r * 10));
    } else if (b.kind === 'exhibit') { // planet 9
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 16), new THREE.MeshStandardMaterial({ color: b.color, transparent: true, opacity: 0.5, roughness: 1 }));
      group.add(mesh);
    } else {
      // probe / region / cluster / quasar: marker glow only
      group.add(makeSprite(b.color, Math.max(r, 1)));
    }

    // marker dot: fixed screen size when the body itself is subpixel
    if (r > 0 && (b.kind === 'planet' || b.kind === 'dwarf' || b.kind === 'moon' || b.kind === 'star' || b.kind === 'sun')) {
      const dot = makeSprite(b.color, 1);
      o.onFrame = ((prev) => (oo: SceneObj, dtSim: number, eng: Engine) => {
        prev?.(oo, dtSim, eng);
        dot.visible = oo.angularPx < 4 && oo.distToCam < oo.labelMaxD;
        // constant ~8px screen size: group scale × this = 8px worth of arc at any distance
        const pxPerRad = innerHeight / (2 * Math.tan((eng.camera.fov * Math.PI) / 360));
        const infl = oo.body.kind === 'star' || oo.body.kind === 'sun' ? 1 : eng.inflate;
        dot.scale.setScalar((oo.distToCam * (oo.body.kind === 'moon' ? 5 : 8)) / (pxPerRad * infl));
      })(o.onFrame);
      group.add(dot);
    }

    map.set(b.id, o);
    engine.add(o);
  }

  buildOrbits(engine);
  buildBelts(engine);
  buildMilkyWay(engine);
  buildCosmicWeb(engine);

  // light
  const sunLight = new THREE.PointLight(0xfff2dd, 2.5, 0, 0);
  const sunObj = map.get('sun')!;
  sunObj.group.add(sunLight);
  engine.scene.add(new THREE.AmbientLight(0x445566, 0.85));

  return map;
}

function labelMax(b: Body): number {
  switch (b.kind) {
    case 'moon': return (b.moonAKm ?? 4e5) * 120;
    case 'planet': case 'dwarf': return 250 * AU;
    case 'sun': return 60 * LY;
    case 'probe': return 600 * AU;
    case 'region': return b.id === 'oort' ? 60 * LY : b.id === 'cmb' ? Infinity : 250 * AU;
    case 'exhibit': return b.id === 'planet9' ? 5000 * AU : Infinity;
    default: return b.group === 'deep' ? Infinity : 400000 * LY;
  }
}

function buildOrbits(engine: Engine) {
  for (const b of BODIES) {
    if (!b.orbit) continue;
    const pts: number[] = [];
    const now = engine.simTimeMs;
    const periodYr = Math.pow(b.orbit.a, 1.5);
    for (let i = 0; i <= 192; i++) {
      const p = keplerPos({ ...b.orbit, dL: 0, L: b.orbit.L + (i / 192) * 360 }, now);
      pts.push(p[0], p[1], p[2]);
    }
    void periodYr;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const col = new Float32Array(pts.length).fill(1);
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    engine.addCloud(g, [0, 0, 0], { isLine: true, opacity: b.group === 'hypo' ? 0.1 : 0.22, color: b.group === 'hypo' ? 0x7a9ac9 : 0x4a6a9a });
  }
}

function beltCloud(engine: Engine, rMin: number, rMax: number, thick: number, n: number, color: number, size: number) {
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  const c = new THREE.Color(color);
  for (let i = 0; i < n; i++) {
    const a = rng() * Math.PI * 2;
    const r = rMin + (rMax - rMin) * Math.sqrt(rng());
    pos[i * 3] = Math.cos(a) * r;
    pos[i * 3 + 1] = (rng() - 0.5) * thick;
    pos[i * 3 + 2] = Math.sin(a) * r;
    const m = 0.5 + rng() * 0.5;
    col[i * 3] = c.r * m; col[i * 3 + 1] = c.g * m; col[i * 3 + 2] = c.b * m;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  engine.addCloud(g, [0, 0, 0], { size, opacity: 0.8, color: 0xffffff });
}

function buildBelts(engine: Engine) {
  rngState = 777;
  beltCloud(engine, 2.1 * AU, 3.3 * AU, 0.3 * AU, 3000, 0x9a8f80, 1.2);          // asteroid belt
  beltCloud(engine, 30 * AU, 50 * AU, 4 * AU, 4000, 0x7a90b0, 1.2);              // Kuiper belt
  // Oort cloud: spherical shell
  const n = 3500;
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const u = rng() * 2 - 1, ph = rng() * Math.PI * 2;
    const rr = (2000 + 78000 * Math.pow(rng(), 1.6)) * AU;
    const s = Math.sqrt(1 - u * u);
    pos[i * 3] = s * Math.cos(ph) * rr; pos[i * 3 + 1] = u * rr; pos[i * 3 + 2] = s * Math.sin(ph) * rr;
    col[i * 3] = 0.35; col[i * 3 + 1] = 0.42; col[i * 3 + 2] = 0.55;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  engine.addCloud(g, [0, 0, 0], { size: 1, opacity: 0.5 });
}

/** galactic-frame basis in scene coords */
function galacticBasis() {
  const C = raDecToPos(GALACTIC_CENTER.ra, GALACTIC_CENTER.dec, 1);
  const N = raDecToPos(GALACTIC_NORTH.ra, GALACTIC_NORTH.dec, 1);
  const zg = new THREE.Vector3(...N).normalize();
  const xg = new THREE.Vector3(...C).normalize();
  xg.addScaledVector(zg, -xg.dot(zg)).normalize();
  const yg = new THREE.Vector3().crossVectors(zg, xg);
  return { xg, yg, zg, centerDir: new THREE.Vector3(...C).normalize() };
}

function buildMilkyWay(engine: Engine) {
  rngState = 424242;
  const { xg, yg, zg, centerDir } = galacticBasis();
  const center: V3 = [centerDir.x * SUN_GC_DIST, centerDir.y * SUN_GC_DIST, centerDir.z * SUN_GC_DIST];
  const n = 24000;
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  const arms = 4;
  const tmp = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    let r: number, th: number, h: number, cr: number, cg: number, cb: number;
    if (i < n * 0.16) { // bulge
      r = Math.pow(rng(), 2) * MILKY_WAY_R * 0.14;
      th = rng() * Math.PI * 2;
      h = (rng() - 0.5) * r * 0.9;
      cr = 1; cg = 0.85; cb = 0.65;
    } else { // disk + arms
      r = Math.sqrt(rng()) * MILKY_WAY_R;
      const arm = (i % arms) * ((2 * Math.PI) / arms);
      const wind = (r / MILKY_WAY_R) * 4.2;
      th = arm + wind + (rng() - 0.5) * (0.25 + 0.7 * rng());
      h = (rng() - 0.5) * MILKY_WAY_R * 0.012 * (1 + 2 * Math.pow(1 - r / MILKY_WAY_R, 2));
      const young = rng() > 0.5;
      cr = young ? 0.75 : 1; cg = young ? 0.82 : 0.85; cb = young ? 1 : 0.7;
    }
    tmp.set(0, 0, 0).addScaledVector(xg, Math.cos(th) * r).addScaledVector(yg, Math.sin(th) * r).addScaledVector(zg, h);
    pos[i * 3] = tmp.x; pos[i * 3 + 1] = tmp.y; pos[i * 3 + 2] = tmp.z;
    const m = 0.35 + rng() * 0.65;
    col[i * 3] = cr * m; col[i * 3 + 1] = cg * m; col[i * 3 + 2] = cb * m;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  engine.addCloud(g, center, { size: 1.6, opacity: 0.85 });
}

function miniGalaxy(b: Body, radius: number): THREE.Points {
  rngState = b.id.charCodeAt(0) * 999;
  const n = 1200;
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  const c = new THREE.Color(b.color);
  for (let i = 0; i < n; i++) {
    const r = Math.sqrt(rng()) * radius;
    const th = (i % 2) * Math.PI + (r / radius) * 5 + (rng() - 0.5) * 0.8;
    pos[i * 3] = Math.cos(th) * r;
    pos[i * 3 + 1] = (rng() - 0.5) * radius * 0.08;
    pos[i * 3 + 2] = Math.sin(th) * r;
    const m = 0.4 + rng() * 0.6;
    col[i * 3] = c.r * m; col[i * 3 + 1] = c.g * m; col[i * 3 + 2] = c.b * m;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({ size: radius * 0.02, vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
  const p = new THREE.Points(g, mat);
  p.rotation.set(rng() * 2, rng() * 2, rng() * 2);
  return p;
}

function buildCosmicWeb(engine: Engine) {
  rngState = 31337;
  const nClusters = 260, per = 55;
  const n = nClusters * per;
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  let k = 0;
  for (let cIdx = 0; cIdx < nClusters; cIdx++) {
    const u = rng() * 2 - 1, ph = rng() * Math.PI * 2;
    const dist = Math.pow(10, 7.5 + rng() * 3.1) * LY; // ~30 Mly .. 40 Gly
    const s = Math.sqrt(1 - u * u);
    const cx = s * Math.cos(ph) * dist, cy = u * dist, cz = s * Math.sin(ph) * dist;
    const spread = dist * 0.09;
    const dirx = rng() - 0.5, diry = rng() - 0.5, dirz = rng() - 0.5; // filament direction
    for (let j = 0; j < per; j++) {
      const t = (rng() - 0.5) * 2;
      pos[k * 3] = cx + dirx * spread * t * 4 + (rng() - 0.5) * spread;
      pos[k * 3 + 1] = cy + diry * spread * t * 4 + (rng() - 0.5) * spread;
      pos[k * 3 + 2] = cz + dirz * spread * t * 4 + (rng() - 0.5) * spread;
      const warm = rng() * 0.3;
      col[k * 3] = 0.55 + warm; col[k * 3 + 1] = 0.5 + warm * 0.5; col[k * 3 + 2] = 0.75;
      k++;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  engine.addCloud(g, [0, 0, 0], { size: 1.4, opacity: 0.55 });

  // CMB shell
  const cmb = new THREE.Mesh(
    new THREE.SphereGeometry(1, 48, 24),
    new THREE.MeshBasicMaterial({
      side: THREE.BackSide, transparent: true, opacity: 0.35,
      map: canvasTex('cmb', (ctx, w, h) => {
        ctx.fillStyle = '#1a0f08'; ctx.fillRect(0, 0, w, h);
        rngState = 99;
        for (let i = 0; i < 2600; i++) {
          const t = rng();
          ctx.fillStyle = t > 0.5 ? `rgba(255,${140 + (t * 80) | 0},60,0.5)` : `rgba(70,90,${180 + (t * 75) | 0},0.5)`;
          const r = 2 + rng() * 8;
          ctx.beginPath(); ctx.arc(rng() * w, rng() * h, r, 0, 7); ctx.fill();
        }
      }, 512, 256),
    }),
  );
  const cmbObj: SceneObj = {
    body: byId.get('cmb')!, worldPos: [0, 0, 0], group: new THREE.Group(),
    labelMaxD: 0, labelPriority: 0, angularPx: 0, distToCam: 0,
    onFrame: () => {
      // keep shell centred on camera at compressed radius of the CMB distance
      const R = OBS_UNIVERSE_R * 0.976;
      cmb.scale.setScalar(1);
      cmb.position.set(0, 0, 0);
      void R;
    },
  };
  void cmbObj;
  cmb.scale.setScalar(3.05e11); // compressD(45.4 Gly) ≈ 3.06e11 km — just inside the far plane
  cmb.frustumCulled = false;
  engine.scene.add(cmb);
  (engine as any).cmbMat = cmb.material; // main loop fades it in only at cosmic zoom
}
