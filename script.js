
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
  ramen:        {name:"Ebisoba Ichigen (Minami7 Nishi9)", ll:[43.0513,141.3454]},
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
  note:"Flight lands 1:25 PM, so the day starts later than a full morning would — nothing planned besides landing, transfer, check-in, and the reserved dinner.",
  stops:[
    {p:"airport", time:"1:25 PM", label:"Land — KE765 (ICN→CTS)", desc:"New Chitose Airport, Terminal I (International) · seat 55D"},
    {p:"hotel", time:"~3:00 PM", label:"Hotel check-in", desc:"Just south of Sapporo Station — 8 min walk to Odori, 2 min to the subway", legs:[
      {mode:"jr", line:"New Chitose Airport → Sapporo Sta. (JR Rapid Airport, ~40 min)"},
      {mode:"walk", line:"Walk (~8 min)"}
    ]},
    {p:"jingiskan", time:"7:00 PM", label:"Aratanaru Bonz Susukino (Genghis Khan BBQ)", desc:"Reservation confirmed · ~13 min walk from hotel (≈855m)", mode:"walk"},
    {p:"hotel", time:"~9:00 PM", label:"Back to hotel", desc:"Maybe a short stroll through Tanukikoji if energy allows, then rest", mode:"walk"}
  ]
},
{
  key:"d2", tab:"Jul 28 Tue", sub:"West: Zoo + BIOTOP",
  emoji:"🦁", date:new Date(2026,6,28), blurb:"Zoo, then BIOTOP lunch — pick one big outing, keep it light",
  title:"Day 2 · Zoo day",
  note:"Just the zoo and BIOTOP, both right by Maruyama-koen Station. Shaded break at Hokkaido Shrine before heading back out to Toriton for dinner — flexible timing, stay as long as it's working or cut it short for more park time.",
  stops:[
    {p:"hotel", time:"9:30 AM", label:"Leave hotel"},
    {p:"maruyamaZoo", time:"10:00–12:00", label:"Maruyama Zoo", desc:"Easy relaxed pace", legs:[
      {mode:"subway", line:"Sapporo Sta. (Namboku Line) → transfer to Tozai Line at Odori Sta. → Maruyama-koen Sta. (~10 min)"},
      {mode:"bus", line:"JR Hokkaido Bus [円15]/[円16] Zoo Line, board at Maruyama Bus Terminal platform 4 → Zoo West Gate (~5 min, ¥210/¥110)"}
    ]},
    {p:"biotop", time:"12:15–1:30 PM", label:"Lunch + browse at BIOTOP SAPPORO", desc:"New concept shop + restaurant (KITCHEN bw BIOTOP), ~10 min from the zoo, right by Maruyama Park", mode:"walk"},
    {p:"hokkaidoJingu", time:"~1:45–3:15 PM", label:"Cool-down break: Hokkaido Shrine", desc:"4.3★, 2,100+ reviews · old-growth forest grounds, noticeably shaded/cooler than the street (not air-conditioned) · right next to the zoo/BIOTOP area, no extra travel · Rokkatei tea house on the grounds serves warm mochi (Hangan-sama) for a sit-down snack", mode:"walk"},
    {p:"toriton", time:"6:30–7:30 PM", label:"Toriton Sushi Toyohira", desc:"Priority pick · conveyor-belt sushi, fun for a 5-year-old · no reservations taken (walk-in only)", legs:[
      {mode:"walk", line:"Walk back to Maruyama-koen Sta. (~7 min)"},
      {mode:"subway", line:"Maruyama-koen Sta. (Tozai Line) → transfer to Toho Line at Odori Sta. → Gakuen-mae Sta. (~20 min)"},
      {mode:"walk", line:"Walk (~5 min)"}
    ]},
    {p:"hotel", time:"~7:50 PM", label:"Back to hotel", desc:"~15 min", legs:[
      {mode:"walk", line:"Walk (~5 min) to Gakuen-mae Sta."},
      {mode:"subway", line:"Gakuen-mae Sta. (Toho Line) → transfer to Namboku Line at Odori Sta. → Sapporo Sta. (~15 min)"}
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
  emoji:"🛍️", date:new Date(2026,6,30), blurb:"Fantasy Kids Resort, then every boutique",
  title:"Day 4 · Menya Saimi + AOAO morning, then full shopping day",
  note:"Genuine open-run at Menya Saimi — arrive before opening and queue, since by 11AM a line has usually already formed anyway. Orders are taken while queueing, so seating-to-food is fast. This removes the lunch wait as a schedule risk and pulls the whole rest of the day ~30 min earlier. Then AOAO as an indoor cool-down before the shopping crawl. Indoor AC break at Donguri Bakery Odori roughly halfway through the crawl, during the hottest part of the afternoon.",
  stops:[
    {p:"hotel", time:"10:05 AM", label:"Leave hotel"},
    {p:"menyaSaimi", time:"10:30–11:15 AM", label:"Menya Saimi (open-run)", desc:"Priority pick · miso ramen, Toyohira-ku · Cash only · Queue by ~10:30, order taken while waiting · shop opens 11:00 officially but often opens early (10:45 weekdays / 10:30 weekends) once a line forms · bring water/shade for the queue · lunch-only hours (closes 3:15 PM) · Plan B if the wait gets too long for the kiddo: 春一家 三代目 麺宿 (Haruichiya Sandaime Menjuku, 4.3★/735 reviews, miso ramen, literally across the street) or ごまそば遊鶴 美園店 (Gomasoba Yuzuru Misono, 4.1★/125 reviews, soba/rice-bowl sets, ~10 min walk, usually no wait)", mode:"subway", line:"Sapporo Sta. (Toho Line) → direct, no transfer → Misono Sta. (~18 min)"},
    {p:"aoao", time:"11:45 AM–12:45 PM", label:"AOAO SAPPORO", desc:"Fully indoor & air-conditioned — a cool-down break before the shopping crawl", legs:[
      {mode:"subway", line:"Misono Sta. (Toho Line) → direct, no transfer → Odori Sta. (~18 min)"},
      {mode:"walk", line:"Walk (~3 min)"}
    ]},
    {p:"stellar", time:"1:00–1:45 PM", label:"Stellar Place: Shiki Marche, MARKEY'S, Bshop", desc:"~15 min each", legs:[
      {mode:"subway", line:"Odori Sta. (Namboku Line) → direct, no transfer → Sapporo Sta. (~4 min)"}
    ]},
    {p:"adamEtRope", time:"1:45–2:00 PM", label:"ADAM ET ROPE WILD LIFE TAILOR", desc:"Stellar Place East 2F — same building, no extra travel"},
    {p:"kitakaroDaimaru", time:"2:05–2:20 PM", label:"Snack: Kitakaro (Daimaru Sapporo B1F)", desc:"Priority pick · pastries/soft-serve · ~3 min walk from Stellar Place", mode:"walk"},
    {p:"kapital", time:"2:35–2:50 PM", label:"Kapital", desc:"Minami2 Nishi1 · closed every Tuesday, open today · ~14 min walk (≈900m)", mode:"walk"},
    {p:"beams", time:"2:55–3:10 PM", label:"BEAMS Sapporo", desc:"Minami1 Nishi3 · ~4 min walk", mode:"walk"},
    {p:"unitedArrows", time:"3:12–3:27 PM", label:"UNITED ARROWS Sapporo", desc:"Sapporo PARCO, right next to BEAMS · ~2 min walk", mode:"walk"},
    {p:"modest", time:"3:29–3:44 PM", label:"Modest", desc:"Minami2 Nishi3, near AOAO · ~2 min walk", mode:"walk"},
    {p:"humanmade", time:"3:46–4:01 PM", label:"Human Made Sapporo", desc:"THE KNOT Sapporo, one block south · ~2 min walk", mode:"walk"},
    {p:"donguriBakery", time:"4:03–4:18 PM", label:"AC break: Donguri Bakery Odori", desc:"Indoor, air-conditioned — pastry + cool-down stop · ~2 min walk", mode:"walk"},
    {p:"maw", time:"4:20–4:35 PM", label:"MaW", desc:"Minami2 Nishi5, continuing west · ~4 min walk", mode:"walk"},
    {p:"thread", time:"4:39–4:54 PM", label:"thread", desc:"Minami3 Nishi7 · ~4 min walk", mode:"walk"},
    {p:"garage69", time:"4:55–5:10 PM", label:"GARAGE69", desc:"Minami3 Nishi8, same block as thread · ~1 min walk", mode:"walk"},
    {p:"moonrise", time:"5:10–5:25 PM", label:"Moonrise", desc:"Same building as GARAGE69", mode:"walk"},
    {p:"rojiuraCurry", time:"5:27–6:27 PM", label:"Rojiura Curry SAMURAI Sakura", desc:"Priority pick · soup curry, Minami3 Nishi6 · ~2 min walk", mode:"walk"},
    {p:"hotel", time:"~6:41 PM", label:"Back to hotel", desc:"~14 min walk (≈875m)", mode:"walk"}
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
  rojiuraCurry:"meal", menyaSaimi:"meal", kitakaroDaimaru:"meal",
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
  let html = `<div class="day-title"><h2>${day.title}</h2><span class="badge">${day.tab}</span></div>`;
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

// Swipe navigation on the schedule panel (not the map, so map dragging isn't hijacked)
const panelEl = document.getElementById('panel');
let touchStartX = null;
panelEl.addEventListener('touchstart', (e)=>{ touchStartX = e.touches[0].clientX; }, {passive:true});
panelEl.addEventListener('touchend', (e)=>{
  if(touchStartX===null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if(Math.abs(dx) > 60){
    if(dx < 0 && currentDayIdx < DAYS.length-1) selectDay(currentDayIdx+1);
    else if(dx > 0 && currentDayIdx > 0) selectDay(currentDayIdx-1);
  }
  touchStartX = null;
}, {passive:true});

// Auto-select today's date if it falls within the trip window
const today = new Date();
let initialIdx = 0;
DAYS.forEach((d,i)=>{
  if(today.getFullYear()===d.date.getFullYear() && today.getMonth()===d.date.getMonth() && today.getDate()===d.date.getDate()){
    initialIdx = i;
  }
});

selectDay(initialIdx);
