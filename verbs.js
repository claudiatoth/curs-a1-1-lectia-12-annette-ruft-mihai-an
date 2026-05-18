// ============================================
// VERB-KONJUGATION - Lecția 12 A1.2: Annette ruft Mihai an
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// 4 verbe: sein, haben (referință) + anrufen, besuchen (verbele lecției).
// TOATE verificate pe PONS · Präteritum → RO IMPERFECT · NU backticks/ghilimele interne!
// ============================================

const verbsData = [
    {
        inf: 'anrufen', ro: 'a suna (la telefon)', typ: 'tare / neregulat', aux: 'haben', part: 'angerufen',
        praes: [['ich','rufe an','sun'],['du','rufst an','suni'],['er/sie/es','ruft an','sună'],['wir','rufen an','sunăm'],['ihr','ruft an','sunați'],['sie/Sie','rufen an','sună']],
        praet: [['ich','rief an','sunam'],['du','riefst an','sunai'],['er/sie/es','rief an','suna'],['wir','riefen an','sunam'],['ihr','rieft an','sunați'],['sie/Sie','riefen an','sunau']],
        perf: [['ich','habe angerufen','am sunat'],['du','hast angerufen','ai sunat'],['er/sie/es','hat angerufen','a sunat'],['wir','haben angerufen','am sunat'],['ihr','habt angerufen','ați sunat'],['sie/Sie','haben angerufen','au sunat']],
        note: 'Verb SEPARABIL: an- se desparte → Ich rufe dich an. Și TARE (rufen → rief → gerufen). Verificat PONS. Folosit cu Akkusativ: ich rufe ihn an.'
    },
    {
        inf: 'besuchen', ro: 'a vizita', typ: 'slab / regulat', aux: 'haben', part: 'besucht',
        praes: [['ich','besuche','vizitez'],['du','besuchst','vizitezi'],['er/sie/es','besucht','vizitează'],['wir','besuchen','vizităm'],['ihr','besucht','vizitați'],['sie/Sie','besuchen','vizitează']],
        praet: [['ich','besuchte','vizitam'],['du','besuchtest','vizitai'],['er/sie/es','besuchte','vizita'],['wir','besuchten','vizitam'],['ihr','besuchtet','vizitați'],['sie/Sie','besuchten','vizitau']],
        perf: [['ich','habe besucht','am vizitat'],['du','hast besucht','ai vizitat'],['er/sie/es','hat besucht','a vizitat'],['wir','haben besucht','am vizitat'],['ihr','habt besucht','ați vizitat'],['sie/Sie','haben besucht','au vizitat']],
        note: 'Verb slab/regulat dar cu prefix be- NEDETAȘABIL → Partizip FĂRĂ ge-: besucht (NU gebesucht). Folosit cu Akkusativ: ich besuche dich.'
    },
    {
        inf: 'sein', ro: 'a fi', typ: 'auxiliar / neregulat', aux: 'sein', part: 'gewesen',
        praes: [['ich','bin','sunt'],['du','bist','ești'],['er/sie/es','ist','este'],['wir','sind','suntem'],['ihr','seid','sunteți'],['sie/Sie','sind','sunt']],
        praet: [['ich','war','eram'],['du','warst','erai'],['er/sie/es','war','era'],['wir','waren','eram'],['ihr','wart','erați'],['sie/Sie','waren','erau']],
        perf: [['ich','bin gewesen','am fost'],['du','bist gewesen','ai fost'],['er/sie/es','ist gewesen','a fost'],['wir','sind gewesen','am fost'],['ihr','seid gewesen','ați fost'],['sie/Sie','sind gewesen','au fost']],
        note: 'Verb de referință (predat la Lecția 11). Präteritum: war. Perfekt cu SEIN (er ist gewesen).'
    },
    {
        inf: 'haben', ro: 'a avea', typ: 'auxiliar / neregulat', aux: 'haben', part: 'gehabt',
        praes: [['ich','habe','am'],['du','hast','ai'],['er/sie/es','hat','are'],['wir','haben','avem'],['ihr','habt','aveți'],['sie/Sie','haben','au']],
        praet: [['ich','hatte','aveam'],['du','hattest','aveai'],['er/sie/es','hatte','avea'],['wir','hatten','aveam'],['ihr','hattet','aveați'],['sie/Sie','hatten','aveau']],
        perf: [['ich','habe gehabt','am avut'],['du','hast gehabt','ai avut'],['er/sie/es','hat gehabt','a avut'],['wir','haben gehabt','am avut'],['ihr','habt gehabt','ați avut'],['sie/Sie','haben gehabt','au avut']],
        note: 'Verb de referință (predat la Lecția 11). Präteritum: hatte (radical hatt-).'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = v.impersonal
        ? '<small style="color:#6b7280;">Verb IMPERSONAL — doar forma „es": <strong>es ' + v.perf[0][1] + '</strong>. NU se conjugă cu ich/du/wir...</small>'
        : '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe</strong> — anrufen + besuchen (verbele lecției) · sein + haben (referință din L11).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong> (caută orice formă).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Lecția 12 e despre PRONUME, nu introduce verbe noi de gramatică. Dar ai aici 2 verbe utile la telefon: <strong>anrufen</strong> (a suna — separabil ȘI tare!) și <strong>besuchen</strong> (a vizita). Plus sein + haben ca referință. Toate verificate pe PONS. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('modal') === 0 ? '#b45309' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857'));
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            (v.same ? '<div class="theory-box" style="background:#d1fae5;"><p style="margin:0;">📎 <strong>Același tipar</strong>: ' + v.same + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
