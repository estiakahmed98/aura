import Image from "next/image";
import Link from "next/link";
import { money, type Product } from "@/lib/products";
import WishlistButton from "./WishlistButton";
export default function ProductCard({ product: p }: { product: Product }) {
  return <article className="product-card wishlist-product-card">
    <Link href={`/products/${p.slug}`}><div className="product-photo"><Image src={p.image} alt={p.name} fill sizes="(max-width:600px) 46vw, (max-width:1000px) 30vw, 23vw" /></div><p className="product-category">{p.category.split(" / ").pop()}</p><h2>{p.name}</h2><p className="product-card-price">{money(p.price)}</p></Link>
    <WishlistButton slug={p.slug} name={p.name} compact />
  </article>;
}
