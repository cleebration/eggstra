// Newsletter – eigene Seite /newsletter wie auf den anderen cleebration-Websites (seit 22.10.2026).
// Formular, Überschrift und Text kommen vom zentralen Baustein newsletter.cleebration.com (Script in index.html);
// Liste, Sprache, Texte und Farben: cleebration-web/newsletter-hub/worker/sites.config.mjs (Schlüssel "eggstra").
export default function Newsletter() {
  return (
    <main className="nl-page" id="newsletter">
      <div className="wrap">
        <newsletter-signup site="eggstra"></newsletter-signup>
      </div>
    </main>
  )
}
