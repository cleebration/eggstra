import Logo from './Logo.jsx'

export default function Nav() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand" aria-label="eggstra Startseite">
          <Logo size={24} />
        </a>
        <div className="nav-right">
          <a href="#sprueche" className="nav-link">Sprüche</a>
          <a href="#shop" className="nav-cta">Zum Shop</a>
        </div>
      </div>
    </nav>
  )
}
