// Newsletter – zentraler Baustein newsletter-hub (seit 19.10.2026).
// Formular + Anmeldung kommen von newsletter.cleebration.com (Script in index.html);
// Liste, Sprache und Texte: cleebration-web/newsletter-hub/worker/sites.config.mjs (Schlüssel "eggstra").
export default function Newsletter() {
  return (
    <section className="signup" id="newsletter">
      <div className="wrap">
        <div className="box">
          <h2>Hol dir den <span className="yolkword">Eggsperten</span>-Newsletter</h2>
          <p>Jede Woche ein neuer Frühstücksspruch – und als Erste:r erfahren, wann der Shop öffnet.</p>
          <newsletter-signup site="eggstra" heading="" text=""></newsletter-signup>
        </div>
      </div>
    </section>
  )
}
