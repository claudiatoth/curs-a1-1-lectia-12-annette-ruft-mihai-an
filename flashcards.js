// ============================================
// FLASHCARDS - Lecția 12: Annette ruft Mihai an
// Claudia Toth · A1.2 · 32 carduri
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne în stringuri JS!
// Folosesc CAPS pentru emfază, fără ghilimele. EXACT 6 quotes / linie.
// ============================================

const flashcardsData = [
    // === 9 Personalpronomen Akkusativ (9) ===
    { de: "mich", ro: "pe mine / mă · ich → mich · Hörst du mich?", audio: "audio/letters/mich.wav" },
    { de: "dich", ro: "pe tine / te · du → dich · Ich rufe dich an", audio: "audio/letters/dich.wav" },
    { de: "ihn", ro: "pe el / îl · er → ihn · SINGURUL care se schimba vizibil (ca der→den)", audio: "audio/letters/ihn.wav" },
    { de: "sie (ea)", ro: "pe ea / o · sie → sie · ramane la fel", audio: "audio/letters/sie-akk.wav" },
    { de: "es", ro: "neutru, il / o · es → es · ramane la fel", audio: "audio/letters/es-akk.wav" },
    { de: "uns", ro: "pe noi / ne · wir → uns", audio: "audio/letters/uns.wav" },
    { de: "euch", ro: "pe voi / va · ihr → euch", audio: "audio/letters/euch.wav" },
    { de: "sie (ei/ele)", ro: "pe ei/ele / ii/le · sie → sie (plural)", audio: "audio/letters/sie-plural.wav" },
    { de: "Sie (politicos)", ro: "pe dvs. · Sie → Sie · mereu cu litera mare", audio: "audio/letters/sie-politicos.wav" },

    // === 8 Verschmelzung standard (8) ===
    { de: "am", ro: "an + dem · am Bahnhof = la gara", audio: "audio/letters/am.wav" },
    { de: "ans", ro: "an + das · ans Fenster = la fereastra (spre)", audio: "audio/letters/ans.wav" },
    { de: "im", ro: "in + dem · im Park = in parc", audio: "audio/letters/im.wav" },
    { de: "ins", ro: "in + das · ins Theater = la teatru", audio: "audio/letters/ins.wav" },
    { de: "beim", ro: "bei + dem · beim Arzt = la medic", audio: "audio/letters/beim.wav" },
    { de: "vom", ro: "von + dem · vom Bahnhof = de la gara", audio: "audio/letters/vom.wav" },
    { de: "zum", ro: "zu + dem · zum Arzt = la medic (masculin/neutru)", audio: "audio/letters/zum.wav" },
    { de: "zur", ro: "zu + der · zur Schule = la scoala (feminin)", audio: "audio/letters/zur.wav" },

    // === 6 exemple propoziții cu pronume (6) ===
    { de: "Hörst du mich?", ro: "Ma auzi? · raspuns: Ja, ich höre dich", audio: "audio/letters/hoerst-du-mich.wav" },
    { de: "Ich rufe dich an.", ro: "Te sun. · anrufen + Akkusativ", audio: "audio/letters/ich-rufe-dich-an.wav" },
    { de: "Können wir dich besuchen?", ro: "Putem sa te vizitam?", audio: "audio/letters/koennen-wir-dich-besuchen.wav" },
    { de: "Ich sehe ihn.", ro: "Il vad. · er → ihn", audio: "audio/letters/ich-sehe-ihn.wav" },
    { de: "Annette besucht uns.", ro: "Annette ne viziteaza.", audio: "audio/letters/annette-besucht-uns.wav" },
    { de: "Ich vermisse dich!", ro: "Mi-e dor de tine!", audio: "audio/letters/ich-vermisse-dich.wav" },

    // === 5 Verschmelzung colocviale (5) ===
    { de: "aufs", ro: "auf + das · colocvial (in vorbire)", audio: "audio/letters/aufs.wav" },
    { de: "durchs", ro: "durch + das · colocvial", audio: "audio/letters/durchs.wav" },
    { de: "fürs", ro: "für + das · colocvial", audio: "audio/letters/fuers.wav" },
    { de: "ums", ro: "um + das · colocvial", audio: "audio/letters/ums.wav" },
    { de: "vors", ro: "vor + das · colocvial", audio: "audio/letters/vors.wav" },

    // === 4 Wie oft (4) — total 32 ===
    { de: "immer", ro: "intotdeauna · cea mai mare frecventa", audio: "audio/letters/immer.wav" },
    { de: "oft", ro: "des / adesea", audio: "audio/letters/oft.wav" },
    { de: "selten", ro: "rar · CUVANT NOU · intre manchmal si nie", audio: "audio/letters/selten.wav" },
    { de: "nie", ro: "niciodata · scara: immer-oft-manchmal-selten-nie", audio: "audio/letters/nie.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (9 pronume Akkusativ · 8 Verschmelzung standard · 6 propoziții · 5 Verschmelzung colocvial · 4 frecvență).<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

buildFlashcards();
