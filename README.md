# eggstra

Frühstücks-Wortspiele rund ums Ei. Vite + React, Deployment über Vercel.

## Entwicklung
```bash
npm install
npm run dev      # lokaler Dev-Server
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Struktur
- `src/data.js` – **zentrale Inhaltsquelle**: Marke, die 10 Sprüche, Shop-Konfiguration.
- `src/components/` – Bausteine (Nav, Hero, Sprüche, Shop, Newsletter, Footer, Logo).
- `public/impressum.html`, `public/datenschutz.html` – eigenständige Rechtsseiten (österr. Recht).
- `public/logo.svg`, `public/favicon.svg` – Marke.
- `index.html` – reiner Vite-Einstieg (kein Inhalt/CSS).
- `vercel.json` – SPA-Fallback; statische Dateien werden zuvor direkt ausgeliefert.

## Shop scharf schalten
In `src/data.js` unter `shop`:
- `live: false` → „kommt bald"-Vorschau ohne Verkauf (nicht-gewerblich).
- `live: true` + `url: '...'` → Button zum Spreadshop.
  **Achtung:** Erst aktivieren, wenn der Verkauf rechtlich geklärt ist – dann muss das
  Impressum auf gewerblich umgestellt werden (Gewerbe/GISA/ggf. UID, EU-OS-Plattform).

## Sprache
Nur Deutsch – der Wortwitz funktioniert nur hier.
