"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import "./great-ui-mobile-mockup.css";

export interface ChatMessage {
  id: number;
  sender: string;
  avatarInitial?: string;
  text?: string;
  isCurrentUser: boolean;
  timestamp: string;
  isImage?: boolean;
  imageUrl?: string;
  imageCaption?: string;
}

const DEFAULT_MESSAGES: ChatMessage[] = [
  { id: 1, sender: "Larfly IA", avatarInitial: "L", text: "Olá! 👋 Sou a IA da Larfly. Respondo seus leads no WhatsApp em segundos.", isCurrentUser: false, timestamp: "10:11" },
  { id: 2, sender: "Você", avatarInitial: "V", text: "Oi, tem apartamento de 2 quartos para alugar no centro?", isCurrentUser: true, timestamp: "10:11" },
  { id: 3, sender: "Larfly IA", avatarInitial: "L", text: "Tenho sim! Encontrei 3 opções de 2 quartos no centro, a partir de R$ 2.200. Quer ver fotos ou agendar uma visita?", isCurrentUser: false, timestamp: "10:12" },
];

export interface MobileMockupProps {
  headerTitle?: string;
  headerSubtitle?: string;
  avatarUrl?: string;
  avatarFallback?: string;
  messages?: ChatMessage[];
  autoPlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function Icon({ name, className = "" }: { name: "back" | "video" | "phone" | "more" | "emoji" | "clip" | "camera" | "mic" | "check"; className?: string }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "back") return <svg {...common}><path d="m15 18-6-6 6-6M9 12h12"/></svg>;
  if (name === "video") return <svg {...common}><path d="m23 7-7 5 7 5z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>;
  if (name === "phone") return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
  if (name === "more") return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>;
  if (name === "emoji") return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01" strokeWidth="3"/></svg>;
  if (name === "clip") return <svg {...common}><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;
  if (name === "camera") return <svg {...common}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>;
  if (name === "mic") return <svg {...common}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4m-4 0h8"/></svg>;
  return <svg className={className} viewBox="0 0 16 11" fill="currentColor"><path d="M11.045.585 11.99 1.53 5.86 7.66 2.56 4.36l.94-.945 2.358 2.357L11.045.585Zm3.3 0 .944.944L9.16 7.66l-.944-.944L14.345.585Zm-5.186 8.96L5.86 6.245l.944-.943L9.16 7.66l5.185-5.188.944.944-6.13 6.13Z"/></svg>;
}

export function MobileMockup({ headerTitle = "Larfly IA", headerSubtitle = "online agora", avatarUrl = "/favicon.webp", avatarFallback = "L", messages = DEFAULT_MESSAGES, autoPlay = true, className, children }: MobileMockupProps) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (!autoPlay || children) return;
    let mounted = true;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, delay: number) => timers.push(setTimeout(() => { if (mounted) fn(); }, delay));
    setVisibleMessages([]);
    setShowTyping(false);
    later(() => { setVisibleMessages(messages.slice(0, 2)); setShowTyping(true); }, 800);
    later(() => { setShowTyping(false); setVisibleMessages(messages.slice(0, 3)); }, 2500);
    later(() => { setVisibleMessages(messages.slice(0, 3)); setShowTyping(true); }, 4500);
    later(() => { setShowTyping(false); setVisibleMessages(messages); }, 6800);
    later(() => setCycleKey(key => key + 1), 10800);
    return () => { mounted = false; timers.forEach(clearTimeout); };
  }, [autoPlay, children, messages, cycleKey]);

  const displayMessages = !autoPlay || children ? messages : visibleMessages;
  return <div className={cn("gm-wrap", className)}><motion.div initial={{ opacity: 0, y: 35, scale: .94, rotate: -1.5 }} animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} whileHover={{ y: -6, rotate: .5, transition: { duration: .25 } }} transition={{ type: "spring", stiffness: 220, damping: 20 }} className="gm-device">
    <span className="gm-side gm-side-left gm-side-a"/><span className="gm-side gm-side-left gm-side-b"/><span className="gm-side gm-side-left gm-side-c"/><span className="gm-side gm-side-right"/>
    <div className="gm-screen"><div className="gm-statusbar"><span>10:13</span><span className="gm-status-icons"><i>▮▮▮</i><i>◔</i><i className="gm-battery">●</i></span></div><div className="gm-header"><Icon name="back"/><div className="gm-avatar">{avatarUrl ? <img src={avatarUrl} alt=""/> : avatarFallback}</div><div className="gm-person"><b>{headerTitle}</b><small>{headerSubtitle}</small></div><Icon name="video"/><Icon name="phone"/><Icon name="more"/></div>
      <div className="gm-messages">{children ? <div className="gm-children">{children}</div> : <><div className="gm-today">Hoje</div><div className="gm-message-list"><AnimatePresence mode="sync">{displayMessages.map(msg => <motion.div key={`${cycleKey}-${msg.id}`} initial={{ opacity: 0, y: 8, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: .9 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className={`gm-row ${msg.isCurrentUser ? "gm-mine" : "gm-theirs"}`}><div className={`gm-bubble ${msg.isCurrentUser ? "gm-bubble-mine" : "gm-bubble-theirs"}`}>{msg.isImage ? <><img className="gm-image" src={msg.imageUrl} alt="Imagem enviada"/>{msg.imageCaption && <p>{msg.imageCaption}</p>}</> : <p>{msg.text}</p>}<span className="gm-time">{msg.timestamp}{msg.isCurrentUser && <Icon name="check"/>}</span></div></motion.div>)}</AnimatePresence>{showTyping && <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="gm-typing"><span>digitando</span>{[0,1,2].map(i => <motion.i key={i} animate={{y:[0,-3,0],opacity:[.4,1,.4]}} transition={{duration:.6,repeat:Infinity,delay:i*.15}}/>)}</motion.div>}</div></>}</div>
      <div className="gm-composer"><Icon name="emoji"/><span className="gm-message-input">Mensagem <span><Icon name="clip"/><Icon name="camera"/></span></span><button type="button" aria-label="Áudio"><Icon name="mic"/></button></div><div className="gm-homebar"><i/></div>
    </div>
  </motion.div></div>;
}

export default MobileMockup;
