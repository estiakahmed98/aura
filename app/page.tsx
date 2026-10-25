import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ShopStyle from "@/components/ShopStyle";
import Curate from "@/components/Curate";
import Drops from "@/components/Drops";
import Loved from "@/components/Loved";
import Newsletter from "@/components/Newsletter";
import Wordmark from "@/components/Wordmark";

export default function Home() {
  return (
    <>
      <main>
      <Hero />
      <Marquee />
      <ShopStyle />
      <Curate />
      <Drops />
      <Loved />
      </main>
      <footer className="site-footer">
        <Newsletter />
        <Wordmark />
      </footer>
    </>
  );
}
