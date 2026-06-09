import Logo from './Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="wrap">
        <a href="#top" className="footer-brand"><Logo size={22} /></a>
        <p>Frühstück mit Wortwitz · folge auf Instagram &amp; Pinterest</p>
        <div className="footer-links">
          <a href="/impressum.html">Impressum</a>
          <a href="/datenschutz.html">Datenschutz</a>
        </div>
        <p className="copyright">© {year} eggstra · ein Projekt von cleebration · eggstra.at</p>
      </div>
    </footer>
  )
}
