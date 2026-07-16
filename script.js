
const P = {
  hotel:        {name:"Hotel Monterey Edelhof Sapporo", ll:[43.0644,141.3558]},
  jingiskan:    {name:"Aratanaru Bonz Susukino (Genghis Khan BBQ)", ll:[43.0547,141.3524]},
  aoao:         {name:"AOAO SAPPORO Aquarium", ll:[43.0576,141.3532]},
  odoriSt:      {name:"Odori Station", ll:[43.0605,141.3547]},
  susukinoSt:   {name:"Susukino Station", ll:[43.0554,141.3530]},
  sapporoSt:    {name:"Sapporo Station / JR Tower", ll:[43.0686,141.3506]},
  stellar:      {name:"Stellar Place", ll:[43.0684,141.3512]},
  kitakaroDaimaru: {name:"Kitakaro (Daimaru Sapporo B1F)", ll:[43.0683,141.3498]},
  maruyamaSt:   {name:"Maruyama-koen Station", ll:[43.0556,141.3188]},
  maruyamaZoo:  {name:"Maruyama Zoo", ll:[43.0494,141.3061]},
  biotop:       {name:"BIOTOP SAPPORO", ll:[43.0556,141.3138]},
  miyanosawaSt: {name:"Miyanosawa Station", ll:[43.0900,141.2772]},
  shiroiKoibito:{name:"Shiroi Koibito Park", ll:[43.0887,141.2716]},
  shinSapporoSt:{name:"Shin-Sapporo Station", ll:[43.0388,141.4725]},
  scienceCtr:  {name:"Sapporo Science Center", ll:[43.0393,141.4715]},
  fantasyKids:  {name:"Fantasy Kids Resort (Sunpiazza)", ll:[43.0388,141.4726]},
  toriton:      {name:"Toriton Sushi Toyohira", ll:[43.0506,141.3721]},
  ramen:        {name:"えびそば一幻 総本店 (Minami7 Nishi9)", ll:[43.0513,141.3454]},
  soupcurry:    {name:"Soup Curry Garaku (Minami3 Johigashi)", ll:[43.0561,141.3572]},
  airport:      {name:"New Chitose Airport", ll:[42.7752,141.6923]},
  tvTower:      {name:"Boarding point (behind TV Tower, across from koban)", ll:[43.0608,141.3572]},
  sunagawaSA:   {name:"Sunagawa Highway rest stop", ll:[43.5222,141.9302]},
  patchwork:    {name:"Biei Patchwork Road (drive-by view)", ll:[43.6291,142.4313]},
  kenmaryTree:  {name:"Ken & Mary Tree / Oyako Tree (drive-by view)", ll:[43.6186,142.4352]},
  junpei:       {name:"Junpei (lunch stop)", ll:[43.5892,142.4680]},
  blueLake:     {name:"Blue Pond (Aoi-ike)", ll:[43.4936,142.6140]},
  shirahige:    {name:"Shirahige Falls", ll:[43.4747,142.6392]},
  shikisai:     {name:"Shikisai-no-oka", ll:[43.5292,142.4644]},
  farmTomita:   {name:"Farm Tomita", ll:[43.4189,142.4270]},
  iwamizawaSA:  {name:"Iwamizawa Highway rest stop", ll:[43.1948,141.8028]},
  kapital:      {name:"Kapital (Minami2 Nishi1)", ll:[43.0576,141.3548]},
  sushiDon:     {name:"Sushi-Don 札幌海鮮丼専門店 すしどんぶり (Minami3 Nishi5)", ll:[43.0561,141.3514]},
  robatayaki:   {name:"北海道炉端焼き 篝 Kagari (Minami5 Nishi5)", ll:[43.0540,141.3516]},
  rokkatei:     {name:"六花亭 札幌本店 (Kita4 Nishi6)", ll:[43.0670,141.3464]},
  mermaidCoffee:{name:"Mermaid Coffee Roasters (Minami3 Nishi1 / Tanukikoji)", ll:[43.0562,141.3547]},
  northman:     {name:"Northman 大丸札幌店 (Daimaru Sapporo B1F)", ll:[43.0683,141.3498]},
  kinotoyaBake: {name:"KINOTOYA BAKE ポールタウン店 (Minami2 Nishi3)", ll:[43.0588,141.3530]},
  beams:        {name:"BEAMS Sapporo (Minami1 Nishi3)", ll:[43.0590,141.3532]},
  unitedArrows: {name:"UNITED ARROWS Sapporo (PARCO)", ll:[43.0592,141.3534]},
  modest:       {name:"Modest (Minami2 Nishi3)", ll:[43.0578,141.3536]},
  humanmade:    {name:"Human Made Sapporo (THE KNOT)", ll:[43.0561,141.3532]},
  maw:          {name:"MaW (Minami2 Nishi5)", ll:[43.0576,141.3516]},
  thread:       {name:"thread (Minami3 Nishi7)", ll:[43.0561,141.3500]},
  garage69:     {name:"GARAGE69 (Minami3 Nishi8)", ll:[43.0561,141.3492]},
  moonrise:     {name:"Moonrise (Minami3 Nishi8, same bldg as GARAGE69)", ll:[43.0563,141.3494]},
  donguriBakery:{name:"Donguri Bakery Odori", ll:[43.0568,141.3524]},
  adamEtRope:   {name:"ADAM ET ROPE (Stellar Place East 2F)", ll:[43.0678,141.3540]},
  rojiuraCurry: {name:"Rojiura Curry SAMURAI Sakura (Minami3 Nishi6)", ll:[43.0561,141.3508]},
  menyaSaimi:   {name:"Menya Saimi (Toyohira-ku Misono)", ll:[43.0352,141.3818]},
  hokkaidoJingu:{name:"Hokkaido Shrine", ll:[43.0547,141.3074]}
};

// ---- Day data
const DAYS = [
{
  key:"d1", tab:"Jul 27 Mon", sub:"Arrival",
  emoji:"🍖", date:new Date(2026,6,27), blurb:"Land, check in, Genghis Khan BBQ dinner",
  title:"Day 1 · Arrival & first dinner",
  note:"Flight lands 1:25 PM. After check-in: Stellar Place for shopping, then Northman at Daimaru B1F (3 min walk, same building), then south to Kapital before dinner.",
  stops:[
    {p:"airport", time:"1:25 PM", label:"Land — KE765 (ICN→CTS)", desc:"New Chitose Airport, Terminal I (International) · seat 55D"},
    {p:"hotel", time:"~3:00 PM", label:"Hotel check-in", desc:"Just south of Sapporo Station — 8 min walk to Odori, 2 min to the subway", legs:[
      {mode:"jr", line:"New Chitose Airport → Sapporo Sta. (JR Rapid Airport, ~40 min)"},
      {mode:"walk", line:"Walk (~8 min)"}
    ]},
    {p:"stellar", time:"~3:30–4:30 PM", label:"Shopping: Stellar Place", desc:"Shiki Marche, MARKEY'S, Bshop · 2 min walk from hotel", mode:"walk"},
    {p:"northman", time:"~4:30–4:45 PM", label:"Northman 大丸札幌店", desc:"Hokkaido classic pie + red bean + Nama Northman (fresh cream) — only at Daimaru Sapporo · Daimaru B1F, 3 min walk from Stellar Place · 10:00–20:00", mode:"walk"},
    {p:"kapital", time:"~5:00–5:45 PM", label:"Kapital", desc:"Minami2 Nishi1 · ~14 min walk south from Daimaru", mode:"walk"},
    {p:"jingiskan", time:"7:00 PM", label:"Aratanaru Bonz Susukino (Genghis Khan BBQ)", desc:"Reservation confirmed · ~5 min walk from Kapital", mode:"walk"},
    {p:"hotel", time:"~9:00 PM", label:"Back to hotel", desc:"Maybe a short stroll through Tanukikoji if energy allows, then rest", mode:"walk"}
  ]
},
{
  key:"d2", tab:"Jul 28 Tue", sub:"Ebisoba + Zoo",
  emoji:"🦁", date:new Date(2026,6,28), blurb:"Ebisoba Ichigen open run lunch, then zoo + Hokkaido Shrine",
  title:"Day 2 · Zoo day",
  note:"Ebisoba Ichigen open run first — 16 counter seats only, cash only, queue before 11 AM. Zoo + Hokkaido Shrine in the afternoon, then back to hotel to rest. Toriton for dinner (walk-in, arrive early to beat the queue). ⚠️ Tomorrow's lavender tour boards at 7:15 AM — aim for lights out by 10 PM.",
  stops:[
    {p:"hotel", time:"10:15 AM", label:"Leave hotel"},
    {p:"ramen", time:"11:00 AM–12:00 PM", label:"Ebisoba Ichigen 総本店 (open run · lunch)", desc:"Priority pick · shrimp ramen · queue ~10:40 AM, opens 11:00 AM · 16 counter seats only — arrive early · Cash only · Minami7 Nishi9", legs:[
      {mode:"subway", line:"Sapporo Sta. (Namboku Line) → Nakajima-koen Sta. (~8 min)"},
      {mode:"walk", line:"Walk from Exit 2 (~15 min)"}
    ]},
    {p:"maruyamaZoo", time:"12:30–2:30 PM", label:"Maruyama Zoo", desc:"Easy relaxed afternoon pace", legs:[
      {mode:"walk", line:"Walk back to Nakajima-koen Sta. (~15 min)"},
      {mode:"subway", line:"Nakajima-koen Sta. (Namboku Line) → Odori Sta. → transfer to Tozai Line → Maruyama-koen Sta. (~15 min)"},
      {mode:"bus", line:"JR Hokkaido Bus [円15]/[円16] Zoo Line → Zoo West Gate (~5 min, ¥210/¥110)"}
    ]},
    {p:"hokkaidoJingu", time:"~2:45–4:00 PM", label:"Cool-down break: Hokkaido Shrine", desc:"4.3★, 2,100+ reviews · old-growth forest grounds, noticeably shaded/cooler than the street · Rokkatei tea house on the grounds serves warm mochi (Hangan-sama) for a sit-down snack", mode:"walk"},
    {p:"hotel", time:"~4:30 PM", label:"Return to hotel — rest", desc:"Recharge before dinner · tomorrow is the lavender tour — board 7:15 AM, so aim for an early night", legs:[
      {mode:"walk", line:"Walk back to Maruyama-koen Sta. (~7 min)"},
      {mode:"subway", line:"Maruyama-koen Sta. (Tozai Line) → Odori Sta. → Namboku Line → Sapporo Sta. (~15 min)"},
      {mode:"walk", line:"Walk (~8 min)"}
    ]},
    {p:"toriton", time:"6:15–7:30 PM", label:"Toriton Sushi Toyohira", desc:"Priority pick · conveyor-belt sushi, fun for a 5-year-old · walk-in only — arrive by 6:15 to get in the queue before it builds · no reservations taken", legs:[
      {mode:"walk", line:"Walk (~2 min) to Sapporo Sta."},
      {mode:"subway", line:"Sapporo Sta. (Toho Line) → Gakuen-mae Sta. (~12 min)"},
      {mode:"walk", line:"Walk (~5 min)"}
    ]},
    {p:"hotel", time:"~7:50 PM", label:"Back to hotel", desc:"Early night — tomorrow's tour bus boards at 7:15 AM", legs:[
      {mode:"walk", line:"Walk (~5 min) to Gakuen-mae Sta."},
      {mode:"subway", line:"Gakuen-mae Sta. (Toho Line) → Sapporo Sta. (~12 min)"},
      {mode:"walk", line:"Walk (~8 min)"}
    ]}
  ]
},
{
  key:"d3", tab:"Jul 29 Wed", sub:"Lavender day tour",
  emoji:"🌾", date:new Date(2026,6,29), blurb:"Biei & Furano lavender fields, all day",
  title:"Day 3 · Biei & Furano day tour",
  note:"Full-day bus tour (Sapporo Basecamp). Board by 7:15 AM, back to Susukino ~5:30 PM, then dinner is a short walk away — no transit needed after a long day.",
  stops:[
    {p:"tvTower", time:"7:15 AM", label:"Board the tour bus", desc:"Behind the TV Tower at Odori Exit 31, across the street from the koban (police box) on the tower's 1st floor — board by 7:15", mode:"tour"},
    {p:"sunagawaSA", time:"~8:15 AM", label:"Sunagawa Highway rest stop", desc:"Short break", mode:"tour"},
    {p:"patchwork", time:"~9:30 AM", label:"Biei Patchwork Road — Seven Stars Tree", desc:"Drive-by only, no stopping", mode:"tour"},
    {p:"kenmaryTree", time:"~9:45 AM", label:"Oyako Tree & Ken-to-Mary Tree", desc:"Drive-by only, no stopping", mode:"tour"},
    {p:"junpei", time:"10:30–11:30 AM", label:"Lunch at Junpei", desc:"60 min · Cash only (paid locally)", mode:"tour"},
    {p:"blueLake", time:"~12:30 PM", label:"Blue Pond (Aoi-ike)", desc:"30-min stop", mode:"tour"},
    {p:"shirahige", time:"~1:10 PM", label:"Shirahige Falls", desc:"20-min stop, right next to the Blue Pond", mode:"tour"},
    {p:"shikisai", time:"~1:40 PM", label:"Shikisai-no-oka", desc:"40-min stop — flower hill", mode:"tour"},
    {p:"farmTomita", time:"~2:50 PM", label:"Farm Tomita", desc:"60-min stop — the main lavender fields", mode:"tour"},
    {p:"iwamizawaSA", time:"~4:20 PM", label:"Iwamizawa Highway rest stop", desc:"Short break on the way back", mode:"tour"},
    {p:"susukinoSt", time:"5:30 PM", label:"Drop-off near Susukino Station", desc:"Tour ends here — no other drop-off points offered", mode:"tour"},
    {p:"soupcurry", time:"~5:50–7:00 PM", label:"Soup Curry Garaku", desc:"Priority pick · Minami3 Jo-Higashi, near Toyosumi-susukino Sta. · ~8–10 min walk from the tour drop-off · dinner service 5:00–9:00 PM (L.O. 8:30)", mode:"walk"},
    {p:"hotel", time:"~7:20 PM", label:"Back to hotel", desc:"Early rest — no more stops after a long tour day · ~12 min walk (≈850m)", mode:"walk"}
  ]
},
{
  key:"d4", tab:"Jul 30 Thu", sub:"Shopping day (all stores)",
  emoji:"🛍️", date:new Date(2026,6,30), blurb:"Stellar · Rokkatei · SAMURAI lunch · AOAO · full crawl · Kagari",
  title:"Day 4 · Full shopping day + Kagari dinner",
  note:"Morning: Stellar, Kitakaro, Rokkatei. Lunch: SAMURAI (noon, walk-in). Post-lunch cool-down at AOAO, then coffee at Mermaid before the boutique crawl. KINOTOYA BAKE for the underground AC break midway. ⚠️ Kagari reservation is firm at 6:30 PM — if the crawl runs late, MaW onward are if-time-allows; leave Moonrise by 6:10 PM at the latest.",
  stops:[
    {p:"hotel", time:"10:00 AM", label:"Leave hotel"},
    {p:"stellar", time:"10:15–11:00 AM", label:"Stellar Place: Shiki Marche, MARKEY'S, Bshop", desc:"2 min walk from hotel", mode:"walk"},
    {p:"adamEtRope", time:"11:00–11:15 AM", label:"ADAM ET ROPE WILD LIFE TAILOR", desc:"Stellar Place East 2F — same building, no extra travel"},
    {p:"kitakaroDaimaru", time:"11:15–11:30 AM", label:"Snack: Kitakaro (Daimaru Sapporo B1F)", desc:"Priority pick · pastries/soft-serve · ~3 min walk from Stellar Place", mode:"walk"},
    {p:"rokkatei", time:"11:35 AM–12:05 PM", label:"六花亭 札幌本店", desc:"Hokkaido sweets flagship · Marusei Butter Sand, seasonal cakes, café on upper floors · Kita4 Nishi6 · ~5 min walk west from Daimaru · shop 10:00–17:30", mode:"walk"},
    {p:"rojiuraCurry", time:"12:20–1:20 PM", label:"Rojiura Curry SAMURAI Sakura (lunch)", desc:"Priority pick · soup curry · walk-in only · Tiara36 2F, Minami3 Nishi6 · opens 12:00, L.O. 15:00 · Cash + PayPay", legs:[
      {mode:"walk", line:"Walk south on Nishi6-dori (~12 min straight down from Rokkatei)"}
    ]},
    {p:"aoao", time:"1:35–2:30 PM", label:"AOAO SAPPORO", desc:"Fully indoor & air-conditioned — post-lunch cool-down · ~5 min walk east from SAMURAI", mode:"walk"},
    {p:"mermaidCoffee", time:"2:35–2:55 PM", label:"Mermaid Coffee Roasters", desc:"Coffee + sit-down · Tanukikoji Block 1 (Minami3 Nishi1) · ~8 min walk from AOAO · open 8:00–18:00", mode:"walk"},
    {p:"kapital", time:"3:00–3:20 PM", label:"Kapital", desc:"Minami2 Nishi1 · 1 block north from Mermaid (~2 min walk) · also visited Monday — if fully covered there, jump straight to BEAMS", mode:"walk"},
    {p:"beams", time:"3:20–3:35 PM", label:"BEAMS Sapporo", desc:"Minami1 Nishi3 · ~4 min walk", mode:"walk"},
    {p:"unitedArrows", time:"3:37–3:52 PM", label:"UNITED ARROWS Sapporo", desc:"Sapporo PARCO, right next to BEAMS · ~2 min walk", mode:"walk"},
    {p:"modest", time:"3:54–4:09 PM", label:"Modest", desc:"Minami2 Nishi3 · ~2 min walk", mode:"walk"},
    {p:"humanmade", time:"4:11–4:26 PM", label:"Human Made Sapporo", desc:"THE KNOT Sapporo, one block south · ~2 min walk", mode:"walk"},
    {p:"kinotoyaBake", time:"4:28–4:48 PM", label:"AC break: KINOTOYA BAKE ポールタウン店", desc:"Underground Pole Town — fully air-conditioned · freshly baked cheese tart + soft cream · Minami2 Nishi3 · ~2 min walk", mode:"walk"},
    {p:"maw", time:"4:50–5:05 PM", label:"MaW (if time allows)", desc:"Minami2 Nishi5, continuing west · ~4 min walk · skip here if running behind — Kagari is at 6:30", mode:"walk"},
    {p:"thread", time:"5:09–5:24 PM", label:"thread (if time allows)", desc:"Minami3 Nishi7 · ~4 min walk", mode:"walk"},
    {p:"garage69", time:"5:25–5:40 PM", label:"GARAGE69 (if time allows)", desc:"Minami3 Nishi8, same block as thread · ~1 min walk", mode:"walk"},
    {p:"moonrise", time:"5:40–5:55 PM", label:"Moonrise (if time allows)", desc:"Same building as GARAGE69 · leave by 6:10 PM latest to reach Kagari on time", mode:"walk"},
    {p:"robatayaki", time:"6:30–8:00 PM", label:"北海道炉端焼き 篝 Kagari", desc:"Reservation confirmed · 6:30 PM · Minami5 Nishi5, LC6番館 4F · Susukino Station 3 min walk · ~12 min walk south from Moonrise", mode:"walk"},
    {p:"hotel", time:"~8:15 PM", label:"Back to hotel", desc:"~10 min walk north", mode:"walk"}
  ]
},
{
  key:"d5", tab:"Jul 31 Fri", sub:"Departure",
  emoji:"✈️", date:new Date(2026,6,31), blurb:"Check out, straight to the airport",
  title:"Day 5 · Departure",
  note:"Flight departs 2:50 PM (international) — plan to be at the airport by ~12:30 PM, so check out by late morning.",
  stops:[
    {p:"hotel", time:"10:30 AM", label:"Hotel check-out", desc:"Grab a quick breakfast/snack before heading out"},
    {p:"airport", time:"11:20 AM–2:50 PM", label:"KE766 (CTS→ICN), depart 2:50 PM", desc:"JR Rapid Airport ~40 min, arrive ~12:00 PM — comfortable buffer before the international departure · Terminal I · seat 46D", legs:[
      {mode:"walk", line:"Walk (~8 min) to Sapporo Sta."},
      {mode:"jr", line:"Sapporo Sta. → New Chitose Airport (JR Rapid Airport, ~40 min)"}
    ]}
  ]
}
];

// ---- Map setup
const map = L.map('map', {zoomControl:true, scrollWheelZoom:false}).setView([43.058,141.35], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18, attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let layerGroup = L.layerGroup().addTo(map);

const modeColor = {walk:"#4f6b58", subway:"#5c4d8a", bus:"#5c4d8a", jr:"#5c4d8a", tour:"#8a8a8a", optional:"#8a8a7a"};

const CATEGORY = {
  hotel:"hotel",
  jingiskan:"meal", toriton:"meal", ramen:"meal", soupcurry:"meal", junpei:"meal",
  rojiuraCurry:"meal", menyaSaimi:"meal", kitakaroDaimaru:"meal", sushiDon:"meal", robatayaki:"meal",
  northman:"break", kinotoyaBake:"break", rokkatei:"break", mermaidCoffee:"break",
  airport:"flight",
  aoao:"kid", maruyamaZoo:"kid", shiroiKoibito:"kid", scienceCtr:"kid", fantasyKids:"kid",
  stellar:"shopping",
  kapital:"shopping", beams:"shopping", unitedArrows:"shopping", modest:"shopping",
  humanmade:"shopping", maw:"shopping", thread:"shopping", garage69:"shopping",
  moonrise:"shopping", adamEtRope:"shopping", biotop:"shopping",
  donguriBakery:"break", hokkaidoJingu:"sight"
};
const categoryColor = {hotel:"#c0392b", meal:"#8e44ad", kid:"#2e8b57", shopping:"#2f6fa8", flight:"#b8860b", break:"#c77b2e", sight:"#6b8e6e", other:"#8a8a8a"};
const categoryIcon = {hotel:"🏨", meal:"🍴", kid:"🧸", shopping:"🛍️", flight:"✈️", break:"❄️", sight:"⛩️", other:"📍"};
function getCategory(pKey){ return CATEGORY[pKey] || "other"; }

function numberedIcon(n, color, icon){
  return L.divIcon({
    className:'', html:`<div style="background:${color};color:#fff;width:26px;height:26px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;font-family:sans-serif;box-shadow:0 1px 4px rgba(0,0,0,.3);border:2px solid #fff;"><span style="font-size:9px;">${icon}</span><span style="font-size:9px;font-weight:700;">${n}</span></div>`,
    iconSize:[26,26], iconAnchor:[13,13]
  });
}

const hotelIcon = L.divIcon({
  className:'', html:`<div style="background:${categoryColor.hotel};color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;font-family:sans-serif;box-shadow:0 1px 5px rgba(0,0,0,.4);border:3px solid #fff;">H</div>`,
  iconSize:[28,28], iconAnchor:[14,14]
});

function gmapsUrl(name){
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + " Sapporo")}`;
}

// Emergency snack/cafe options, grouped by neighborhood cluster (indoor, AC, kid-friendly heat breaks).
// Same options are shared across every stop in that cluster since they're all a few minutes apart.
// One well-rated local bakery/dessert spot per cluster, plus a reliable chain backup.
const SNACK_CLUSTERS = {
  odori: [
    {name:"Donguri Bakery Odori"},
    {name:"Morihico Coffee Odori"}
  ],
  maruyama: [
    {name:"Penguin Bakery Cafe Maruyama"},
    {name:"Rokkatei Maruyama-koen Station"}
  ],
  misono: [
    {name:"Penguin Bakery Misono"},
    {name:"Starbucks Sapporo Misono"}
  ],
  buscenter: [
    {name:"Boulangerie à ton côté Sapporo"},
    {name:"Gyokusuien Bus Center-mae"}
  ]
};
const SNACK_MAP = {
  jingiskan:"odori", aoao:"odori", kapital:"odori", beams:"odori", unitedArrows:"odori",
  modest:"odori", humanmade:"odori", maw:"odori", thread:"odori", garage69:"odori",
  moonrise:"odori", rojiuraCurry:"odori",
  maruyamaZoo:"maruyama", biotop:"maruyama",
  menyaSaimi:"misono",
  soupcurry:"buscenter"
};
function snackHtml(pKey){
  const cluster = SNACK_MAP[pKey];
  if(!cluster) return "";
  return SNACK_CLUSTERS[cluster].map(s=>
    `🥤 <a href="${gmapsUrl(s.name)}" target="_blank" rel="noopener">${s.name}</a>`
  ).join("<br>");
}

// Persistent hotel marker — red circle, added directly to map, never cleared, shown on every day
const hotelMarker = L.marker(P.hotel.ll, {icon:hotelIcon, zIndexOffset:1000})
  .addTo(map)
  .bindPopup(`<div style="font-size:13px;line-height:1.6;"><b>${P.hotel.name}</b> · <a href="${gmapsUrl(P.hotel.name)}" target="_blank" rel="noopener">Google Maps</a><br>Home base for all 5 nights</div>`);

function renderDay(day){
  layerGroup.clearLayers();
  const bounds = [P.hotel.ll];

  // Route line is derived straight from day.stops now — no separate route array to fall out of sync.
  const validStops = day.stops.filter(s => P[s.p]);
  for(let i=0;i<validStops.length-1;i++){
    const nextStop = validStops[i+1];
    let m = nextStop.mode || "walk";
    if(nextStop.legs){
      const nonWalk = nextStop.legs.find(leg => leg.mode !== "walk");
      m = nonWalk ? nonWalk.mode : "walk";
    }
    const a = P[validStops[i].p].ll, b = P[nextStop.p].ll;
    L.polyline([a, b], {
      color: modeColor[m] || modeColor.walk,
      weight:4, opacity:.85,
      dashArray: m==="walk" ? "1,7" : null
    }).addTo(layerGroup);
    bounds.push(a, b);
  }

  // markers: number each stop in visit order, colored by category
  // (hotel stops skip their own marker since the fixed red hotel pin already covers that spot)
  // currentMarkers is kept parallel to day.stops so the scrollspy can highlight the right pin
  currentMarkers = [];
  let n=1;
  day.stops.forEach((s)=>{
    const pt = P[s.p];
    if(!pt){ currentMarkers.push(null); n++; return; }
    bounds.push(pt.ll);
    if(s.p !== "hotel"){
      const cat = getCategory(s.p);
      const color = categoryColor[cat];
      const snacks = snackHtml(s.p);
      const marker = L.marker(pt.ll, {icon:numberedIcon(n, color, categoryIcon[cat])})
        .addTo(layerGroup)
        .bindPopup(`<div style="font-size:13px;line-height:1.6;"><b>${n}. ${pt.name}</b> · <a href="${gmapsUrl(pt.name)}" target="_blank" rel="noopener">Google Maps</a>${snacks ? "<br>" + snacks : ""}</div>`);
      currentMarkers.push(marker);
    } else {
      currentMarkers.push(hotelMarker);
    }
    n++;
  });

  if(bounds.length){
    map.fitBounds(bounds, {padding:[30,30], maxZoom: day.key==="d5" ? 9 : 14});
  }
}

let currentMarkers = [];
let highlightedIdx = -1;

function highlightStop(idx){
  if(idx === highlightedIdx) return;
  // un-highlight the previous marker + list row
  if(highlightedIdx >= 0 && currentMarkers[highlightedIdx]){
    const prevEl = currentMarkers[highlightedIdx].getElement();
    if(prevEl) prevEl.classList.remove('pulse-marker');
  }
  document.querySelectorAll('.stop.highlighted').forEach(el=>el.classList.remove('highlighted'));
  highlightedIdx = idx;
  const marker = currentMarkers[idx];
  const listRow = document.querySelector(`.stop[data-index="${idx}"]`);
  if(listRow) listRow.classList.add('highlighted');
  if(!marker) return;
  const el = marker.getElement();
  if(el) el.classList.add('pulse-marker');
  // Zoom in close enough that markers packed tightly together (like the boutique crawl street)
  // actually separate on screen instead of overlapping into one blob.
  const targetZoom = Math.max(map.getZoom(), 17);
  map.setView(marker.getLatLng(), targetZoom, {animate:true, duration:0.5});
}

// in-memory state: which stops are expanded (resets on page reload)
// in-memory state note: expand/collapse was removed in favor of always-visible descriptions.

function connectorClass(mode){
  if(mode === "walk") return "walk";
  if(mode === "tour") return "tour";
  return "transit"; // subway/bus/jr all read as one solid "transit" line, same as the map
}

function connectorIcon(cls){
  if(cls === "walk") return "🚶";
  if(cls === "tour") return "🚌";
  return "🚇";
}

function renderPanel(day){
  highlightedIdx = -1;
  const panel = document.getElementById('panel');
  const modeLabels = {walk:"Walk",subway:"Subway",bus:"Bus",jr:"JR",tour:"Tour",optional:"Optional"};
  let html = `<div class="day-title"><h2>${day.title}</h2></div>`;
  html += `<div class="day-note">${day.note}</div>`;
  day.stops.forEach((s,i)=>{
    const cat = getCategory(s.p);
    const color = categoryColor[cat];
    const icon = categoryIcon[cat];
    const key = day.key+"-"+i;
    html += `
      <div class="stop" data-key="${key}" data-index="${i}">
        <div class="stop-row">
          <div class="num" style="background:${color}"><span class="icon">${icon}</span><span class="n">${i+1}</span></div>
          <div class="body">
            <div class="time">${s.time}</div>
            <div class="place">${s.label}</div>
            ${s.desc ? `<div class="desc">${s.desc}</div>` : ""}
          </div>
        </div>
      </div>`;
    // connector to the next stop — dashed = walk, solid = transit/tour, matches the map's line style
    // supports a `legs` array on the next stop for multi-leg journeys (e.g. subway ride + walk),
    // so intermediate "arrive at station" cards aren't needed — the whole journey just stacks here.
    if(i < day.stops.length - 1){
      const nextStop = day.stops[i+1];
      const legs = nextStop.legs ? nextStop.legs : [{mode: nextStop.mode || "walk", line: nextStop.line || null}];
      const chipsHtml = legs.map(leg=>{
        const cls = connectorClass(leg.mode);
        const label = leg.line ? leg.line : (modeLabels[leg.mode] || "Walk");
        return `<div class="chip ${cls}">${connectorIcon(cls)} ${label}</div>`;
      }).join("");
      html += `<div class="connector"><div class="tick"></div><div class="chipstack">${chipsHtml}</div></div>`;
    }
  });
  panel.innerHTML = html;

  panel.querySelectorAll('.stop').forEach((el,i)=>{
    el.addEventListener('click', ()=> highlightStop(i));
  });
}

function selectDay(idx){
  document.querySelectorAll('.day-pill').forEach((el,i)=>el.classList.toggle('active', i===idx));
  renderDay(DAYS[idx]);
  renderPanel(DAYS[idx]);
  currentDayIdx = idx;
}

let currentDayIdx = 0;

// Day nav pills
const nav = document.getElementById('dayNav');
DAYS.forEach((d,i)=>{
  const btn = document.createElement('div');
  btn.className = 'day-pill' + (i===0 ? ' active' : '');
  const shortDate = `${d.date.getMonth()+1}/${d.date.getDate()}`;
  btn.innerHTML = `${shortDate} <span class="emoji">${d.emoji}</span>`;
  btn.onclick = ()=>selectDay(i);
  nav.appendChild(btn);
});


// Auto-select today's date if it falls within the trip window
const today = new Date();
let initialIdx = 0;
DAYS.forEach((d,i)=>{
  if(today.getFullYear()===d.date.getFullYear() && today.getMonth()===d.date.getMonth() && today.getDate()===d.date.getDate()){
    initialIdx = i;
  }
});

selectDay(initialIdx);
