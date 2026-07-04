// Game layer: lasers, enemy drones, points, upgrades, missions, landing.
import * as THREE from 'three';
import { Engine, SceneObj, V3, vlen, vsub, fmtDist } from './engine';
import { byId } from './data';

interface Enemy { mesh: THREE.Group; pos: V3; vel: V3; hp: number; fireCd: number; kind: 'drone' | 'fighter'; strafe: number; flash?: number }
interface Rock { mesh: THREE.Mesh; pos: V3; vel: V3; spin: V3; hp: number; r: number; flash?: number }
interface Boom { mesh: THREE.Sprite; pos: V3; t: number; size: number }
interface Bolt { mesh: THREE.Mesh; pos: V3; vel: V3; life: number; hostile: boolean }

export interface Mission {
  id: string; text: string; kidText: string; targetId?: string; wave?: number; done: boolean;
}

const MISSIONS: Mission[] = [
  { id: 'm1', text: 'Fly to the Moon (press N to warp)', kidText: 'Fly to the Moon! 🌙', targetId: 'moon', done: false },
  { id: 'm2', text: 'Visit Mars', kidText: 'Zoom to Mars! 🔴', targetId: 'mars', done: false },
  { id: 'm3', text: 'Defend Earth — destroy 3 drones', kidText: 'Beep boop! Tag 3 space robots! 🤖', wave: 3, done: false },
  { id: 'm4', text: 'Reach Jupiter', kidText: 'Visit giant Jupiter! 🟠', targetId: 'jupiter', done: false },
  { id: 'm5', text: 'Ring-watch: visit Saturn', kidText: 'See Saturn\'s rings! 🪐', targetId: 'saturn', done: false },
  { id: 'm6', text: 'Defend Saturn — destroy 5 drones', kidText: 'Tag 5 more robots! 🤖', wave: 5, done: false },
  { id: 'm7', text: 'Far frontier: reach Pluto', kidText: 'Say hi to little Pluto! 🤍', targetId: 'pluto', done: false },
  { id: 'm8', text: 'Interstellar: reach Proxima Centauri', kidText: 'Fly to another STAR! ⭐', targetId: 'proxima', done: false },
  { id: 'm9', text: 'Event horizon: visit Sagittarius A*', kidText: 'Peek at the black hole! 🕳️', targetId: 'sgra', done: false },
];

export const UPGRADES = [
  { id: 'engine', name: 'Engine boost', desc: '+60% flight speed / level', base: 200 },
  { id: 'rapid', name: 'Rapid fire', desc: 'Shoot 40% faster / level', base: 250 },
  { id: 'damage', name: 'Heavy lasers', desc: '+1 damage / level', base: 300 },
  { id: 'shield', name: 'Shield cell', desc: '+25 shield / level', base: 300 },
] as const;

export class Game {
  score = 0;
  hull = 100;
  shield = 0;
  levels: Record<string, number> = { engine: 0, rapid: 0, damage: 0, shield: 0 };
  missions = MISSIONS.map((m) => ({ ...m }));
  missionIdx = 0;
  waveLeft = 0;
  enemies: Enemy[] = [];
  rocks: Rock[] = [];
  bolts: Bolt[] = [];
  fireCd = 0;
  firing = false;
  easy = false; // kid mode: no damage, gentler enemies
  audio: AudioContext | null = null;
  booms: Boom[] = [];
  visited = new Set<string>();
  private ambushT = 120;
  onChange: () => void = () => {};
  onToast: (msg: string, big?: boolean) => void = () => {};
  onHit: () => void = () => {};    // player landed a shot (hitmarker)
  onDamage: () => void = () => {}; // player took damage (vignette)
  private enemyProto: THREE.Group;
  private fighterProto: THREE.Group;

  constructor(private engine: Engine, private objMap: Map<string, SceneObj>) {
    this.enemyProto = new THREE.Group();
    const body = new THREE.Mesh(new THREE.OctahedronGeometry(30, 0), new THREE.MeshBasicMaterial({ color: 0xff4466, wireframe: true }));
    const core = new THREE.Mesh(new THREE.OctahedronGeometry(14, 1), new THREE.MeshBasicMaterial({ color: 0xff8899 }));
    this.enemyProto.add(body, core);
    // fighter: dart fuselage + swept wings + engine glow
    this.fighterProto = new THREE.Group();
    const hullMat = new THREE.MeshStandardMaterial({ color: 0x5a2030, roughness: 0.4, metalness: 0.6 });
    const fus = new THREE.Mesh(new THREE.ConeGeometry(14, 70, 6), hullMat);
    fus.rotation.x = Math.PI / 2;
    const wing = new THREE.Mesh(new THREE.BoxGeometry(90, 3, 26), hullMat);
    wing.position.z = 12;
    const fin = new THREE.Mesh(new THREE.BoxGeometry(3, 26, 18), hullMat);
    fin.position.set(0, 12, 16);
    const engineGlow = new THREE.Mesh(new THREE.SphereGeometry(7, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff6633 }));
    engineGlow.position.z = 36;
    this.fighterProto.add(fus, wing, fin, engineGlow);
    this.load();
  }

  // ---------- persistence ----------
  save() {
    try {
      localStorage.setItem('cosmos-save', JSON.stringify({
        score: this.score, levels: this.levels, missionIdx: this.missionIdx,
        shield: this.shield, visited: [...this.visited],
      }));
    } catch {}
  }

  private load() {
    try {
      const s = JSON.parse(localStorage.getItem('cosmos-save') ?? 'null');
      if (!s) return;
      this.score = s.score ?? 0;
      Object.assign(this.levels, s.levels ?? {});
      this.missionIdx = Math.min(s.missionIdx ?? 0, this.missions.length);
      this.shield = s.shield ?? 0;
      (s.visited ?? []).forEach((v: string) => this.visited.add(v));
      for (let i = 0; i < this.missionIdx; i++) this.missions[i].done = true;
    } catch {}
  }

  resetSave() {
    try { localStorage.removeItem('cosmos-save'); } catch {}
    location.reload();
  }

  private boomTex?: THREE.Texture;
  boom(pos: V3, color: number, size: number) {
    if (!this.boomTex) {
      const c = document.createElement('canvas'); c.width = c.height = 64;
      const g = c.getContext('2d')!;
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)'); grad.addColorStop(0.4, 'rgba(255,200,120,0.7)'); grad.addColorStop(1, 'rgba(255,120,40,0)');
      g.fillStyle = grad; g.fillRect(0, 0, 64, 64);
      this.boomTex = new THREE.CanvasTexture(c);
    }
    const mesh = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.boomTex, color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.engine.scene.add(mesh);
    this.booms.push({ mesh, pos: [...pos] as V3, t: 0, size });
  }

  cost(id: string) { return Math.round(UPGRADES.find((u) => u.id === id)!.base * Math.pow(2.1, this.levels[id])); }

  buy(id: string): boolean {
    const c = this.cost(id);
    if (this.score < c) return false;
    this.score -= c;
    this.levels[id]++;
    if (id === 'shield') this.shield += 25;
    this.save();
    this.beep(660, 0.12, 'triangle');
    this.onChange();
    return true;
  }

  get speedFactor() { return 1 + this.levels.engine * 0.6; }
  get mission(): Mission | null { return this.missions[this.missionIdx] ?? null; }

  beep(freq: number, dur: number, type: OscillatorType = 'square', vol = 0.05) {
    try {
      this.audio ??= new AudioContext();
      const o = this.audio.createOscillator(), g = this.audio.createGain();
      o.type = type; o.frequency.value = freq;
      g.gain.setValueAtTime(vol, this.audio.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, this.audio.currentTime + dur);
      o.connect(g).connect(this.audio.destination);
      o.start(); o.stop(this.audio.currentTime + dur);
    } catch { /* audio blocked until user gesture */ }
  }

  spawnWave(n: number) {
    const e = this.engine;
    const q = e.quat;
    for (let i = 0; i < n; i++) {
      const dir = new THREE.Vector3((Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 0.8, -1).normalize().applyQuaternion(q);
      const dist = 2500 + Math.random() * 2500;
      const pos: V3 = [e.camPos[0] + dir.x * dist, e.camPos[1] + dir.y * dist, e.camPos[2] + dir.z * dist];
      const fighter = this.missionIdx >= 4 && i % 3 === 2; // later waves mix in fighters
      const mesh = (fighter ? this.fighterProto : this.enemyProto).clone();
      e.scene.add(mesh);
      this.enemies.push({
        mesh, pos, vel: [0, 0, 0], hp: fighter ? 6 : 3, fireCd: 2 + Math.random() * 3,
        kind: fighter ? 'fighter' : 'drone', strafe: Math.random() > 0.5 ? 1 : -1,
      });
    }
    this.onToast(this.easy ? '🤖 Space robots incoming! Tag them with your laser!' : `⚠ ${n} hostile drones inbound!`, true);
    this.beep(180, 0.4, 'sawtooth', 0.08);
  }

  spawnRock(r: number, at?: V3, vel?: V3) {
    const e = this.engine;
    const geo = new THREE.IcosahedronGeometry(r, 1);
    const p = geo.attributes.position; // lumpy potato
    for (let i = 0; i < p.count; i++) {
      const m = 0.75 + Math.random() * 0.5;
      p.setXYZ(i, p.getX(i) * m, p.getY(i) * m, p.getZ(i) * m);
    }
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x8a7f70, roughness: 1, flatShading: true }));
    e.scene.add(mesh);
    let pos = at;
    if (!pos) {
      const dir = new THREE.Vector3(Math.random() - 0.5, (Math.random() - 0.5) * 0.5, Math.random() - 0.5).normalize();
      const d = 1800 + Math.random() * 3500;
      pos = [e.camPos[0] + dir.x * d, e.camPos[1] + dir.y * d, e.camPos[2] + dir.z * d];
    }
    this.rocks.push({
      mesh, pos, hp: r > 60 ? 2 : 1, r,
      vel: vel ?? [(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 8], // gentle drift

      spin: [(Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)],
    });
  }

  private breakRock(i: number, byPlayer: boolean) {
    const rk = this.rocks[i];
    this.engine.scene.remove(rk.mesh);
    (rk.mesh.geometry as THREE.BufferGeometry).dispose();
    this.rocks.splice(i, 1);
    if (byPlayer) {
      this.boom(rk.pos, 0xffcc88, rk.r * 4);
      this.score += 25;
      this.beep(200, 0.18, 'sawtooth', 0.06);
      if (rk.r > 55) for (let k = 0; k < 2; k++) // split!
        this.spawnRock(rk.r * 0.55, [...rk.pos] as V3, [rk.vel[0] + (Math.random() - 0.5) * 120, rk.vel[1] + (Math.random() - 0.5) * 120, rk.vel[2] + (Math.random() - 0.5) * 120]);
      this.onChange();
    }
  }

  /** keep an asteroid field around the player in the belts / during fights */
  private maintainRocks() {
    const dSun = vlen(this.engine.camPos);
    const inBelt = (dSun > 2.1 * 1.496e8 && dSun < 3.3 * 1.496e8) || (dSun > 30 * 1.496e8 && dSun < 50 * 1.496e8);
    const inSystem = dSun < 60 * 1.496e8;
    const target = inBelt ? 24 : this.enemies.length ? 8 : inSystem ? 6 : 0;
    if (this.rocks.length < target) this.spawnRock(45 + Math.random() * 80);
    for (let i = this.rocks.length - 1; i >= 0; i--)
      if (vlen(vsub(this.rocks[i].pos, this.engine.camPos)) > 80000) this.breakRock(i, false);
  }

  fire() {
    if (this.fireCd > 0) return;
    this.fireCd = 0.28 / (1 + this.levels.rapid * 0.4);
    const e = this.engine;
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(e.quat);
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 1.6, 90, 6),
      new THREE.MeshBasicMaterial({ color: this.easy ? 0x66ff99 : 0x66ddff, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.95, depthWrite: false }),
    );
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    e.scene.add(mesh);
    const off = new THREE.Vector3(0, -8, 0).applyQuaternion(e.quat);
    this.bolts.push({
      mesh,
      pos: [e.camPos[0] + off.x + dir.x * 60, e.camPos[1] + off.y + dir.y * 60, e.camPos[2] + off.z + dir.z * 60],
      vel: [dir.x * 12000, dir.y * 12000, dir.z * 12000],
      life: 1.2, hostile: false,
    });
    this.beep(880, 0.07, 'square', 0.04);
  }

  private enemyFire(en: Enemy) {
    const e = this.engine;
    const d = vsub(e.camPos, en.pos);
    const L = vlen(d);
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(6, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff5544, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
    e.scene.add(mesh);
    const sp = this.easy ? 700 : 1400;
    this.bolts.push({ mesh, pos: [...en.pos] as V3, vel: [d[0] / L * sp, d[1] / L * sp, d[2] / L * sp], life: 5, hostile: true });
  }

  private killEnemy(i: number) {
    const en = this.enemies[i];
    this.boom(en.pos, en.kind === 'fighter' ? 0xff8844 : 0xff5566, 420);
    this.engine.scene.remove(en.mesh);
    this.enemies.splice(i, 1);
    const pts = en.kind === 'fighter' ? 250 : 100;
    this.score += pts;
    this.save();
    this.beep(120, 0.3, 'sawtooth', 0.07);
    this.onToast(this.easy ? `⭐ Tagged one! +${pts}` : `+${pts} — ${en.kind} destroyed`);
    if (this.waveLeft > 0) {
      this.waveLeft--;
      if (this.waveLeft === 0) this.completeMission();
    }
    this.onChange();
  }

  private completeMission() {
    const m = this.mission;
    if (!m) return;
    m.done = true;
    this.score += 250;
    this.missionIdx++;
    this.save();
    this.beep(523, 0.15, 'triangle', 0.06);
    setTimeout(() => this.beep(784, 0.25, 'triangle', 0.06), 140);
    this.onToast(this.easy ? '🎉 YOU DID IT! +250 points!' : `✅ Mission complete: +250`, true);
    const next = this.mission;
    if (next?.wave) { this.waveLeft = next.wave; this.spawnWave(next.wave); }
    this.onChange();
  }

  /** call every frame */
  update(dt: number) {
    const e = this.engine;
    this.fireCd -= dt;
    if (this.firing) this.fire();

    // mission visit check
    const m = this.mission;
    if (m?.targetId) {
      const t = this.objMap.get(m.targetId)!;
      const near = Math.max(t.body.radiusKm * 12, 5e5);
      if (vlen(vsub(t.worldPos, e.camPos)) < near) this.completeMission();
    }

    // explosions animate
    for (let i = this.booms.length - 1; i >= 0; i--) {
      const bm = this.booms[i];
      bm.t += dt * 1.8;
      bm.mesh.position.set(bm.pos[0] - e.camPos[0], bm.pos[1] - e.camPos[1], bm.pos[2] - e.camPos[2]);
      bm.mesh.scale.setScalar(bm.size * (0.3 + bm.t * 2.2));
      bm.mesh.material.opacity = Math.max(1 - bm.t, 0);
      if (bm.t >= 1) { e.scene.remove(bm.mesh); bm.mesh.material.dispose(); this.booms.splice(i, 1); }
    }

    // ambush pacing: keep space lively between missions (never in kid mode)
    if (!this.easy && this.enemies.length === 0 && this.waveLeft === 0 && vlen(e.camPos) < 60 * 1.496e8) {
      this.ambushT -= dt;
      if (this.ambushT <= 0) {
        this.ambushT = 100 + Math.random() * 80;
        this.spawnWave(2 + Math.floor(Math.random() * 3));
      }
    }

    // landing / collision clamp + discovery bonus
    let landed: SceneObj | null = null;
    for (const o of e.objs) {
      const r = o.body.radiusKm;
      if (r <= 0) continue;
      const rel = vsub(e.camPos, o.worldPos);
      const d = vlen(rel);
      if (d < Math.max(r * 12, 3e5) && !this.visited.has(o.body.id)) {
        this.visited.add(o.body.id);
        this.score += 50;
        this.onToast(`🧭 Discovered ${o.body.name} — +50`);
        this.beep(700, 0.12, 'triangle', 0.05);
        this.save();
        this.onChange();
      }
      if (d < r * 3 && d > 0) {
        const minAlt = r + Math.max(r * 2e-6, 0.02);
        if (d < minAlt) {
          const f = minAlt / d;
          e.camPos = [o.worldPos[0] + rel[0] * f, o.worldPos[1] + rel[1] * f, o.worldPos[2] + rel[2] * f];
          landed = o;
        }
      }
    }
    if (landed && !this.lastLanded) {
      const hot = landed.body.kind === 'sun' || landed.body.kind === 'star';
      this.onToast(hot
        ? (this.easy ? '🔥 Too hot to land! Whoa!' : '🔥 Surface contact: ~5,800 K. Shields holding. (Do not try this in a real spaceship.)')
        : (this.easy ? `🛬 You landed on ${landed.body.name}! Great flying!` : `🛬 Landed on ${landed.body.name}`), true);
      this.beep(330, 0.2, 'sine', 0.06);
      this.score += 25;
      this.onChange();
    }
    this.lastLanded = landed;

    // asteroids
    this.maintainRocks();
    for (let i = this.rocks.length - 1; i >= 0; i--) {
      const rk = this.rocks[i];
      rk.pos = [rk.pos[0] + rk.vel[0] * dt, rk.pos[1] + rk.vel[1] * dt, rk.pos[2] + rk.vel[2] * dt];
      rk.mesh.position.set(rk.pos[0] - e.camPos[0], rk.pos[1] - e.camPos[1], rk.pos[2] - e.camPos[2]);
      rk.mesh.rotation.x += rk.spin[0] * dt; rk.mesh.rotation.y += rk.spin[1] * dt;
      if (rk.flash && rk.flash > 0) { rk.mesh.scale.setScalar(1 + rk.flash); rk.flash -= dt * 2; }
      else rk.mesh.scale.setScalar(1);
      const d = vlen(vsub(rk.pos, e.camPos));
      if (d < rk.r + 40) { // bounce off + hull scrape
        const away = vsub(e.camPos, rk.pos);
        const f = (rk.r + 45) / d;
        e.camPos = [rk.pos[0] + away[0] * f, rk.pos[1] + away[1] * f, rk.pos[2] + away[2] * f];
        if (!this.easy) {
          this.hull -= 8;
          this.engine.shake = 1;
          this.onDamage();
          this.beep(70, 0.3, 'sawtooth', 0.1);
          this.onToast('💥 Asteroid impact!');
          if (this.hull <= 0) this.respawn();
          this.onChange();
        } else this.beep(140, 0.15, 'sine', 0.05);
      }
    }

    // enemies
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const en = this.enemies[i];
      const rel = vsub(e.camPos, en.pos);
      const d = vlen(rel);
      const fighter = en.kind === 'fighter';
      const want = this.easy ? 900 : fighter ? 800 : 450;
      const sp = this.easy ? 250 : fighter ? 950 : 650;
      const k = d > want ? 1 : -0.6;
      en.vel = [rel[0] / d * sp * k, rel[1] / d * sp * k, rel[2] / d * sp * k];
      if (fighter) { // strafing orbit around the player
        const t = new THREE.Vector3(rel[0], rel[1], rel[2]).cross(new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(sp * 0.85 * en.strafe);
        en.vel = [en.vel[0] * 0.55 + t.x, en.vel[1] * 0.55 + t.y, en.vel[2] * 0.55 + t.z];
      }
      en.pos = [en.pos[0] + en.vel[0] * dt, en.pos[1] + en.vel[1] * dt, en.pos[2] + en.vel[2] * dt];
      en.fireCd -= dt;
      if (en.fireCd <= 0 && d < 4000) { en.fireCd = this.easy ? 6 : fighter ? 1.7 : 2.5 + Math.random() * 2; this.enemyFire(en); }
      en.mesh.position.set(en.pos[0] - e.camPos[0], en.pos[1] - e.camPos[1], en.pos[2] - e.camPos[2]);
      if (fighter) en.mesh.lookAt(en.mesh.position.x + en.vel[0], en.mesh.position.y + en.vel[1], en.mesh.position.z + en.vel[2]);
      else en.mesh.rotation.y += dt * 2;
      if (en.flash && en.flash > 0) { en.mesh.scale.setScalar(1 + en.flash); en.flash -= dt * 2; }
      else en.mesh.scale.setScalar(1);
      if (d > 60000) { e.scene.remove(en.mesh); this.enemies.splice(i, 1); } // lost them
    }

    // bolts
    for (let i = this.bolts.length - 1; i >= 0; i--) {
      const b = this.bolts[i];
      b.life -= dt;
      b.pos = [b.pos[0] + b.vel[0] * dt, b.pos[1] + b.vel[1] * dt, b.pos[2] + b.vel[2] * dt];
      b.mesh.position.set(b.pos[0] - e.camPos[0], b.pos[1] - e.camPos[1], b.pos[2] - e.camPos[2]);
      let dead = b.life <= 0;
      if (!dead && b.hostile) {
        if (vlen(vsub(b.pos, e.camPos)) < 40) {
          dead = true;
          if (!this.easy) {
            const dmg = 12;
            if (this.shield > 0) this.shield = Math.max(0, this.shield - dmg);
            else this.hull -= dmg;
            this.engine.shake = 1.4;
            this.onDamage();
            this.beep(90, 0.25, 'sawtooth', 0.09);
            this.onToast(this.hull <= 0 ? '💥 Ship destroyed! Respawning at Earth…' : '💢 Hit! Hull damaged');
            if (this.hull <= 0) this.respawn();
            this.onChange();
          }
        }
      } else if (!dead && !b.hostile) {
        for (let j = this.rocks.length - 1; j >= 0; j--) {
          if (vlen(vsub(b.pos, this.rocks[j].pos)) < this.rocks[j].r + 30) {
            this.rocks[j].hp -= 1 + this.levels.damage;
            this.rocks[j].flash = 0.2;
            dead = true;
            this.onHit();
            if (this.rocks[j].hp <= 0) this.breakRock(j, true);
            break;
          }
        }
        if (!dead) for (let j = 0; j < this.enemies.length; j++) {
          if (vlen(vsub(b.pos, this.enemies[j].pos)) < 95) {
            this.enemies[j].hp -= 1 + this.levels.damage;
            this.enemies[j].flash = 0.4;
            dead = true;
            this.onHit();
            this.beep(440, 0.05, 'square', 0.03);
            if (this.enemies[j].hp <= 0) this.killEnemy(j);
            break;
          }
        }
      }
      if (dead) { e.scene.remove(b.mesh); this.bolts.splice(i, 1); }
    }
  }

  private lastLanded: SceneObj | null = null;

  respawn() {
    this.hull = 100;
    const earth = this.objMap.get('earth')!;
    this.engine.camPos = [earth.worldPos[0], earth.worldPos[1] + 3e4, earth.worldPos[2] + 3e4];
    for (const en of this.enemies) this.engine.scene.remove(en.mesh);
    this.enemies = [];
  }

  missionTargetHint(): string {
    const m = this.mission;
    if (!m) return 'All missions complete, Commander. 🎖️';
    if (m.wave && this.waveLeft > 0) return `${m.text} (${this.waveLeft} left)`;
    if (m.wave) return m.text;
    const t = this.objMap.get(m.targetId!)!;
    return `${m.text} — ${fmtDist(vlen(vsub(t.worldPos, this.engine.camPos)))} away`;
  }

  startWaveIfNeeded() {
    const m = this.mission;
    if (m?.wave && this.waveLeft === 0 && this.enemies.length === 0) { this.waveLeft = m.wave; this.spawnWave(m.wave); }
  }

  warpToMission() {
    const m = this.mission;
    if (m?.targetId) this.engine.flyTo(this.objMap.get(m.targetId)!);
  }
}

export { byId };
