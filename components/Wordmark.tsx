"use client";
import { useEffect, useRef } from "react";

export default function Wordmark() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const onScroll = () => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, 1 - r.top / window.innerHeight));
      el.style.setProperty("--p", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="wordmark" ref={ref}>
      <div className="photo p1" style={{ backgroundImage: "url(/images/wm1.jpg)" }} />
      <div className="photo p2" style={{ backgroundImage: "url(/images/wm2.jpg)" }} />
      <div className="wm-text" aria-label="AURA">AURA</div>
    </section>
  );
}
