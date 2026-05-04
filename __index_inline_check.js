
// ─── SECURITY: XSS PREVENTION ───────────────────────────────────────────────
function esc(s) {
  if (typeof s !== 'string') return s;
  return s.replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#039;';
      default: return m;
    }
  });
}

// ─── DATA ───────────────────────────────────────────────────────────────────
const originalTracks = [
  {id:0,ico:'🌺',name:'Pasoori',artist:'Ali Sethi & Shae Gill',dur:'3:46',mood:'ishq',tag:'Coke Studio',tagClass:''},
  {id:1,ico:'🎵',name:'Tere Bina',artist:'Atif Aslam',dur:'4:12',mood:'dard',tag:'Classic',tagClass:'dard-tag'},
  {id:2,ico:'🌙',name:'Afreen Afreen',artist:'Nusrat Fateh Ali Khan',dur:'5:28',mood:'ishq',tag:'Qawwali',tagClass:'sufi'},
  {id:3,ico:'🔥',name:'Saeein',artist:'Jawad Ahmad',dur:'3:58',mood:'junoon',tag:'Pop',tagClass:''},
  {id:4,ico:'💫',name:'Rabba',artist:'Rahat Fateh Ali Khan',dur:'4:30',mood:'sukoon',tag:'Sufi',tagClass:'sufi'},
  {id:5,ico:'🎸',name:'Bohemia Da Dhol',artist:'Bohemia',dur:'3:22',mood:'junoon',tag:'Rap',tagClass:''},
  {id:6,ico:'🌹',name:'Woh Lamhe',artist:'Atif Aslam',dur:'4:05',mood:'dard',tag:'OST',tagClass:'dard-tag'},
  {id:7,ico:'✨',name:'Dil Dil Pakistan',artist:'Vital Signs',dur:'4:18',mood:'jashn',tag:'National',tagClass:'gold'},
  {id:8,ico:'🌸',name:'Ko Ko Korina',artist:'Arif Lohar & Meesha Shafi',dur:'3:35',mood:'jashn',tag:'Folk',tagClass:'gold'},
  {id:9,ico:'🌟',name:'Aaqa',artist:'Abida Parveen',dur:'6:12',mood:'sukoon',tag:'Sufi',tagClass:'sufi'},
  {id:10,ico:'🎶',name:'Aik Alif',artist:'Noori & Saeen Zahoor',dur:'5:05',mood:'sukoon',tag:'Coke Studio',tagClass:''},
  {id:11,ico:'💔',name:'Bin Roye',artist:'Rahat Fateh Ali Khan',dur:'4:48',mood:'dard',tag:'OST',tagClass:'dard-tag'},
];

const csTracks = [
  {id:12,ico:'🌺',name:'Pasoori (Live)',artist:'Ali Sethi & Shae Gill',dur:'3:46',season:'S15'},
  {id:13,ico:'🎵',name:'Rung',artist:'Abida Parveen & Rahat FARK',dur:'6:20',season:'S15'},
  {id:14,ico:'🌙',name:'Afreen Afreen (Acoustic)',artist:'Rahat FARK & Momina',dur:'5:48',season:'S09'},
  {id:15,ico:'✨',name:'Aik Alif (Unplugged)',artist:'Noori & Saeen Zahoor',dur:'5:05',season:'S03'},
  {id:16,ico:'🌸',name:'Tu Jhoom',artist:'Naseebo Lal & Abida Parveen',dur:'4:33',season:'S14'},
  {id:17,ico:'🎶',name:'Dil Dil Pakistan (CS)',artist:'Vital Signs',dur:'4:18',season:'S12'},
];

const ghazals = [
  {id:18, poet:'Mir Taqi Mir',sher:'یاں کوئی آیا نہیں میری طرح\nورنہ سب کو ہے خبر میری طرح',roman:'Yaan koi aaya nahin meri tarah\nVarna sab ko hai khabar meri tarah',trans:'No one has come here quite like me / But everyone knows of me nonetheless',dur:'2:15'},
  {id:19, poet:'Faiz Ahmed Faiz',sher:'ہم دیکھیں گے\nلازم ہے کہ ہم بھی دیکھیں گے',roman:'Hum dekhenge\nLazim hai ke hum bhi dekhenge',trans:'We shall see / It is destined that we too shall witness that day',dur:'3:10'},
  {id:20, poet:'Mirza Ghalib',sher:'ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے\nبہت نکلے میرے ارمان لیکن پھر بھی کم نکلے',roman:'Hazaron khwahishen aisi ke har khwahish pe dam nikle\nBahut nikle mere armaan lekin phir bhi kam nikle',trans:'Thousands of desires, each worth dying for / Many were fulfilled, yet I still yearn for more',dur:'2:45'},
  {id:21, poet:'Allama Iqbal',sher:'خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے\nخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے',roman:'Khudi ko kar buland itna ke har taqdeer se pahle\nKhuda bande se khud puchhe bata teri raza kya hai',trans:'Raise yourself so high that before each decree of fate / God himself asks you: what is your wish?',dur:'1:50'},
  {id:22, poet:'Parveen Shakir',sher:'خوشبو کی طرح میرے وجود کا احساس رہے\nچاہے نہ رہے یاد مری یاد کا احساس رہے',roman:'Khushbu ki tarah mere wujood ka ehsaas rahe\nChahe na rahe yaad meri yaad ka ehsaas rahe',trans:'May the sense of my existence linger like fragrance / Even if the memory fades, may the feeling of memory remain',dur:'2:30'},
  {id:23, poet:'Ahmad Faraz',sher:'رنجش ہی سہی دل ہی دکھانے کے لیے آ\nآ پھر سے مجھے چھوڑ کے جانے کے لیے آ',roman:'Ranjish hi sahi dil hi dukhaane ke liye aa\nAa phir se mujhe chhod ke jaane ke liye aa',trans:'Come even if it\'s to cause pain, come just to break my heart / Come, even if it is only to leave me once more',dur:'3:05'},
];

const artists = [
  {ico:'🎤',name:'Atif Aslam',genre:'Pop · Sufi'},
  {ico:'🌟',name:'Ali Sethi',genre:'Classical · Folk'},
  {ico:'🎵',name:'Abida Parveen',genre:'Sufi · Classical'},
  {ico:'🌙',name:'Nusrat Fateh Ali Khan',genre:'Qawwali'},
  {ico:'🔥',name:'Ali Zafar',genre:'Pop · Folk'},
  {ico:'💫',name:'Rahat Fateh Ali Khan',genre:'Qawwali · Pop'},
  {ico:'🎸',name:'Strings',genre:'Rock · Pop'},
  {ico:'✨',name:'Vital Signs',genre:'Rock · National'},
  {ico:'🎶',name:'Bohemia',genre:'Punjabi Rap'},
  {ico:'🌺',name:'Shae Gill',genre:'Indie Pop'},
  {ico:'💔',name:'Sajjad Ali',genre:'Pop · Classical'},
  {ico:'🌸',name:'Nescafe Basement',genre:'Multi-genre'},
];

// Global tracks map for universal playback
const tracksMap = {};
const allPlayableIds = [];
originalTracks.forEach(t => { tracksMap[t.id] = t; allPlayableIds.push(t.id); });
csTracks.forEach(t => {
  const cst = {...t, tag: t.season, tagClass: 'gold'};
  tracksMap[cst.id] = cst;
  allPlayableIds.push(cst.id);
});
ghazals.forEach(g => {
  const gt = {id: g.id, name: 'Ghazal Recitation', artist: g.poet, dur: g.dur, ico: '📜', tag: 'Poetry', tagClass: 'sufi', mood:'sukoon'};
  tracksMap[gt.id] = gt;
  allPlayableIds.push(gt.id);
});

// ─── RENDER ──────────────────────────────────────────────────────────────────
function renderTracks(list, container) {
  container.innerHTML = list.map((t) => `
    <div class="tcard" role="button" tabindex="0" aria-label="Play ${esc(t.name)} by ${esc(t.artist)}" onclick="playTrack(${t.id})" onkeypress="if(event.key==='Enter')playTrack(${t.id})">
      <div class="tcard-art">
        <div class="tcard-art-bg"></div>
        <span aria-hidden="true" style="position:relative;z-index:1">${t.ico}</span>
        <div class="tcard-overlay">
          <div class="tcard-playbtn" aria-hidden="true">▶</div>
        </div>
      </div>
      <div class="tcard-info">
        <div class="tcard-name">${esc(t.name)}</div>
        <div class="tcard-artist">${esc(t.artist)}</div>
        <div class="tcard-meta"><span>${esc(t.dur)}</span><span class="tag ${t.tagClass}">${esc(t.tag)}</span></div>
      </div>
    </div>`).join('');
}

function renderPlaylist(list, container, isCs = false) {
  container.innerHTML = list.map((t,i) => {
    const displayTag = isCs ? t.season : t.tag;
    const tagClass = isCs ? 'gold' : t.tagClass;
    return `
    <div class="prow" id="prow-${t.id}" role="button" tabindex="0" aria-label="Play ${esc(t.name)} by ${esc(t.artist)}" onclick="playTrack(${t.id})" onkeypress="if(event.key==='Enter')playTrack(${t.id})">
      <div class="prow-num">${i+1}</div>
      <div class="prow-ico" aria-hidden="true">${t.ico}</div>
      <div class="prow-info">
        <div class="prow-name" id="prow-name-${t.id}">${esc(t.name)}</div>
        <div class="prow-artist">${esc(t.artist)}</div>
      </div>
      <span class="tag ${tagClass}" style="flex-shrink:0">${esc(displayTag)}</span>
      <div class="prow-dur">${esc(t.dur)}</div>
    </div>`;
  }).join('');
}

function renderArtists(list, container) {
  container.innerHTML = list.map(a => `
    <div class="acard" role="button" tabindex="0" aria-label="Artist ${esc(a.name)}">
      <div class="avatar">
        <div class="avatar-glow"></div>
        <span aria-hidden="true" style="position:relative;z-index:1">${a.ico}</span>
      </div>
      <div class="aname">${esc(a.name)}</div>
      <div class="agenre">${esc(a.genre)}</div>
    </div>`).join('');
}

function renderGhazals() {
  document.getElementById('ghazal-grid').innerHTML = ghazals.map(g => `
    <div class="gcard" role="button" tabindex="0" aria-label="Play Ghazal by ${esc(g.poet)}" onclick="playTrack(${g.id})" onkeypress="if(event.key==='Enter')playTrack(${g.id})">
      <div class="gpoet">${esc(g.poet)}</div>
      <div class="gsher" aria-label="Urdu Verse">${esc(g.sher).replace(/\n/g, '<br>')}</div>
      <div class="groman" aria-label="Roman Urdu Verse">${esc(g.roman).replace(/\n/g, '<br>')}</div>
      <div class="gtrans" aria-label="English Translation">${esc(g.trans)}</div>
      <button class="gplay" aria-label="Synthesize Voice Recitation" onclick="reciteGhazal(${g.id}, event)">♪ Listen to Voice Recitation</button>
    </div>`).join('');
}

// Initial render
renderTracks(originalTracks.slice(0,8), document.getElementById('tracks-grid'));
renderPlaylist(originalTracks, document.getElementById('playlist-rows'));
renderPlaylist(csTracks, document.getElementById('cs-playlist'), true);
renderArtists(artists.slice(0,6), document.getElementById('home-artists'));
renderArtists(artists, document.getElementById('all-artists'));
renderGhazals();

// ─── PLAYER LOGIC & VOICE ──────────────────────────────────────────────────
let isPlaying = false, curId = null, prog = 0, totalSec = 0, timer = null, liked = false;

function parseDur(d){ const [m,s] = d.split(':').map(Number); return m*60+s; }
function fmtTime(s){ return Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0'); }

// Web Speech API for reciting Urdu poetry
function reciteGhazal(id, e) {
  if (e) e.stopPropagation(); // Prevent playing track
  
  const g = ghazals.find(x => x.id === id);
  if (!g) return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop any current speech
    
    // Pause any music
    if(isPlaying) togglePlay();

    const utterance = new SpeechSynthesisUtterance(g.sher);
    utterance.lang = 'ur-PK'; // Urdu Language
    utterance.rate = 0.85; // Slower pace for poetry
    
    const btn = e.currentTarget;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '🔊 Reciting now...';
    btn.setAttribute('aria-label', 'Reciting');
    
    utterance.onend = () => { btn.innerHTML = originalHTML; btn.setAttribute('aria-label', 'Synthesize Voice Recitation'); };
    utterance.onerror = () => { btn.innerHTML = originalHTML; btn.setAttribute('aria-label', 'Synthesize Voice Recitation'); };
    
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Voice synthesis is not supported in your browser.");
  }
}

function playTrack(id){
  const t = tracksMap[id];
  if(!t) return;
  
  // Stop text-to-speech if it's currently running
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  // clear previous highlights
  document.querySelectorAll('.prow').forEach(r => {
    r.classList.remove('playing');
    const nameEl = r.querySelector('.prow-name');
    if(nameEl) nameEl.classList.remove('playing-name');
  });

  curId = id;
  prog = 0;
  clearInterval(timer);
  totalSec = parseDur(t.dur);

  // Update player UI
  document.getElementById('pl-art').textContent = t.ico;
  document.getElementById('pl-name').textContent = t.name;
  document.getElementById('pl-artist').textContent = t.artist;
  document.getElementById('t-tot').textContent = t.dur;
  document.getElementById('t-cur').textContent = '0:00';
  document.getElementById('progfill').style.width = '0%';
  document.getElementById('progbar').setAttribute('aria-valuenow', '0');
  
  document.getElementById('pp-btn').textContent = '⏸';
  document.getElementById('pp-btn').classList.add('playing');
  document.getElementById('pl-heart').textContent = '♡';
  document.getElementById('pl-heart').style.color = '';
  document.getElementById('pl-heart').setAttribute('aria-label', 'Like Track');
  liked = false;

  // Now playing bar
  const npBar = document.getElementById('np-bar');
  npBar.style.display = 'flex';
  document.getElementById('np-track-name').textContent = t.name;
  document.getElementById('np-track-artist').textContent = t.artist;

  // Highlight playlist row if visible
  const rows = document.querySelectorAll('#prow-'+id);
  rows.forEach(row => {
    row.classList.add('playing');
    const nameEl = row.querySelector('.prow-name');
    if(nameEl) nameEl.classList.add('playing-name');
  });

  isPlaying = true;
  startProgress();
}

function startProgress(){
  clearInterval(timer);
  const intervalMs = 200; // update 5 times per second for smooth progress
  timer = setInterval(()=>{
    if(!isPlaying) return;
    prog = Math.min(prog + (100 / totalSec) * (intervalMs/1000), 100);
    document.getElementById('progfill').style.width = prog+'%';
    document.getElementById('progbar').setAttribute('aria-valuenow', Math.round(prog));
    
    const elapsed = (prog/100)*totalSec;
    document.getElementById('t-cur').textContent = fmtTime(elapsed);
    
    if(prog >= 99.9){
      clearInterval(timer);
      nextTrack();
    }
  }, intervalMs);
}

function togglePlay(){
  if(curId === null && allPlayableIds.length > 0) {
    playTrack(allPlayableIds[0]);
    return;
  }
  isPlaying = !isPlaying;
  document.getElementById('pp-btn').textContent = isPlaying ? '⏸' : '▶';
  document.getElementById('pp-btn').classList.toggle('playing', isPlaying);
}

function nextTrack(){
  if(curId !== null){
    const idx = allPlayableIds.indexOf(curId);
    if(idx !== -1) playTrack(allPlayableIds[(idx+1) % allPlayableIds.length]);
  }
}
function prevTrack(){
  if(curId !== null){
    const idx = allPlayableIds.indexOf(curId);
    if(idx !== -1) playTrack(allPlayableIds[(idx-1+allPlayableIds.length) % allPlayableIds.length]);
  }
}

function seekTo(e, el){
  if(curId === null) return;
  const r = el.getBoundingClientRect();
  prog = Math.max(0, Math.min(100, (e.clientX-r.left)/r.width*100));
  document.getElementById('progfill').style.width = prog+'%';
  document.getElementById('progbar').setAttribute('aria-valuenow', Math.round(prog));
  document.getElementById('t-cur').textContent = fmtTime((prog/100)*totalSec);
}

function setVol(e, el){
  const r = el.getBoundingClientRect();
  const vol = Math.max(0, Math.min(100, (e.clientX-r.left)/r.width*100));
  document.getElementById('volfill').style.width = vol+'%';
  el.setAttribute('aria-valuenow', Math.round(vol));
}

function toggleHeart(){
  if(curId === null) return;
  liked = !liked;
  document.getElementById('pl-heart').textContent = liked ? '♥' : '♡';
  document.getElementById('pl-heart').style.color = liked ? '#e05070' : '';
  document.getElementById('pl-heart').setAttribute('aria-label', liked ? 'Unlike Track' : 'Like Track');
}

function filterMood(mood){
  goPage('home', document.getElementById('nav-home'));
  document.getElementById('featured-section').style.display = 'none';
  document.getElementById('trending-section').style.display = 'none';

  // Highlight mood section temporarily
  document.querySelectorAll('.mood').forEach(m => m.style.opacity = '.5');
  const moodMap = {dard:0,ishq:1,jashn:2,sukoon:3,junoon:4};
  if(moodMap[mood] !== undefined) document.querySelectorAll('.mood')[moodMap[mood]].style.opacity = '1';
  setTimeout(()=>document.querySelectorAll('.mood').forEach(m => m.style.opacity = '1'), 1500);

  // Filter and show search section for mood
  const filtered = Object.values(tracksMap).filter(t => t.mood === mood);
  const searchSec = document.getElementById('search-results-section');
  const searchList = document.getElementById('search-results-list');
  searchSec.style.display = 'block';
  searchSec.querySelector('.sec-title').innerHTML = `MOOD: ${esc(mood).toUpperCase()} <div class="sec-line"></div>`;

  if(filtered.length > 0) {
    renderPlaylist(filtered, searchList);
    playTrack(filtered[0].id);
  } else {
    searchList.innerHTML = '<div style="color:var(--tx3);padding:20px;text-align:center">No tracks found for this mood.</div>';
  }
}

// ─── SEARCH & NAV ────────────────────────────────────────────────────────────
function handleSearch(query) {
  const q = query.toLowerCase().trim();
  const searchSec = document.getElementById('search-results-section');
  const searchList = document.getElementById('search-results-list');
  const featSec = document.getElementById('featured-section');
  const trendSec = document.getElementById('trending-section');

  if(q.length < 2) {
    clearSearch();
    return;
  }

  goPage('home', document.getElementById('nav-home'));
  featSec.style.display = 'none';
  trendSec.style.display = 'none';
  searchSec.style.display = 'block';
  searchSec.querySelector('.sec-title').innerHTML = `SEARCH RESULTS <div class="sec-line"></div>`;

  const results = Object.values(tracksMap).filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.artist.toLowerCase().includes(q)
  );

  if(results.length > 0) {
    renderPlaylist(results, searchList);
  } else {
    searchList.innerHTML = '<div style="color:var(--tx3);padding:20px;text-align:center">No songs or artists found. Try another term.</div>';
  }
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  document.getElementById('search-results-section').style.display = 'none';
  document.getElementById('featured-section').style.display = 'block';
  document.getElementById('trending-section').style.display = 'block';
}

function goPage(name, el){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  if(el) el.classList.add('active');
  if(name !== 'home') clearSearch();
}

// ─── KEYBOARD SHORTCUTS ──────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  // Toggle play/pause with Spacebar if not typing in input
  if(e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'BUTTON') {
    e.preventDefault();
    togglePlay();
  }
});

// ─── GREETING ────────────────────────────────────────────────────────────────
const h = new Date().getHours();
const greet = h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : h < 21 ? 'Good Evening' : 'Good Night';
document.getElementById('greet-title').textContent = greet;

