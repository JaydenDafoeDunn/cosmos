// Gravitational lensing: ray-marched null geodesics around a Schwarzschild
// black hole (u'' = -u + 1.5 rs u² integrated per-pixel), with an accretion
// disk (Doppler beaming + gravitational redshift) and procedural starfield.
// Activates automatically when the camera is near any black hole.
import * as THREE from 'three';
import { SceneObj, V3, vlen, vsub } from './engine';

const FRAG = `
precision highp float;
uniform vec3 uCam;        // camera position in units of rs, relative to BH
uniform mat3 uBasis;      // camera orientation
uniform vec2 uRes;
uniform float uTime;
uniform float uSteps;     // quality
uniform float uDiskTint;  // 0..1 hue shift per BH

float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }

vec3 stars(vec3 d) {
  vec3 col = vec3(0.0);
  vec3 cell = floor(d * 380.0);
  float h = hash(cell);
  if (h > 0.9965) {
    float b = (h - 0.9965) / 0.0035;
    col += vec3(0.9 + 0.1 * hash(cell + 1.0), 0.9, 0.85 + 0.15 * hash(cell + 2.0)) * b * 1.6;
  }
  // galactic band
  float band = exp(-abs(d.y + 0.25 * d.x) * 4.0);
  col += vec3(0.10, 0.09, 0.13) * band;
  return col;
}

vec3 diskColor(vec3 p, vec3 rd) {
  float r = length(p.xz);
  float t = clamp((r - 2.6) / 7.4, 0.0, 1.0);
  // Keplerian tangential velocity (geometric-ish units)
  vec3 tangent = normalize(vec3(-p.z, 0.0, p.x));
  float speed = 0.35 / sqrt(max(r * 0.5, 1.0));
  float dop = 1.0 / (1.0 - speed * dot(tangent, rd));
  float beam = pow(dop, 3.0);
  float redshift = sqrt(max(1.0 - 1.0 / max(r, 1.01), 0.05));
  // temperature falls outward: white-hot inner edge -> deep orange rim
  vec3 c = mix(vec3(1.0, 0.97, 0.92), mix(vec3(1.0, 0.55, 0.15), vec3(1.0, 0.45 + uDiskTint * 0.3, 0.3), uDiskTint), t);
  float swirl = 0.75 + 0.25 * sin(atan(p.z, p.x) * 9.0 + uTime * 0.7 - r * 2.2);
  float fade = (1.0 - t) * smoothstep(2.55, 2.9, r);
  return c * beam * redshift * swirl * fade * 1.4;
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / uRes.y;
  vec3 rd = normalize(uBasis * vec3(uv, -1.6));
  vec3 p = uCam;
  vec3 v = rd;
  vec3 col = vec3(0.0);
  float h2 = dot(cross(p, v), cross(p, v));
  bool captured = false;
  float prevY = p.y;
  for (float i = 0.0; i < 300.0; i++) {
    if (i >= uSteps) break;
    float r = length(p);
    if (r < 1.02) { captured = true; break; }
    if (r > 90.0 && dot(p, v) > 0.0) break;
    float dt = clamp(r * 0.09, 0.045, 1.2);
    // geodesic bending
    v += -1.5 * h2 * p / pow(r, 5.0) * dt;
    p += v * dt;
    // disk crossing (equatorial plane, 2.6..10 rs)
    if (sign(p.y) != sign(prevY)) {
      float rx = length(p.xz);
      if (rx > 2.6 && rx < 10.0) col += diskColor(p, normalize(v));
    }
    prevY = p.y;
  }
  if (!captured) col += stars(normalize(v));
  // subtle vignette
  col *= 1.0 - 0.25 * dot(uv * 0.5, uv * 0.5);
  gl_FragColor = vec4(pow(col, vec3(0.85)), 1.0);
}`;

export class BlackHoleView {
  active = false;
  mode: 'auto' | 'high' | 'low' | 'off' = 'auto';
  private autoSteps = 140;
  private ema = 16; // ms/frame moving average
  private scene = new THREE.Scene();
  private cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private mat: THREE.ShaderMaterial;
  target: SceneObj | null = null;

  constructor(private renderer: THREE.WebGLRenderer) {
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        uCam: { value: new THREE.Vector3(0, 1, 20) },
        uBasis: { value: new THREE.Matrix3() },
        uRes: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uSteps: { value: 220 },
        uDiskTint: { value: 0 },
      },
      fragmentShader: FRAG,
      vertexShader: 'void main(){gl_Position=vec4(position.xy,0.,1.);}',
      depthTest: false, depthWrite: false,
    });
    this.scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat));
  }

  /** Call each frame. Returns true if it rendered (i.e. near a BH). */
  /** feed real frame time (ms) so AUTO mode can match the GPU */
  tune(dtMs: number) {
    if (!this.active || this.mode !== 'auto') return;
    this.ema = this.ema * 0.92 + dtMs * 0.08;
    if (this.ema > 40 && this.autoSteps > 36) this.autoSteps = Math.max(36, this.autoSteps * 0.85); // <25 fps: cheaper
    else if (this.ema < 20 && this.autoSteps < 220) this.autoSteps = Math.min(220, this.autoSteps * 1.06); // >50 fps: prettier
  }

  get label(): string {
    return this.mode === 'auto' ? `AUTO·${Math.round(this.autoSteps)}` : this.mode.toUpperCase();
  }

  update(camPos: V3, quat: THREE.Quaternion, holes: SceneObj[]): boolean {
    if (this.mode === 'off') { this.active = false; this.target = null; return false; }
    let best: SceneObj | null = null, bestRatio = Infinity;
    for (const h of holes) {
      const d = vlen(vsub(h.worldPos, camPos));
      const ratio = d / h.body.radiusKm; // distance in Schwarzschild radii
      if (ratio < bestRatio) { bestRatio = ratio; best = h; }
    }
    if (!best || bestRatio > 60) { this.active = false; this.target = null; return false; }
    this.active = true;
    this.target = best;
    const rs = best.body.radiusKm;
    const rel = vsub(camPos, best.worldPos);
    const u = this.mat.uniforms;
    (u.uCam.value as THREE.Vector3).set(rel[0] / rs, rel[1] / rs, rel[2] / rs);
    // keep the camera outside the photon sphere for sanity
    const L = (u.uCam.value as THREE.Vector3).length();
    if (L < 2.4) (u.uCam.value as THREE.Vector3).multiplyScalar(2.4 / L);
    (u.uBasis.value as THREE.Matrix3).setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(quat));
    (u.uRes.value as THREE.Vector2).set(innerWidth * this.renderer.getPixelRatio(), innerHeight * this.renderer.getPixelRatio());
    u.uTime.value = performance.now() / 1000;
    u.uSteps.value = this.mode === 'high' ? 220 : this.mode === 'low' ? 56 : this.autoSteps;
    u.uDiskTint.value = best.body.id === 'sgra' ? 0.15 : best.body.id === 'ton618' ? 0.5 : 0;
    this.renderer.render(this.scene, this.cam);
    return true;
  }
}
