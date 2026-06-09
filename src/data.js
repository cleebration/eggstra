// Zentrale Inhaltsquelle. Hier pflegst du Texte, Sprüche und den Shop.

export const brand = {
  name: 'eggstra',
  domain: 'eggstra.at',
  tagline: 'Dein Eggstra zum Frühstück.',
  lead: 'Zehn Frühstückssprüche, die jedes Ei zum Wortspiel machen – für Tasse, Karte und die Wand über deinem Kaffee.',
}

// Die Frühstücksserie. Reihenfolge = Anzeige- und Ausspielreihenfolge.
export const sprueche = [
  { t: 'Eggszellenter Start in den Tag.', w: 'exzellent' },
  { t: 'Leggeres Frühstück, perfeggter Tag.', w: 'lecker · perfekt' },
  { t: 'Eier mit Spegg – mehr Morgen geht nicht.', w: 'Speck' },
  { t: 'Erst der Eggspresso, dann die Welt.', w: 'Espresso' },
  { t: 'Ohne Ei läuft nichts. Eggsakt so.', w: 'exakt' },
  { t: 'Guten Morgen, du Eggsemplar!', w: 'Exemplar' },
  { t: 'Frühstück ist nicht eggstrem – nur eggstrem wichtig.', w: 'extrem' },
  { t: 'Heute keine Eggstrawurst – einfach noch ein Ei.', w: 'Extrawurst' },
  { t: 'Frühstücks-Eggsperte seit dem ersten Kaffee.', w: 'Experte' },
  { t: 'Respeggt fürs Frühstück.', w: 'Respekt' },
]

// Shop-Schalter:
//  - live: false  -> "kommt bald"-Vorschau ohne Verkauf (aktueller, nicht-gewerblicher Zustand)
//  - live: true   -> Button zum Spreadshop (NUR setzen, wenn Verkauf rechtlich geklärt ist;
//                    dann auch das Impressum auf gewerblich umstellen!)
export const shop = {
  live: false,
  url: '', // z. B. 'https://eggstra.myspreadshop.at' – erst eintragen, wenn live = true
  products: [
    { ic: '☕', name: 'Tassen & Eierbecher', desc: 'Der Klassiker – Spruch trifft Frühstück direkt am Tisch.' },
    { ic: '✉️', name: 'Grußkarten', desc: 'Für Ostern, Muttertag und alle Frühaufsteher.' },
    { ic: '🖼️', name: 'Prints & Poster', desc: 'Zum Aufhängen in Küche und Café.' },
  ],
}
