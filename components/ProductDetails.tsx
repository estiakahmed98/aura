"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { money, type Product } from "@/lib/products";
import { useCart } from "./CartProvider";
import WishlistButton from "./WishlistButton";
export default function ProductDetails({ product: p }: { product: Product }) {
  const [image, setImage] = useState(p.image); const [added, setAdded] = useState(false); const { add, ready } = useCart();
  return <div className="product-detail"><div><div className="detail-photo"><Image src={image} alt={p.name} fill priority sizes="(max-width:800px) 90vw, 52vw" /></div><div className="product-thumbs">{p.images.map((src,i) => <button key={src} aria-label={`View image ${i+1}`} aria-pressed={src === image} onClick={() => setImage(src)}><Image src={src} alt={`${p.name}, view ${i+1}`} width={90} height={110} /></button>)}</div></div><div className="product-copy"><Link href="/collections">← All pieces</Link><p className="product-category">{p.category}</p><h1 className="display">{p.name}</h1><p className="detail-price">{money(p.price)}</p><WishlistButton slug={p.slug} name={p.name} /><p>{p.description}</p><p className="commerce-note">Sizing is not supplied in this catalog. Confirm your size before purchasing.</p><button className="commerce-button" disabled={!ready || !p.stock} onClick={() => { add(p.slug,p.sizes[0]); setAdded(true); }}>{p.stock ? "Add to bag — " + money(p.price) : "Unavailable"}</button><p role="status">{added && <>Added to your bag. <Link className="text-link" href="/cart">View bag →</Link></>}</p><details><summary>Product details</summary><p>{p.description}</p><p>{p.category}</p></details><details><summary>Delivery & returns</summary><p>Delivery is calculated at checkout. Contact us for sizing and return enquiries.</p></details><p className="commerce-note">Preview catalog. Prices and stock are estimates and require verification.</p></div></div>;
}
