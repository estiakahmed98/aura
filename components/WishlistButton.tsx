"use client";

import { useWishlist } from "./WishlistProvider";

export default function WishlistButton({ slug, name, compact = false }: { slug: string; name: string; compact?: boolean }) {
  const { slugs, ready, toggle } = useWishlist();
  const saved = slugs.includes(slug);
  return <button
    type="button"
    className={`wishlist-button${compact ? " wishlist-button-compact" : ""}${saved ? " is-saved" : ""}`}
    aria-label={`${saved ? "Remove" : "Save"} ${name} ${saved ? "from" : "to"} wishlist`}
    aria-pressed={saved}
    disabled={!ready}
    onClick={() => toggle(slug)}
  >
    <svg width="21" height="21" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" /></svg>
    {!compact && <span>{saved ? "Saved to wishlist" : "Save to wishlist"}</span>}
  </button>;
}
