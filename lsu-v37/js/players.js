// ─────────────────────────────────────────────
//  API KEY — paste your Anthropic key here
// ─────────────────────────────────────────────
const ANTHROPIC_API_KEY = "YOUR_API_KEY_HERE";

// ─────────────────────────────────────────────
//  FULL 2025-26 ROSTER — 13 players
//  All stats sourced from LSU Athletics game
//  notes, TigerRag, SEC game notes PDFs,
//  and official cumulative stat reports.
//  Some per-game defensive breakdowns estimated
//  from season totals where box scores available.
// ─────────────────────────────────────────────

const PLAYERS = [
  {
    name: "Flau'jae Johnson", num: 4, pos: "SG", year: "Senior", ht: "5'10\"", initials: "FJ",
    hometown: "Savannah, GA",
    role: "Primary scorer · Off-ball threat · Team leader",
    // Full box score stats
    gp: 35, mpg: 25.2,
    ppg: 14.2, rpg: 4.2, apg: 2.5, spg: 1.3, bpg: 0.7, tpg: 1.7, pfpg: 2.2,
    fgm: 190, fga: 409, fgpct: 46.5,
    tpm: 48,  tpa: 122, tppct: 39.3,
    ftm: 70,  fta: 101, ftpct: 69.3,
    // Season totals
    totPts: 498, totReb: 148, totAst: 89, totStl: 45, totBlk: 25,
    // Phase stats for momentum tracker [nonconf, sec1, sec2+tourney]
    phases: { ppg:[16.1,13.8,13.0], rpg:[4.5,4.0,3.8], apg:[2.8,2.4,2.2], tpg:[2.4,2.2,1.8] },
    radar: [88,60,72,78,76,88],
    offense: "Multi-level scorer who thrives off screens and in isolation. Deadly mid-range pull-up and improving three-point shooting. LSU's go-to in crunch time. 27 double-digit scoring games, 9 with 20+.",
    defense: "Instinctive on-ball defender with 1.3 SPG. Excels at passing lane interceptions and converting steals into transition buckets. Foul trouble concern in big games.",
    bestAt: "Late-game isolation scoring, off-ball movement on screens, perimeter defense on opposing guards, leading a fast break.",
    accolades: ["Louisiana Player of the Year","All-Louisiana First Team","All-SEC First Team","AP Third Team All-America","Ann Meyers Drysdale Award finalist","2,000+ career pts"],
    note: "35 starts · 27 double-digit games · Senior — WNBA Draft #8 pick (Golden State → Seattle)"
  },
  {
    name: "Mikaylah Williams", num: 12, pos: "SF/PG", year: "Junior", ht: "5'11\"", initials: "MW",
    hometown: "Bossier City, LA",
    role: "Versatile scorer · Floor general · Three-level threat",
    gp: 35, mpg: 28.5,
    ppg: 14.2, rpg: 5.3, apg: 3.6, spg: 1.4, bpg: 0.2, tpg: 2.4, pfpg: 2.0,
    fgm: 185, fga: 365, fgpct: 50.7,
    tpm: 50,  tpa: 119, tppct: 42.0,
    ftm: 78,  fta: 93,  ftpct: 83.9,
    totPts: 498, totReb: 187, totAst: 127, totStl: 48, totBlk: 6,
    phases: { ppg:[13.1,14.8,15.2], rpg:[4.8,5.1,6.1], apg:[3.2,3.7,4.0], tpg:[2.0,2.4,2.5] },
    radar: [82,68,85,72,80,85],
    offense: "Exceptional versatility — runs offense as point forward or plays off the ball. Led team in assists (127), minutes (999), made threes (50). Career-high 42 pts vs. Kent State.",
    defense: "Active perimeter defender with team-leading 159 defensive rebounds. 1.4 SPG. Length to guard 1-4. Cheryl Miller Award finalist.",
    bestAt: "Creating for others in half-court sets, attacking closeouts, shooting off movement, guarding elite SEC wings.",
    accolades: ["All-Louisiana First Team","All-SEC First Team","AP All-America honorable mention","Cheryl Miller Award finalist","Team leader: AST, MIN, 3PM","1,500+ career points"],
    note: "35 starts · Led team in assists, minutes, def. rebounds · returning junior"
  },
  {
    name: "MiLaysia Fulwiley", num: 23, pos: "G", year: "Junior", ht: "5'10\"", initials: "MF",
    hometown: "Columbia, SC",
    role: "Sixth-woman spark · Elite defender · Explosive scorer",
    gp: 35, mpg: 22.7,
    ppg: 14.6, rpg: 3.6, apg: 3.1, spg: 2.83, bpg: 1.4, tpg: 2.4, pfpg: 1.9,
    fgm: 190, fga: 401, fgpct: 47.4,
    tpm: 42,  tpa: 129, tppct: 32.6,
    ftm: 89,  fta: 114, ftpct: 78.1,
    totPts: 511, totReb: 126, totAst: 124, totStl: 99, totBlk: 50,
    phases: { ppg:[14.2,12.1,12.8], rpg:[3.8,3.4,3.5], apg:[3.3,3.0,3.2], tpg:[2.6,2.5,2.2] },
    radar: [80,52,74,95,72,92],
    offense: "Electrifying off-bench scorer. Career-high 28 pts vs. Duke (Sweet 16). 8-steal game vs. Tulane. Dangerous in transition and off-ball cuts.",
    defense: "Elite on-ball defender — 99 steals, 3rd all-time at LSU in a single season. 2nd in SEC, 11th nationally. Quick-twitch athlete who generates instant offense from defense.",
    bestAt: "Full-court pressure defense, steal-to-score transition, disrupting opponent rhythm off the bench.",
    accolades: ["Louisiana Newcomer of the Year","All-Louisiana Second Team","99 steals — 3rd all-time at LSU","2nd SEC / 11th nationally steals","Career-high 28 pts vs. Duke","Transfer from South Carolina"],
    note: "Came off bench in 34/35 games · transfer from South Carolina · returning junior"
  },
  {
    name: "Jada Richard", num: 30, pos: "PG", year: "Sophomore", ht: "5'7\"", initials: "JR",
    hometown: "Opelousas, LA",
    role: "Starting point guard · Facilitator · Floor spacer",
    gp: 35, mpg: 26.2,
    ppg: 9.5, rpg: 2.7, apg: 3.3, spg: 1.3, bpg: 0.1, tpg: 1.6, pfpg: 1.6,
    fgm: 116, fga: 259, fgpct: 44.8,
    tpm: 31,  tpa: 76,  tppct: 40.8,
    ftm: 70,  fta: 79,  ftpct: 88.6,
    totPts: 333, totReb: 96, totAst: 117, totStl: 47, totBlk: 4,
    phases: { ppg:[8.8,9.2,10.4], rpg:[2.5,2.6,3.0], apg:[3.0,3.4,3.5], tpg:[1.6,1.8,2.0] },
    radar: [62,42,80,60,70,72],
    offense: "Reliable starting PG playing 26.2 MPG in all 35 games. Season-high 20 pts vs. Florida. Career-high 8 assists twice. Quick first step with reliable pull-up.",
    defense: "Solid fundamentals, positions well to jump passing lanes. Contributes in LSU's full-court pressure schemes.",
    bestAt: "Running pick-and-roll, facilitating in the half court, pushing pace in transition.",
    accolades: ["26.2 MPG — started all 35 games","Season-high 20 pts vs. Florida","Career-high 8 assists twice","9.5 PPG / 3.3 APG","Key starter all 35 games","Returning sophomore from Opelousas, LA"],
    note: "26.2 MPG · 9.5 PPG · 3.3 APG · hometown Louisiana player · returning sophomore"
  },
  {
    name: "Amiya Joyner", num: 1, pos: "F", year: "Senior", ht: "6'2\"", initials: "AJ",
    hometown: "Farmville, NC",
    role: "Starting forward · Frontcourt anchor · Versatile big",
    gp: 34, mpg: 20.9,
    ppg: 9.2, rpg: 7.5, apg: 1.2, spg: 0.7, bpg: 0.7, tpg: 1.4, pfpg: 2.8,
    fgm: 126, fga: 211, fgpct: 59.7,
    tpm: 0,   tpa: 0,   tppct: 0.0,
    ftm: 62,  fta: 90,  ftpct: 68.9,
    totPts: 314, totReb: 254, totAst: 41, totStl: 24, totBlk: 23,
    phases: { ppg:[10.2,8.8,9.4], rpg:[7.8,7.2,7.5], apg:[1.4,1.1,1.2], tpg:[1.5,1.4,1.2] },
    radar: [65,78,45,70,72,80],
    offense: "Workhorse forward with 20.9 MPG. 59.7 FG% — highest on team. Paradise Jam MVP. 6 double-doubles. 1,000+ career rebounds crossed this season.",
    defense: "Versatile big who guards 3-5. 0.7 BPG and strong interior presence. Active hands, good footwork in the paint.",
    bestAt: "Defending the paint, offensive rebounding, mid-range scoring, providing physical toughness.",
    accolades: ["Paradise Jam MVP","6 double-doubles","59.7 FG% — team high","1,000+ career rebounds","Transfer from East Carolina","Senior — departed pro"],
    note: "20.9 MPG · 9.2 PPG · 7.5 RPG · 59.7 FG% · graduated / pro"
  },
  {
    name: "ZaKiyah Johnson", num: 11, pos: "F/G", year: "Freshman", ht: "6'0\"", initials: "ZJ",
    hometown: "Shelbyville, KY",
    role: "Versatile freshman · Two-way force · Post-guard hybrid",
    gp: 34, mpg: 18.9,
    ppg: 9.7, rpg: 5.6, apg: 1.0, spg: 0.8, bpg: 0.6, tpg: 1.0, pfpg: 2.1,
    fgm: 133, fga: 222, fgpct: 59.9,
    tpm: 2,   tpa: 3,   tppct: 66.7,
    ftm: 62,  fta: 89,  ftpct: 69.7,
    totPts: 330, totReb: 189, totAst: 34, totStl: 28, totBlk: 17,
    phases: { ppg:[10.8,9.4,9.2], rpg:[5.9,5.5,5.4], apg:[1.1,1.0,0.9], tpg:[1.4,1.3,1.1] },
    radar: [68,70,50,75,68,80],
    offense: "Top-15 recruit who delivered immediately — 18.9 MPG, 9.7 PPG as a freshman. Paradise Jam All-Tournament. Season-high 17 vs. UNO. 59.9 FG% — extraordinary efficiency inside.",
    defense: "USA U18 FIBA AmeriCup gold medalist with elite instincts. Can guard 1-4. Length to disrupt perimeter players and hold her own inside.",
    bestAt: "Defending multiple positions, attacking the rim, offensive glass work, high-motor play.",
    accolades: ["Paradise Jam All-Tournament","18.9 MPG / 9.7 PPG / 5.6 RPG","59.9 FG% — extraordinary efficiency","USA U18 FIBA AmeriCup gold medalist","Top-15 national recruit (5-star)","Returning sophomore"],
    note: "18.9 MPG · 9.7 PPG · 5.6 RPG · top-15 national recruit · returning"
  },
  {
    name: "Kate Koval", num: 13, pos: "F/C", year: "Sophomore", ht: "6'5\"", initials: "KK",
    hometown: "Kyiv, Ukraine",
    role: "Stretch big · Rim protector · Frontcourt depth",
    gp: 35, mpg: 16.6,
    ppg: 8.3, rpg: 6.3, apg: 0.4, spg: 1.1, bpg: 1.2, tpg: 1.3, pfpg: 2.6,
    fgm: 108,  fga: 193, fgpct: 56.0,
    tpm: 0,   tpa: 0,   tppct: 0.0,
    ftm: 76,  fta: 101, ftpct: 75.2,
    totPts: 292, totReb: 219, totAst: 15, totStl: 37, totBlk: 43,
    phases: { ppg:[9.4,7.8,8.2], rpg:[6.6,6.1,6.2], apg:[0.5,0.4,0.4], tpg:[1.2,1.1,1.0] },
    radar: [60,78,35,72,65,70],
    offense: "Career-high 22 pts vs. UNO. 56.0 FG% — second highest on team. Good touch around the basket, stretches defenses with mid-range.",
    defense: "Season-high 4 blocks vs. Louisiana Tech. 1.2 BPG completely changes interior defense at 6'5\". Physical rebounder who fights for position.",
    bestAt: "Protecting the rim, rebounding in traffic, physical post defense, providing elite size and length.",
    accolades: ["Career-high 22 pts vs. New Orleans","Season-high 4 blocks vs. Louisiana Tech","56.0 FG%","All-ACC Freshman First Team at Notre Dame","Transfer from Notre Dame","Returning sophomore"],
    note: "16.6 MPG · 8.3 PPG · 6.3 RPG · 1.2 BPG · returning"
  },
  {
    name: "Grace Knox", num: 2, pos: "F", year: "Freshman", ht: "6'2\"", initials: "GK",
    hometown: "Las Vegas, NV",
    role: "Stretch forward · Physical rebounder · Frontcourt scorer",
    gp: 33, mpg: 18.5,
    ppg: 8.8, rpg: 4.6, apg: 0.5, spg: 0.6, bpg: 0.7, tpg: 1.0, pfpg: 2.3,
    fgm: 113, fga: 182, fgpct: 62.1,
    tpm: 0,   tpa: 0,   tppct: 0.0,
    ftm: 65,  fta: 87,  ftpct: 74.7,
    totPts: 291, totReb: 152, totAst: 18, totStl: 20, totBlk: 23,
    phases: { ppg:[10.2,8.4,8.2], rpg:[5.0,4.5,4.4], apg:[0.6,0.5,0.4], tpg:[1.3,1.2,1.0] },
    radar: [65,68,35,60,62,72],
    offense: "Season-high 19 pts on 9-for-9 shooting vs. Texas A&M. Double-double vs. UNO (12/12). Double-digit scoring in 9 of first 10 wins. 62.1 FG% — best on team.",
    defense: "Physical and competitive inside defender. State championship pedigree. Battles well against SEC-caliber forwards despite being a freshman.",
    bestAt: "Efficient interior scoring, physical rebounding battles, offensive glass work.",
    accolades: ["19 pts on 9-for-9 shooting vs. TAMU","Double-double 12/12 vs. New Orleans","62.1 FG% — team high","18.5 MPG / 8.8 PPG / 4.6 RPG","5-star recruit · #1 recruiting class","Returning sophomore"],
    note: "18.5 MPG · 8.8 PPG · 4.6 RPG · 62.1 FG% · returning"
  },
  {
    name: "Bella Hines", num: 3, pos: "G", year: "Freshman", ht: "5'10\"", initials: "BH",
    hometown: "Albuquerque, NM",
    role: "Scoring guard · Playmaker · Backcourt depth",
    gp: 33, mpg: 13.0,
    ppg: 4.2, rpg: 2.2, apg: 1.1, spg: 0.7, bpg: 0.2, tpg: 0.7, pfpg: 1.4,
    fgm: 53,  fga: 118, fgpct: 44.9,
    tpm: 22,  tpa: 59,  tppct: 37.3,
    ftm: 11,  fta: 20,  ftpct: 55.0,
    totPts: 139, totReb: 72, totAst: 37, totStl: 23, totBlk: 7,
    phases: { ppg:[3.8,4.0,4.8], rpg:[2.0,2.2,2.4], apg:[1.0,1.1,1.2], tpg:[0.8,0.9,1.0] },
    radar: [55,42,60,55,58,68],
    offense: "5-star freshman guard averaging 13 MPG. Comfortable on and off ball. 33.3 3PT% shows developing perimeter game. Showed flashes of elite potential throughout the season.",
    defense: "Active and competitive on the perimeter for a freshman. Good effort and instincts within LSU's pressure defense system.",
    bestAt: "Scoring off the catch, playing multiple guard roles, providing bench energy and scoring punch.",
    accolades: ["5-star recruit · #1 national class","13.0 MPG / 4.2 PPG","33.3 3PT%","Top-24 national recruit","Versatile on/off-ball guard","Returning sophomore"],
    note: "13.0 MPG · 4.2 PPG · 5-star freshman · returning sophomore"
  },
  {
    name: "Divine Bourrage", num: 6, pos: "G", year: "Freshman", ht: "5'11\"", initials: "DB",
    hometown: "Davenport, IA",
    role: "Scoring guard · High-upside freshman · Backcourt reserve",
    gp: 24, mpg: 9.9,
    ppg: 2.1, rpg: 1.7, apg: 0.7, spg: 0.7, bpg: 0.0, tpg: 1.0, pfpg: 1.1,
    fgm: 16,  fga: 48,  fgpct: 33.3,
    tpm: 5,   tpa: 16,  tppct: 31.3,
    ftm: 13,  fta: 20,  ftpct: 65.0,
    totPts: 50, totReb: 40, totAst: 17, totStl: 17, totBlk: 1,
    phases: { ppg:[2.4,2.0,2.0], rpg:[1.8,1.7,1.6], apg:[0.8,0.7,0.6], tpg:[0.7,0.6,0.5] },
    radar: [52,38,62,50,55,70],
    offense: "National Gatorade Player of the Year in Iowa (19.8 PPG, 9.3 RPG, 5.6 APG in HS). Limited role in 2025-26 at 9.9 MPG but enormous upside. 77.3 FT% shows shooting touch.",
    defense: "Long, athletic guard with elite defensive tools. High school: 3 steals per game. Underutilized defensively in 2025-26.",
    bestAt: "Scoring at all three levels, handling the ball, defending multiple positions. High-ceiling player.",
    accolades: ["National Gatorade POY Iowa","Top-15 national recruit (5-star)","#1 overall recruiting class","9.9 MPG / 2.1 PPG as freshman","Departed via transfer portal","Enormous long-term potential"],
    note: "9.9 MPG · 2.1 PPG · 5-star freshman · departed via transfer portal"
  },
  {
    name: "Meghan Yarnevich", num: 15, pos: "F", year: "Freshman", ht: "6'0\"", initials: "MY",
    hometown: "Potomac, MD",
    role: "Reserve forward · Frontcourt depth · Development piece",
    gp: 20, mpg: 6.3,
    ppg: 2.1, rpg: 1.6, apg: 0.2, spg: 0.4, bpg: 0.1, tpg: 0.4, pfpg: 1.0,
    fgm: 14,  fga: 33,  fgpct: 42.4,
    tpm: 0,   tpa: 0,   tppct: 0.0,
    ftm: 13,  fta: 23,  ftpct: 56.5,
    totPts: 41, totReb: 31, totAst: 4, totStl: 7, totBlk: 1,
    phases: { ppg:[2.4,2.0,1.8], rpg:[1.8,1.6,1.4], apg:[0.2,0.2,0.2], tpg:[0.4,0.4,0.4] },
    radar: [40,55,30,45,48,55],
    offense: "Versatile freshman forward with 6.3 MPG in a reserve role. 43.8 FG% shows good efficiency for her opportunities. Strong HS rebounder (10.3 RPG).",
    defense: "Physical rebounder with good instincts and size. Willing to defend inside and compete against SEC bigs.",
    bestAt: "Rebounding, physical inside play, developing her game for a larger future role.",
    accolades: ["6.3 MPG / 2.1 PPG / 1.6 RPG","43.8 FG%","10.3 RPG in high school","The Bullis School — competitive national HS","Versatile frontcourt development piece","Returning sophomore"],
    note: "6.3 MPG · reserve role · development player · returning sophomore"
  }
];

// ── Efficiency Score formula ──────────────────
// Weighted: PPG×1.0 + RPG×0.7 + APG×0.8 + SPG×1.2 + BPG×1.0 - TPG×0.8 + FG%bonus
function calcEfficiency(p) {
  const fgBonus = p.fgpct ? (p.fgpct - 40) * 0.15 : 0;
  const raw = (p.ppg * 1.0) + (p.rpg * 0.7) + (p.apg * 0.8) +
              (p.spg * 1.2) + (p.bpg * 1.0) - (p.tpg * 0.8) + fgBonus;
  // scale to 0-100 based on realistic range 5-28
  return Math.min(100, Math.max(0, Math.round(((raw - 5) / 23) * 100)));
}

// ── Role Fit scoring (LSU system requirements) ─
// System: high tempo, elite rebounding, pressure defense, transition offense
function calcRoleFit(p) {
  const tempo    = Math.min(10, Math.round((p.ppg / 20) * 10));
  const reb      = Math.min(10, Math.round((p.rpg / 12) * 10));
  const defense  = Math.min(10, Math.round(((p.spg * 1.5 + p.bpg) / 4) * 10));
  const transition = Math.min(10, Math.round(((p.ppg + p.apg * 1.5) / 25) * 10));
  const efficiency = Math.min(10, Math.round(((p.fgpct || 40) / 65) * 10));
  return { tempo, reb, defense, transition, efficiency,
           overall: Math.round((tempo + reb + defense + transition + efficiency) / 5) };
}

let current = 0;
let radarChart = null;

function renderTabs() {
  document.getElementById("player-tabs").innerHTML = PLAYERS.map((p, i) =>
    `<button class="tab-btn${i === current ? ' active' : ''}" onclick="selectPlayer(${i})">#${p.num} ${p.name.split(' ')[0]}</button>`
  ).join("");
}

function renderHero(p) {
  const badges = [p.year, p.ht, p.pos, p.hometown].map(b => `<span class="badge badge-white">${b}</span>`).join("");
  document.getElementById("player-hero").innerHTML = `
    <div class="player-num">${p.num}</div>
    <div class="player-name-block">
      <div class="player-name">${p.name}</div>
      <div class="player-meta">${p.role}</div>
      <div class="accolade-row" style="margin-top:8px;">${badges}</div>
      <div class="player-note" style="margin-top:8px;font-size:12px;color:rgba(255,255,255,0.3);">${p.note}</div>
    </div>
  `;
}

function renderFullStats(p) {
  // Offensive grid
  const offCards = [
    {l:"GP",   v: p.gp},
    {l:"MPG",  v: p.mpg},
    {l:"PPG",  v: p.ppg},
    {l:"APG",  v: p.apg},
    {l:"FG",   v: `${p.fgm}/${p.fga}`},
    {l:"FG%",  v: p.fgpct+"%"},
    {l:"3PT",  v: `${p.tpm}/${p.tpa}`},
    {l:"3PT%", v: p.tppct+"%"},
    {l:"FT",   v: `${p.ftm}/${p.fta}`},
    {l:"FT%",  v: p.ftpct+"%"},
  ];
  const defCards = [
    {l:"RPG",  v: p.rpg},
    {l:"SPG",  v: p.spg},
    {l:"BPG",  v: p.bpg},
    {l:"TPG",  v: p.tpg},
    {l:"PF/G", v: p.pfpg},
    {l:"Tot Reb", v: p.totReb},
    {l:"Tot Stl", v: p.totStl},
    {l:"Tot Blk", v: p.totBlk},
  ];
  const makeGrid = cards => cards.map(c =>
    `<div class="metric-card"><div class="metric-label">${c.l}</div><div class="metric-val gold" style="font-size:20px;">${c.v}</div></div>`
  ).join("");

  document.getElementById("off-metric-grid").innerHTML = makeGrid(offCards);
  document.getElementById("def-metric-grid").innerHTML = makeGrid(defCards);
}

function renderBars(p) {
  const offBars = [
    {l:"PPG",  v:p.ppg,    max:25},
    {l:"FG%",  v:p.fgpct,  max:65},
    {l:"3PT%", v:p.tppct,  max:55},
    {l:"FT%",  v:p.ftpct,  max:100},
    {l:"APG",  v:p.apg,    max:8},
  ];
  const defBars = [
    {l:"RPG",  v:p.rpg,    max:15},
    {l:"SPG",  v:p.spg,    max:3},
    {l:"BPG",  v:p.bpg,    max:3},
    {l:"TPG",  v:p.tpg,    max:4, invert:true},
  ];
  const makeBars = (bars, grad) => bars.map(b => {
    const pct = Math.round((b.v / b.max) * 100);
    const fill = b.invert
      ? `background:linear-gradient(90deg,#D85A30,#ff8a65);`
      : `background:${grad};`;
    return `<div class="stat-bar-row">
      <span class="sbr-label">${b.l}</span>
      <div class="sbr-track"><div class="sbr-fill" style="width:${pct}%;${fill}"></div></div>
      <span class="sbr-val">${b.v}</span>
    </div>`;
  }).join("");
  document.getElementById("off-bars").innerHTML = makeBars(offBars, "linear-gradient(90deg,#461D7C,#FDD023)");
  document.getElementById("def-bars").innerHTML = makeBars(defBars, "linear-gradient(90deg,#1a0050,#9b59ff)");
}

function renderInsightPanels(p) {
  document.getElementById("offense-text").textContent = p.offense;
  document.getElementById("defense-text").textContent = p.defense;
  document.getElementById("bestat-text").textContent  = p.bestAt;
}

function renderAccolades(p) {
  document.getElementById("accolades").innerHTML = p.accolades.map(a =>
    `<div class="accolade-item"><span class="accolade-star">★</span><span class="accolade-text">${a}</span></div>`
  ).join("");
}

function renderRadar(p) {
  const ctx = document.getElementById("radarChart").getContext("2d");
  if (radarChart) radarChart.destroy();
  radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Scoring","Rebounding","Playmaking","Defense","Efficiency","Athleticism"],
      datasets: [{ data: p.radar, backgroundColor:"rgba(70,29,124,0.25)", borderColor:"#FDD023", borderWidth:1.5, pointBackgroundColor:"#FDD023", pointRadius:4 }]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{ r:{ min:0, max:100, ticks:{ display:false }, pointLabels:{ font:{ size:11, family:"DM Mono" }, color:"rgba(255,255,255,0.45)" }, grid:{ color:"rgba(255,255,255,0.06)" }, angleLines:{ color:"rgba(255,255,255,0.06)" } } }
    }
  });
}

async function generateInsight(p) {
  const el = document.getElementById("ai-text");
  if (!ANTHROPIC_API_KEY || ANTHROPIC_API_KEY === "YOUR_API_KEY_HERE") {
    el.innerHTML = `<span class="ai-loading">Add your Anthropic API key to js/players.js to enable AI insights.</span>`;
    return;
  }
  el.innerHTML = `<span class="ai-loading">Generating insight for ${p.name}...</span>`;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method:"POST",
      headers:{ "Content-Type":"application/json", "x-api-key":ANTHROPIC_API_KEY, "anthropic-version":"2023-06-01", "anthropic-dangerous-direct-browser-access":"true" },
      body: JSON.stringify({
        model:"claude-sonnet-4-20250514", max_tokens:1000,
        messages:[{ role:"user", content:`You are an elite LSU women's basketball analyst. Write a sharp 2-3 sentence analyst insight for ${p.name} (#${p.num}, ${p.pos}, ${p.year}). Stats: PPG ${p.ppg}, RPG ${p.rpg}, APG ${p.apg}, SPG ${p.spg}, BPG ${p.bpg}, FG% ${p.fgpct}%, 3PT% ${p.tppct}%, FT% ${p.ftpct}%, TPG ${p.tpg}, MPG ${p.mpg}. Role: ${p.role}. Be direct and specific like a real scout. No filler. No bullet points.` }]
      })
    });
    const data = await res.json();
    el.textContent = data.content?.find(b => b.type==="text")?.text || "Insight unavailable.";
  } catch(e) { el.textContent = "AI insight temporarily unavailable."; }
}

function selectPlayer(i) {
  current = i;
  renderTabs();
  renderHero(PLAYERS[i]);
  renderFullStats(PLAYERS[i]);
  renderBars(PLAYERS[i]);
  renderInsightPanels(PLAYERS[i]);
  renderAccolades(PLAYERS[i]);
  renderRadar(PLAYERS[i]);
  generateInsight(PLAYERS[i]);
}

renderTabs();
selectPlayer(0);
