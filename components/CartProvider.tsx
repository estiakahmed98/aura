"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getProduct } from "@/lib/products";
type Item = { slug: string; size: string; quantity: number };
const Context = createContext<{ items: Item[]; ready: boolean; add: (slug: string, size: string) => void; update: (slug: string, size: string, quantity: number) => void; clear: () => void } | null>(null);
export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { const saved = JSON.parse(localStorage.getItem("aura-cart-v1") || "[]"); if (Array.isArray(saved)) setItems(saved.filter(item => { const p = item && getProduct(item.slug); return p && p.sizes.includes(item.size) && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= p.stock; })); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) { try { localStorage.setItem("aura-cart-v1", JSON.stringify(items)); } catch {} } }, [items, ready]);
  const add = (slug: string, size: string) => { const p = getProduct(slug); if (!ready || !p || !p.stock || !p.sizes.includes(size)) return; setItems(old => old.some(i => i.slug === slug && i.size === size) ? old.map(i => i.slug === slug && i.size === size ? { ...i, quantity: Math.min(i.quantity + 1, p.stock) } : i) : [...old, { slug, size, quantity: 1 }]); };
  const update = (slug: string, size: string, quantity: number) => setItems(old => old.flatMap(i => i.slug === slug && i.size === size ? quantity <= 0 ? [] : [{ ...i, quantity: Math.min(quantity, getProduct(slug)?.stock ?? 0) }] : [i]));
  return <Context.Provider value={{ items, ready, add, update, clear: () => setItems([]) }}>{children}</Context.Provider>;
}
export function useCart() { const value = useContext(Context); if (!value) throw new Error("CartProvider required"); return value; }
export function CartLink() { const { items } = useCart(); return <a href="/cart">Bag ({items.reduce((n, i) => n + i.quantity, 0)})</a>; }
