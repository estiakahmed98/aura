import HeroNav from "@/components/HeroNav";
import Newsletter from "@/components/Newsletter";
import Wordmark from "@/components/Wordmark";

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return <div className="inner-site">
    <a className="skip-link" href="#page-content">Skip to content</a>
    <header className="inner-header"><HeroNav /></header>
    <main id="page-content">{children}</main>
    <footer className="site-footer"><Newsletter /><Wordmark /></footer>
  </div>;
}
