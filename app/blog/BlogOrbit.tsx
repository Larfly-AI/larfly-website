import styles from "./BlogOrbit.module.css";

const orbitSets = [
  { radius: "inner", duration: "19s", icons: [{ kind: "bulb", angle: -55 }, { kind: "phone", angle: 38 }, { kind: "chat", angle: 145 }] },
  { radius: "middle", duration: "25s", icons: [{ kind: "home", angle: -110 }, { kind: "calendar", angle: 8 }, { kind: "key", angle: 105 }, { kind: "users", angle: 205 }] },
  { radius: "outer", duration: "32s", icons: [{ kind: "document", angle: -75 }, { kind: "home", angle: 5 }, { kind: "bulb", angle: 85 }, { kind: "chat", angle: 175 }, { kind: "phone", angle: 255 }] },
];

function Icon({ kind }: { kind: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  if (kind === "bulb") return <svg {...common}><path d="M9 18h6m-5 4h4m-5-7a7 7 0 1 1 6 0c-.8.6-1 1.3-1 2h-4c0-.7-.2-1.4-1-2Z"/><path d="M12 4v2m-6 1 1.5 1.5m9-1.5L15 8"/></svg>;
  if (kind === "phone") return <svg {...common}><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10 5h4m-3 13h2"/></svg>;
  if (kind === "chat") return <svg {...common}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8 8 0 0 1-3.5-.8L4 20l1.2-3.7A7.2 7.2 0 0 1 4 12c0-4.2 3.6-7.5 8-7.5s8 2.8 8 7Z"/><path d="M8 11h8m-8 3h5"/></svg>;
  if (kind === "calendar") return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 4h2m4 0h2m-8 3h2"/></svg>;
  if (kind === "key") return <svg {...common}><circle cx="8" cy="15" r="5"/><path d="m12 12 8-8m-3 3 2 2m-5 1 2 2"/></svg>;
  if (kind === "users") return <svg {...common}><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1H3Zm13-10a3 3 0 1 0 0-6m2 10a5 5 0 0 1 3 4v1h-3"/></svg>;
  if (kind === "document") return <svg {...common}><path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5m-10 4h6m-6 4h6"/></svg>;
  return <svg {...common}><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/></svg>;
}

export default function BlogOrbit() {
  return <div className={styles.scene} aria-hidden="true">
    <div className={styles.globe}><div className={styles.globeCore}><Icon kind="home"/></div><span className={styles.glow}/></div>
    {orbitSets.map((orbit) => <div key={orbit.radius} className={`${styles.orbit} ${styles[orbit.radius]}`} style={{ "--orbit-duration": orbit.duration } as React.CSSProperties}>
      {orbit.icons.map((icon, index) => <div key={`${icon.kind}-${index}`} className={styles.nodePath} style={{ "--angle": `${icon.angle}deg` } as React.CSSProperties}><div className={styles.node}><Icon kind={icon.kind}/></div></div>)}
    </div>)}
    <div className={styles.sparkles}><i/><i/><i/><i/><i/><i/><i/><i/></div>
  </div>;
}
