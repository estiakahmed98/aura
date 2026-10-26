import Image from "next/image";
import Link from "next/link";

const featured = [
  { title: "Outerwear", image: "/editorial/Knitwear.png", description: "Considered jackets for cooler days." },
  { title: "Knitwear", image: "/editorial/Suits.png", description: "Soft layers with an effortless finish." },
  { title: "Casual shirts", image: "/editorial/Outerwear.png", description: "Everyday shirts, styled your way." },
];

export default function ShopStyle() {
  return (
    <section id="shop" className="shop sky">
      <div className="shop-head">
        <h2 className="display">Shop by<br />signature style</h2>
        <div className="shop-side">
          <p>Considered tailoring, soft layers, and pieces to make your own.</p>
          <a href="/collections" className="btn-lime">Explore Collection →</a>
        </div>
      </div>
      <div className="product-grid featured-products">
        {featured.map(item => (
          <Link key={item.title} href="/collections" className="product-card">
            <div className="product-photo">
              <Image src={item.image} alt={`${item.title} collection`} fill sizes="(max-width:600px) 90vw, 30vw" />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
