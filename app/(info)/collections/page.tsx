import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import CollectionGrid from "@/components/ProductCatalog";

export const metadata: Metadata = { title: "Collections | AURA", description: "Explore 338 wardrobe pieces, from tailoring and knitwear to shoes and accessories." };
export default function CollectionsPage() {
  return <section className="page-container collections-page"><PageIntro eyebrow="The curated wardrobe" title="A look for every mood." description="Considered tailoring, effortless layers, and the finishing touches. Discover your next favorite piece." /><CollectionGrid /><div className="collection-help"><p>Need a little direction?</p><a href="/contact">Find your look →</a></div></section>;
}
