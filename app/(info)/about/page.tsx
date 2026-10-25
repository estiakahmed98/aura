import type { Metadata } from "next";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = { title: "About AURA | Winter, your way", description: "Discover the perspective behind AURA: expressive winter layers, considered silhouettes, and everyday style." };

export default function AboutPage() {
  return <>
    <section className="about-hero page-container">
      <div>
        <PageIntro eyebrow="Our perspective" title="Winter, your way." description="For the quiet mornings. The last-minute plans. The nights that become stories. We believe your winter wardrobe should move with you." />
        <a href="/collections" className="page-button">Find your AURA <span aria-hidden="true">↗</span></a>
        <p className="editorial-caption">Individual style. A shared atmosphere.</p>
      </div>
      <div className="about-image"><Image src="/images/drop4.jpg" alt="AURA winter fashion editorial" fill priority sizes="(max-width: 700px) 90vw, 45vw" /><span>THE WINTER EDIT / AURA</span></div>
    </section>
    <section className="about-statement"><span className="page-eyebrow">More than a season</span><h2>Wear what feels<br /><em>like you.</em></h2><p>Luxury-inspired lines meet the freedom of streetwear. Soft textures, confident proportions, and a little celestial energy. That is the AURA point of view.</p></section>
    <section className="page-container about-values" aria-label="Our approach">
      {[['01', 'Considered layers', 'Build a look around pieces that work together: a sculptural puffer, a clean coat, a soft knit.'], ['02', 'Everyday expression', 'Dress for your mood, your plans, and your own idea of confidence. There is no single way to wear AURA.'], ['03', 'A fresh perspective', 'Celestial details and unexpected color bring a playful edge to a timeless winter palette.']].map(([n,t,d]) => <article key={n}><span className="page-eyebrow">{n} / OUR APPROACH</span><h2 className="display">{t}</h2><p>{d}</p></article>)}
    </section>
    <div className="page-cta page-container"><div><span className="page-eyebrow">Your next chapter</span><h2 className="display">Make the season yours.</h2></div><a href="/collections" className="page-button">Explore collections ↗</a></div>
  </>;
}
