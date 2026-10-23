"use client";

import { useEffect, useRef, useState } from "react";
import MobileMockup from "@/components/ui/great-ui-mobile-mockup";
import "./ChatWidget.css";

const demoMessages = [
  { id: 1, sender: "Larfly IA", avatarInitial: "L", text: "Olá! 👋 Sou a IA da Larfly. Respondo seus leads no WhatsApp em segundos.", isCurrentUser: false, timestamp: "10:11" },
  { id: 2, sender: "Você", avatarInitial: "V", text: "Oi, tem apartamento de 2 quartos para alugar no centro?", isCurrentUser: true, timestamp: "10:11" },
  { id: 3, sender: "Larfly IA", avatarInitial: "L", text: "Tenho sim! Encontrei 3 opções de 2 quartos no centro, a partir de R$ 2.200. Quer ver fotos ou agendar uma visita?", isCurrentUser: false, timestamp: "10:12" },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem("larfly-chat-teaser-dismissed") === "1"; } catch {}
    if (dismissed) return;
    const section = document.getElementById("airbnb");
    if (!section) return;
    if (!("IntersectionObserver" in window)) { setTeaser(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setTeaser(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); closeRef.current?.focus(); }
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const button = target.closest("a, button");
      if (!button || button.closest(".lf-chat")) return;
      if ((button.textContent || "").replace(/\s+/g, " ").trim() !== "Testar gratuitamente") return;
      event.preventDefault();
      setOpen(true);
      setTeaser(false);
      try { sessionStorage.setItem("larfly-chat-teaser-dismissed", "1"); } catch {}
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick, true);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick, true); };
  }, [open]);

  const show = (next: boolean) => {
    setOpen(next);
    if (next) {
      setTeaser(false);
      try { sessionStorage.setItem("larfly-chat-teaser-dismissed", "1"); } catch {}
    }
  };

  return <div className={`lf-chat${open ? " is-open" : ""}`}>
    {teaser && !open && <div className="lf-teaser" role="status" onClick={() => show(true)}><span className="lf-teaser-text">Clique aqui para testar em tempo real a IA</span><button type="button" className="lf-x" aria-label="Fechar aviso" onClick={event => { event.stopPropagation(); setTeaser(false); try { sessionStorage.setItem("larfly-chat-teaser-dismissed", "1"); } catch {} }}>×</button></div>}
    <section className="lf-window" role="dialog" aria-label="Simulação de conversa no WhatsApp" aria-hidden={!open}>
      <MobileMockup headerTitle="Larfly IA" headerSubtitle="online agora" avatarUrl="/favicon.webp" avatarFallback="L" messages={demoMessages} autoPlay />
    </section>
    <button ref={closeRef} type="button" className="lf-fab" aria-label={open ? "Fechar conversa de teste" : "Abrir conversa de teste"} aria-expanded={open} onClick={() => show(!open)}><svg className="lf-ico-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.3L3 20.5l1.7-5A8.4 8.4 0 1 1 21 11.5z"/></svg><svg className="lf-ico-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
  </div>;
}
