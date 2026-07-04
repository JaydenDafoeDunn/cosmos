// Surface mode: land, get out, and WALK — procedural terrain, sky, weather,
// and (where honest) life. Real planets get real conditions; alien flora/fauna
// only appear in clearly-labelled Imagination Mode.
import * as THREE from 'three';
import { Body } from './data';

interface SurfCfg {
  ground: number; sky: number; horizon: number; g: number; // m/s^2
  weather?: 'rain' | 'dust' | 'methane-rain' | 'snow';
  airless?: boolean; life?: boolean; desc: string;
}

const CFG: Record<string, SurfCfg> = {
  earth: { ground: 0x4d7a3a, sky: 0x87bce8, horizon: 0xcfe4f5, g: 9.81, weather: 'rain', life: true, desc: 'Home. Air you can breathe, water, life everywhere.' },
  moon: { ground: 0x8a8a85, sky: 0x000005, horizon: 0x111114, g: 1.62, airless: true, desc: 'No air, 1/6 gravity — you can JUMP. Footprints last a million years.' },
  mars: { ground: 0xa5522f, sky: 0xd9a678, horizon: 0xe8c49a, g: 3.71, weather: 'dust', desc: 'Butterscotch sky, rusty dust, 38% gravity. Dust storms can swallow the planet.' },
  mercury: { ground: 0x8a7f74, sky: 0x000005, horizon: 0x0d0d10, g: 3.7, airless: true, desc: 'Airless and extreme: 427 °C in day, −173 °C at night.' },
  venus: { ground: 0x9a7a4a, sky: 0xd9b96a, horizon: 0xe8cd8a, g: 8.87, desc: 'Crushing CO₂ air, 464 °C. Real visits last minutes (ask the Soviet Venera probes).' },
  pluto: { ground: 0xb8a58e, sky: 0x0a0a14, horizon: 0x2a2a3a, g: 0.62, airless: true, weather: 'snow', desc: 'Nitrogen-ice plains at −229 °C. The Sun is just a very bright star here.' },
  titan: { ground: 0x7a5c30, sky: 0xc98a3a, horizon: 0xe0a952, g: 1.35, weather: 'methane-rain', desc: 'Thick orange haze and drizzle of liquid methane. You could FLY here by flapping strapped-on wings.' },
  europa: { ground: 0xcfd4d9, sky: 0x000008, horizon: 0x14141c, g: 1.31, airless: true, desc: 'Cracked ice over a hidden ocean. Jupiter fills the sky.' },
  enceladus: { ground: 0xe8f0f4, sky: 0x000008, horizon: 0x101018, g: 0.11, airless: true, weather: 'snow', desc: 'Gravity so weak (1% of Earth) a good jump takes you a kilometre high.' },
  io: { ground: 0xc9b040, sky: 0x000006, horizon: 0x1a1408, g: 1.8, airless: true, desc: 'Sulfur plains and constant volcanic eruptions.' },
  ganymede: { ground: 0x8f8a80, sky: 0x000006, horizon: 0x101014, g: 1.43, airless: true, desc: 'The biggest moon in the solar system, under Jupiter\'s glare.' },
  triton: { ground: 0xc4bcae, sky: 0x000008, horizon: 0x141420, g: 0.78, airless: true, weather: 'snow', desc: 'Nitrogen geysers erupt through pink ice.' },
  ceres: { ground: 0x7d786e, sky: 0x000005, horizon: 0x0e0e12, g: 0.28, airless: true, desc: 'A salty dwarf planet — those bright spots are real.' },
  charon: { ground: 0x94908a, sky: 0x00000a, horizon: 0x16161e, g: 0.29, airless: true, desc: 'Pluto hangs frozen in the sky, never moving.' },
};
const DEFAULT_CFG: SurfCfg = { ground: 0x8a8378, sky: 0x000006, horizon: 0x101014, g: 3, airless: true, desc: 'An unexplored surface.' };

let seed = 1;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const noise2 = (x: number, y: number, s: number) => {
  const h = Math.sin(x * 12.9898 + y * 78.233 + s) * 43758.5453;
  return h - Math.floor(h);
};
function smoothNoise(x: number, y: number, s: number): number {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = noise2(xi, yi, s), b = noise2(xi + 1, yi, s), c = noise2(xi, yi + 1, s), d = noise2(xi + 1, yi + 1, s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
const fbm = (x: number, y: number, s: number) =>
  smoothNoise(x, y, s) * 0.55 + smoothNoise(x * 2.3, y * 2.3, s + 7) * 0.28 + smoothNoise(x * 5.1, y * 5.1, s + 13) * 0.17;

export class Surface {
  active = false;
  imagination = false;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, 1, 0.05, 4000);
  pos = new THREE.Vector3(0, 2, 0);
  velY = 0;
  yaw = 0; pitch = 0;
  cfg: SurfCfg = DEFAULT_CFG;
  body: Body | null = null;
  private heightSeed = 1;
  private critters: { m: THREE.Group; a: number; t: number }[] = [];
  private particles: THREE.Points | null = null;
  onExit: () => void = () => {};

  constructor(private renderer: THREE.WebGLRenderer) {
    addEventListener('resize', () => { this.camera.aspect = innerWidth / innerHeight; this.camera.updateProjectionMatrix(); });
  }

  height(x: number, z: number): number {
    const rough = this.cfg.airless ? 14 : 8;
    return (fbm(x * 0.012, z * 0.012, this.heightSeed) - 0.5) * rough * 2
      + (fbm(x * 0.0015, z * 0.0015, this.heightSeed + 99) - 0.5) * 30;
  }

  enter(body: Body, kidMode: boolean) {
    this.body = body;
    this.cfg = CFG[body.id] ?? DEFAULT_CFG;
    this.imagination = kidMode && !this.cfg.life; // aliens for kids, clearly labelled
    this.heightSeed = body.id.length * 31 + body.id.charCodeAt(0);
    seed = this.heightSeed;
    this.scene.clear();
    this.critters = [];
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();

    // terrain
    const size = 1600, segs = 128;
    const geo = new THREE.PlaneGeometry(size, size, segs, segs);
    geo.rotateX(-Math.PI / 2);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, this.height(p.getX(i), p.getZ(i)));
    geo.computeVertexNormals();
    const ground = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: this.cfg.ground }));
    this.scene.add(ground);

    // sky + fog + light
    this.scene.background = new THREE.Color(this.cfg.sky);
    this.scene.fog = this.cfg.airless ? null : new THREE.Fog(this.cfg.horizon, 60, 1400);
    const sun = new THREE.DirectionalLight(0xfff4dd, this.cfg.airless ? 2.2 : 1.6);
    sun.position.set(0.5, 0.8, 0.3);
    this.scene.add(sun, new THREE.AmbientLight(this.cfg.airless ? 0x223344 : 0x8899aa, this.cfg.airless ? 0.5 : 0.9));

    if (this.cfg.airless) { // stars visible from airless worlds
      const n = 1200, sp = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        const u = rnd() * 2 - 1, ph = rnd() * Math.PI * 2, s2 = Math.sqrt(1 - u * u);
        sp[i * 3] = s2 * Math.cos(ph) * 3000; sp[i * 3 + 1] = Math.abs(u) * 3000; sp[i * 3 + 2] = s2 * Math.sin(ph) * 3000;
      }
      const sg = new THREE.BufferGeometry();
      sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
      this.scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 2.4, sizeAttenuation: false })));
    }

    // weather particles
    this.particles = null;
    if (this.cfg.weather) {
      const n = 2500, wp = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { wp[i * 3] = (rnd() - 0.5) * 300; wp[i * 3 + 1] = rnd() * 120; wp[i * 3 + 2] = (rnd() - 0.5) * 300; }
      const wg = new THREE.BufferGeometry();
      wg.setAttribute('position', new THREE.BufferAttribute(wp, 3));
      const color = { rain: 0x99bbee, 'methane-rain': 0xd9a04a, dust: 0xc98a5a, snow: 0xffffff }[this.cfg.weather];
      this.particles = new THREE.Points(wg, new THREE.PointsMaterial({ color, size: this.cfg.weather === 'dust' ? 1.2 : 2, transparent: true, opacity: 0.7, sizeAttenuation: false }));
      this.scene.add(this.particles);
    }

    // flora & fauna
    if (this.cfg.life || this.imagination) {
      const alien = !this.cfg.life;
      for (let i = 0; i < 120; i++) { // flora
        const x = (rnd() - 0.5) * 1200, z = (rnd() - 0.5) * 1200;
        const y = this.height(x, z);
        const t = new THREE.Group();
        if (alien) {
          const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.4, 3 + rnd() * 6, 5), new THREE.MeshLambertMaterial({ color: 0x40e0c0 }));
          const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.8 + rnd(), 8, 6), new THREE.MeshBasicMaterial({ color: [0xff70d9, 0x70ffd9, 0xd9b0ff][i % 3] }));
          bulb.position.y = stalk.geometry.parameters.height / 2 + 0.5;
          stalk.position.y = stalk.geometry.parameters.height / 2;
          t.add(stalk, bulb);
        } else {
          const h = 3 + rnd() * 5;
          const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, h, 6), new THREE.MeshLambertMaterial({ color: 0x6a4a2a }));
          const crown = new THREE.Mesh(new THREE.ConeGeometry(1.6 + rnd() * 1.4, h * 0.9, 7), new THREE.MeshLambertMaterial({ color: 0x2f6a2f }));
          trunk.position.y = h / 2; crown.position.y = h * 1.1;
          t.add(trunk, crown);
        }
        t.position.set(x, y, z);
        this.scene.add(t);
      }
      for (let i = 0; i < 14; i++) { // fauna
        const g = new THREE.Group();
        const bodyM = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), new THREE.MeshLambertMaterial({ color: alien ? 0xb080ff : 0x9a7a5a }));
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), bodyM.material);
        head.position.set(0.5, 0.35, 0);
        g.add(bodyM, head);
        if (alien) {
          const glow = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffff88 }));
          glow.position.y = 0.8; g.add(glow);
        } else {
          for (const s of [-1, 1]) {
            const ear = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.5, 4), bodyM.material);
            ear.position.set(0.5, 0.7, s * 0.15); g.add(ear);
          }
        }
        const x = (rnd() - 0.5) * 400, z = (rnd() - 0.5) * 400;
        g.position.set(x, this.height(x, z) + 0.5, z);
        this.scene.add(g);
        this.critters.push({ m: g, a: rnd() * Math.PI * 2, t: rnd() * 3 });
      }
    }

    this.pos.set(0, this.height(0, 0) + 1.7, 0);
    this.yaw = 0; this.pitch = 0;
    this.velY = 0;
    this.active = true;
  }

  exit() { this.active = false; this.onExit(); }

  /** returns true if it consumed the frame */
  update(dt: number, keys: Set<string>): boolean {
    if (!this.active) return false;
    // movement
    const speed = keys.has('ShiftLeft') ? 14 : 6;
    const fwd = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(fwd.z, 0, -fwd.x).negate();
    const mv = new THREE.Vector3();
    if (keys.has('KeyW') || keys.has('ArrowUp')) mv.add(fwd);
    if (keys.has('KeyS') || keys.has('ArrowDown')) mv.sub(fwd);
    if (keys.has('KeyA') || keys.has('ArrowLeft')) mv.sub(right);
    if (keys.has('KeyD') || keys.has('ArrowRight')) mv.add(right);
    if (mv.lengthSq()) mv.normalize().multiplyScalar(speed * dt);
    this.pos.add(mv);
    const groundY = this.height(this.pos.x, this.pos.z) + 1.7;
    this.velY -= this.cfg.g * dt;
    if (keys.has('Space') && this.pos.y <= groundY + 0.05) this.velY = Math.sqrt(2 * this.cfg.g * (this.cfg.g < 2 ? 8 : 1.2)); // same leg power, different gravity
    this.pos.y += this.velY * dt;
    if (this.pos.y < groundY) { this.pos.y = groundY; this.velY = 0; }
    // clamp to terrain patch
    this.pos.x = Math.max(-760, Math.min(760, this.pos.x));
    this.pos.z = Math.max(-760, Math.min(760, this.pos.z));

    this.camera.position.copy(this.pos);
    this.camera.quaternion.setFromEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));

    // weather fall
    if (this.particles) {
      const p = this.particles.geometry.attributes.position;
      const fall = { rain: 40, 'methane-rain': 6, dust: 3, snow: 4 }[this.cfg.weather!] ?? 5;
      const drift = this.cfg.weather === 'dust' ? 25 : 4;
      for (let i = 0; i < p.count; i++) {
        let y = p.getY(i) - fall * dt;
        let x = p.getX(i) + drift * dt;
        if (y < 0) { y = 120; x = this.pos.x + (Math.random() - 0.5) * 300; p.setZ(i, this.pos.z + (Math.random() - 0.5) * 300); }
        if (x > this.pos.x + 150) x = this.pos.x - 150;
        p.setY(i, y); p.setX(i, x);
      }
      p.needsUpdate = true;
    }

    // critters hop about
    for (const c of this.critters) {
      c.t -= dt;
      if (c.t <= 0) { c.t = 1 + Math.random() * 3; c.a = Math.random() * Math.PI * 2; }
      const sp = 2;
      c.m.position.x += Math.cos(c.a) * sp * dt;
      c.m.position.z += Math.sin(c.a) * sp * dt;
      c.m.position.y = this.height(c.m.position.x, c.m.position.z) + 0.5 + Math.abs(Math.sin(performance.now() / 180 + c.a)) * 0.4;
      c.m.rotation.y = -c.a;
    }

    this.renderer.render(this.scene, this.camera);
    return true;
  }

  look(dx: number, dy: number) {
    this.yaw -= dx * 0.0025;
    this.pitch = Math.max(-1.5, Math.min(1.5, this.pitch - dy * 0.0025));
  }
}
