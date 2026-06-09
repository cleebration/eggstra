import { useState } from 'react'

export default function Newsletter() {
  const [done, setDone] = useState(false)
  return (
    <section className="signup">
      <div className="wrap">
        <div className="box">
          <h2>Hol dir den <span className="yolkword">Eggsperten</span>-Newsletter</h2>
          <p>Jede Woche ein neuer Frühstücksspruch – und als Erste:r erfahren, wann der Shop öffnet.</p>
          <div className="form">
            <input type="email" placeholder="deine@email.at" aria-label="E-Mail-Adresse" />
            <button type="button" onClick={() => setDone(true)}>
              {done ? 'Willkommen!' : 'Anmelden'}
            </button>
          </div>
          <p className="form-note">
            Noch nicht aktiv – der Newsletter-Dienst wird vor dem Start angebunden.
          </p>
        </div>
      </div>
    </section>
  )
}
