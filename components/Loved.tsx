import CloudScene from "./CloudScene";

const reviews = [
  { n: "Manuel David", t: "AURA coats are the perfect mix of luxury and street-ready style. I never leave the house cold again!", cls: "r1" },
  { n: "Ethan R.", t: "Weekend trips, or casual outings — these pieces never try to hide.", cls: "r2" },
  { n: "Yeah Khan", t: "The layering-friendly fit is amazing, and the premium. Winter has never looked this good.", cls: "r3" },
  { n: "Chirs Thomas", t: "AURA jackets keep me warm without compromising style. Absolutely love them!", cls: "r4" },
];

export default function Loved() {
  return (
    <section id="loved" className="loved sky">
      <h2 className="display">Loved in winter</h2>
      <div className="loved-frame">
        <CloudScene className="loved-cloud" />
        <div className="coat" style={{ backgroundImage: "url(/images/coat.png)" }} />
      </div>
      {reviews.map((r) => (
        <figure key={r.n} className={`review ${r.cls}`}>
          <figcaption><b>{r.n}</b><span className="stars" aria-label="5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733; 5.0</span></figcaption>
          <blockquote>&ldquo;{r.t}&rdquo;</blockquote>
        </figure>
      ))}
    </section>
  );
}
