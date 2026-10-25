import Reveal from "./Reveal";

const items = [
  { t: "Puffer jackets", p: "$292", d: "Lightweight puffers with powerful insulation.", img: "puffer.png" },
  { t: "Wool coats", p: "$300", d: "Elegant wool coats for premium winter warmth.", img: "wool.png" },
  { t: "Knit sweaters", p: "$200", d: "Soft knits for cozy everyday comfort.", img: "knit.png" },
];

export default function ShopStyle() {
  return (
    <section id="shop" className="shop sky">
      <div className="shop-head">
        <h2 className="display">Shop by<br />signature style</h2>
        <div className="shop-side">
          <p>Curated fashion categories designed to match every mood, moment, and personality.</p>
          <a href="#drops" className="btn-lime">Explore Collection &rarr;</a>
        </div>
      </div>
      <div className="shop-grid">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 120}>
            <article className="shop-card">
              <div className="shop-img" style={{ backgroundImage: `url(/images/${it.img})` }}>
                <button className="heart" aria-label={`Save ${it.t}`}>&#9825;</button>
              </div>
              <div className="shop-row display"><span>{it.t}</span><span>{it.p}</span></div>
              <p>{it.d}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
