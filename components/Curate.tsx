import Reveal from "./Reveal";
import Image from "next/image";

const steps = [
  { title: "Warm silhouettes", detail: "Considered layers. Effortless warmth." },
  { title: "Cozy style", detail: "Soft textures, made for every day." },
  { title: "Seasonal aesthetics", detail: "Timeless tones. A fresh perspective." },
];

export default function Curate() {
  return (
    <section className="curate" aria-labelledby="curate-title">
      <div className="curate-shell">
        <div className="curate-photo">
          <Image
            src="/images/curate.png"
            alt="Tailored winter look with a blue suit and patterned grey tie"
            fill
            sizes="(max-width: 700px) 80vw, (max-width: 1200px) 44vw, 620px"
          />
        </div>
        <Reveal className="curate-body">
          <span className="curate-eyebrow">The art of seasonal dressing</span>
          <h2 id="curate-title" className="display">How we curate<span>your winter look</span></h2>
        </Reveal>
        <div className="curate-lime">
          <ol className="curate-steps">
            {steps.map(({ title, detail }, i) => (
              <li key={title} className="curate-step">
                <span className="curate-number display">0{i + 1}<span>.</span></span>
                <div className="curate-step-copy">
                  <h3 className="display">{title}</h3>
                  <p>{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="curate-footer">
          <span>Thoughtfully selected. Naturally you.</span>
          <a href="#shop">Find your winter look <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
