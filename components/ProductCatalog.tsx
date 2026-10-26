"use client";
import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
const categories = [...new Set(products.map(p => p.category))];
export default function ProductCatalog() {
  const [search, setSearch] = useState(""); const [category, setCategory] = useState(""); const [sort, setSort] = useState("name"); const [limit, setLimit] = useState(24);
  const visible = products.filter(p => (!category || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase())).sort((a,b) => sort === "low" ? a.price-b.price : sort === "high" ? b.price-a.price : a.name.localeCompare(b.name));
  return <><div className="catalog-toolbar"><label>Search<input type="search" placeholder="Find your next favorite" value={search} onChange={e => { setSearch(e.target.value); setLimit(24); }} /></label><label>Category<select value={category} onChange={e => { setCategory(e.target.value); setLimit(24); }}><option value="">All pieces</option>{categories.map(c => <option key={c}>{c}</option>)}</select></label><label>Sort by<select value={sort} onChange={e => setSort(e.target.value)}><option value="name">Name</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div><p className="catalog-count" role="status">{visible.length} pieces · Demo prices in BDT</p><div className="product-grid">{visible.slice(0,limit).map(p => <ProductCard key={p.slug} product={p} />)}</div>{!visible.length && <p className="commerce-empty">No pieces found. Try another search or category.</p>}{visible.length > limit && <button className="commerce-button load-more" onClick={() => setLimit(limit+24)}>Discover more</button>}</>;
}
