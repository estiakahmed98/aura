"use client";
import { useRef } from "react";
import Link from "next/link";

const drops = [
  { t: "Simple casual", img: "/editorial/shirts.webp", description: "Everyday shirts, effortless styling." },
  { t: "Hangout dress", img: "/editorial/trousers.webp", description: "Relaxed trousers for your everyday plans." },
  { t: "Cozy anywhere", img: "/editorial/knitwear.webp", description: "Soft knitwear for cooler days." },
  { t: "Tailored layers", img: "/editorial/tailoring.webp", description: "Considered tailoring, refined details." },
  { t: "Winter", img: "/editorial/jackets.webp", description: "Jackets and layers for the season." },
  { t: "Party", img: "/editorial/suits.webp", description: "Sharp suits for special occasions." },
  { t: "Date", img: "/editorial/shoes.webp", description: "The finishing touch to your favorite look." },
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
            <Link href="/collections" key={d.t} className="drop" style={{ backgroundImage: `url(${d.img})` }}>
              <h3 className="display">{d.t}</h3>
              <p>{d.description}</p>
            </Link>
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
