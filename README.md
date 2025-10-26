<!--
Repository: azienda-cioccolati
Scopo: sito web semplice, facilmente copiabile su GitHub Pages.
Contenuto: index.html, styles.css, script.js, README.md
Istruzioni rapide nel README sotto.
-->

==== index.html ====
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title> Cjistiel Fattori - Home</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1 class="brand">Cjistiel Fattori </h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#prodotti">Prodotti</a>
        <a href="#chi-siamo">Chi siamo</a>
        <a href="#contatti">Contatti</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section id="home" class="hero">
      <h2>Cioccolato artigianale, fatto con amore</h2>
      <p>Piccola azienda di cioccolato con ricette tradizionali e ingredienti selezionati.</p>
      <a class="cta" href="#prodotti">Scopri i prodotti</a>
    </section>

    <section id="prodotti" class="cards">
      <h3>I nostri prodotti</h3>
      <div class="card-list">
        <article class="card">
          <h4>Cioccolato fondente</h4>
          <p>70% cacao, aroma intenso.</p>
        </article>
        <article class="card">
          <h4>Cioccolato al latte</h4>
          <p>Morbido e cremoso, per tutti i gusti.</p>
        </article>
        <article class="card">
          <h4>Cioccolato ripieno</h4>
          <p>Ripieni assortiti: nocciola, caramello, frutti di bosco.</p>
        </article>
      </div>
    </section>

    <section id="chi-siamo" class="about">
      <h3>Chi siamo</h3>
      <p>Siamo un piccolo laboratorio che unisce tradizione e creatività. Produciamo in quantità limitata per mantenere alta la qualità.</p>
    </section>

    <section id="contatti" class="contact">
      <h3>Contattaci</h3>
      <form id="contactForm">
        <label>Nome:<input type="text" id="name" required></label>
        <label>Email:<input type="email" id="email" required></label>
        <label>Messaggio:<textarea id="message" rows="4" required></textarea></label>
        <button type="submit">Invia</button>
      </form>
      <div id="formStatus" aria-live="polite"></div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© <span id="year"></span> Azienda Cioccolati — Tutti i diritti riservati</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

==== styles.css ====
/* Stile semplice e leggibile */
:root{ --bg:#fff; --text:#222; --accent:#7b3f00; --muted:#666 }
*{box-sizing:border-box}
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial; margin:0; color:var(--text); background:var(--bg)}
.container{max-width:900px;margin:0 auto;padding:16px}
.site-header{background:linear-gradient(90deg,#fff 0,#fff 100%);border-bottom:1px solid #eee}
.site-header .container{display:flex;align-items:center;justify-content:space-between}
.brand{margin:12px 0;color:var(--accent)}
nav a{margin-left:12px;text-decoration:none;color:var(--muted)}
.hero{padding:32px 0;text-align:center}
.hero h2{margin:0 0 8px}
.cta{display:inline-block;padding:10px 16px;border-radius:8px;background:var(--accent);color:white;text-decoration:none;margin-top:12px}
.cards{padding:16px 0}
.card-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
.card{border:1px solid #eee;padding:12px;border-radius:8px;background:#faf5f0}
.about{padding:12px 0}
.contact label{display:block;margin:8px 0}
input[type=text],input[type=email],textarea{width:100%;padding:8px;border:1px solid #ccc;border-radius:6px}
button[type=submit]{margin-top:8px;padding:10px 14px;border:none;border-radius:6px;background:var(--accent);color:white}
.site-footer{border-top:1px solid #eee;padding:12px 0;margin-top:24px;text-align:center;color:var(--muted)}

==== script.js ====
// Funzionalità minima: mostra anno e invia form (simulato)
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    status.textContent = 'Per favore compila tutti i campi.'; return;
  }
  // Qui normalmente invieresti i dati a un server. Per semplicità simuliamo l'invio.
  status.textContent = 'Invio in corso...';
  setTimeout(()=>{
    status.textContent = 'Messaggio inviato! Ti risponderemo all\'indirizzo ' + email + ' quanto prima.';
    form.reset();
  },800);
});

==== README.md ====
# azienda-cioccolati
Sito semplice per una piccola azienda di cioccolati. Progetto pensato per essere pubblicato su GitHub e GitHub Pages.

## Contenuto
- `index.html` — pagina principale
- `styles.css` — foglio di stile
- `script.js` — script minimo per il form

## Istruzioni rapide (per chi non è pratico)
1. Crea un nuovo repository su GitHub (ad esempio `azienda-cioccolati`).
2. Copia i file `index.html`, `styles.css`, `script.js` e `README.md` nel repository.
3. Commit e push su GitHub.
4. (Opzionale) Vai alle `Settings` del repository → `Pages` → seleziona il branch `main` e la cartella `/` e salva: il sito sarà pubblicato su `https://<tuo-username>.github.io/azienda-cioccolati/`.

## Personalizzazione
- Modifica il testo in `index.html` per inserire il nome della tua azienda, il logo o i reali prodotti.
- Se vuoi, posso personalizzare il sito con i colori del tuo brand, immagini o un menu prodotti più dettagliato.

## Licenza
Usa liberamente questo progetto per creare il sito della tua azienda.

---

Buon lavoro! Se vuoi, posso generare anche una versione con immagini e logo, o preparare i comandi Git passo-passo.
