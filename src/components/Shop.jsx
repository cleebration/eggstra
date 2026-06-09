import { shop } from '../data.js'

export default function Shop() {
  return (
    <section className="shop" id="shop">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{shop.live ? 'Shop' : 'Bald erhältlich'}</span>
          <h2>{shop.live ? 'Hol dir dein Lieblingsformat' : 'Der Shop kommt bald'}</h2>
          <p>
            {shop.live
              ? 'Tassen, Karten und Prints mit deinen Lieblingssprüchen.'
              : 'Wir bereiten Tassen, Karten und Prints vor. Trag dich unten ein, dann sagen wir dir Bescheid, sobald es losgeht.'}
          </p>
        </div>

        <div className="use-grid">
          {shop.products.map((p, i) => (
            <div className="use" key={i}>
              <div className="ic">{p.ic}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        {shop.live && shop.url && (
          <div className="shop-cta">
            <a className="btn btn-primary" href={shop.url} target="_blank" rel="noopener">
              Zum Shop auf Spreadshop
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
