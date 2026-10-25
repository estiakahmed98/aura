"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import icon from "../public/icon.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product", href: "/collections" },
  { label: "Community", href: "/#loved" },
];

export default function HeroNav() {
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 701px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <nav ref={nav} className="nav" aria-label="Main navigation">
      <div className="nav-l">
        {links.map(({ label, href }) => <a key={label} href={href}>{label}</a>)}
      </div>
      <a className="logo" href="/" aria-label="Aura home" onClick={() => setOpen(false)}>
        <Image className="nav-brand-logo" src={logo} alt="AURA" sizes="180px" />
        <Image className="nav-brand-icon" src={icon} alt="AURA" sizes="64px" />
      </a>
      <div className="nav-r">
        <a href="/login">Log in</a>
        <a className="pill nav-signup" href="/signup">Sign up</a>
      </div>
      <button
        ref={toggle}
        type="button"
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(value => !value)}
      >
        <span /><span /><span />
      </button>
      <div id="mobile-navigation" className="nav-mobile" hidden={!open}>
        {links.map(({ label, href }) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <div className="nav-mobile-account">
          <a href="/login" onClick={() => setOpen(false)}>Log in</a>
          <a className="pill nav-signup" href="/signup" onClick={() => setOpen(false)}>Sign up</a>
        </div>
      </div>
    </nav>
  );
}
