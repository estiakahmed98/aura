import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import CollectionGrid from "@/components/CollectionGrid";

export const metadata: Metadata = { title: "Collections | AURA", description: "Explore all seven AURA fashion collections, from everyday layers to winter and occasion edits." };
export default function CollectionsPage() {
  return <section className="page-container collections-page"><PageIntro eyebrow="The curated wardrobe" title="A look for every mood." description="Seven perspectives. One AURA. Discover winter layers, everyday favorites, and looks for your next big plan." /><CollectionGrid /><div className="collection-help"><p>Need a little direction?</p><a href="/contact">Let’s find your winter look ↗</a></div></section>;
}
