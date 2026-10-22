import Logo from './Logo.jsx'

export default function Nav({ aktiv = '' }) {
  return (
    <nav>
      <div className="wrap nav-inner">
        <a href="/" className="nav-brand" aria-label="eggstra Startseite">
          <Logo size={24} />
        </a>
        <div className="nav-right">
          <a href="/#sprueche" className="nav-link">Sprüche</a>
          <a href="/newsletter" className={'nav-link' + (aktiv === 'newsletter' ? ' is-active' : '')}
             aria-current={aktiv === 'newsletter' ? 'page' : undefined}>Newsletter</a>
          <a href="/#shop" className="nav-cta">Zum Shop</a>
        </div>
      </div>
    </nav>
  )
}
