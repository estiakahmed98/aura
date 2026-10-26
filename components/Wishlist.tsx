"use client";

import Link from "next/link";
import { getProduct } from "@/lib/products";
import ProductCard from "./ProductCard";
import { useWishlist } from "./WishlistProvider";

export default function Wishlist() {
  const { slugs, ready } = useWishlist();
  if (!ready) return <p className="commerce-empty" role="status">Loading your wishlist…</p>;
  const saved = slugs.flatMap(slug => { const product = getProduct(slug); return product ? [product] : []; });
  return <>
    <div className="commerce-heading"><p>AURA / Wishlist</p><h1 className="display">Your favorite pieces.</h1><p role="status">{saved.length} {saved.length === 1 ? "piece" : "pieces"} saved on this browser.</p></div>
    {saved.length ? <div className="product-grid">{saved.map(product => <ProductCard key={product.slug} product={product} />)}</div> : <div className="commerce-empty"><h2 className="display">Make room for favorites.</h2><p>Tap the heart on a piece you love to save it here.</p><Link className="commerce-button" href="/collections">Explore the collection →</Link></div>}
  </>;
}
