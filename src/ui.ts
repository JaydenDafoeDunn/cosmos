// All HUD / panels / catalog / info-card DOM.
import * as THREE from 'three';
import { BODIES, Body, Group, GROUP_LABELS } from './data';
import { Engine, fmtDist, fmtRadius, SceneObj, vlen, vsub } from './engine';
import { Game, UPGRADES } from './game';

const $ = (id: string) => document.getElementById(id)!;

export function el(tag: string, cls: string, html = '', parent?: HTMLElement): HTMLElement {
  const e = document.createElement(tag);
  e.className = cls;
  if (html) e.innerHTML = html;
  parent?.appendChild(e);
  return e;
}

type V3like = [number, number, number];

export class UI {
  toastBox = el('div', 'toasts', '', document.body);
  onWalk: () => void = () => {};

  constructor(private engine: Engine, private game: Game, private objMap: Map<string, SceneObj>) {
    this.buildCatalog();
    this.buildInfo();
    this.buildHud();
    this.buildHelp();
    game.onToast = (m, big) => this.toast(m, big);
    game.onChange = () => this.refreshGame();
    engine.onSelect = (o) => this.showInfo(o);
  }

  toast(msg: string, big = false) {
    const t = el('div', 'toast' + (big ? ' big' : ''), msg, this.toastBox);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 600); }, big ? 3500 : 2200);
  }

  buildCatalog() {
    const panel = $('catalog');
    const groups: Group[] = ['solar', 'stars', 'exotic', 'deep', 'hypo'];
    for (const g of groups) {
      const det = el('details', 'cat-group', `<summary>${GROUP_LABELS[g]}</summary>`, panel) as HTMLDetailsElement;
      if (g === 'solar') det.open = true;
      for (const b of BODIES.filter((x) => x.group === g)) {
        const row = el('div', 'cat-item', `${b.emoji ?? '·'} ${b.name}${b.flags?.some(f => f.includes('THEO') || f.includes('HYPO')) ? ' <span class="tag">?</span>' : ''}`, det);
        row.onclick = () => this.engine.flyTo(this.objMap.get(b.id)!);
      }
    }
    // search
    const inp = $('search') as HTMLInputElement;
    const dl = $('search-list') as HTMLDataListElement;
    for (const b of BODIES) el('option', '', '', dl).setAttribute('value', b.name);
    inp.addEventListener('change', () => {
      const b = BODIES.find((x) => x.name.toLowerCase() === inp.value.toLowerCase());
      if (b) { this.engine.flyTo(this.objMap.get(b.id)!); inp.value = ''; inp.blur(); }
    });
  }

  buildInfo() { /* container exists in HTML */ }

  showInfo(o: SceneObj | null) {
    const box = $('info');
    if (!o) { box.style.display = 'none'; return; }
    const b = o.body;
    box.style.display = 'block';
    const flags = (b.flags ?? []).map((f) => `<span class="badge ${f.includes('HYPO') || f.includes('THEO') ? 'warn' : ''}">${f}</span>`).join(' ');
    const rows: string[] = [];
    if (b.radiusKm > 0) rows.push(`<tr><td>Radius</td><td>${fmtRadius(b.radiusKm)}</td></tr>`);
    if (b.mass) rows.push(`<tr><td>Mass</td><td>${b.mass}</td></tr>`);
    if (b.temp) rows.push(`<tr><td>Temp</td><td>${b.temp}</td></tr>`);
    rows.push(`<tr><td>From Sun</td><td>${fmtDist(vlen(o.worldPos))}</td></tr>`);
    rows.push(`<tr><td>From you</td><td id="info-dist">…</td></tr>`);
    const canWalk = ['planet', 'dwarf', 'moon'].includes(b.kind) && !['jupiter', 'saturn', 'uranus', 'neptune'].includes(b.id);
    box.innerHTML = `
      <button class="x" id="info-x">×</button>
      <h2>${b.emoji ?? ''} ${b.name}</h2>
      <div class="type">${b.type}</div>
      ${flags ? `<div class="flags">${flags}</div>` : ''}
      <table>${rows.join('')}</table>
      <p>${b.fact}</p>
      <div class="btns">
        <button id="info-go">🚀 Warp here</button>
        ${canWalk ? '<button id="info-walk">🚶 Land & walk</button>' : ''}
      </div>
      <div class="src">Data: NASA/JPL · ESA Gaia · EHT${b.kind === 'blackhole' ? ' — fly close for gravitational lensing' : ''}</div>`;
    $('info-x').onclick = () => this.engine.select(null);
    $('info-go').onclick = () => this.engine.flyTo(o);
    const wb = document.getElementById('info-walk');
    if (wb) wb.onclick = () => { this.engine.flyTo(o); this.pendingWalk = b.id; };
  }

  pendingWalk: string | null = null;

  buildHud() {
    // time controls
    const speeds: [string, number][] = [['⏸', 0], ['real', 1], ['1 hr/s', 3600], ['1 day/s', 86400], ['1 mo/s', 2.6e6], ['1 yr/s', 3.15e7], ['100 yr/s', 3.15e9]];
    const tc = $('timectl');
    for (const [label, sp] of speeds) {
      const btn = el('button', 'tbtn' + (sp === 1 ? ' on' : ''), label, tc);
      btn.onclick = () => {
        this.engine.paused = sp === 0;
        if (sp > 0) this.engine.simSpeed = sp;
        tc.querySelectorAll('.tbtn').forEach((x) => x.classList.remove('on'));
        btn.classList.add('on');
      };
    }
    // upgrades panel
    const up = $('upgrades');
    const upBody = el('div', 'up-body', '', up);
    const render = () => {
      upBody.innerHTML = '';
      for (const u of UPGRADES) {
        const lvl = this.game.levels[u.id];
        const cost = this.game.cost(u.id);
        const row = el('div', 'up-row', `<b>${u.name}</b> <span class="lvl">Lv ${lvl}</span><br><small>${u.desc}</small>`, upBody);
        const btn = el('button', 'buy', `${cost} pts`, row) as HTMLButtonElement;
        btn.disabled = this.game.score < cost;
        btn.onclick = () => { this.game.buy(u.id) ? this.toast(`Upgraded: ${u.name}`) : this.toast('Not enough points!'); render(); };
      }
    };
    $('btn-upgrades').onclick = () => { up.classList.toggle('open'); render(); };
    $('btn-mission-warp').onclick = () => this.game.warpToMission();
  }

  refreshGame() {
    $('score').textContent = String(this.game.score);
    const hull = $('hull');
    hull.style.width = `${Math.max(this.game.hull, 0)}%`;
    hull.className = this.game.hull > 50 ? 'ok' : this.game.hull > 25 ? 'mid' : 'low';
    $('shield').style.width = `${Math.min(this.game.shield, 100)}%`;
  }

  /** per-frame HUD text */
  tick() {
    this.drawRadar();
    const e = this.engine;
    $('hud-dist').textContent = fmtDist(e.distFromSun()) + ' from Sun';
    const near = e.objs.reduce((a, o) => {
      const d = vlen(vsub(o.worldPos, e.camPos)) - o.body.radiusKm;
      return d < a.d ? { d, o } : a;
    }, { d: Infinity, o: null as SceneObj | null });
    $('hud-alt').textContent = near.o ? `${fmtDist(Math.max(near.d, 0))} above ${near.o.body.name}` : '';
    $('hud-speed').textContent = fmtDist(e.adaptiveSpeed() * this.game.speedFactor) + '/s';
    $('hud-date').textContent = new Date(e.simTimeMs).toISOString().slice(0, 10);
    $('mission').textContent = this.game.missionTargetHint();
    if (document.body.classList.contains('cockpit')) {
      $('cp-spd').textContent = fmtDist(e.adaptiveSpeed() * this.game.speedFactor) + '/s';
      $('cp-hull').textContent = `${Math.max(this.game.hull, 0)}%`;
      $('cp-shd').textContent = String(this.game.shield);
      $('cp-pts').textContent = String(this.game.score);
      $('cp-tgt').textContent = this.game.missionTargetHint().replace(/^.*?— /, '').slice(0, 34) || '—';
    }
    const sel = e.selected;
    const infoDist = document.getElementById('info-dist');
    if (sel && infoDist) infoDist.textContent = fmtDist(vlen(vsub(sel.worldPos, e.camPos)));
  }

  drawRadar() {
    const cv = $('radar') as HTMLCanvasElement;
    const ctx = cv.getContext('2d')!;
    const W = cv.width, C = W / 2, R = C - 6, range = 6000; // km
    ctx.clearRect(0, 0, W, W);
    ctx.strokeStyle = 'rgba(120,180,255,.25)';
    for (const rr of [R, R * 0.55]) { ctx.beginPath(); ctx.arc(C, C, rr, 0, 7); ctx.stroke(); }
    // sweep
    const a = (performance.now() / 1600) % (Math.PI * 2);
    ctx.strokeStyle = 'rgba(120,220,255,.3)';
    ctx.beginPath(); ctx.moveTo(C, C); ctx.lineTo(C + Math.sin(a) * R, C - Math.cos(a) * R); ctx.stroke();
    const invQ = this.engine.quat.clone().invert();
    const v = new THREE.Vector3();
    const blip = (rel: V3like, color: string, size: number, clampRim = false) => {
      v.set(rel[0], rel[1], rel[2]).applyQuaternion(invQ);
      let x = v.x / range, y = v.z / range; // forward (-z) = up
      const L = Math.hypot(x, y);
      if (L > 0.94) { if (!clampRim) return; x = x / L * 0.94; y = y / L * 0.94; }
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(C + x * R, C + y * R, size, 0, 7); ctx.fill();
    };
    for (const en of this.game.enemies)
      blip(vsub(en.pos, this.engine.camPos), en.kind === 'fighter' ? '#ff8833' : '#ff4466', 3);
    for (const rk of this.game.rocks)
      blip(vsub(rk.pos, this.engine.camPos), 'rgba(190,190,190,.8)', 2);
    // mission target: gold marker clamped to the rim
    const m = this.game.mission;
    if (m?.targetId) blip(vsub(this.objMap.get(m.targetId)!.worldPos, this.engine.camPos), '#ffd97a', 4, true);
    // you
    ctx.fillStyle = '#7adcff';
    ctx.beginPath(); ctx.arc(C, C, 2.5, 0, 7); ctx.fill();
  }

  buildHelp() {
    $('btn-help').onclick = () => $('help').classList.toggle('open');
    $('help-x').onclick = () => $('help').classList.remove('open');
  }
}
