"use client";
import { useRef } from "react";

const drops = [
  { t: "Simple casual", img: "drop1.jpg", bg: "linear-gradient(160deg,#5b7aa8,#c9d4e4)" },
  { t: "Hangout dress", img: "drop2.jpg", bg: "linear-gradient(160deg,#d8b48a,#8a9a6a)" },
  { t: "Cozy anywhere", img: "drop3.jpg", bg: "linear-gradient(160deg,#6b5a4a,#c9b9a2)" },
  { t: "Tailored layers", img: "drop4.jpg", bg: "linear-gradient(160deg,#9ac27a,#e8f32a)" },
  { t: "Winter", img: "drop5.jpg", bg: "linear-gradient(160deg,#5b7aa8,#c9d4e4)" },
  { t: "Party", img: "drop6.jpg", bg: "linear-gradient(160deg,#493b60,#a68bba)" },
  { t: "Date", img: "drop7.jpg", bg: "linear-gradient(160deg,#a16b68,#e6c9bd)" },
];

export default function Drops() {
  const rail = useRef<HTMLDivElement>(null);
  const go = (dir: number) => {
    const element = rail.current;
    const card = element?.querySelector<HTMLElement>(".drop");
    if (!element || !card) return;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: dir * (card.offsetWidth + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };
  return (
    <section id="drops" className="drops" aria-labelledby="drops-title">
      <div className="drops-head">
        <h2 id="drops-title" className="display">This season&rsquo;s winter drops</h2>
        <a className="outline" href="/collections">See All <span aria-hidden="true">&#8599;</span></a>
      </div>
      <div className="rail-wrap">
        <div className="rail" ref={rail} tabIndex={0} role="region" aria-label="Winter collections">
          {drops.map((d) => (
            <article key={d.t} className="drop" style={{ backgroundImage: `url(/images/${d.img}), ${d.bg}` }}>
              <h3 className="display">{d.t}</h3>
              <p>More than 100+ collection available for all gender</p>
            </article>
          ))}
        </div>
        <div className="drops-controls">
          <button className="arrow l" type="button" onClick={() => go(-1)} aria-label="Previous collection">&larr;</button>
          <button className="arrow r" type="button" onClick={() => go(1)} aria-label="Next collection">&rarr;</button>
        </div>
      </div>
      <div className="center"><a className="outline" href="/collections">Discover All Collection &#8599;</a></div>
    </section>
  );
}
