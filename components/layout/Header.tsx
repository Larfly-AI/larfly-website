"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`fh-header${scrolled ? " is-scrolled" : ""}`}>
      <Link href="/" aria-label="Larfly início" className="fh-logo">
        <img src="/images/figma-logo.png" alt="Larfly" />
      </Link>
      <button
        className="fh-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        ☰
      </button>
      <nav className={open ? "fh-nav is-open" : "fh-nav"}>
        <a href="/#hero" onClick={() => setOpen(false)}>Início</a>
        <a href="/#recursos" onClick={() => setOpen(false)}>Soluções</a>
        <a href="/#why-us" onClick={() => setOpen(false)}>Por que nós</a>
        <a href="/#planos" onClick={() => setOpen(false)}>Preços</a>
        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <PrimaryLink>Testar gratuitamente</PrimaryLink>
      </nav>
    </header>
  );
}
