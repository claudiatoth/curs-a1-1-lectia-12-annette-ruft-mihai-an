// ============================================
// EXERCIȚII - Lecția 12: Annette ruft Mihai an
// Claudia Toth · A1.2 · 5 exerciții (toate text inputs)
// Sursă DF: fișele 69, 70, 82 + WS62, WS66
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EXERCIȚIUL 1: Ersetze durch ein Pronomen (Akkusativ)
// (inspirat din fișa 69 Übung I)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Annette ruft Mihai an. → Annette ruft ____ an. (el)', translation: 'Annette îl sună.', correct: 'ihn', accept: ['ihn'] },
    { id: 'b', sentence: 'Mihai isst den Apfel. → Mihai isst ____. (der Apfel)', translation: 'Mihai îl mănâncă.', correct: 'ihn', accept: ['ihn'] },
    { id: 'c', sentence: 'Andreea liest das Buch. → Andreea liest ____. (das Buch)', translation: 'Andreea îl citește.', correct: 'es', accept: ['es'] },
    { id: 'd', sentence: 'Carolina kauft die Schuhe. → Carolina kauft ____. (die Schuhe, plural)', translation: 'Carolina îi cumpără.', correct: 'sie', accept: ['sie'] },
    { id: 'e', sentence: 'Florian besucht seine Freundin. → Florian besucht ____. (ea)', translation: 'Florian o vizitează.', correct: 'sie', accept: ['sie'] },
    { id: 'f', sentence: 'Annette holt Andreea und Mihai ab. → Annette holt ____ ab. (ei)', translation: 'Annette îi ia.', correct: 'sie', accept: ['sie'] },
    { id: 'g', sentence: 'Mein Vater nimmt mich und meine Schwester mit. → Mein Vater nimmt ____ mit. (noi)', translation: 'Tatăl meu ne ia cu el.', correct: 'uns', accept: ['uns'] },
    { id: 'h', sentence: 'Acar verkauft seinen Tisch. → Acar verkauft ____. (der Tisch)', translation: 'Acar îl vinde.', correct: 'ihn', accept: ['ihn'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔄 Înlocuiește substantivul subliniat cu pronumele de Akkusativ.</strong><br>
            Atenție la gen: masculin → <em>ihn</em>, feminin → <em>sie</em>, neutru → <em>es</em>, plural → <em>sie</em>.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex1-${item.id}" placeholder="pronume Akkusativ...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 2: mich oder dich?
// (inspirat din WS62)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Annette: Hörst du ____? Die Verbindung ist schlecht. (pe mine)', translation: 'Mă auzi? Conexiunea e proastă.', correct: 'mich', accept: ['mich'] },
    { id: 'b', sentence: 'Mihai: Ja, ich höre ____ gut. (pe tine)', translation: 'Da, te aud bine.', correct: 'dich', accept: ['dich'] },
    { id: 'c', sentence: 'Kannst du ____ am Bahnhof abholen? Mein Bus fährt nicht. (pe mine)', translation: 'Poți să mă iei de la gară? Autobuzul meu nu merge.', correct: 'mich', accept: ['mich'] },
    { id: 'd', sentence: 'Andreea: Kann ich ____ am Samstag besuchen? (pe tine)', translation: 'Pot să te vizitez sâmbătă?', correct: 'dich', accept: ['dich'] },
    { id: 'e', sentence: 'Wo bist du? Ich sehe ____ nicht. (pe tine)', translation: 'Unde ești? Nu te văd.', correct: 'dich', accept: ['dich'] },
    { id: 'f', sentence: 'Ruf ____ bitte heute Abend an! (pe mine)', translation: 'Sună-mă te rog diseară!', correct: 'mich', accept: ['mich'] },
    { id: 'g', sentence: 'Ich vermisse ____, Mihai! Komm bald zurück. (pe tine)', translation: 'Mi-e dor de tine, Mihai! Întoarce-te curând.', correct: 'dich', accept: ['dich'] },
    { id: 'h', sentence: 'Verstehst du ____? Ich spreche zu leise. (pe mine)', translation: 'Mă înțelegi? Vorbesc prea încet.', correct: 'mich', accept: ['mich'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📞 mich sau dich? Completează conversația la telefon.</strong><br>
            <em>mich</em> = pe mine · <em>dich</em> = pe tine. Citește indiciul RO din paranteză.
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex2-${item.id}" placeholder="mich / dich...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 3: ihn, sie sau es?
// (inspirat din WS62, WS66)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Brauchst du den Regenschirm? — Ja, ich brauche ____. (der Regenschirm)', translation: 'Îți trebuie umbrela? — Da, îmi trebuie.', correct: 'ihn', accept: ['ihn'] },
    { id: 'b', sentence: 'Suchst du die Schere? — Ja, ich suche ____. (die Schere)', translation: 'Cauți foarfeca? — Da, o caut.', correct: 'sie', accept: ['sie'] },
    { id: 'c', sentence: 'Wo ist mein Heft? Ich finde ____ nicht. (das Heft)', translation: 'Unde e caietul meu? Nu îl găsesc.', correct: 'es', accept: ['es'] },
    { id: 'd', sentence: 'Kennst du Florian? — Nein, ich kenne ____ nicht. (Florian)', translation: 'Îl cunoști pe Florian? — Nu, nu îl cunosc.', correct: 'ihn', accept: ['ihn'] },
    { id: 'e', sentence: 'Magst du mein Armband? — Ja, ich finde ____ schön! (das Armband)', translation: 'Îți place brățara mea? — Da, o găsesc frumoasă!', correct: 'es', accept: ['es'] },
    { id: 'f', sentence: 'Wir besuchen Andreea. Wir besuchen ____ am Sonntag. (Andreea)', translation: 'O vizităm pe Andreea duminică.', correct: 'sie', accept: ['sie'] },
    { id: 'g', sentence: 'Kaufst du den Fernseher? — Ja, ich kaufe ____. (der Fernseher)', translation: 'Cumperi televizorul? — Da, îl cumpăr.', correct: 'ihn', accept: ['ihn'] },
    { id: 'h', sentence: 'Wir rufen Carolina und Acar an. Wir rufen ____ an. (plural)', translation: 'Îi sunăm pe Carolina și Acar.', correct: 'sie', accept: ['sie'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🎯 ihn, sie sau es? Alege pronumele după genul substantivului.</strong><br>
            der → <em>ihn</em> · die → <em>sie</em> · das → <em>es</em> · plural → <em>sie</em>.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="ihn / sie / es...">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 4: Höflichkeitsform (dich → Sie)
// (inspirat din fișa 69 Übung I, ex.2)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Ich verstehe dich nicht. → Ich verstehe ____ nicht. (politicos)', translation: 'Nu vă înțeleg.', correct: 'Sie', accept: ['sie'] },
    { id: 'b', sentence: 'Frau Müller ruft dich morgen an. → Frau Müller ruft ____ morgen an.', translation: 'Doamna Müller vă sună mâine.', correct: 'Sie', accept: ['sie'] },
    { id: 'c', sentence: 'Der Arzt sieht dich gleich. → Der Arzt sieht ____ gleich.', translation: 'Medicul vă vede imediat.', correct: 'Sie', accept: ['sie'] },
    { id: 'd', sentence: 'Darf ich dich etwas fragen? → Darf ich ____ etwas fragen?', translation: 'Pot să vă întreb ceva?', correct: 'Sie', accept: ['sie'] },
    { id: 'e', sentence: 'Carolina nimmt dich am Freitag mit. → Carolina nimmt ____ am Freitag mit.', translation: 'Carolina vă ia vineri.', correct: 'Sie', accept: ['sie'] },
    { id: 'f', sentence: 'Ich besuche dich nächste Woche. → Ich besuche ____ nächste Woche.', translation: 'Vă vizitez săptămâna viitoare.', correct: 'Sie', accept: ['sie'] },
    { id: 'g', sentence: 'Annette: Kann ich Sie etwas fragen, Herr Direktor? (politicos — formă)', translation: 'Pot să vă întreb ceva, domnule director?', correct: 'Sie', accept: ['sie'] },
    { id: 'h', sentence: 'Bună informal → politicos: Ich rufe dich an. → Ich rufe ____ an.', translation: 'Vă sun.', correct: 'Sie', accept: ['sie'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🤝 Transformă în forma politicoasă: dich → Sie.</strong><br>
            <strong>Sie</strong> (politicos) se scrie MEREU cu literă mare. Forma e identică la Akkusativ ca la Nominativ.
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="forma politicoasă...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 5: Verschmelzung (Präp + Artikel)
// (inspirat din fișa 82)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Mihai geht (zu + dem) ____ Arzt. (der Arzt)', translation: 'Mihai merge la medic.', correct: 'zum', accept: ['zum'] },
    { id: 'b', sentence: 'Andreea geht (zu + der) ____ Schule. (die Schule)', translation: 'Andreea merge la școală.', correct: 'zur', accept: ['zur'] },
    { id: 'c', sentence: 'Wir sind (in + dem) ____ Park. (der Park)', translation: 'Suntem în parc.', correct: 'im', accept: ['im'] },
    { id: 'd', sentence: 'Gehen wir (in + das) ____ Theater? (das Theater)', translation: 'Mergem la teatru?', correct: 'ins', accept: ['ins'] },
    { id: 'e', sentence: 'Carolina wartet (an + dem) ____ Bahnhof. (der Bahnhof)', translation: 'Carolina așteaptă la gară.', correct: 'am', accept: ['am'] },
    { id: 'f', sentence: 'Mihai war (bei + dem) ____ Arzt. (der Arzt)', translation: 'Mihai a fost la medic.', correct: 'beim', accept: ['beim'] },
    { id: 'g', sentence: 'Der Bus kommt (von + dem) ____ Flughafen. (der Flughafen)', translation: 'Autobuzul vine de la aeroport.', correct: 'vom', accept: ['vom'] },
    { id: 'h', sentence: 'Acar geht (an + das) ____ Fenster. (das Fenster)', translation: 'Acar merge la fereastră.', correct: 'ans', accept: ['ans'] },
    { id: 'i', sentence: 'Andreea geht (zu + der) ____ Apotheke. (die Apotheke)', translation: 'Andreea merge la farmacie.', correct: 'zur', accept: ['zur'] },
    { id: 'j', sentence: 'Florian geht (in + das) ____ Kino. (das Kino)', translation: 'Florian merge la cinema.', correct: 'ins', accept: ['ins'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🔗 Scrie forma contrasă (Verschmelzung).</strong><br>
            zu+dem=<em>zum</em> · zu+der=<em>zur</em> · in+dem=<em>im</em> · in+das=<em>ins</em> · an+dem=<em>am</em> · an+das=<em>ans</em> · bei+dem=<em>beim</em> · von+dem=<em>vom</em>.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="formă contrasă...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// Build all exercises on load
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
