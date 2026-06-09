import { brand } from '../data.js'

export default function Hero() {
  return (
    <header id="top">
      <div className="wrap hero">
        <div>
          <span className="eyebrow">Frühstück mit Wortwitz</span>
          <h1>Ein <span className="yolkword">eggszellenter</span> Start in den Tag.</h1>
          <p className="lead">{brand.lead}</p>
          <div className="btns">
            <a className="btn btn-primary" href="#shop">Zum Shop</a>
            <a className="btn btn-ghost" href="#sprueche">Alle Sprüche ansehen</a>
          </div>
        </div>
        <div className="egg-stage">
          <div className="egg">
            <div className="egg-white" />
            <div className="egg-yolk"><div className="shine" /></div>
            <div className="egg-label">Sunny side up. Wortwitz mittig.</div>
          </div>
        </div>
      </div>
    </header>
  )
}
