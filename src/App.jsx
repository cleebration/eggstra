import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Sprueche from './components/Sprueche.jsx'
import Shop from './components/Shop.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'

// Zwei Seiten: Start (/) und Newsletter (/newsletter) – vercel.json leitet alle Pfade auf index.html.
const istNewsletter = window.location.pathname.replace(/\/+$/, '') === '/newsletter'

export default function App() {
  return (
    <>
      <Nav aktiv={istNewsletter ? 'newsletter' : ''} />
      {istNewsletter ? (
        <Newsletter />
      ) : (
        <>
          <Hero />
          <Sprueche />
          <Shop />
        </>
      )}
      <Footer />
    </>
  )
}
