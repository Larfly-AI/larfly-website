"use client";

import { useEffect } from "react";
import { AirbnbSection, Blog, FAQ, FinalCTA, Hero, Pricing, Services, Testimonials, WhyUs } from "./sections";
import "./FigmaHomepage.css";

export function FigmaHomepage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".figma-home main > section, .figma-home .fh-footer");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });

    elements.forEach((element) => {
      element.classList.add("fh-reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <AirbnbSection />
      <Pricing />
      <Testimonials />
      <Blog />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
