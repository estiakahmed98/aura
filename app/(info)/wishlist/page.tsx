import Wishlist from "@/components/Wishlist";

export const metadata = { title: "Wishlist | AURA", description: "Keep your favorite AURA pieces together." };

export default function WishlistPage() {
  return <section className="commerce-container"><Wishlist /></section>;
}
