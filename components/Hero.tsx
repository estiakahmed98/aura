import Image from "next/image";
import HeroNav from "./HeroNav";

export default function Hero() {
  return (
    <section className="hero sky" aria-labelledby="hero-title">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-cloud-bank hero-cloud-bank-left" />
        <div className="hero-cloud-bank hero-cloud-bank-right" />
        <div className="hero-cloud-bank hero-cloud-bank-far" />
      </div>
      <HeroNav />
      <h1 id="hero-title" className="hero-title display">Winter x Gen-Z</h1>
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-stage">
        <Image
          className="figure"
          src="/images/hero-model.png"
          alt="Seated model wearing a black puffer vest and blue winter hoodie"
          fill
          priority
          sizes="(max-width: 600px) 94vw, (max-width: 1000px) 70vw, 620px"
        />
        <div className="hero-cloud" aria-hidden="true" />
      </div>
      <div className="hero-actions">
        <span className="hero-tag left">Winter 2026</span>
        <a href="#shop" className="btn-lime hero-btn">
          <span>Explore Collection</span><span aria-hidden="true">&rarr;</span>
        </a>
        <span className="hero-tag right">Community</span>
      </div>
    </section>
  );
}
