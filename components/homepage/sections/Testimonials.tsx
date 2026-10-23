"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const asset = (name: string) => `/images/${name}`;

const testimonialItems = [
 ["A Larfly mudou a forma como atendo meus clientes. Agora respondo todo mundo na hora, mesmo fora do horário comercial.", "Marcelo S.", "figma-avatar-3.png"],
 ["Desde que começamos a usar a Larfly, nunca mais perdemos um lead por falta de resposta. O time só entra na conversa quando realmente precisa.", "Ricardo A.", "figma-avatar-2.png"],
 ["A equipe ganhou tempo para focar nas visitas. A Larfly organiza as conversas e mantém cada interessado informado.", "André P.", "testimonial-andre.png"],
 ["Com a Larfly, nenhum contato fica sem retorno. A equipe consegue atender mais rápido e acompanhar cada oportunidade com clareza.", "Daniel Fagundes", "figma-avatar-4.png"],
];
function Testimonials() {
  const [offset, setOffset] = useState(0);
  const [slideStep, setSlideStep] = useState(612);
  const [resetting, setResetting] = useState(false);
  const animating = useRef(false);

  useEffect(() => {
    const updateStep = () => setSlideStep(window.innerWidth <= 760 ? Math.min(window.innerWidth * 0.88, 420) + 14 : 612);
    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  const change = (direction: -1 | 1) => {
    if (animating.current) return;
    animating.current = true;
    if (direction > 0) {
      setOffset(1);
      window.setTimeout(() => {
        setResetting(true);
        setOffset(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setResetting(false);
            animating.current = false;
          });
        });
      }, 430);
    } else {
      setOffset(testimonialItems.length - 1);
      window.setTimeout(() => {
        setResetting(true);
        setOffset(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setResetting(false);
            animating.current = false;
          });
        });
      }, 430);
    }
  };

  const repeatedItems = [...testimonialItems, ...testimonialItems];
  return <section className="fh-testimonials"><h2>O que dizem nossos clientes</h2><div className="fh-slider-controls"><button aria-label="Depoimento anterior" onClick={() => change(-1)}>←</button><button aria-label="Próximo depoimento" onClick={() => change(1)}>→</button></div><div className="fh-testimonial-row"><motion.div className="fh-testimonial-track" animate={{ x: `-${offset * slideStep}px` }} transition={resetting ? { duration: 0 } : { type: "tween", duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>{repeatedItems.map(([text, name, photo], index) => <article className="fh-testimonial" key={`${name}-${index}`}><span className="fh-story">HISTORIAS</span><p>{text}</p><div className="fh-author"><img src={asset(photo)} alt=""/><div><b>{name}</b><small>Corretor autônomo</small></div><img className="fh-quote" src={asset("figma-quote.svg")} alt=""/></div></article>)}</motion.div></div></section>;
}

export { Testimonials };
