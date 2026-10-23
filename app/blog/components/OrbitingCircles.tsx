"use client";

import styles from "./OrbitingCircles.module.css";

const orbits = [
  { radius: "inner", duration: 18, icons: [{ kind: "bulb", label: "Ideias" , angle: -60 }, { kind: "phone", label: "Celular", angle: 0 }, { kind: "chat", label: "Conversas", angle: 60 }] },
  { radius: "middle", duration: 24, icons: [{ kind: "home", label: "Imóveis", angle: 0 }, { kind: "calendar", label: "Agenda", angle: -90 }] },
  { radius: "outer", duration: 30, icons: [{ kind: "document", label: "Conteúdo", angle: -60 }, { kind: "users", label: "Equipe", angle: 0 }, { kind: "key", label: "Chaves", angle: 60 }] },
];

function Icon({ kind }: { kind: string }) {
  const props = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (kind === "bulb") return <svg {...props}><path d="M9 18h6m-5 4h4m-5-7a7 7 0 1 1 6 0c-.8.6-1 1.3-1 2h-4c0-.7-.2-1.4-1-2Z"/><path d="M12 4v2m-6 1 1.5 1.5m9-1.5L15 8"/></svg>;
  if (kind === "phone") return <svg {...props}><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10 5h4m-3 13h2"/></svg>;
  if (kind === "chat") return <svg {...props}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8 8 0 0 1-3.5-.8L4 20l1.2-3.7A7.2 7.2 0 0 1 4 12c0-4.2 3.6-7.5 8-7.5s8 2.8 8 7Z"/><path d="M8 11h8m-8 3h5"/></svg>;
  if (kind === "calendar") return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 4h2m4 0h2m-8 3h2"/></svg>;
  if (kind === "key") return <svg {...props}><circle cx="8" cy="15" r="5"/><path d="m12 12 8-8m-3 3 2 2m-5 1 2 2"/></svg>;
  if (kind === "users") return <svg {...props}><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1H3Zm13-10a3 3 0 1 0 0-6m2 10a5 5 0 0 1 3 4v1h-3"/></svg>;
  if (kind === "document") return <svg {...props}><path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5m-10 4h6m-6 4h6"/></svg>;
  return <svg {...props}><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/></svg>;
}

function ParticleSphere() {
  return <svg className={styles.particleSphere} viewBox="0 0 200 200" fill="none" aria-hidden="true">
    <defs><radialGradient id="sphereFill"><stop stopColor="#fff" stopOpacity=".95"/><stop offset=".62" stopColor="#cbb3ff" stopOpacity=".32"/><stop offset="1" stopColor="#a98af0" stopOpacity=".04"/></radialGradient><filter id="sphereGlow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <circle cx="100" cy="100" r="72" fill="url(#sphereFill)" stroke="#b9a2e4" strokeOpacity=".65"/><ellipse cx="100" cy="100" rx="72" ry="28" stroke="#9d7fcf" strokeOpacity=".7"/><ellipse cx="100" cy="100" rx="72" ry="48" stroke="#b8a2df" strokeOpacity=".55"/><ellipse cx="100" cy="100" rx="28" ry="72" stroke="#9d7fcf" strokeOpacity=".6"/><ellipse cx="100" cy="100" rx="49" ry="72" stroke="#b8a2df" strokeOpacity=".55"/>
    <g filter="url(#sphereGlow)" fill="#fff"><circle cx="100" cy="28" r="2.7"/><circle cx="150" cy="48" r="2"/><circle cx="171" cy="100" r="2.8"/><circle cx="145" cy="151" r="2"/><circle cx="100" cy="172" r="2.8"/><circle cx="48" cy="150" r="2"/><circle cx="28" cy="100" r="2.6"/><circle cx="50" cy="50" r="2"/><circle cx="123" cy="69" r="2"/><circle cx="78" cy="124" r="2"/><circle cx="130" cy="130" r="1.8"/><circle cx="69" cy="82" r="1.8"/></g>
  </svg>;
}

export default function OrbitingCirclesGlobe() {
  return <div className={styles.scene} aria-hidden="true"><div className={styles.globe}><ParticleSphere/></div>{orbits.map((orbit,index)=>{
    const reverse = index % 2 === 1;
    const icons = [...orbit.icons,...orbit.icons.map(icon=>({...icon,angle:icon.angle+180,label:`${icon.label} 2`}))];
    return <div key={orbit.radius} className={`${styles.orbit} ${styles[orbit.radius]} ${reverse ? styles.reverse : ""}`} style={{"--duration":`${orbit.duration}s`} as React.CSSProperties}>
      {icons.map((icon,i)=><div key={`${icon.kind}-${i}`} className={styles.iconPath} style={{"--angle":`${icon.angle}deg`} as React.CSSProperties}><span className={styles.iconBubble} title={icon.label}><span className={styles.iconCounter}><Icon kind={icon.kind}/></span></span></div>) }
    </div>;
  })}</div>;
}
