/**
 * Generates project cover art as SVG.
 *
 * Why these look the way they do:
 *   - Cards render the cover at 180px tall with `background-size: cover` and a
 *     dark gradient laid over it, so anything fine-grained turns to mush. Every
 *     motif here is built from large forms only.
 *   - The card body already prints title, year, and category, so covers carry no
 *     text. Duplicating it would just be noise.
 *   - Each cover is drawn from that project's own `palette` in portfolio.js, so
 *     the art, the card background colour, and the badge border all agree.
 *   - Composition keeps the bottom-left quiet, because the category badge and
 *     the "View project" label sit there.
 *
 * Run: node scripts/gen-covers.mjs
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../public/projects");
const W = 1200;
const H = 800;

/* ---------- colour helpers ---------- */

const hex = (c) => {
  const v = c.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16));
};
const toHex = (rgb) =>
  "#" + rgb.map((n) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0")).join("");
const mix = (a, b, t) => {
  const [x, y] = [hex(a), hex(b)];
  return toHex(x.map((v, i) => v + (y[i] - v) * t));
};
const shade = (c, t) => mix(c, "#000000", t);

/* ---------- shared field ---------- */

function field(p) {
  const [deep, mid, light] = p;
  return `
  <defs>
    <linearGradient id="f" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${mix(deep, "#000000", 0.28)}"/>
      <stop offset="0.55" stop-color="${deep}"/>
      <stop offset="1" stop-color="${mix(deep, mid, 0.42)}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.72" cy="0.28" r="0.62">
      <stop offset="0" stop-color="${mid}" stop-opacity="0.42"/>
      <stop offset="1" stop-color="${mid}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sheen" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="${light}" stop-opacity="0"/>
      <stop offset="1" stop-color="${light}" stop-opacity="0.14"/>
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" fill="none" stroke="${light}" stroke-opacity="0.07" stroke-width="1.5"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#f)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#sheen)"/>`;
}

/* ---------- motifs ----------
   Each receives [deep, mid, light] and draws into a 1200x800 field.

   SAFE BAND: cards are ~2.2:1 but the source is 1.5:1, and `background-size:
   cover` fills width then crops top and bottom. That leaves roughly y=150 to
   y=650 visible on a card. Anything outside it is cut off, so every motif is
   composed inside that band. Keep strokes >= 8px and shapes >= 90px too, or
   they vanish at 180px tall. */

const M = {
  // Exponential decay with dose markers.
  doseCurve: ([, mid, light]) => `
  <path d="M170 250 C 430 250 560 470 1040 610" fill="none" stroke="${light}" stroke-opacity="0.22" stroke-width="46" stroke-linecap="round"/>
  <path d="M170 250 C 430 250 560 470 1040 610" fill="none" stroke="${light}" stroke-width="14" stroke-linecap="round"/>
  ${[[170, 250], [455, 300], [700, 452], [1040, 610]]
    .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${34 - i * 3}" fill="${light}"/>
  <circle cx="${x}" cy="${y}" r="${58 - i * 4}" fill="none" stroke="${light}" stroke-opacity="0.45" stroke-width="7"/>`)
    .join("\n  ")}
  <rect x="170" y="646" width="870" height="12" rx="6" fill="${mid}" fill-opacity="0.5"/>`,

  // Stacked documents with a spark.
  docStack: ([, mid, light]) => `
  <g>
    <rect x="252" y="272" width="366" height="358" rx="28" fill="${light}" fill-opacity="0.16"/>
    <rect x="300" y="236" width="366" height="358" rx="28" fill="${light}" fill-opacity="0.26"/>
    <rect x="348" y="200" width="366" height="358" rx="28" fill="${light}"/>
    ${[264, 326, 388, 450].map((y, i) => `<rect x="398" y="${y}" width="${266 - i * 44}" height="24" rx="12" fill="${mid}" fill-opacity="0.55"/>`).join("\n    ")}
  </g>
  <g transform="translate(886 322)">
    <path d="M0 -118 L30 -30 L118 0 L30 30 L0 118 L-30 30 L-118 0 L-30 -30 Z" fill="${light}"/>
    <circle cx="0" cy="0" r="164" fill="none" stroke="${light}" stroke-opacity="0.35" stroke-width="9"/>
  </g>`,

  // Node graph with an orbiting ring.
  nodeGraph: ([, mid, light]) => {
    const n = [[600, 400, 72], [346, 252, 42], [890, 264, 48], [868, 552, 44], [334, 540, 38]];
    const edges = n.slice(1).map(([x, y]) => `<line x1="600" y1="400" x2="${x}" y2="${y}" stroke="${light}" stroke-opacity="0.5" stroke-width="10"/>`).join("\n  ");
    return `
  <ellipse cx="600" cy="400" rx="368" ry="222" fill="none" stroke="${light}" stroke-opacity="0.2" stroke-width="9"/>
  ${edges}
  ${n.map(([x, y, r], i) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${i === 0 ? light : mid}"/>${i === 0 ? `<circle cx="${x}" cy="${y}" r="${r + 32}" fill="none" stroke="${light}" stroke-opacity="0.4" stroke-width="8"/>` : ""}`).join("\n  ")}`;
  },

  // Terminal caret and flow.
  terminal: ([deep, mid, light]) => `
  <rect x="196" y="188" width="808" height="424" rx="34" fill="${shade(deep, 0.42)}" fill-opacity="0.92"/>
  <rect x="196" y="188" width="808" height="424" rx="34" fill="none" stroke="${light}" stroke-opacity="0.34" stroke-width="8"/>
  <rect x="196" y="188" width="808" height="76" rx="34" fill="${light}" fill-opacity="0.14"/>
  <rect x="196" y="230" width="808" height="34" fill="${light}" fill-opacity="0.14"/>
  ${[0, 1, 2].map((i) => `<circle cx="${256 + i * 52}" cy="226" r="15" fill="${light}" fill-opacity="${0.85 - i * 0.2}"/>`).join("\n  ")}
  <path d="M262 356 L340 420 L262 484" fill="none" stroke="${light}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="386" y="404" width="300" height="30" rx="15" fill="${mid}"/>
  <rect x="386" y="484" width="200" height="30" rx="15" fill="${light}" fill-opacity="0.45"/>`,

  // Two distinct sides matched through a hub: a marketplace.
  twoSided: ([, mid, light]) => {
    const supply = [[268, 268], [222, 400], [268, 532]];
    const demand = [[932, 268], [978, 400], [932, 532]];
    const spoke = (pts, col) =>
      pts.map(([x, y]) => `<line x1="${x}" y1="${y}" x2="600" y2="400" stroke="${col}" stroke-opacity="0.45" stroke-width="10"/>`).join("\n  ");
    const nodes = (pts, fill) =>
      pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="52" fill="${fill}"/>`).join("\n  ");
    return `
  ${spoke(supply, light)}
  ${spoke(demand, light)}
  <circle cx="600" cy="400" r="196" fill="${mid}" fill-opacity="0.28"/>
  <circle cx="600" cy="400" r="196" fill="none" stroke="${light}" stroke-opacity="0.3" stroke-width="8"/>
  ${nodes(supply, mid)}
  ${nodes(demand, light)}
  <circle cx="600" cy="400" r="96" fill="${light}"/>
  <path d="M556 400 L588 432 L648 368" fill="none" stroke="${mid}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>`;
  },

  // Broadcast arcs from a block.
  broadcast: ([, mid, light]) => `
  <rect x="212" y="325" width="186" height="150" rx="26" fill="${light}"/>
  <rect x="248" y="367" width="116" height="18" rx="9" fill="${mid}"/>
  <rect x="248" y="411" width="78" height="18" rx="9" fill="${mid}" fill-opacity="0.7"/>
  ${[0, 1, 2, 3].map((i) => `<path d="M${436 + i * 20} ${400 - 78 - i * 49} A ${78 + i * 49} ${78 + i * 49} 0 0 1 ${436 + i * 20} ${400 + 78 + i * 49}" fill="none" stroke="${light}" stroke-opacity="${0.85 - i * 0.18}" stroke-width="${20 - i * 3}" stroke-linecap="round"/>`).join("\n  ")}`,

  // Stacked infrastructure layers.
  stack: ([, mid, light]) => `
  ${[0, 1, 2].map((i) => {
    const y = 232 + i * 138;
    return `<rect x="286" y="${y}" width="628" height="106" rx="24" fill="${light}" fill-opacity="${0.9 - i * 0.26}"/>
  <circle cx="352" cy="${y + 53}" r="24" fill="${mid}"/>
  <rect x="410" y="${y + 40}" width="${330 - i * 70}" height="26" rx="13" fill="${mid}" fill-opacity="0.6"/>`;
  }).join("\n  ")}
  ${[0, 1].map((i) => `<path d="M600 ${338 + i * 138} L600 ${370 + i * 138}" stroke="${light}" stroke-width="12" stroke-linecap="round"/>`).join("\n  ")}`,

  // Pass/fail test matrix.
  testGrid: ([, mid, light]) => `
  ${Array.from({ length: 9 }, (_, i) => {
    const x = 388 + (i % 3) * 148;
    const y = 206 + Math.floor(i / 3) * 148;
    const pass = i !== 4;
    return `<rect x="${x}" y="${y}" width="128" height="128" rx="28" fill="${light}" fill-opacity="${pass ? 0.9 : 0.24}"/>
  ${pass
        ? `<path d="M${x + 36} ${y + 66} L${x + 57} ${y + 88} L${x + 94} ${y + 42}" fill="none" stroke="${mid}" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>`
        : `<path d="M${x + 45} ${y + 45} L${x + 83} ${y + 83} M${x + 83} ${y + 45} L${x + 45} ${y + 83}" stroke="${light}" stroke-width="17" stroke-linecap="round"/>`}`;
  }).join("\n  ")}`,

  // Contact records joined by relationship lines. Held inside the safe band.
  crm: ([, mid, light]) => `
  ${[[228, 214], [228, 358], [228, 502]].map(([x, y]) => `<rect x="${x}" y="${y}" width="316" height="118" rx="26" fill="${light}" fill-opacity="0.92"/>
  <circle cx="${x + 66}" cy="${y + 59}" r="32" fill="${mid}"/>
  <rect x="${x + 120}" y="${y + 40}" width="148" height="19" rx="10" fill="${mid}" fill-opacity="0.75"/>
  <rect x="${x + 120}" y="${y + 72}" width="100" height="17" rx="9" fill="${mid}" fill-opacity="0.45"/>`).join("\n  ")}
  ${[273, 417, 561].map((y) => `<path d="M544 ${y} C 672 ${y} 716 400 844 400" fill="none" stroke="${light}" stroke-opacity="0.55" stroke-width="10"/>`).join("\n  ")}
  <circle cx="884" cy="400" r="66" fill="${light}"/>
  <circle cx="884" cy="400" r="96" fill="none" stroke="${light}" stroke-opacity="0.4" stroke-width="8"/>`,

  // Radon projection through a circle.
  sinogram: ([, mid, light]) => `
  <circle cx="600" cy="400" r="248" fill="${mid}" fill-opacity="0.35"/>
  <circle cx="600" cy="400" r="248" fill="none" stroke="${light}" stroke-opacity="0.7" stroke-width="10"/>
  ${Array.from({ length: 7 }, (_, i) => {
    const a = (Math.PI / 7) * i;
    const dx = Math.cos(a) * 330;
    const dy = Math.sin(a) * 330;
    return `<line x1="${600 - dx}" y1="${400 - dy}" x2="${600 + dx}" y2="${400 + dy}" stroke="${light}" stroke-opacity="0.42" stroke-width="9"/>`;
  }).join("\n  ")}
  <circle cx="600" cy="400" r="96" fill="${light}"/>`,

  // Frequency spectrum.
  spectrum: ([, mid, light]) => {
    const bars = [82, 146, 236, 326, 430, 326, 236, 146, 82, 52, 36];
    return `
  ${bars.map((h, i) => `<rect x="${212 + i * 72}" y="${624 - h}" width="46" height="${h}" rx="23" fill="${light}" fill-opacity="${0.42 + (h / 430) * 0.58}"/>`).join("\n  ")}
  <path d="M212 ${624 - 82} ${bars.map((h, i) => `L${235 + i * 72} ${624 - h}`).join(" ")}" fill="none" stroke="${mid}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`;
  },

  // Two comparative arcs.
  compareArcs: ([, mid, light]) => `
  <path d="M240 640 C 400 260 800 260 960 640" fill="none" stroke="${light}" stroke-width="26" stroke-linecap="round"/>
  <path d="M240 660 C 420 420 780 420 960 660" fill="none" stroke="${mid}" stroke-width="26" stroke-linecap="round" stroke-dasharray="54 40"/>
  ${[[240, 640], [960, 640]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="34" fill="${light}"/>`).join("\n  ")}
  <circle cx="600" cy="322" r="46" fill="${light}"/>
  <circle cx="600" cy="440" r="38" fill="${mid}"/>`,

  // Articulated robot arm.
  robotArm: ([, mid, light]) => `
  <rect x="292" y="566" width="228" height="62" rx="22" fill="${light}" fill-opacity="0.85"/>
  <path d="M406 566 L406 388 L636 274 L858 352" fill="none" stroke="${light}" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
  ${[[406, 566], [406, 388], [636, 274]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="38" fill="${mid}"/><circle cx="${x}" cy="${y}" r="17" fill="${light}"/>`).join("\n  ")}
  <g transform="translate(858 352) rotate(19)">
    <rect x="-22" y="-56" width="30" height="46" rx="10" fill="${light}"/>
    <rect x="-22" y="10" width="30" height="46" rx="10" fill="${light}"/>
  </g>`,

  // Waypoint path.
  waypoints: ([, mid, light]) => {
    const pts = [[236, 596], [396, 348], [606, 502], [812, 262], [980, 470]];
    return `
  <path d="M${pts.map((p) => p.join(" ")).join(" L")}" fill="none" stroke="${light}" stroke-opacity="0.45" stroke-width="14" stroke-dasharray="40 30" stroke-linecap="round"/>
  ${pts.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i === pts.length - 1 ? 52 : 38}" fill="${i === pts.length - 1 ? light : mid}"/>
  <circle cx="${x}" cy="${y}" r="${i === pts.length - 1 ? 78 : 62}" fill="none" stroke="${light}" stroke-opacity="0.4" stroke-width="7"/>`).join("\n  ")}`;
  },

  // EMG burst.
  emg: ([, mid, light]) => {
    let d = "M170 400";
    for (let i = 0; i < 78; i++) {
      const x = 170 + i * 11.3;
      const env = Math.exp(-Math.pow((i - 39) / 19, 2));
      const amp = (i % 2 ? 1 : -1) * (26 + env * 210) * (0.55 + ((i * 37) % 100) / 160);
      d += ` L${x.toFixed(0)} ${(400 + amp).toFixed(0)}`;
    }
    return `
  <line x1="170" y1="400" x2="1050" y2="400" stroke="${light}" stroke-opacity="0.25" stroke-width="8"/>
  <path d="${d}" fill="none" stroke="${light}" stroke-width="8" stroke-linejoin="round"/>
  <path d="M170 400 C 330 400 300 152 600 152 C 900 152 870 400 1050 400" fill="none" stroke="${mid}" stroke-opacity="0.6" stroke-width="12" stroke-dasharray="30 26"/>`;
  },

  // Curve crossing an axis, with bisection steps converging on the root.
  rootFinding: ([, mid, light]) => `
  <line x1="170" y1="430" x2="1040" y2="430" stroke="${light}" stroke-opacity="0.36" stroke-width="10"/>
  <path d="M198 208 C 404 636 616 210 1020 606" fill="none" stroke="${light}" stroke-width="22" stroke-linecap="round"/>
  ${[[300, 66], [430, 46], [516, 32], [566, 22]].map(([x, r], i) => `<line x1="${x}" y1="${430 - r - 26}" x2="${x}" y2="${430 + r + 26}" stroke="${mid}" stroke-opacity="${0.35 + i * 0.15}" stroke-width="8"/>
  <circle cx="${x}" cy="430" r="${r}" fill="none" stroke="${mid}" stroke-width="10" stroke-opacity="${0.45 + i * 0.16}"/>`).join("\n  ")}
  <circle cx="598" cy="430" r="36" fill="${light}"/>
  <circle cx="598" cy="430" r="66" fill="none" stroke="${light}" stroke-opacity="0.5" stroke-width="9"/>`,

  // Protractor angle.
  goniometer: ([, mid, light]) => `
  <path d="M330 620 A 300 300 0 0 1 930 620 Z" fill="${mid}" fill-opacity="0.3"/>
  <path d="M330 620 A 300 300 0 0 1 930 620" fill="none" stroke="${light}" stroke-opacity="0.7" stroke-width="12"/>
  ${Array.from({ length: 9 }, (_, i) => {
    const a = Math.PI - (Math.PI / 8) * i;
    return `<line x1="${630 + Math.cos(a) * 246}" y1="${620 - Math.sin(a) * 246}" x2="${630 + Math.cos(a) * 300}" y2="${620 - Math.sin(a) * 300}" stroke="${light}" stroke-opacity="0.55" stroke-width="9"/>`;
  }).join("\n  ")}
  <line x1="630" y1="620" x2="330" y2="620" stroke="${light}" stroke-width="16" stroke-linecap="round"/>
  <line x1="630" y1="620" x2="836" y2="402" stroke="${light}" stroke-width="16" stroke-linecap="round"/>
  <circle cx="630" cy="620" r="34" fill="${light}"/>`,

  // Gait cycle motion trail.
  gait: ([, mid, light]) => {
    const poses = [0, 1, 2, 3].map((i) => {
      const x = 268 + i * 224;
      const t = i / 3;
      const op = 0.32 + t * 0.68;
      const swing = Math.sin(t * Math.PI * 1.6);
      return `<g opacity="${op.toFixed(2)}">
    <circle cx="${x}" cy="252" r="40" fill="${light}"/>
    <line x1="${x}" y1="292" x2="${x}" y2="452" stroke="${light}" stroke-width="18" stroke-linecap="round"/>
    <line x1="${x}" y1="452" x2="${x - 56 * swing - 20}" y2="600" stroke="${light}" stroke-width="16" stroke-linecap="round"/>
    <line x1="${x}" y1="452" x2="${x + 56 * swing + 20}" y2="600" stroke="${mid}" stroke-width="16" stroke-linecap="round"/>
    <line x1="${x}" y1="330" x2="${x + 66 * swing}" y2="418" stroke="${light}" stroke-width="14" stroke-linecap="round"/>
  </g>`;
    }).join("\n  ");
    return `${poses}
  <path d="M268 252 C 460 200 720 200 940 252" fill="none" stroke="${light}" stroke-opacity="0.28" stroke-width="8" stroke-dasharray="26 22"/>`;
  },
};

/* ---------- project map ---------- */

const COVERS = [
  ["peptpal", "doseCurve", ["#0F766E", "#14B8A6", "#CCFBF1"]],
  ["resumai", "docStack", ["#1E40AF", "#60A5FA", "#DBEAFE"]],
  ["mogbot", "nodeGraph", ["#7C2D12", "#F97316", "#FED7AA"]],
  ["agent", "terminal", ["#0F172A", "#38BDF8", "#E0F2FE"]],
  ["nova", "twoSided", ["#2037E8", "#7C9CFF", "#E0E7FF"]],
  ["webposter", "broadcast", ["#0E7490", "#22D3EE", "#CFFAFE"]],
  ["smtp", "stack", ["#1E293B", "#64748B", "#CBD5E1"]],
  ["happyface", "testGrid", ["#7C2D12", "#EA580C", "#FED7AA"]],
  ["coppercrm", "crm", ["#B45309", "#D97706", "#FDE68A"]],
  ["ct-radon", "sinogram", ["#0F172A", "#0EA5E9", "#BAE6FD"]],
  ["fourier", "spectrum", ["#312E81", "#6366F1", "#C7D2FE"]],
  ["knee-brace", "compareArcs", ["#0F766E", "#14B8A6", "#99F6E4"]],
  ["fanuc-python", "robotArm", ["#854D0E", "#EAB308", "#FEF08A"]],
  ["fanuc-tp", "waypoints", ["#92400E", "#F59E0B", "#FDE68A"]],
  ["emg-lab", "emg", ["#9F1239", "#E11D48", "#FECDD3"]],
  ["root-finding", "rootFinding", ["#1F2937", "#4B5563", "#D1D5DB"]],
  ["goniometer", "goniometer", ["#7C2D12", "#C2410C", "#FED7AA"]],
  ["mocap-running", "gait", ["#581C87", "#9333EA", "#E9D5FF"]],
];

mkdirSync(OUT, { recursive: true });

for (const [name, motif, palette] of COVERS) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${name} cover art">
${field(palette)}
  ${M[motif](palette)}
</svg>
`;
  writeFileSync(`${OUT}/cover-${name}.svg`, svg);
  console.log("wrote cover-" + name + ".svg");
}

console.log(`\n${COVERS.length} covers generated.`);
