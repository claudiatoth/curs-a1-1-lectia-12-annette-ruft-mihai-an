// ============================================
// TEORIE - Lecția 12: Annette ruft Mihai an
// Claudia Toth · A1.2 — Annettes Deutschkurs · Lecția 12 din 20
// Sursă DF: fișele 68, 69, 70, 82 + WS62-WS67
// Personalpronomen im Akkusativ + Verschmelzung (Präp + Artikel)
// ============================================

const theoryHTML = `
    <!-- 0: Intro + notice diacritice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📞 1. Annette îl sună pe Mihai</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat. Și răspunsurile în română merg <strong>cu sau fără diacritice</strong>."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Mihai se face bine</h4>
                <p>În Lecția 11, Mihai era răcit — avea febră și îl durea gâtul. Astăzi se simte mai bine. <strong>Annette îl sună la telefon</strong> ca să vadă ce mai face și să-l invite la o ieșire cu grupul.</p>
                <p>La telefon spunem des lucruri ca „Te aud?", „Te sun mai târziu", „Putem să te vizităm?". Toate folosesc <strong>pronumele personale la Akkusativ</strong> (mich, dich, ihn…) — exact ce învățăm azi. În plus, învățăm formele contrase <strong>zum, zur, am, im, ins</strong> (Verschmelzung).</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Hallo Mihai! Hörst du mich gut? Wie geht es dir?
                            <span class="translation">Bună, Mihai! Mă auzi bine? Ce mai faci?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai</div>
                        <div class="dialog-text">Hallo Annette! Ja, ich höre dich. Es geht mir besser, danke!
                            <span class="translation">Bună, Annette! Da, te aud. Mă simt mai bine, mulțumesc!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Schön! Andreea und ich besuchen dich am Samstag. Wir holen dich um sieben ab.
                            <span class="translation">Frumos! Andreea și cu mine te vizităm sâmbătă. Te luăm la șapte.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Ce vei putea face la finalul lecției</h4>
                <ul style="margin-left: 18px;">
                    <li>Să folosești <strong>pronumele personale la Akkusativ</strong> (mich, dich, ihn, sie, es, uns, euch, sie, Sie)</li>
                    <li>Să înlocuiești un substantiv cu un pronume: <em>Ich sehe Mihai → Ich sehe ihn</em></li>
                    <li>Să spui la telefon: <em>Ich rufe dich an · Können wir dich besuchen?</em></li>
                    <li>Să folosești forma politicoasă la Akkusativ: <em>dich → Sie</em></li>
                    <li>Să folosești formele contrase: <strong>zum, zur, am, im, ins, beim, vom, ans</strong></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Personalpronomen im Akkusativ — tabelul -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>👥 2. Personalpronomen im Akkusativ — tabelul</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-pronomen-akk.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>📐 Ce este un pronume?</h4>
                <p>Un <strong>pronume</strong> înlocuiește un substantiv ca să nu îl repetăm. Asta știi deja de la <strong>Nominativ</strong> (subiect): <em>Der Mann kommt → <strong>Er</strong> kommt</em>. Astăzi învățăm forma de <strong>Akkusativ</strong> (complementul direct — cazul învățat în Lecția 5).</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>👥 Tabelul complet: Nominativ → Akkusativ</h4>
                <table class="grammar-table">
                    <tr><th>Nominativ</th><th>Akkusativ</th><th>Traducere RO</th></tr>
                    <tr><td><strong>ich</strong></td><td><strong>mich</strong></td><td><em style="color:#6b7280;">pe mine / mă</em></td></tr>
                    <tr><td><strong>du</strong></td><td><strong>dich</strong></td><td><em style="color:#6b7280;">pe tine / te</em></td></tr>
                    <tr><td><strong>er</strong></td><td><strong>ihn</strong></td><td><em style="color:#6b7280;">pe el / îl</em></td></tr>
                    <tr><td><strong>sie</strong> (ea)</td><td><strong>sie</strong></td><td><em style="color:#6b7280;">pe ea / o</em></td></tr>
                    <tr><td><strong>es</strong></td><td><strong>es</strong></td><td><em style="color:#6b7280;">(neutru) îl / o</em></td></tr>
                    <tr><td><strong>wir</strong></td><td><strong>uns</strong></td><td><em style="color:#6b7280;">pe noi / ne</em></td></tr>
                    <tr><td><strong>ihr</strong></td><td><strong>euch</strong></td><td><em style="color:#6b7280;">pe voi / vă</em></td></tr>
                    <tr><td><strong>sie</strong> (ei/ele)</td><td><strong>sie</strong></td><td><em style="color:#6b7280;">pe ei/ele / îi/le</em></td></tr>
                    <tr><td><strong>Sie</strong> (politicos)</td><td><strong>Sie</strong></td><td><em style="color:#6b7280;">pe dvs.</em></td></tr>
                </table>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (cheia memorării):</div>
                    <div class="text">„Vești bune: <strong>doar er → ihn se schimbă cu adevărat</strong>! Exact ca la Lecția 5 (der → den) — masculinul e singurul care se transformă vizibil. <strong>sie, es, Sie rămân identice</strong> ca la Nominativ. Trebuie să memorezi doar 5 forme noi: <strong>mich, dich, ihn, uns, euch</strong>. 💪"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Pronumele Akk în propoziție -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>💬 3. Pronumele la Akkusativ în propoziție</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-pronomen-satz.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔄 Înlocuim substantivul cu pronumele</h4>
                <p>Pronumele de Akkusativ ține locul complementului direct (obiectul acțiunii). Atenție la genul substantivului înlocuit:</p>
                <table class="grammar-table">
                    <tr><th>Cu substantiv</th><th>Cu pronume</th><th>Traducere RO</th></tr>
                    <tr><td>Annette ruft <strong>Mihai</strong> an.</td><td>Annette ruft <strong>ihn</strong> an.</td><td><em style="color:#6b7280;">Annette îl sună.</em></td></tr>
                    <tr><td>Mihai sieht <strong>die Frau</strong>.</td><td>Mihai sieht <strong>sie</strong>.</td><td><em style="color:#6b7280;">Mihai o vede.</em></td></tr>
                    <tr><td>Andreea liest <strong>das Buch</strong>.</td><td>Andreea liest <strong>es</strong>.</td><td><em style="color:#6b7280;">Andreea îl citește.</em></td></tr>
                    <tr><td>Wir besuchen <strong>Florian und Acar</strong>.</td><td>Wir besuchen <strong>sie</strong>.</td><td><em style="color:#6b7280;">Îi vizităm.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>📞 mich / dich — la telefon și în conversație</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>Hörst du mich?</strong> — <strong>Ja, ich höre dich.</strong><br><em style="color:#6b7280;">Mă auzi? — Da, te aud.</em></li>
                    <li><strong>Können wir dich besuchen?</strong><br><em style="color:#6b7280;">Putem să te vizităm?</em></li>
                    <li><strong>Ich rufe dich später an.</strong><br><em style="color:#6b7280;">Te sun mai târziu.</em></li>
                    <li><strong>Ich vermisse dich!</strong><br><em style="color:#6b7280;">Mi-e dor de tine!</em></li>
                    <li><strong>Annette holt uns um sieben ab.</strong><br><em style="color:#6b7280;">Annette ne ia la șapte.</em></li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Capcana clasică pentru români: <strong>mich = pe mine</strong> (NU <em>mir</em> — ăla e alt caz, Dativ, vine mai târziu). La verbe ca <em>anrufen, besuchen, sehen, hören, vermissen, abholen</em> folosim Akkusativ: <strong>Ich rufe dich an</strong>. 🦋"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Höflichkeitsform — dich → Sie -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🤝 4. Forma politicoasă: dich → Sie</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-hoeflichkeit.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🤝 Cu cine vorbești politicos?</h4>
                <p>Îți amintești de <strong>Sie</strong> (forma politicoasă din Lecția 6)? La Akkusativ, forma informală <strong>dich</strong> devine <strong>Sie</strong> (cu majusculă). O folosești cu necunoscuți, la medic, la birou, cu persoane mai în vârstă.</p>
                <table class="grammar-table">
                    <tr><th>Informal (dich)</th><th>Politicos (Sie)</th><th>Traducere RO</th></tr>
                    <tr><td>Ich verstehe <strong>dich</strong> nicht.</td><td>Ich verstehe <strong>Sie</strong> nicht.</td><td><em style="color:#6b7280;">Nu vă înțeleg.</em></td></tr>
                    <tr><td>Darf ich <strong>dich</strong> etwas fragen?</td><td>Darf ich <strong>Sie</strong> etwas fragen?</td><td><em style="color:#6b7280;">Pot să vă întreb ceva?</em></td></tr>
                    <tr><td>Ich rufe <strong>dich</strong> morgen an.</td><td>Ich rufe <strong>Sie</strong> morgen an.</td><td><em style="color:#6b7280;">Vă sun mâine.</em></td></tr>
                    <tr><td>Der Arzt sieht <strong>dich</strong> gleich.</td><td>Der Arzt sieht <strong>Sie</strong> gleich.</td><td><em style="color:#6b7280;">Medicul vă vede imediat.</em></td></tr>
                </table>
                <p style="margin-top: 6px; color: #6b7280;"><em>💡 Sie (politicos) se scrie MEREU cu literă mare — la fel ca la Nominativ. Forma e identică, doar contextul diferă.</em></p>
            </div>
        </div>
    </div>

    <!-- 4: Verschmelzung standard -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🔗 5. Verschmelzung — prepoziție + articol contras</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-verschmelzung.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔗 Ce este Verschmelzung?</h4>
                <p>Unele prepoziții se <strong>contopesc</strong> cu articolul hotărât într-un singur cuvânt. Le-ai întâlnit deja (zum Arzt, ins Kino) — acum le sistematizăm. Sunt <strong>obligatorii</strong> în vorbire și scriere.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>📊 Cele 8 forme contrase standard</h4>
                <table class="grammar-table">
                    <tr><th>Prepoziție + articol</th><th>Formă contrasă</th><th>Exemplu + Traducere RO</th></tr>
                    <tr><td>an + dem</td><td><strong>am</strong></td><td>am Bahnhof<br><em style="color:#6b7280;">la gară</em></td></tr>
                    <tr><td>an + das</td><td><strong>ans</strong></td><td>ans Fenster<br><em style="color:#6b7280;">la fereastră (spre)</em></td></tr>
                    <tr><td>in + dem</td><td><strong>im</strong></td><td>im Park<br><em style="color:#6b7280;">în parc</em></td></tr>
                    <tr><td>in + das</td><td><strong>ins</strong></td><td>ins Theater<br><em style="color:#6b7280;">la teatru</em></td></tr>
                    <tr><td>bei + dem</td><td><strong>beim</strong></td><td>beim Arzt<br><em style="color:#6b7280;">la medic</em></td></tr>
                    <tr><td>von + dem</td><td><strong>vom</strong></td><td>vom Bahnhof<br><em style="color:#6b7280;">de la gară</em></td></tr>
                    <tr><td>zu + dem</td><td><strong>zum</strong></td><td>zum Arzt<br><em style="color:#6b7280;">la medic (spre)</em></td></tr>
                    <tr><td>zu + der</td><td><strong>zur</strong></td><td>zur Schule<br><em style="color:#6b7280;">la școală (spre)</em></td></tr>
                </table>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Trucul meu de memorare: <strong>zu</strong> are DOUĂ forme — <strong>zum</strong> (zu + dem, masculin/neutru) și <strong>zur</strong> (zu + der, feminin). Mihai geht <strong>zum</strong> Arzt (der Arzt) dar <strong>zur</strong> Apotheke (die Apotheke). Restul au câte una singură. 🦋"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 5: Verschmelzung colocvial + selten + sumar -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🗣️ 6. Forme colocviale + „selten" + sumar</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-colocvial-sumar.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🗣️ Forme contrase colocviale (doar în vorbire)</h4>
                <p>În limbajul informal mai apar și acestea — bine de recunoscut, dar în scris formal folosești forma desfăcută:</p>
                <table class="grammar-table">
                    <tr><th>Colocvial</th><th>Formă completă</th><th>Traducere RO</th></tr>
                    <tr><td><strong>aufs</strong></td><td>auf das</td><td><em style="color:#6b7280;">pe (ceva)</em></td></tr>
                    <tr><td><strong>durchs</strong></td><td>durch das</td><td><em style="color:#6b7280;">prin</em></td></tr>
                    <tr><td><strong>fürs</strong></td><td>für das</td><td><em style="color:#6b7280;">pentru</em></td></tr>
                    <tr><td><strong>ums</strong></td><td>um das</td><td><em style="color:#6b7280;">în jurul</em></td></tr>
                    <tr><td><strong>vors</strong></td><td>vor das</td><td><em style="color:#6b7280;">în fața (spre)</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>⏰ Un cuvânt nou de frecvență: <em>selten</em></h4>
                <p>Din Lecția 3 știi deja <strong>immer</strong> (întotdeauna), <strong>oft</strong> (des), <strong>manchmal</strong> (uneori), <strong>nie</strong> (niciodată). Adăugăm acum <strong>selten</strong> = rar. Scara completă:</p>
                <p style="text-align: center; font-size: 1.05rem; color: #065f46; margin: 10px 0; padding: 8px; background: #d1fae5; border-radius: 6px;">
                    immer → oft → manchmal → <strong>selten</strong> → nie<br>
                    <em style="color:#6b7280;">întotdeauna → des → uneori → rar → niciodată</em>
                </p>
                <p><em>Ich gehe <strong>selten</strong> ins Theater.</em> <span style="color:#6b7280;">— Merg rar la teatru.</span></p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Sumarul lecției: ai învățat</h4>
                <ol style="margin-left: 18px;">
                    <li><strong>Personalpronomen im Akkusativ</strong>: mich, dich, ihn, sie, es, uns, euch, sie, Sie</li>
                    <li>Doar <strong>er → ihn</strong> se schimbă vizibil (ca der → den din Lecția 5)</li>
                    <li>Înlocuirea substantivului: <em>Ich sehe Mihai → Ich sehe ihn</em></li>
                    <li><strong>Forma politicoasă</strong> la Akkusativ: dich → <strong>Sie</strong></li>
                    <li><strong>Verschmelzung</strong>: am, ans, im, ins, beim, vom, zum, zur</li>
                    <li>Bonus: <strong>selten</strong> = rar (scara immer → nie)</li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">Acum poți vorbi natural la telefon — în germană. 🎉</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
