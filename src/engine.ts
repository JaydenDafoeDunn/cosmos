// ============================================================================
// Engine: true-scale coordinates in double-precision km, rendered relative to
// the camera. Directions & angular sizes are exact; radial distances beyond
// LINEAR_ZONE are log-compressed (order-preserving) so one float32 scene can
// span 10 cm .. 46 billion light-years. The camera mesh stays at the origin.
// ============================================================================
import * as THREE from 'three';
import { AU, LY, Body, byId, Orbit } from './data';

export const LINEAR_ZONE = 1e10; // km (~67 AU): inside this, rendering is 1:1

const DEG = Math.PI / 180;
const OBLIQ = 23.43928 * DEG;
const J2000 = Date.UTC(2000, 0, 1, 12);

export type V3 = [number, number, number];

export const vlen = (v: V3) => Math.hypot(v[0], v[1], v[2]);
export const vsub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];

/** RA (hours) / Dec (deg) / dist (km) -> scene coords (ecliptic, Y-up), km */
export function raDecToPos(raH: number, decD: number, dist: number): V3 {
  const ra = raH * 15 * DEG, dec = decD * DEG;
  const x = Math.cos(dec) * Math.cos(ra), y = Math.cos(dec) * Math.sin(ra), z = Math.sin(dec);
  const ye = y * Math.cos(OBLIQ) + z * Math.sin(OBLIQ);
  const ze = -y * Math.sin(OBLIQ) + z * Math.cos(OBLIQ);
  return [x * dist, ze * dist, -ye * dist];
}

/** Keplerian orbit -> heliocentric scene coords (km) at time (ms epoch) */
export function keplerPos(o: Orbit, timeMs: number): V3 {
  const T = (timeMs - J2000) / (86400000 * 36525); // Julian centuries
  const a = (o.a + (o.da ?? 0) * T) * AU;
  const e = o.e + (o.de ?? 0) * T;
  const i = (o.i + (o.di ?? 0) * T) * DEG;
  const L = (o.L + (o.dL ?? 0) * T) * DEG;
  const peri = (o.peri + (o.dperi ?? 0) * T) * DEG;
  const node = (o.node + (o.dnode ?? 0) * T) * DEG;
  const w = peri - node;
  let M = (L - peri) % (2 * Math.PI);
  let E = M;
  for (let k = 0; k < 8; k++) E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  const xp = a * (Math.cos(E) - e), yp = a * Math.sqrt(1 - e * e) * Math.sin(E);
  const cw = Math.cos(w), sw = Math.sin(w), cn = Math.cos(node), sn = Math.sin(node), ci = Math.cos(i), si = Math.sin(i);
  const xh = (cw * cn - sw * sn * ci) * xp + (-sw * cn - cw * sn * ci) * yp;
  const yh = (cw * sn + sw * cn * ci) * xp + (-sw * sn + cw * cn * ci) * yp;
  const zh = sw * si * xp + cw * si * yp;
  return [xh, zh, -yh]; // ecliptic -> scene (Y-up)
}

/** log compression: real distance d -> render distance */
export function compressD(d: number): number {
  return d <= LINEAR_ZONE ? d : LINEAR_ZONE * (1 + Math.log(d / LINEAR_ZONE));
}

// GLSL version of the same, for point clouds / lines
export const COMPRESS_GLSL = `
  const float LZ = ${LINEAR_ZONE.toExponential()};
  // NB: distances reach 4e23 km; length() would square that past float32 max
  // (inf -> NaN -> giant white garbage points on some GPUs). Rescale first.
  vec3 compress(vec3 rel) {
    vec3 rs = rel * 1e-12;
    float d = length(rs) * 1e12;
    if (!(d > 0.0) || d > 1e30) return vec3(0.0, 0.0, -1e30); // NaN/degenerate guard: park behind far plane
    if (d <= LZ) return rel;
    return rel * (LZ * (1.0 + log(d / LZ)) / d);
  }
`;

export interface SceneObj {
  body: Body;
  worldPos: V3;
  group: THREE.Group;          // holds mesh/sprites; engine positions it
  labelMaxD: number;           // hide label beyond this camera distance
  labelPriority: number;
  angularPx: number;           // computed per frame
  distToCam: number;           // computed per frame
  onFrame?: (o: SceneObj, dtSim: number, engine: Engine) => void;
  update?: (timeMs: number) => void; // recompute worldPos
}

export class Engine {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera;
  camPos: V3 = [AU * 1.0002, AU * 0.00012, 0]; // start ~30,000 km from Earth-ish; main.ts repositions
  yaw = 0; pitch = 0;
  objs: SceneObj[] = [];
  clouds: { group: THREE.Group; origin: V3; mat: THREE.ShaderMaterial }[] = [];
  keys = new Set<string>();
  speedMult = 1;
  simTimeMs = Date.now();
  simSpeed = 1; // sim-seconds per real second
  private lastSelPos: V3 | null = null; // ride-along frame lock
  paused = false;
  travel: { from: V3; toBody: SceneObj; standoff: number; t: number; dur: number; startQ: THREE.Quaternion } | null = null;
  onSelect: (o: SceneObj | null) => void = () => {};
  selected: SceneObj | null = null;
  inflate = 1; // planet size exaggeration (UI toggle; clearly labelled)
  lastFrame = performance.now();

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, logarithmicDepthBuffer: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); // integrated-GPU friendly
    this.camera = new THREE.PerspectiveCamera(60, 1, 1e-4, 1e13);
    this.scene.add(this.camera);
    this.resize();
    addEventListener('resize', () => this.resize());
    this.bindControls(canvas);
  }

  resize() {
    const w = innerWidth, h = innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  add(o: SceneObj) {
    this.objs.push(o);
    this.scene.add(o.group);
  }

  /** Point cloud / line whose vertices are world-km offsets from `origin`; compressed in the vertex shader. */
  addCloud(geom: THREE.BufferGeometry, origin: V3, opts: { size?: number; opacity?: number; isLine?: boolean; color?: number }) {
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: {
        uCamRel: { value: new THREE.Vector3() },
        uSize: { value: opts.size ?? 1.5 },
        uOpacity: { value: opts.opacity ?? 1 },
        uColor: { value: new THREE.Color(opts.color ?? 0xffffff) },
      },
      vertexShader: `
        uniform vec3 uCamRel; uniform float uSize;
        attribute vec3 color;
        varying vec3 vColor;
        ${COMPRESS_GLSL}
        void main() {
          vColor = color;
          vec3 rel = position - uCamRel;
          vec3 p = compress(rel);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(uSize * 2.2e10 / length(p), 1.0, 5.0);
        }`,
      fragmentShader: `
        uniform float uOpacity; uniform vec3 uColor; varying vec3 vColor;
        void main() {
          ${opts.isLine ? '' : `vec2 c = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.1, length(c));`}
          gl_FragColor = vec4(vColor * uColor, ${opts.isLine ? 'uOpacity' : 'a * uOpacity'});
        }`,
    });
    const obj = opts.isLine ? new THREE.Line(geom, mat) : new THREE.Points(geom, mat);
    obj.frustumCulled = false;
    const group = new THREE.Group();
    group.add(obj);
    this.scene.add(group);
    this.clouds.push({ group, origin, mat });
    return mat;
  }

  bindControls(el: HTMLElement) {
    let dragging = false, px = 0, py = 0;
    let pinchD = 0;
    el.addEventListener('pointerdown', (e) => { dragging = true; px = e.clientX; py = e.clientY; el.setPointerCapture(e.pointerId); });
    el.addEventListener('pointerup', (e) => {
      dragging = false;
      if (Math.abs(e.clientX - px) < 5 && Math.abs(e.clientY - py) < 5) this.pick(e.clientX, e.clientY);
    });
    el.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      this.yaw -= (e.movementX ?? 0) * 0.0022;
      this.pitch = Math.max(-1.55, Math.min(1.55, this.pitch - (e.movementY ?? 0) * 0.0022));
      this.travel = null;
    });
    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.speedMult *= Math.pow(1.15, -Math.sign(e.deltaY));
      this.speedMult = Math.max(0.001, Math.min(5e4, this.speedMult));
    }, { passive: false });
    el.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        if (pinchD > 0) this.moveForward((d - pinchD) * 0.02);
        pinchD = d;
      }
    }, { passive: true });
    el.addEventListener('touchend', () => { pinchD = 0; });
    addEventListener('keydown', (e) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      this.keys.add(e.code);
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
  }

  get quat(): THREE.Quaternion {
    return new THREE.Quaternion().setFromEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
  }

  moveForward(frac: number) {
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.quat);
    const step = this.adaptiveSpeed() * frac;
    this.camPos[0] += dir.x * step; this.camPos[1] += dir.y * step; this.camPos[2] += dir.z * step;
  }

  nearestSurfaceDist(): number {
    let best = Infinity;
    for (const o of this.objs) {
      if (!o.body.radiusKm) continue;
      const d = vlen(vsub(o.worldPos, this.camPos)) - o.body.radiusKm;
      if (d < best) best = d;
    }
    return Math.max(best, 1);
  }

  adaptiveSpeed(): number { // km per second of flight
    return Math.max(2, this.nearestSurfaceDist() * 0.9) * this.speedMult;
  }

  flyTo(o: SceneObj, opts?: { dur?: number; standoffR?: number }) {
    const r = Math.max(o.body.radiusKm, 1);
    const standoff = o.body.radiusKm > 0 ? r * (opts?.standoffR ?? 4.5) : 2e7;
    this.travel = { from: [...this.camPos] as V3, toBody: o, standoff, t: 0, dur: opts?.dur ?? 5, startQ: this.quat.clone() };
    this.select(o);
  }

  select(o: SceneObj | null) { this.selected = o; this.lastSelPos = null; this.onSelect(o); }

  pick(x: number, y: number) {
    const w = innerWidth, h = innerHeight;
    let best: SceneObj | null = null, bestD = 45;
    const v = new THREE.Vector3();
    const invQ = this.quat.clone().invert();
    for (const o of this.objs) {
      const rel = vsub(o.worldPos, this.camPos);
      const d = vlen(rel);
      if (d === 0) continue;
      const f = compressD(d) / d;
      v.set(rel[0] * f, rel[1] * f, rel[2] * f).applyQuaternion(invQ);
      if (v.z > 0) continue;
      const p = v.clone().applyMatrix4(this.camera.projectionMatrix); // view rotation already applied above
      const sx = (p.x * 0.5 + 0.5) * w, sy = (-p.y * 0.5 + 0.5) * h;
      const px = Math.hypot(sx - x, sy - y) - Math.min(o.angularPx / 2, 80);
      if (px < bestD) { bestD = px; best = o; }
    }
    if (best) this.select(best);
  }

  frame(): number {
    const now = performance.now();
    const dtWall = Math.min((now - this.lastFrame) / 1000, 1); // for animations (slow devices still finish warps)
    const dt = Math.min(dtWall, 0.1); // for physics/controls
    this.lastFrame = now;
    if (!this.paused) this.simTimeMs += this.simSpeed * dt * 1000;

    // positions
    for (const o of this.objs) o.update?.(this.simTimeMs);

    // ride along with the selected body so time-lapse doesn't leave you behind
    if (this.selected?.update) {
      const wp = this.selected.worldPos;
      if (this.lastSelPos) {
        this.camPos[0] += wp[0] - this.lastSelPos[0];
        this.camPos[1] += wp[1] - this.lastSelPos[1];
        this.camPos[2] += wp[2] - this.lastSelPos[2];
      }
      this.lastSelPos = [wp[0], wp[1], wp[2]];
    } else this.lastSelPos = null;

    // travel animation (log-eased approach)
    if (this.travel) {
      const tr = this.travel;
      tr.t += dtWall / tr.dur;
      const target = tr.toBody.worldPos;
      const relStart = vsub(tr.from, target);
      let d0 = vlen(relStart);
      if (d0 < 1) d0 = 1;
      const dir0 = d0 < tr.standoff * 1.01 ? relStart : relStart; // approach along initial offset dir
      const s = tr.t >= 1 ? 1 : 1 - Math.pow(1 - Math.min(tr.t, 1), 3);
      const dNow = Math.exp(Math.log(d0) * (1 - s) + Math.log(tr.standoff) * s);
      const n = 1 / d0;
      this.camPos = [target[0] + dir0[0] * n * dNow, target[1] + dir0[1] * n * dNow, target[2] + dir0[2] * n * dNow];
      // rotate to look at target
      const relCam = vsub(target, this.camPos);
      const dLook = vlen(relCam);
      const m = new THREE.Matrix4().lookAt(new THREE.Vector3(0, 0, 0), new THREE.Vector3(relCam[0] / dLook, relCam[1] / dLook, relCam[2] / dLook), new THREE.Vector3(0, 1, 0));
      const q = new THREE.Quaternion().setFromRotationMatrix(m);
      const qNow = tr.startQ.clone().slerp(q, Math.min(1, s * 2));
      const e = new THREE.Euler().setFromQuaternion(qNow, 'YXZ');
      this.yaw = e.y; this.pitch = e.x;
      if (tr.t >= 1) this.travel = null;
    }

    // keyboard flight
    const q = this.quat;
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(q);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(q);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(q);
    const boost = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') ? 8 : 1;
    const sp = this.adaptiveSpeed() * dt * boost;
    const mv = new THREE.Vector3();
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) mv.add(fwd);
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) mv.sub(fwd);
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) mv.sub(right);
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) mv.add(right);
    if (this.keys.has('KeyQ')) mv.sub(up);
    if (this.keys.has('KeyE')) mv.add(up);
    if (mv.lengthSq() > 0) {
      mv.normalize().multiplyScalar(sp);
      this.camPos[0] += mv.x; this.camPos[1] += mv.y; this.camPos[2] += mv.z;
      this.travel = null;
    }

    // apply camera orientation (position stays at origin)
    this.camera.quaternion.copy(q);
    this.camera.position.set(0, 0, 0);

    // position scene objects relative to camera, with compression
    const h = innerHeight;
    const pxPerRad = h / (2 * Math.tan((this.camera.fov * DEG) / 2));
    for (const o of this.objs) {
      const rel = vsub(o.worldPos, this.camPos);
      const d = vlen(rel);
      o.distToCam = d;
      if (d === 0) { o.group.visible = false; continue; }
      const dc = compressD(d);
      const f = dc / d;
      o.group.position.set(rel[0] * f, rel[1] * f, rel[2] * f);
      const infl = o.body.kind === 'planet' || o.body.kind === 'dwarf' || o.body.kind === 'moon' ? this.inflate : 1;
      o.group.scale.setScalar(f * infl);
      o.group.visible = true;
      o.angularPx = o.body.radiusKm > 0 ? (2 * o.body.radiusKm * infl / d) * pxPerRad : 0;
      o.onFrame?.(o, this.paused ? 0 : this.simSpeed * dt, this);
    }
    for (const c of this.clouds) {
      c.mat.uniforms.uCamRel.value.set(this.camPos[0] - c.origin[0], this.camPos[1] - c.origin[1], this.camPos[2] - c.origin[2]);
    }

    this.renderer.render(this.scene, this.camera);
    return dt;
  }

  distFromSun(): number {
    const sun = byId.get('sun')!;
    void sun;
    return vlen(this.camPos);
  }
}

// ---------------------------------------------------------------------------
// Labels: pooled DOM divs projected each frame with greedy declutter.
// ---------------------------------------------------------------------------
export class Labels {
  pool: HTMLDivElement[] = [];
  container: HTMLElement;
  constructor(container: HTMLElement, private engine: Engine, size = 44) {
    this.container = container;
    for (let i = 0; i < size; i++) {
      const el = document.createElement('div');
      el.className = 'lbl';
      el.style.display = 'none';
      el.addEventListener('pointerdown', (e) => e.stopPropagation());
      container.appendChild(el);
      this.pool.push(el);
    }
  }

  update(kidMode: boolean) {
    const e = this.engine;
    const w = innerWidth, h = innerHeight;
    const invQ = e.quat.clone().invert();
    const v = new THREE.Vector3();
    type Cand = { o: SceneObj; x: number; y: number; pri: number };
    const cands: Cand[] = [];
    for (const o of e.objs) {
      if (o.distToCam > o.labelMaxD) continue;
      if (o.body.radiusKm > 0 && o.distToCam < o.body.radiusKm * 1.2) continue;
      const rel = vsub(o.worldPos, e.camPos);
      const f = compressD(o.distToCam) / o.distToCam;
      v.set(rel[0] * f, rel[1] * f, rel[2] * f).applyQuaternion(invQ);
      if (v.z >= 0) continue;
      const p = v.applyMatrix4(e.camera.projectionMatrix); // view rotation already applied above
      if (p.x < -1.05 || p.x > 1.05 || p.y < -1.05 || p.y > 1.05) continue;
      let pri = o.labelPriority + Math.min(o.angularPx, 200) * 0.02;
      if (o === e.selected) pri += 1000;
      cands.push({ o, x: (p.x * 0.5 + 0.5) * w, y: (-p.y * 0.5 + 0.5) * h - Math.min(o.angularPx / 2, h / 4) - 12, pri });
    }
    cands.sort((a, b) => b.pri - a.pri);
    const placed: Cand[] = [];
    const minGap = kidMode ? 120 : 64;
    for (const c of cands) {
      if (placed.length >= this.pool.length) break;
      if (placed.some((p) => Math.abs(p.x - c.x) < minGap && Math.abs(p.y - c.y) < 26)) continue;
      placed.push(c);
    }
    for (let i = 0; i < this.pool.length; i++) {
      const el = this.pool[i];
      const c = placed[i];
      if (!c) { el.style.display = 'none'; continue; }
      el.style.display = 'block';
      el.style.transform = `translate(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px) translate(-50%, -100%)`;
      const flag = c.o.body.flags?.includes('HYPOTHETICAL') || c.o.body.flags?.includes('THEORETICAL');
      const name = kidMode && c.o.body.emoji ? `${c.o.body.emoji} ${c.o.body.name}` : c.o.body.name;
      el.textContent = flag ? `${name} ?` : name;
      el.className = 'lbl' + (c.o === e.selected ? ' sel' : '') + (flag ? ' hypo' : '') + (kidMode ? ' kid' : '');
      (el as any).onclick = () => e.flyTo(c.o);
    }
  }
}

// ---------------------------------------------------------------------------
export function fmtDist(km: number): string {
  const au = km / AU, ly = km / LY;
  if (ly >= 1e9) return `${(ly / 1e9).toFixed(2)} billion ly`;
  if (ly >= 1e6) return `${(ly / 1e6).toFixed(2)} million ly`;
  if (ly >= 1000) return `${Math.round(ly).toLocaleString()} ly`;
  if (ly >= 0.1) return `${ly.toPrecision(3)} light-years`;
  if (au >= 0.01) return `${au.toPrecision(3)} AU`;
  if (km >= 1e6) return `${(km / 1e6).toPrecision(3)} million km`;
  return `${Math.round(km).toLocaleString()} km`;
}

export function fmtRadius(km: number): string {
  if (km >= 0.5 * 695700) return `${(km / 695700).toPrecision(3)} × Sun (${(km / 1e6).toPrecision(3)}M km)`;
  if (km >= 1000) return `${Math.round(km).toLocaleString()} km (${(km / 6371).toPrecision(2)} × Earth)`;
  return `${km.toPrecision(3)} km`;
}
