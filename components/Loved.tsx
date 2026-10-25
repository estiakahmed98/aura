import Image from "next/image";

const reviews = [
  { n: "Manuel David", t: "AURA coats are the perfect mix of luxury and street-ready style. I never leave the house cold again!", cls: "r1" },
  { n: "Ethan R.", t: "Weekend trips, or casual outings — these pieces never try to hide.", cls: "r2" },
  { n: "Yeah Khan", t: "The layering-friendly fit is amazing, and the premium. Winter has never looked this good.", cls: "r3" },
  { n: "Chirs Thomas", t: "AURA jackets keep me warm without compromising style. Absolutely love them!", cls: "r4" },
];

export default function Loved() {
  return (
    <section id="loved" className="loved sky" aria-labelledby="loved-title">
      <div className="loved-atmosphere" aria-hidden="true">
        <div className="loved-bg-cloud loved-bg-left" />
        <div className="loved-bg-cloud loved-bg-right" />
        <div className="loved-bg-cloud loved-bg-bottom" />
      </div>
      <h2 id="loved-title" className="display">Loved in winter</h2>
      <div className="loved-stage">
        <div className="loved-frame">
          <div className="coat">
            <Image
              src="/images/coat.png"
              alt="Chocolate brown puffer jacket with a high padded collar"
              fill
              sizes="(max-width: 600px) 90vw, (max-width: 1000px) 70vw, 620px"
            />
          </div>
          <div className="loved-cloud" aria-hidden="true" />
        </div>
        <div className="loved-reviews">
          {reviews.map((r) => (
            <figure key={r.n} className={`review ${r.cls}`}>
              <figcaption>
                <span className="review-avatar" aria-hidden="true">{r.n.split(" ").map(word => word[0]).join("")}</span>
                <b>{r.n}</b>
              </figcaption>
              <div className="stars" aria-label="5 out of 5 stars"><span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span><span className="review-rating">5.0</span></div>
              <blockquote>&ldquo;{r.t}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
