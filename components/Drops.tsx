"use client";
import { useRef } from "react";

const drops = [
  { t: "Simple casual", img: "drop1.jpg", bg: "linear-gradient(160deg,#5b7aa8,#c9d4e4)" },
  { t: "Hangout dress", img: "drop2.jpg", bg: "linear-gradient(160deg,#d8b48a,#8a9a6a)" },
  { t: "Cozy anywhere", img: "drop3.jpg", bg: "linear-gradient(160deg,#6b5a4a,#c9b9a2)" },
  { t: "Tailored layers", img: "drop4.jpg", bg: "linear-gradient(160deg,#9ac27a,#e8f32a)" },
];

export default function Drops() {
  const rail = useRef<HTMLDivElement>(null);
  const go = (dir: number) => rail.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  return (
    <section id="drops" className="drops">
      <div className="drops-head">
        <h2 className="display">This season&rsquo;s winter drops</h2>
        <button className="outline">See All &#8599;</button>
      </div>
      <div className="rail-wrap">
        <button className="arrow l" onClick={() => go(-1)} aria-label="Previous">&larr;</button>
        <div className="rail" ref={rail}>
          {drops.map((d) => (
            <article key={d.t} className="drop" style={{ backgroundImage: `url(/images/${d.img}), ${d.bg}` }}>
              <h3 className="display">{d.t}</h3>
              <p>More than 100+ collection available for all gender</p>
            </article>
          ))}
        </div>
        <button className="arrow r" onClick={() => go(1)} aria-label="Next">&rarr;</button>
      </div>
      <div className="center"><button className="outline">Discover All Collection &#8599;</button></div>
    </section>
  );
}
