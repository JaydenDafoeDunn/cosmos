// Kid mode: giant buttons, guided tour, read-aloud facts, easy game rules.
import { byId, KID_STOPS } from './data';
import { Engine, SceneObj } from './engine';
import { Game } from './game';
import { el } from './ui';

export class KidMode {
  active = false;
  stopIdx = -1;
  bar: HTMLElement;
  card: HTMLElement;

  constructor(private engine: Engine, private game: Game, private objMap: Map<string, SceneObj>) {
    this.bar = el('div', 'kidbar', '', document.body);
    this.card = el('div', 'kidcard', '', document.body);
    const strip = el('div', 'kidstrip', '', this.bar);
    for (const id of KID_STOPS) {
      const b = byId.get(id)!;
      const btn = el('button', 'kidbtn', `<span class="e">${b.emoji ?? '⭐'}</span><span>${b.name.split(' ')[0]}</span>`, strip);
      btn.onclick = () => this.visit(id);
    }
    const next = el('button', 'kidbtn next', '<span class="e">➡️</span><span>Next!</span>', this.bar);
    next.onclick = () => this.visit(KID_STOPS[(this.stopIdx + 1) % KID_STOPS.length]);
  }

  toggle(on: boolean) {
    this.active = on;
    this.game.easy = on;
    document.body.classList.toggle('kid-mode', on);
    this.bar.style.display = on ? 'flex' : 'none';
    this.card.style.display = 'none';
    if (on) {
      this.engine.simSpeed = 86400; // watch things move
      this.say('Welcome to space, Captain! Tap a picture to fly there!');
      this.visit('earth');
    } else {
      speechSynthesis?.cancel();
    }
  }

  visit(id: string) {
    this.stopIdx = KID_STOPS.indexOf(id);
    const o = this.objMap.get(id)!;
    this.engine.flyTo(o, { dur: 7, standoffR: 5 });
    const b = o.body;
    const fact = b.kidFact ?? b.fact;
    this.card.style.display = 'block';
    this.card.innerHTML = `<div class="big">${b.emoji ?? '⭐'} ${b.name}</div><div class="fact">${fact}</div>
      <button class="kidsay">🔊 Read to me!</button>`;
    (this.card.querySelector('.kidsay') as HTMLButtonElement).onclick = () => this.say(`${b.name}. ${fact.replace(/[🌙🪐☀️⭐🕳️]/gu, '')}`);
    this.say(b.name);
  }

  say(text: string) {
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.92; u.pitch = 1.1;
      speechSynthesis.speak(u);
    } catch { /* not supported */ }
  }
}
