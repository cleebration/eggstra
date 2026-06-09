import { sprueche } from '../data.js'

export default function Sprueche() {
  return (
    <section id="sprueche">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Die Serie</span>
          <h2>Zehn Sprüche, ein Frühstück</h2>
          <p>Jeder Spruch versteckt ein Wort. Findest du es? In Klammern steht die Auflösung.</p>
        </div>
        <div className="grid">
          {sprueche.map((s, i) => (
            <div className="card" key={i}>
              <span className="num">{i + 1}</span>
              <div className="spruch">{s.t}</div>
              <span className="tag">{s.w}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
