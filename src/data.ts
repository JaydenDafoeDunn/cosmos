// ============================================================================
// COSMOS — curated catalog of real (and clearly-flagged theoretical) objects.
// Units: km everywhere. Sources: NASA/JPL planetary fact sheets, JPL Keplerian
// element tables (J2000), ESA Gaia / Hipparcos star data, EHT collaboration.
// ============================================================================

export const AU = 1.495978707e8; // km
export const LY = 9.4607304725808e12; // km
export const SUN_R = 695700; // km
export const EARTH_R = 6371; // km
export const OBS_UNIVERSE_R = 46.5e9 * LY; // comoving radius, km

export type Group = 'solar' | 'stars' | 'exotic' | 'deep' | 'hypo';
export type Kind =
  | 'star' | 'planet' | 'dwarf' | 'moon' | 'sun'
  | 'blackhole' | 'neutron' | 'quark' | 'whitedwarf'
  | 'galaxy' | 'cluster' | 'quasar' | 'probe' | 'region' | 'exhibit';

export interface Orbit {
  // JPL Keplerian elements, J2000 epoch + rates per Julian century
  a: number; e: number; i: number; L: number; peri: number; node: number;
  da?: number; de?: number; di?: number; dL?: number; dperi?: number; dnode?: number;
}

export interface Body {
  id: string;
  name: string;
  kind: Kind;
  group: Group;
  radiusKm: number;          // physical radius (0 = point/region marker)
  color: number;             // display tint
  // position: exactly one of —
  orbit?: Orbit;             // heliocentric Keplerian
  parent?: string;           // moon: id of parent
  moonAKm?: number;          // moon: semi-major axis, km
  moonPdays?: number;        // moon: period, days (negative = retrograde)
  ra?: number;               // fixed object: right ascension, hours
  dec?: number;              // fixed object: declination, degrees
  distKm?: number;           // fixed object: distance from Sun, km
  // info card
  type: string;              // human-readable classification
  mass?: string;
  temp?: string;
  fact: string;              // adult blurb, real numbers
  kidFact?: string;          // 5-year-old blurb
  emoji?: string;
  flags?: string[];          // 'THEORETICAL' | 'HYPOTHETICAL' | 'APPROXIMATE POSITION' | 'REPRESENTATIVE' | 'SIZE UNCERTAIN'
  spinHz?: number;           // pulsars: real spin, for beam animation
  rotationHrs?: number;      // visual rotation
  ring?: { inner: number; outer: number; color: number }; // × radius
}

const fixed = (ra: number, dec: number, ly: number) => ({ ra, dec, distKm: ly * LY });

export const BODIES: Body[] = [
  // ========================== SOLAR SYSTEM ==========================
  {
    id: 'sun', name: 'Sun', kind: 'sun', group: 'solar', radiusKm: SUN_R, color: 0xfff3c0,
    distKm: 0, ra: 0, dec: 0, rotationHrs: 609.12,
    type: 'G2V main-sequence star', mass: '1.989 × 10³⁰ kg (333,000 Earths)', temp: '5,772 K surface / 15.7 million K core',
    fact: 'Contains 99.86% of the solar system\'s mass. Light from its surface takes 8 min 20 s to reach Earth.',
    kidFact: 'The Sun is a giant ball of glowing gas! A million Earths could fit inside it!', emoji: '☀️',
  },
  {
    id: 'mercury', name: 'Mercury', kind: 'planet', group: 'solar', radiusKm: 2439.7, color: 0x9c8e82, rotationHrs: 1407.6,
    orbit: { a: 0.38709927, e: 0.20563593, i: 7.00497902, L: 252.2503235, peri: 77.45779628, node: 48.33076593,
      da: 0.00000037, de: 0.00001906, di: -0.00594749, dL: 149472.67411175, dperi: 0.16047689, dnode: -0.12534081 },
    type: 'Rocky planet', mass: '3.30 × 10²³ kg', temp: '−173 °C to +427 °C',
    fact: 'Smallest planet; a year lasts 88 Earth days but one solar day lasts 176 Earth days.',
    kidFact: 'Mercury is the smallest planet and the fastest — it zooms around the Sun in just 88 days!', emoji: '🪨',
  },
  {
    id: 'venus', name: 'Venus', kind: 'planet', group: 'solar', radiusKm: 6051.8, color: 0xe6c88f, rotationHrs: -5832.5,
    orbit: { a: 0.72333566, e: 0.00677672, i: 3.39467605, L: 181.9790995, peri: 131.60246718, node: 76.67984255,
      da: 0.0000039, de: -0.00004107, di: -0.0007889, dL: 58517.81538729, dperi: 0.00268329, dnode: -0.27769418 },
    type: 'Rocky planet', mass: '4.87 × 10²⁴ kg', temp: '464 °C surface (hottest planet)',
    fact: 'Crushing 92-bar CO₂ atmosphere and a runaway greenhouse effect make it hotter than Mercury. It spins backwards.',
    kidFact: 'Venus is the hottest planet — hot enough to melt a toy truck! And it spins the wrong way!', emoji: '🌕',
  },
  {
    id: 'earth', name: 'Earth', kind: 'planet', group: 'solar', radiusKm: 6371, color: 0x4a7fd4, rotationHrs: 23.934,
    orbit: { a: 1.00000261, e: 0.01671123, i: -0.00001531, L: 100.46457166, peri: 102.93768193, node: 0,
      da: 0.00000562, de: -0.00004392, di: -0.01294668, dL: 35999.37244981, dperi: 0.32327364, dnode: 0 },
    type: 'Rocky planet — home', mass: '5.97 × 10²⁴ kg', temp: '15 °C average',
    fact: 'The only place in the universe known to host life. 71% of the surface is ocean.',
    kidFact: 'This is home! Earth is the only place we know with animals, oceans, and YOU!', emoji: '🌍',
  },
  {
    id: 'mars', name: 'Mars', kind: 'planet', group: 'solar', radiusKm: 3389.5, color: 0xc1613b, rotationHrs: 24.62,
    orbit: { a: 1.52371034, e: 0.0933941, i: 1.84969142, L: -4.55343205, peri: -23.94362959, node: 49.55953891,
      da: 0.00001847, de: 0.00007882, di: -0.00813131, dL: 19140.30268499, dperi: 0.44441088, dnode: -0.29257343 },
    type: 'Rocky planet', mass: '6.42 × 10²³ kg', temp: '−63 °C average',
    fact: 'Home to Olympus Mons (21.9 km, tallest volcano known) and Valles Marineris, a canyon as long as the USA.',
    kidFact: 'Mars is the red planet! It has the biggest volcano in the whole solar system!', emoji: '🔴',
  },
  {
    id: 'jupiter', name: 'Jupiter', kind: 'planet', group: 'solar', radiusKm: 69911, color: 0xc9a789, rotationHrs: 9.925,
    orbit: { a: 5.202887, e: 0.04838624, i: 1.30439695, L: 34.39644051, peri: 14.72847983, node: 100.47390909,
      da: -0.00011607, de: -0.00013253, di: -0.00183714, dL: 3034.74612775, dperi: 0.21252668, dnode: 0.20469106 },
    type: 'Gas giant', mass: '1.90 × 10²⁷ kg (318 Earths)', temp: '−108 °C cloud tops',
    fact: 'More than twice as massive as all other planets combined. The Great Red Spot is a storm larger than Earth, raging for centuries.',
    kidFact: 'Jupiter is the KING of planets — 1,300 Earths could fit inside! Its big red spot is a giant storm!', emoji: '🟠',
  },
  {
    id: 'saturn', name: 'Saturn', kind: 'planet', group: 'solar', radiusKm: 58232, color: 0xd9c08a, rotationHrs: 10.656,
    ring: { inner: 1.24, outer: 2.27, color: 0xcbb887 },
    orbit: { a: 9.53667594, e: 0.05386179, i: 2.48599187, L: 49.95424423, peri: 92.59887831, node: 113.66242448,
      da: -0.0012506, de: -0.00050991, di: 0.00193609, dL: 1222.49362201, dperi: -0.41897216, dnode: -0.28867794 },
    type: 'Gas giant', mass: '5.68 × 10²⁶ kg', temp: '−139 °C cloud tops',
    fact: 'Its rings span 282,000 km yet average only ~10 m thick — mostly water-ice chunks from dust-size to house-size.',
    kidFact: 'Saturn has beautiful rings made of billions of pieces of ice — like a hula hoop of snowballs!', emoji: '🪐',
  },
  {
    id: 'uranus', name: 'Uranus', kind: 'planet', group: 'solar', radiusKm: 25362, color: 0x9fd4d9, rotationHrs: -17.24,
    orbit: { a: 19.18916464, e: 0.04725744, i: 0.77263783, L: 313.23810451, peri: 170.9542763, node: 74.01692503,
      da: -0.00196176, de: -0.00004397, di: -0.00242939, dL: 428.48202785, dperi: 0.40805281, dnode: 0.04240589 },
    type: 'Ice giant', mass: '8.68 × 10²⁵ kg', temp: '−224 °C (coldest atmosphere)',
    fact: 'Rolls around the Sun on its side — its axis is tilted 98°, likely from an ancient giant impact.',
    kidFact: 'Uranus rolls around the Sun on its side, like a ball rolling on the floor!', emoji: '🔵',
  },
  {
    id: 'neptune', name: 'Neptune', kind: 'planet', group: 'solar', radiusKm: 24622, color: 0x4666d9, rotationHrs: 16.11,
    orbit: { a: 30.06992276, e: 0.00859048, i: 1.77004347, L: -55.12002969, peri: 44.96476227, node: 131.78422574,
      da: 0.00026291, de: 0.00005105, di: 0.00035372, dL: 218.45945325, dperi: -0.32241464, dnode: -0.00508664 },
    type: 'Ice giant', mass: '1.02 × 10²⁶ kg', temp: '−201 °C',
    fact: 'Has the fastest winds measured on any planet — up to 2,100 km/h. Found by mathematics before telescopes saw it (1846).',
    kidFact: 'Neptune is the windiest planet — its winds blow faster than a jet plane!', emoji: '💙',
  },
  {
    id: 'pluto', name: 'Pluto', kind: 'dwarf', group: 'solar', radiusKm: 1188.3, color: 0xc4a582, rotationHrs: -153.3,
    orbit: { a: 39.48211675, e: 0.2488273, i: 17.14001206, L: 238.92903833, peri: 224.06891629, node: 110.30393684,
      da: -0.00031596, de: 0.0000517, di: 0.00004818, dL: 145.20780515, dperi: -0.04062942, dnode: -0.01183482 },
    type: 'Dwarf planet (Kuiper belt)', mass: '1.31 × 10²² kg', temp: '−229 °C',
    fact: 'Has a heart-shaped nitrogen-ice glacier (Sputnik Planitia) and five moons. New Horizons flew past in 2015.',
    kidFact: 'Pluto is a tiny ice world with a giant heart shape on it — a heart made of ice!', emoji: '🤍',
  },
  {
    id: 'ceres', name: 'Ceres', kind: 'dwarf', group: 'solar', radiusKm: 469.7, color: 0x8f8a80,
    orbit: { a: 2.7658, e: 0.0785, i: 10.59, L: 95.99, peri: 73.6, node: 80.3 },
    type: 'Dwarf planet (asteroid belt)', mass: '9.38 × 10²⁰ kg',
    fact: 'Largest object in the asteroid belt — a third of the belt\'s entire mass. Has bright salt deposits in Occator crater.',
    kidFact: 'Ceres is a little round world living in the asteroid belt with sparkly salty spots!', emoji: '⚪',
  },
  {
    id: 'eris', name: 'Eris', kind: 'dwarf', group: 'solar', radiusKm: 1163, color: 0xd8d4cc,
    orbit: { a: 67.86, e: 0.4361, i: 44.04, L: 205.0, peri: 187.2, node: 35.95 },
    type: 'Dwarf planet (scattered disc)', mass: '1.66 × 10²² kg',
    fact: 'More massive than Pluto — its discovery in 2005 triggered the "dwarf planet" definition. Takes 559 years to orbit.',
    kidFact: 'Eris is so far away, one trip around the Sun takes over 500 years!', emoji: '❄️',
  },
  {
    id: 'makemake', name: 'Makemake', kind: 'dwarf', group: 'solar', radiusKm: 715, color: 0xc99a78,
    orbit: { a: 45.43, e: 0.161, i: 28.98, L: 165.5, peri: 296.5, node: 79.6 },
    type: 'Dwarf planet (Kuiper belt)', fact: 'A reddish Kuiper-belt world named for the creator god of Rapa Nui (Easter Island).',
    kidFact: 'Makemake is a little red frozen world far past Pluto!', emoji: '🟤',
  },
  {
    id: 'haumea', name: 'Haumea', kind: 'dwarf', group: 'solar', radiusKm: 780, color: 0xdad8d4,
    orbit: { a: 43.12, e: 0.196, i: 28.21, L: 240.2, peri: 240.6, node: 122.2 },
    type: 'Dwarf planet (Kuiper belt)', fact: 'Spins so fast (every 3.9 h) it\'s stretched into an egg shape, and it has its own ring.',
    kidFact: 'Haumea spins so fast it got squished into an egg shape!', emoji: '🥚',
  },
  {
    id: 'sedna', name: 'Sedna', kind: 'dwarf', group: 'solar', radiusKm: 500, color: 0xb85c48,
    orbit: { a: 506, e: 0.855, i: 11.93, L: 358, peri: 311.3, node: 144.2 },
    type: 'Detached trans-Neptunian object',
    fact: 'One of the most distant known solar-system bodies — its stretched 11,400-year orbit reaches 937 AU from the Sun.',
    kidFact: 'Sedna is SO far away that one of its years lasts more than 11,000 of ours!', emoji: '🧊',
  },
  // Moons
  { id: 'moon', name: 'Moon', kind: 'moon', group: 'solar', parent: 'earth', moonAKm: 384400, moonPdays: 27.322, radiusKm: 1737.4, color: 0xb8b8b0,
    type: 'Earth\'s moon', mass: '7.35 × 10²² kg', fact: 'The only other world humans have walked on (12 people, 1969–1972). It drifts 3.8 cm farther from Earth each year.',
    kidFact: 'The Moon! Astronauts walked here and left footprints that are still there!', emoji: '🌙' },
  { id: 'phobos', name: 'Phobos', kind: 'moon', group: 'solar', parent: 'mars', moonAKm: 9376, moonPdays: 0.319, radiusKm: 11.3, color: 0x8a7d72,
    type: 'Moon of Mars', fact: 'Orbits Mars faster than Mars rotates, and is slowly spiralling in — doomed to break apart in ~50 million years.' },
  { id: 'deimos', name: 'Deimos', kind: 'moon', group: 'solar', parent: 'mars', moonAKm: 23463, moonPdays: 1.263, radiusKm: 6.2, color: 0x9a8d80,
    type: 'Moon of Mars', fact: 'Mars\'s smaller outer moon — from the surface of Mars it looks like a bright star.' },
  { id: 'io', name: 'Io', kind: 'moon', group: 'solar', parent: 'jupiter', moonAKm: 421800, moonPdays: 1.769, radiusKm: 1821.6, color: 0xd9c25a,
    type: 'Moon of Jupiter', fact: 'The most volcanically active body in the solar system — hundreds of volcanoes, some erupting 400 km high.',
    kidFact: 'Io is covered in volcanoes — it looks like a pizza!', emoji: '🍕' },
  { id: 'europa', name: 'Europa', kind: 'moon', group: 'solar', parent: 'jupiter', moonAKm: 671100, moonPdays: 3.551, radiusKm: 1560.8, color: 0xc7b9a4,
    type: 'Moon of Jupiter', fact: 'Beneath its cracked ice shell lies a salty ocean with more water than all Earth\'s oceans — a top target in the search for life.',
    kidFact: 'Europa has a secret ocean hiding under the ice — maybe fish-aliens? Nobody knows yet!', emoji: '🧊' },
  { id: 'ganymede', name: 'Ganymede', kind: 'moon', group: 'solar', parent: 'jupiter', moonAKm: 1070400, moonPdays: 7.155, radiusKm: 2634.1, color: 0x9a938a,
    type: 'Moon of Jupiter', fact: 'The largest moon in the solar system — bigger than the planet Mercury — and the only moon with its own magnetic field.' },
  { id: 'callisto', name: 'Callisto', kind: 'moon', group: 'solar', parent: 'jupiter', moonAKm: 1882700, moonPdays: 16.689, radiusKm: 2410.3, color: 0x7d766e,
    type: 'Moon of Jupiter', fact: 'The most heavily cratered world known — its surface is ~4 billion years old.' },
  { id: 'titan', name: 'Titan', kind: 'moon', group: 'solar', parent: 'saturn', moonAKm: 1221870, moonPdays: 15.945, radiusKm: 2574.7, color: 0xd4a34f,
    type: 'Moon of Saturn', fact: 'The only moon with a thick atmosphere, plus rivers and seas of liquid methane. NASA\'s Dragonfly drone launches to it this decade.',
    kidFact: 'Titan has orange air and lakes — but the lakes aren\'t water, they\'re super-cold natural gas!', emoji: '🟧' },
  { id: 'enceladus', name: 'Enceladus', kind: 'moon', group: 'solar', parent: 'saturn', moonAKm: 238040, moonPdays: 1.37, radiusKm: 252.1, color: 0xe8eef0,
    type: 'Moon of Saturn', fact: 'Shoots geysers of ocean water from its south pole into space — Cassini flew through them and tasted salt and organics.',
    kidFact: 'Enceladus is a snowball moon that squirts water fountains into space!', emoji: '⛲' },
  { id: 'mimas', name: 'Mimas', kind: 'moon', group: 'solar', parent: 'saturn', moonAKm: 185540, moonPdays: 0.942, radiusKm: 198.2, color: 0xb5b5b0,
    type: 'Moon of Saturn', fact: 'Its giant Herschel crater makes it look like the Death Star. Recent evidence suggests a young hidden ocean.' },
  { id: 'iapetus', name: 'Iapetus', kind: 'moon', group: 'solar', parent: 'saturn', moonAKm: 3560820, moonPdays: 79.32, radiusKm: 734.5, color: 0x9a8f7d,
    type: 'Moon of Saturn', fact: 'Two-faced: one hemisphere is coal-black, the other bright ice. A mysterious 13-km-high ridge runs along its equator.' },
  { id: 'titania', name: 'Titania', kind: 'moon', group: 'solar', parent: 'uranus', moonAKm: 435910, moonPdays: 8.706, radiusKm: 788.4, color: 0x9d9992,
    type: 'Moon of Uranus', fact: 'The largest moon of Uranus, seen up close only once — by Voyager 2 in 1986.' },
  { id: 'triton', name: 'Triton', kind: 'moon', group: 'solar', parent: 'neptune', moonAKm: 354759, moonPdays: -5.877, radiusKm: 1353.4, color: 0xc9bfb4,
    type: 'Moon of Neptune', fact: 'Orbits backwards — it\'s a captured Kuiper-belt world (like Pluto) with nitrogen geysers, slowly spiralling toward destruction.' },
  { id: 'charon', name: 'Charon', kind: 'moon', group: 'solar', parent: 'pluto', moonAKm: 19591, moonPdays: 6.387, radiusKm: 606, color: 0x9a9490,
    type: 'Moon of Pluto', fact: 'Half the size of Pluto itself — they orbit a point between them, like a pair of dancers.' },
  // Probes & regions
  { id: 'voyager1', name: 'Voyager 1', kind: 'probe', group: 'solar', radiusKm: 0, color: 0xd4af37,
    ...fixed(17.2, 12.3, 0), distKm: 167.5 * AU, flags: ['APPROXIMATE POSITION'],
    type: 'Interstellar space probe (launched 1977)',
    fact: 'The farthest human-made object — over 167 AU out, in interstellar space. Its signal takes ~23 hours to reach Earth. Carries the Golden Record.',
    kidFact: 'Voyager 1 is a robot explorer — the farthest anything from Earth has EVER gone! It carries golden music for aliens!', emoji: '🛰️' },
  { id: 'voyager2', name: 'Voyager 2', kind: 'probe', group: 'solar', radiusKm: 0, color: 0xd4af37,
    ...fixed(20.1, -58.9, 0), distKm: 139.9 * AU, flags: ['APPROXIMATE POSITION'],
    type: 'Interstellar space probe (launched 1977)',
    fact: 'The only spacecraft to visit all four giant planets. Entered interstellar space in 2018.' },
  { id: 'belt', name: 'Asteroid belt', kind: 'region', group: 'solar', radiusKm: 0, color: 0x8a8378, distKm: 2.7 * AU, ra: 6, dec: 0, flags: ['REPRESENTATIVE'],
    type: 'Region: 2.1–3.3 AU', fact: 'Millions of rocky bodies, yet so spread out that spacecraft fly through without aiming. Total mass: ~3% of the Moon.',
    kidFact: 'A ring of millions of space rocks! But they\'re really far apart — not crowded like in movies.', emoji: '💫' },
  { id: 'kuiper', name: 'Kuiper belt', kind: 'region', group: 'solar', radiusKm: 0, color: 0x7a8ba0, distKm: 40 * AU, ra: 12, dec: 0, flags: ['REPRESENTATIVE'],
    type: 'Region: 30–50 AU', fact: 'A donut of icy leftovers from the solar system\'s formation — home of Pluto, Makemake, Haumea, and comets.' },
  { id: 'oort', name: 'Oort cloud', kind: 'region', group: 'solar', radiusKm: 0, color: 0x6a7d95, distKm: 20000 * AU, ra: 3, dec: 20, flags: ['THEORETICAL', 'REPRESENTATIVE'],
    type: 'Predicted region: ~2,000–100,000 AU',
    fact: 'A predicted vast shell of trillions of icy bodies — the source of long-period comets. Never directly observed, but strongly inferred.',
    kidFact: 'A giant invisible bubble of sleeping comets around our whole solar system!', emoji: '🫧' },
  { id: 'planet9', name: 'Planet Nine', kind: 'exhibit', group: 'hypo', radiusKm: 22000, color: 0x7a9ac9,
    orbit: { a: 500, e: 0.25, i: 20, L: 120, peri: 150, node: 100 }, flags: ['HYPOTHETICAL'],
    type: 'Hypothetical planet (~5–10 Earth masses)',
    fact: 'Proposed to explain the clustered orbits of distant Kuiper-belt objects. Predicted at roughly 400–800 AU. Never observed — it may not exist. Position shown is illustrative.',
    kidFact: 'Scientists are playing hide-and-seek with a maybe-planet way out here — nobody has found it yet!', emoji: '❓' },

  // ========================== STARS (real, Gaia/Hipparcos) ==========================
  { id: 'proxima', name: 'Proxima Centauri', kind: 'star', group: 'stars', radiusKm: 0.154 * SUN_R, color: 0xff9d6f, ...fixed(14.495, -62.68, 4.246),
    type: 'M5.5V red dwarf — nearest star to the Sun', temp: '3,042 K',
    fact: 'Our nearest stellar neighbour, 4.246 ly away. Hosts Proxima b, an Earth-size planet in the habitable zone. Even so, today\'s fastest probes would need ~75,000 years to get there.',
    kidFact: 'The Sun\'s nearest neighbour star! Even a super-fast rocket would take thousands of years to visit.', emoji: '⭐' },
  { id: 'alphacen', name: 'Alpha Centauri A', kind: 'star', group: 'stars', radiusKm: 1.22 * SUN_R, color: 0xfff4e0, ...fixed(14.66, -60.83, 4.37),
    type: 'G2V star (Sun\'s twin) in a triple system', temp: '5,790 K',
    fact: 'The brighter member of the closest star system — almost an identical twin of our Sun, with companion Alpha Centauri B orbiting nearby.' },
  { id: 'barnard', name: "Barnard's Star", kind: 'star', group: 'stars', radiusKm: 0.196 * SUN_R, color: 0xffab7a, ...fixed(17.963, 4.69, 5.96),
    type: 'M4V red dwarf', fact: 'Has the fastest apparent motion of any star — it crosses a Moon-width of sky every 175 years.' },
  { id: 'wolf359', name: 'Wolf 359', kind: 'star', group: 'stars', radiusKm: 0.16 * SUN_R, color: 0xff9a66, ...fixed(10.94, 7.01, 7.86),
    type: 'M6V red dwarf', fact: 'One of the faintest and smallest ordinary stars known — barely bigger than Jupiter, 100,000× dimmer than the Sun.' },
  { id: 'sirius', name: 'Sirius A', kind: 'star', group: 'stars', radiusKm: 1.711 * SUN_R, color: 0xd9e8ff, ...fixed(6.752, -16.72, 8.66),
    type: 'A1V star — brightest in Earth\'s night sky', temp: '9,940 K',
    fact: 'The brightest star in our night sky, 25× more luminous than the Sun. Ancient Egyptians timed the Nile flood by its rising.',
    kidFact: 'Sirius is the brightest twinkle in our whole night sky — the Dog Star!', emoji: '🌟' },
  { id: 'siriusb', name: 'Sirius B', kind: 'whitedwarf', group: 'exotic', radiusKm: 0.0084 * SUN_R, color: 0xcfe0ff, ...fixed(6.752, -16.72, 8.66),
    type: 'White dwarf — dead star core', temp: '25,000 K', mass: '1.02 solar masses',
    fact: 'A dead star\'s core: the mass of the Sun crushed into a ball the size of Earth. One teaspoon weighs ~5 tonnes.',
    kidFact: 'A whole star squeezed into a ball as small as Earth — one spoonful weighs as much as an elephant!', emoji: '💎' },
  { id: 'epseri', name: 'Epsilon Eridani', kind: 'star', group: 'stars', radiusKm: 0.735 * SUN_R, color: 0xffd9a3, ...fixed(3.549, -9.46, 10.47),
    type: 'K2V orange dwarf', fact: 'A young nearby star with a known Jupiter-like planet and a dusty asteroid belt.' },
  { id: 'taucet', name: 'Tau Ceti', kind: 'star', group: 'stars', radiusKm: 0.793 * SUN_R, color: 0xffe8c4, ...fixed(1.734, -15.94, 11.9),
    type: 'G8V star', fact: 'The nearest single Sun-like star, with at least four candidate planets — a science-fiction favourite for centuries.' },
  { id: 'procyon', name: 'Procyon', kind: 'star', group: 'stars', radiusKm: 2.05 * SUN_R, color: 0xfff0d4, ...fixed(7.655, 5.22, 11.46),
    type: 'F5IV subgiant', fact: 'A star beginning to swell into a giant as its core hydrogen runs out — a preview of our Sun\'s far future.' },
  { id: 'trappist1', name: 'TRAPPIST-1', kind: 'star', group: 'stars', radiusKm: 0.121 * SUN_R, color: 0xff8a5c, ...fixed(23.108, -5.04, 40.7),
    type: 'M8V ultra-cool dwarf with 7 planets', temp: '2,566 K',
    fact: 'A Jupiter-sized star with SEVEN Earth-size planets, several in the habitable zone. From one planet, the others loom larger than our Moon.',
    kidFact: 'A tiny star with seven Earth-sized planets snuggled close — imagine seven worlds in one sky!', emoji: '🪄' },
  { id: 'vega', name: 'Vega', kind: 'star', group: 'stars', radiusKm: 2.36 * SUN_R, color: 0xe4edff, ...fixed(18.616, 38.78, 25.04),
    type: 'A0V star', fact: 'The historical "zero point" for stellar brightness. It spins so fast it bulges — its poles are 2,000 K hotter than its equator.' },
  { id: 'altair', name: 'Altair', kind: 'star', group: 'stars', radiusKm: 1.8 * SUN_R, color: 0xeef2ff, ...fixed(19.846, 8.87, 16.7),
    type: 'A7V star', fact: 'Spins once every 8.9 hours (the Sun takes ~25 days) — it\'s flattened into an egg shape.' },
  { id: 'fomalhaut', name: 'Fomalhaut', kind: 'star', group: 'stars', radiusKm: 1.84 * SUN_R, color: 0xe8f0ff, ...fixed(22.96, -29.62, 25.1),
    type: 'A3V star', fact: 'Surrounded by a spectacular dust ring imaged by Hubble and JWST — "The Eye of Sauron."' },
  { id: 'arcturus', name: 'Arcturus', kind: 'star', group: 'stars', radiusKm: 25.4 * SUN_R, color: 0xffcf94, ...fixed(14.261, 19.18, 36.7),
    type: 'K1.5III red giant', fact: 'The brightest star in the northern celestial hemisphere — an old star from the galaxy\'s thick disk, passing through our neighbourhood.' },
  { id: 'capella', name: 'Capella', kind: 'star', group: 'stars', radiusKm: 11.98 * SUN_R, color: 0xfff0c9, ...fixed(5.278, 46.0, 42.9),
    type: 'G-type giant pair', fact: 'Actually four stars: two giant suns orbiting each other closer than Earth orbits the Sun, plus two red dwarfs.' },
  { id: 'pollux', name: 'Pollux', kind: 'star', group: 'stars', radiusKm: 8.8 * SUN_R, color: 0xffd9a8, ...fixed(7.755, 28.03, 33.8),
    type: 'K0III giant', fact: 'The nearest giant star, with a confirmed planet — Pollux b, twice Jupiter\'s mass.' },
  { id: 'aldebaran', name: 'Aldebaran', kind: 'star', group: 'stars', radiusKm: 44.13 * SUN_R, color: 0xffb877, ...fixed(4.599, 16.51, 65.3),
    type: 'K5III red giant', fact: 'The fiery eye of Taurus the Bull — 44× the Sun\'s width. The Pioneer 10 probe is drifting toward it (arrival: ~2 million years).' },
  { id: 'regulus', name: 'Regulus', kind: 'star', group: 'stars', radiusKm: 4.35 * SUN_R, color: 0xdce8ff, ...fixed(10.139, 11.97, 79.3),
    type: 'B8IV star', fact: 'Spins at 96% of its break-up speed — any faster and it would fly apart.' },
  { id: 'castor', name: 'Castor', kind: 'star', group: 'stars', radiusKm: 2.4 * SUN_R, color: 0xe6eeff, ...fixed(7.577, 31.89, 51),
    type: 'Sextuple star system', fact: 'Looks like one star; is actually SIX — three pairs all bound together in a gravitational dance.' },
  { id: 'polaris', name: 'Polaris', kind: 'star', group: 'stars', radiusKm: 37.5 * SUN_R, color: 0xfff2d9, ...fixed(2.53, 89.26, 433),
    type: 'F7Ib supergiant — the North Star', fact: 'Sits almost exactly above Earth\'s north pole, so the whole sky appears to wheel around it. Navigators have steered by it for millennia.',
    kidFact: 'The North Star! It always points north — explorers used it so they never got lost!', emoji: '🧭' },
  { id: 'spica', name: 'Spica', kind: 'star', group: 'stars', radiusKm: 7.47 * SUN_R, color: 0xcdddff, ...fixed(13.42, -11.16, 250),
    type: 'B1III-IV binary', fact: 'Two blue-hot stars orbiting each other every four days, so close they distort each other into egg shapes.' },
  { id: 'achernar', name: 'Achernar', kind: 'star', group: 'stars', radiusKm: 9.16 * SUN_R, color: 0xd4e4ff, ...fixed(1.629, -57.24, 139),
    type: 'B6V star', fact: 'The flattest star known — spinning so fast its equator bulges 35% wider than its poles.' },
  { id: 'canopus', name: 'Canopus', kind: 'star', group: 'stars', radiusKm: 71 * SUN_R, color: 0xf7f4e8, ...fixed(6.4, -52.7, 310),
    type: 'A9II bright giant', fact: 'The second-brightest star in the night sky, 10,000× the Sun\'s luminosity. Spacecraft use it as a navigation beacon.' },
  { id: 'alcyone', name: 'Alcyone (Pleiades)', kind: 'star', group: 'stars', radiusKm: 9.3 * SUN_R, color: 0xd9e6ff, ...fixed(3.79, 24.1, 440),
    type: 'B7III — brightest of the Pleiades', fact: 'Leader of the Seven Sisters cluster: ~1,000 young stars born together 100 million years ago, still wrapped in wisps of blue dust.',
    kidFact: 'The Seven Sisters — a family of baby stars all born together, still glowing blue!', emoji: '✨' },
  { id: 'betelgeuse', name: 'Betelgeuse', kind: 'star', group: 'stars', radiusKm: 764 * SUN_R, color: 0xff7a45, ...fixed(5.919, 7.41, 548),
    type: 'M2Iab red supergiant', temp: '3,600 K', mass: '~17 solar masses',
    fact: 'If placed at the Sun\'s position it would swallow Mercury, Venus, Earth, Mars, and Jupiter. It will explode as a supernova sometime in the next ~100,000 years — briefly outshining the full Moon.',
    kidFact: 'Betelgeuse is a MONSTER star! If it sat where our Sun is, it would gobble up Earth AND Jupiter! One day it will go BOOM!', emoji: '💥' },
  { id: 'antares', name: 'Antares', kind: 'star', group: 'stars', radiusKm: 680 * SUN_R, color: 0xff6f42, ...fixed(16.49, -26.43, 550),
    type: 'M1.5Iab red supergiant', fact: 'The "rival of Mars" — a dying red supergiant 10,000× brighter than the Sun, destined for supernova.' },
  { id: 'rigel', name: 'Rigel', kind: 'star', group: 'stars', radiusKm: 78.9 * SUN_R, color: 0xcfe0ff, ...fixed(5.242, -8.2, 863),
    type: 'B8Ia blue supergiant', fact: 'A blue supergiant 120,000× as luminous as the Sun — the true powerhouse of Orion.' },
  { id: 'deneb', name: 'Deneb', kind: 'star', group: 'stars', radiusKm: 203 * SUN_R, color: 0xe8efff, ...fixed(20.69, 45.28, 2615),
    type: 'A2Ia white supergiant', fact: 'One of the most luminous stars visible to the naked eye — ~200,000 Suns — shining across 2,600 light-years.' },
  { id: 'mucep', name: 'Mu Cephei (Garnet Star)', kind: 'star', group: 'stars', radiusKm: 1075 * SUN_R, color: 0xff5c33, ...fixed(21.725, 58.78, 2840), flags: ['SIZE UNCERTAIN'],
    type: 'M2Ia red hypergiant', fact: 'Herschel\'s "Garnet Star" — so deeply red it looks like a glowing ember, and so large its edge would reach past Jupiter.' },
  { id: 'etacar', name: 'Eta Carinae', kind: 'star', group: 'stars', radiusKm: 240 * SUN_R, color: 0xd9c9ff, ...fixed(10.75, -59.68, 7500),
    type: 'Luminous blue variable, ~100 M☉', fact: 'One of the most massive known stars. In the 1840s it erupted so violently it briefly became the sky\'s second-brightest star — and it survived. Next time may be a supernova.' },
  { id: 'vycma', name: 'VY Canis Majoris', kind: 'star', group: 'stars', radiusKm: 1420 * SUN_R, color: 0xff6636, ...fixed(7.38, -25.77, 3900), flags: ['SIZE UNCERTAIN'],
    type: 'M-type red hypergiant', fact: 'One of the largest known stars: ~1,420 solar radii. Light takes over 6 hours just to cross its surface diameter.',
    kidFact: 'This star is SO big that if it were a bowl, you could pour 3 billion Suns inside!', emoji: '🤯' },
  { id: 'uyscuti', name: 'UY Scuti', kind: 'star', group: 'stars', radiusKm: 1708 * SUN_R, color: 0xff7040, ...fixed(18.46, -12.46, 5900), flags: ['SIZE UNCERTAIN'],
    type: 'M4Ia red supergiant', fact: 'Long listed among the largest stars known (~1,708 R☉, though estimates vary widely). Placed at the Sun, its surface would reach near Saturn.' },
  { id: 'steph218', name: 'Stephenson 2-18', kind: 'star', group: 'stars', radiusKm: 2150 * SUN_R, color: 0xff5c2e, ...fixed(18.66, -6.05, 19000), flags: ['SIZE UNCERTAIN'],
    type: 'Red supergiant — largest-known candidate', fact: 'Possibly the largest star known: ~2,150 solar radii, meaning ~10 billion Suns could fit inside. Measurement is genuinely uncertain — it may be "only" 1,000 R☉.',
    kidFact: 'Maybe the biggest star anyone has EVER found. Ten billion Suns could fit inside it!', emoji: '🐘' },
  { id: 'r136a1', name: 'R136a1', kind: 'star', group: 'stars', radiusKm: 42 * SUN_R, color: 0xcfe4ff, ...fixed(5.645, -69.1, 163000),
    type: 'WN5h Wolf–Rayet — most massive known star', mass: '~200 solar masses',
    fact: 'The most massive and one of the most luminous stars known (~4.6 million Suns), living in the Tarantula Nebula of the Large Magellanic Cloud.' },

  // ========================== EXOTIC / COMPACT OBJECTS ==========================
  { id: 'sgra', name: 'Sagittarius A*', kind: 'blackhole', group: 'exotic', radiusKm: 1.227e7, color: 0xffb35c, ...fixed(17.761, -29.01, 26670),
    mass: '4.15 million solar masses', type: 'Supermassive black hole — centre of our galaxy',
    fact: 'The supermassive black hole our entire galaxy orbits. Imaged by the Event Horizon Telescope in 2022. Stars near it whip around at up to 8% of light speed. Radius shown = event horizon (~12 million km).',
    kidFact: 'A giant black hole in the middle of our galaxy! Its gravity is SO strong that even light can\'t escape — that\'s why it\'s black!', emoji: '🕳️' },
  { id: 'm87bh', name: 'M87*', kind: 'blackhole', group: 'exotic', radiusKm: 1.92e10, color: 0xff9d4d, ...fixed(12.514, 12.39, 53.5e6),
    mass: '6.5 billion solar masses', type: 'Supermassive black hole — first ever imaged',
    fact: 'The first black hole ever photographed (Event Horizon Telescope, 2019). Its event horizon is 2.5× wider than Pluto\'s whole orbit, and it launches a plasma jet 5,000 light-years long.',
    kidFact: 'The first black hole anyone ever took a picture of! It\'s bigger than our WHOLE solar system!', emoji: '📸' },
  { id: 'ton618', name: 'TON 618', kind: 'blackhole', group: 'exotic', radiusKm: 1.95e11, color: 0xffc46b, ...fixed(12.514, 31.29, 10.4e9),
    mass: '~66 billion solar masses', type: 'Ultramassive black hole (quasar)', flags: ['SIZE UNCERTAIN'],
    fact: 'One of the most massive black holes known — ~66 billion Suns. Its event horizon alone is ~40× the Sun–Pluto distance. Powers a quasar shining with 140 trillion Suns\' light.',
    kidFact: 'The biggest black hole we know! It\'s so heavy it weighs as much as 66 BILLION Suns!', emoji: '👑' },
  { id: 'cygx1', name: 'Cygnus X-1', kind: 'blackhole', group: 'exotic', radiusKm: 62, color: 0x9fb8ff, ...fixed(19.972, 35.2, 7240),
    mass: '21 solar masses', type: 'Stellar-mass black hole',
    fact: 'The first black hole ever confirmed (Stephen Hawking famously lost a bet about it). It devours gas from a giant companion star, glowing in X-rays.' },
  { id: 'gaiabh1', name: 'Gaia BH1', kind: 'blackhole', group: 'exotic', radiusKm: 29, color: 0x8aa8f0, ...fixed(17.478, -0.58, 1560),
    mass: '9.6 solar masses', type: 'Nearest known black hole',
    fact: 'The closest known black hole to Earth — just 1,560 light-years away — discovered in 2022 by the wobble of a Sun-like star orbiting it.' },
  { id: 'crab', name: 'Crab Pulsar', kind: 'neutron', group: 'exotic', radiusKm: 10, color: 0xbfe4ff, ...fixed(5.575, 22.01, 6500), spinHz: 30,
    mass: '1.4 solar masses', type: 'Neutron star / pulsar', temp: '~1.6 million K surface',
    fact: 'The crushed core of a supernova Chinese astronomers watched explode in 1054 AD. A city-sized ball spinning 30 times per second, sweeping lighthouse beams across space. A teaspoon of it weighs ~a billion tonnes.',
    kidFact: 'A whole star squished into a ball the size of a city, spinning 30 times every second — like a cosmic lighthouse!', emoji: '💡' },
  { id: 'vela', name: 'Vela Pulsar', kind: 'neutron', group: 'exotic', radiusKm: 10, color: 0xc4e8ff, ...fixed(8.59, -45.18, 959), spinHz: 11.2,
    mass: '~1.4 solar masses', type: 'Neutron star / pulsar',
    fact: 'One of the closest pulsars, born in a supernova ~11,000 years ago. It occasionally "glitches" — suddenly spinning faster as its superfluid interior slips.' },
  { id: 'psr1919', name: 'PSR B1919+21', kind: 'neutron', group: 'exotic', radiusKm: 10, color: 0xd0eaff, ...fixed(19.36, 21.88, 2283), spinHz: 0.75,
    type: 'Neutron star — the first pulsar discovered',
    fact: 'The first pulsar ever found (Jocelyn Bell Burnell, 1967). Its metronome-steady radio blips were half-jokingly labelled "LGM-1" — Little Green Men.' },
  { id: 'magnetar', name: 'SGR 1806−20', kind: 'neutron', group: 'exotic', radiusKm: 10, color: 0xe0c4ff, ...fixed(18.14, -20.41, 42000), spinHz: 0.13,
    type: 'Magnetar — strongest magnet known',
    fact: 'A neutron star with a magnetic field a quadrillion times Earth\'s. Its 2004 starquake flash was the brightest event ever seen from outside our solar system — it measurably zapped Earth\'s atmosphere from 42,000 ly away.',
    kidFact: 'The strongest magnet in the universe! It could pull the keys out of your pocket from as far away as the Moon!', emoji: '🧲' },
  { id: 'rxj1856', name: 'RX J1856.5−3754', kind: 'neutron', group: 'exotic', radiusKm: 10, color: 0xcfe8ff, ...fixed(18.94, -37.9, 400),
    type: 'Nearest known neutron star',
    fact: 'A quiet, lone neutron star drifting just ~400 light-years away — close enough for Hubble to see its bare, million-degree surface directly.' },
  { id: 'quarkstar', name: '3C 58 (quark star?)', kind: 'quark', group: 'hypo', radiusKm: 8, color: 0x8fffd9, ...fixed(2.09, 64.83, 10000), spinHz: 15.4, flags: ['THEORETICAL'],
    type: 'Pulsar — quark star candidate',
    fact: 'A real pulsar that seems too cold and too small for a normal neutron star. Some physicists propose it may be a QUARK STAR — matter crushed one step further, into a soup of free quarks. Unproven; most likely explanation is still an unusual neutron star.',
    kidFact: 'Maybe a star made of the tiniest pieces of anything — pieces smaller than small! Scientists are still figuring it out.', emoji: '🧪' },
  { id: 'whitehole', name: 'White hole (concept)', kind: 'exhibit', group: 'hypo', radiusKm: 1e7, color: 0xffffff, ...fixed(9.5, 40, 3.0e6), flags: ['HYPOTHETICAL'],
    type: 'Hypothetical object — never observed',
    fact: 'The mathematical time-reverse of a black hole: a region nothing can ENTER, only leave. Allowed by Einstein\'s equations, but no known way to form one — none has ever been observed. This exhibit is placed at an arbitrary location.',
    kidFact: 'A pretend "opposite" black hole — instead of swallowing things, it would only spit them out! Nobody has ever seen one. It\'s an idea!', emoji: '⚪' },

  // ========================== GALAXIES & DEEP SPACE ==========================
  { id: 'lmc', name: 'Large Magellanic Cloud', kind: 'galaxy', group: 'deep', radiusKm: 7000 * LY, color: 0xbcd0ff, ...fixed(5.4, -69.76, 163000),
    type: 'Dwarf satellite galaxy of the Milky Way', fact: 'Our galaxy\'s brightest companion, home to the Tarantula Nebula — the most violent star-forming region in the Local Group. Visible to the naked eye from the southern hemisphere.' },
  { id: 'smc', name: 'Small Magellanic Cloud', kind: 'galaxy', group: 'deep', radiusKm: 3500 * LY, color: 0xb5c8f5, ...fixed(0.88, -72.83, 200000),
    type: 'Dwarf satellite galaxy', fact: 'A small galaxy being slowly pulled apart by the Milky Way\'s gravity, trailing a stream of gas across the sky.' },
  { id: 'andromeda', name: 'Andromeda Galaxy (M31)', kind: 'galaxy', group: 'deep', radiusKm: 110000 * LY, color: 0xd6ddff, ...fixed(0.712, 41.27, 2.537e6),
    type: 'Spiral galaxy — nearest large galaxy', mass: '~1 trillion solar masses',
    fact: 'A trillion stars, 2.5 million light-years away — the farthest thing visible to the naked eye. It\'s approaching us at 110 km/s and will merge with the Milky Way in ~4.5 billion years.',
    kidFact: 'A whole other galaxy with a TRILLION stars! One day, in a super long time, it will give our galaxy a big hug and they\'ll become one!', emoji: '🌌' },
  { id: 'triangulum', name: 'Triangulum Galaxy (M33)', kind: 'galaxy', group: 'deep', radiusKm: 30000 * LY, color: 0xc9d6ff, ...fixed(1.564, 30.66, 2.73e6),
    type: 'Spiral galaxy', fact: 'The third-largest galaxy in our Local Group — a face-on spiral bursting with newborn stars.' },
  { id: 'whirlpool', name: 'Whirlpool Galaxy (M51)', kind: 'galaxy', group: 'deep', radiusKm: 38000 * LY, color: 0xccdaff, ...fixed(13.5, 47.2, 28e6),
    type: 'Interacting spiral galaxy', fact: 'The textbook spiral — its perfect arms are being wound up by a small companion galaxy tugging on it.' },
  { id: 'sombrero', name: 'Sombrero Galaxy (M104)', kind: 'galaxy', group: 'deep', radiusKm: 25000 * LY, color: 0xe0d9c9, ...fixed(12.666, -11.62, 29.3e6),
    type: 'Lenticular galaxy', fact: 'A brilliant bulge wrapped in a dark dust ring — housing a billion-solar-mass black hole.' },
  { id: 'm87', name: 'Messier 87', kind: 'galaxy', group: 'deep', radiusKm: 60000 * LY, color: 0xf0e8d9, ...fixed(12.514, 12.39, 53.5e6),
    type: 'Giant elliptical galaxy', fact: 'The monster of the Virgo Cluster: several trillion stars, 15,000 globular clusters, and the famous M87* black hole at its heart.' },
  { id: 'virgo', name: 'Virgo Cluster', kind: 'cluster', group: 'deep', radiusKm: 7.5e6 * LY, color: 0xd9d2f0, ...fixed(12.5, 12.7, 53.8e6),
    type: 'Galaxy cluster (~1,300 galaxies)', fact: 'The nearest big galaxy cluster — its gravity is the anchor of our entire Local Group\'s neighbourhood, the Virgo Supercluster.' },
  { id: 'coma', name: 'Coma Cluster', kind: 'cluster', group: 'deep', radiusKm: 10e6 * LY, color: 0xd4ccee, ...fixed(13.0, 27.98, 321e6),
    type: 'Galaxy cluster (~1,000 galaxies)', fact: 'Where dark matter was first inferred: in 1933 Fritz Zwicky noticed its galaxies move far too fast for the visible mass to hold them together.' },
  { id: 'greatattractor', name: 'Great Attractor', kind: 'cluster', group: 'deep', radiusKm: 15e6 * LY, color: 0xe8c9d4, ...fixed(16.25, -60, 220e6), flags: ['APPROXIMATE POSITION'],
    type: 'Gravitational anomaly (Norma Cluster region)',
    fact: 'A vast concentration of mass pulling the Milky Way and millions of other galaxies toward it at ~600 km/s. Hidden behind our galaxy\'s dust, it\'s never been fully seen.',
    kidFact: 'Something HUGE and invisible is gently pulling our whole galaxy toward it, like a river current. Whoooosh!', emoji: '🌀' },
  { id: 'shapley', name: 'Shapley Supercluster', kind: 'cluster', group: 'deep', radiusKm: 5e7 * LY, color: 0xdcc9e8, ...fixed(13.42, -31.5, 650e6),
    type: 'Supercluster — greatest mass concentration nearby', fact: 'The largest concentration of galaxies in our cosmic neighbourhood — over 8,000 galaxies whose combined pull helps drag everything around us, including us.' },
  { id: '3c273', name: '3C 273', kind: 'quasar', group: 'deep', radiusKm: 1e10, color: 0xcfe4ff, ...fixed(12.485, 2.05, 2.4e9),
    type: 'Quasar — first ever identified',
    fact: 'The first quasar recognized (1963): a feeding supermassive black hole shining 4 trillion times brighter than the Sun. If it sat 30 ly away, it would rival the Sun in our sky.' },
  { id: 'gnz14', name: 'JADES-GS-z14-0', kind: 'galaxy', group: 'deep', radiusKm: 1600 * LY, color: 0xffb3b3, ...fixed(3.53, -27.8, 13.5e9),
    type: 'Most distant confirmed galaxy (z = 14.3)',
    fact: 'Discovered by JWST in 2024 — its light left when the universe was only ~290 million years old. We see it as it was 13.5 billion years ago.',
    kidFact: 'The light from this baby galaxy traveled for 13 and a half BILLION years to reach your eyes — the oldest light show ever!', emoji: '👶' },
  { id: 'cmb', name: 'Cosmic microwave background', kind: 'region', group: 'deep', radiusKm: 0, color: 0xffcf9e, ...fixed(0, 0, 45.4e9), flags: ['REPRESENTATIVE'],
    type: 'The edge of the observable universe',
    fact: 'The oldest light in existence — released 380,000 years after the Big Bang, now stretched to microwaves, arriving from every direction. Beyond this we cannot see: the universe was opaque. Comoving distance ~45.4 billion ly.',
    kidFact: 'This is the baby picture of the WHOLE universe — the very first light there ever was, and it\'s all around us!', emoji: '📻' },
];

// Milky Way structural constants (for the procedural galaxy)
export const GALACTIC_CENTER = { ra: 17.7611, dec: -29.008 }; // Sgr A*
export const GALACTIC_NORTH = { ra: 12.8573, dec: 27.128 };   // NGP (J2000)
export const SUN_GC_DIST = 26670 * LY;                        // km
export const MILKY_WAY_R = 52850 * LY;                        // km

export const byId = new Map(BODIES.map((b) => [b.id, b]));

export const GROUP_LABELS: Record<Group, string> = {
  solar: 'Solar System',
  stars: 'Stars',
  exotic: 'Black Holes & Dead Stars',
  deep: 'Galaxies & Deep Space',
  hypo: 'Hypothetical & Theoretical',
};

// Kid-mode tour stops, in order
export const KID_STOPS = [
  'sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn',
  'uranus', 'neptune', 'pluto', 'voyager1', 'proxima', 'trappist1',
  'betelgeuse', 'siriusb', 'crab', 'magnetar', 'sgra', 'andromeda', 'gnz14', 'cmb',
];
