import Reveal from "./Reveal";

const steps = ["Warm silhouettes", "Cozy style", "Seasonal aesthetics"];

export default function Curate() {
  return (
    <section className="curate">
      <div className="curate-photo" style={{ backgroundImage: "url(/images/curate.png)" }} />
      <Reveal className="curate-body">
        <span className="curate-eyebrow display">Seasonal design</span>
        <h2 className="display">How we curate<br />your winter look</h2>
      </Reveal>
      <div className="curate-lime">
        {steps.map((s, i) => (
          <div key={s} className="curate-step">
            <span className="display">0{i + 1}.</span>
            <span className="display">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
