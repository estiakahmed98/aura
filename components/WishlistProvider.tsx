"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { getProduct } from "@/lib/products";

const STORAGE_KEY = "aura-wishlist-v1";
type Wishlist = { slugs: string[]; ready: boolean; toggle: (slug: string) => void };
const WishlistContext = createContext<Wishlist | null>(null);

function readSaved(value: string | null): string[] {
  try {
    const parsed: unknown = JSON.parse(value || "[]");
    return Array.isArray(parsed)
      ? [...new Set(parsed.filter((slug): slug is string => typeof slug === "string" && !!getProduct(slug)))]
      : [];
  } catch {
    return [];
  }
}

export default function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try { setSlugs(readSaved(localStorage.getItem(STORAGE_KEY))); } catch { /* Storage may be unavailable. */ }
    setReady(true);
    const sync = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) setSlugs(readSaved(event.newValue));
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useEffect(() => {
    if (ready) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs)); } catch { /* Continue in memory. */ }
    }
  }, [slugs, ready]);

  const toggle = (slug: string) => {
    if (!ready || !getProduct(slug)) return;
    setSlugs(current => current.includes(slug) ? current.filter(item => item !== slug) : [...current, slug]);
  };

  return <WishlistContext.Provider value={{ slugs, ready, toggle }}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const value = useContext(WishlistContext);
  if (!value) throw new Error("WishlistProvider required");
  return value;
}

export function WishlistLink({ onClick }: { onClick?: () => void }) {
  const { slugs } = useWishlist();
  return <Link href="/wishlist" onClick={onClick}>Wishlist ({slugs.length})</Link>;
}
