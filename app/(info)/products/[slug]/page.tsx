import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import ProductDetails from "@/components/ProductDetails";
import ProductCard from "@/components/ProductCard";
export function generateStaticParams() { return products.map(({slug}) => ({slug})); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }) { const p = getProduct((await params).slug); return { title: p ? `${p.name} | AURA` : "Product not found | AURA" }; }
export default async function ProductPage({ params }: { params: Promise<{slug:string}> }) { const p = getProduct((await params).slug); if (!p) notFound(); return <section className="commerce-container"><ProductDetails product={p} /><div className="related-products"><h2 className="display">Complete your wardrobe</h2><div className="product-grid">{products.filter(i => i.category === p.category && i.slug !== p.slug).slice(0,4).map(i => <ProductCard key={i.slug} product={i} />)}</div></div></section>; }
