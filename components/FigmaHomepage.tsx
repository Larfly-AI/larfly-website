"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { articles, faqs, plans } from "@/lib/content";
import "./FigmaHomepage.css";

const asset = (name: string) => `/images/${name}`;

export function PrimaryLink({ children, href = "https://app.larfly.com/", className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  const label = typeof children === "string" ? children : "Testar gratuitamente";
  return <a className={`figma-primary ${className}`} href={href} aria-label={label}><span className="figma-label">{children}</span><span className="figma-arrow" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span></a>;
}

export function FigmaHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <header className={`fh-header${scrolled ? " is-scrolled" : ""}`}><Link href="/" aria-label="Larfly início" className="fh-logo"><img src={asset("figma-logo.png")} alt="Larfly" /></Link><button className="fh-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">☰</button><nav className={open ? "fh-nav is-open" : "fh-nav"}><a href="/#hero">Início</a><a href="/#recursos">Soluções</a><a href="/#why-us">Por que nós</a><a href="/#planos">Preços</a><a href="/blog">Blog</a><PrimaryLink>Testar gratuitamente</PrimaryLink></nav></header>;
}

function Hero() {
 return <section className="fh-hero" id="hero"><div className="fh-hero-copy"><h1>Seu WhatsApp nunca mais para de responder.</h1><p>A Larfly conecta ao WhatsApp da sua imobiliária e responde cada lead em segundos, com a voz e as regras que você define. Você só entra na conversa quando quiser.</p><PrimaryLink>Testar gratuitamente</PrimaryLink><a className="fh-start" href="#recursos">Comece por aqui <span>→</span></a></div><div className="fh-hero-visual"><div className="fh-phone fh-phone-desktop"><img src={asset("figma-hero-whatsapp.png")} alt="Conversa de atendimento pelo WhatsApp"/><span>Atendimento<br/>automático 24/7</span></div><div className="fh-interior"><img className="fh-interior-img" src={asset("figma-hero-interior.png")} alt="Interior de um imóvel moderno"/><span className="fh-property">+3K Imóveis <i>↗</i></span><div className="fh-social"><div className="fh-avatars"><img src={asset("figma-avatar-1.png")} alt=""/><img src={asset("figma-avatar-2.png")} alt=""/><img src={asset("figma-avatar-3.png")} alt=""/><img src={asset("figma-avatar-4.png")} alt=""/></div><div className="fh-social-copy"><b>1,5K+</b><span>Já utilizam a<br/>Larfly e recomendam</span></div></div></div><div className="fh-phone fh-phone-mobile"><img src={asset("figma-hero-whatsapp.png")} alt="Conversa de atendimento pelo WhatsApp"/><span>Atendimento<br/>automático 24/7</span></div></div></section>
}

const serviceItems = [
 ["Atendimento com IA", "Responde dúvidas sobre imóveis, preço e disponibilidade na hora, com a voz calibrada da sua marca.", "figma-icon-ai.png"],
 ["Catálogo de Imóveis", "Cadastre imóveis para venda, locação e temporada, com fotos, preço e status tudo que a IA consulta para responder.", "figma-icon-catalog.png"],
 ["Central de Conversas", "Inbox único com todas as conversas: filtros por não lidas, com IA, com humano, aguardando ou encerradas.", "figma-icon-inbox.png"],
 ["Agenda de Disponibilidade", "Calendário visual por imóvel, com bloqueios, reservas e dias de troca sincronizados automaticamente.", "figma-icon-calendar.png"],
];
function Services() { return <section className="fh-services" id="recursos"><div className="fh-services-panel"><h2>Tudo que o atendimento da<br className="desktop-only"/> sua imobiliária precisa</h2><div className="fh-service-grid">{serviceItems.map(([title, text, icon]) => <article className="fh-service" key={title}><div className="fh-service-head"><h3>{title}</h3><span><img src={asset(icon)} alt=""/></span></div><p>{text}</p></article>)}</div></div></section>; }

function WhyUs() { return <section className="fh-why" id="why-us"><img className="fh-why-bg" src={asset("figma-why-us.jpg")} alt="Sala de estar de um imóvel"/><span className="fh-label fh-label-one">IA Responde Primeiro <i><img src={asset("figma-why-ai.svg")} alt=""/></i></span><span className="fh-label fh-label-two">Atendimento 24 Horas <i><img src={asset("figma-why-hours.svg")} alt=""/></i></span><span className="fh-label fh-label-three">Nunca Prospecta <i><img src={asset("figma-why-never.svg")} alt=""/></i></span><span className="fh-label fh-label-four">Fala Como Sua Marca <i><img src={asset("figma-why-brand.svg")} alt=""/></i></span><div className="fh-why-card"><span className="fh-eyebrow">Por que escolher a Larfly</span><h2>A IA que responde primeiro, para o seu time fechar negócio mais rápido.</h2><PrimaryLink>Testar gratuitamente</PrimaryLink></div></section>; }

function AirbnbSection() { return <section className="fh-airbnb" id="airbnb"><div className="fh-airbnb-panel"><h2>Importe seus imóveis do Airbnb e Booking<br/>com poucos cliques</h2><p>Conecte seus anúncios do Airbnb e do Booking.com à Larfly e<br/>importe seus imóveis em poucos cliques, sem recadastrar tudo.</p><div className="fh-flow"><div className="fh-flow-sources"><div><img src={asset("figma-booking.svg")} alt="Booking.com"/></div><div><img src={asset("figma-airbnb.svg")} alt="Airbnb"/></div></div><svg className="fh-flow-lines" viewBox="0 0 596 240" preserveAspectRatio="none" aria-hidden="true"><path className="fh-flow-path fh-flow-path-top" d="M0 60H268C324 60 336 120 417 120H596"/><path className="fh-flow-path fh-flow-path-bottom" d="M0 180H268C324 180 336 120 417 120H596"/><path className="fh-flow-dashes" d="M0 60H268C324 60 336 120 417 120H596M0 180H268C324 180 336 120 417 120H596"/><circle className="fh-flow-particle fh-flow-particle-top" r="3.5"><animateMotion dur="2.8s" repeatCount="indefinite" path="M0 60H268C324 60 336 120 417 120H596"/></circle><circle className="fh-flow-particle fh-flow-particle-bottom" r="3.5"><animateMotion dur="3.2s" begin="-1.6s" repeatCount="indefinite" path="M0 180H268C324 180 336 120 417 120H596"/></circle></svg><div className="fh-flow-destination"><img src={asset("figma-logo.png")} alt="Larfly"/></div><span className="fh-flow-tag">Importação em poucos cliques</span></div><PrimaryLink>Testar gratuitamente</PrimaryLink><small>Sincronização com Airbnb disponível no plano Pro.</small></div></section>; }

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const formatCurrency = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  const monthlyPrice = (price: string) => Number(price.replace(/[^\d,]/g, "").replace(",", "."));
  const billingTotal = (price: string) => monthlyPrice(price) * (annual ? 12 : 1);
  const hourlyEquivalent = (price: string) => formatCurrency(monthlyPrice(price) / 30 / 24);
  return <section className="fh-pricing" id="planos"><h2>Escolha o plano ideal para o tamanho da sua<br/> operação</h2><div className="fh-billing"><span className={!annual ? "is-active" : ""} onClick={() => setAnnual(false)}>Mensal</span><button type="button" className={`fh-billing-toggle${annual ? " is-annual" : ""}`} role="switch" aria-checked={annual} aria-label="Alternar cobrança mensal ou anual" onClick={() => setAnnual(value => !value)}><i/></button><span className={annual ? "is-active" : ""} onClick={() => setAnnual(true)}>Anual</span></div><div className="fh-plans">{plans.map((p) => <article key={p.name} className={`fh-plan ${p.featured ? "is-featured" : ""}`}><header><strong>{p.period === "para sempre" ? formatCurrency(0) : <>{hourlyEquivalent(p.price)}<span className="fh-hourly-unit">/hora</span></>}</strong><small className="fh-billing-total">{p.period === "para sempre" ? "Grátis para sempre" : `${formatCurrency(billingTotal(p.price))}${annual ? " por ano" : " por mês"}`}</small><small>{p.description}</small></header><ul>{p.features.map((f) => <li key={f}><span>⊙</span>{f}</li>)}</ul><PrimaryLink>Escolher plano</PrimaryLink></article>)}</div></section>;
}

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

const blogImages = ["blog-lead-response.png", "blog-future-ai.png", "figma-blog-3.png", "blog-lgpd.png", "blog-brand-voice.png", "blog-visits-organization.png"];
const blogTitles = ["Como responder leads de imóveis em segundos, 24h por dia", "O futuro do atendimento imobiliário é por IA no WhatsApp", "Erros comuns que fazem sua imobiliária perder leads no WhatsApp", "LGPD no WhatsApp: o que toda imobiliária precisa saber", "Como calibrar a voz da IA para a sua marca", "Como organizar visitas e agilizar o atendimento dos interessados"];
const blogCats = ["Atendimento", "Tecnologia", "Vendas", "Gestão", "Produto", "Atendimento"];
function Blog() { return <section className="fh-blog" id="blog"><h2>Conteúdo para corretores e<br/> imobiliárias</h2><div className="fh-blog-grid">{blogTitles.map((title, i) => <Link href={`/blog/${articles[i]?.slug ?? articles[0].slug}`} className="fh-blog-card" key={`${title}-${i}`}><div className="fh-blog-image"><img src={asset(blogImages[i])} alt=""/><span>{blogCats[i]}</span></div><small>{["12 jan 2026", "12 jan 2026", "12 jan 2026", "08 abr 2026", "15 mar 2026", "20 abr 2026"][i]}</small><h3>{title}</h3></Link>)}</div><PrimaryLink href="/blog">Ler mais</PrimaryLink></section>; }

function FAQ() { return <section className="fh-faq" id="faq"><h2>Perguntas frequentes</h2><div className="fh-faq-list">{faqs.slice(0, 6).map(([question, answer]) => <details key={question}><summary>{question}<span>⌄</span></summary><p>{answer}</p></details>)}</div></section>; }

function FinalCTA() { return <section className="fh-cta"><div className="fh-cta-copy"><h2>Pare de perder lead por falta de resposta</h2><p>Comece a testar a Larfly no WhatsApp da sua imobiliária hoje.</p><PrimaryLink>Começar agora</PrimaryLink><a className="fh-start" href="#hero">Comece por aqui <span>→</span></a><div className="fh-cta-small"><img src={asset("cta-small-team.png")} alt="Equipe da Larfly"/><span>Fale com a gente agora mesmo</span></div></div><div className="fh-cta-large"><img src={asset("cta-large-city.png")} alt="Vista da cidade e da região litorânea"/><span>Veja como funciona <i>↗</i></span></div></section>; }

export function FigmaFooter() { return <footer className="fh-footer"><div className="fh-footer-top"><Link href="/" className="fh-logo"><img src={asset("figma-logo.png")} alt="Larfly"/></Link><nav><a href="/#hero">Início</a><a href="/#recursos">Soluções</a><a href="/#why-us">Por que nós</a><a href="/#planos">Preços</a><a href="/blog">Blog</a></nav></div><div className="fh-footer-bottom"><span>Feito com muito carinho para o mercado imobiliário</span><nav><Link href="/terms-conditions">Termos e Condições</Link><Link href="/privacy-policy">Política de Privacidade</Link></nav></div></footer>; }

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

  return <div className="figma-home"><FigmaHeader/><main><Hero/><Services/><WhyUs/><AirbnbSection/><Pricing/><Testimonials/><Blog/><FAQ/><FinalCTA/></main><FigmaFooter/></div>;
}
