import Link from "next/link";
import styles from "./BlogPage.module.css";

export function BlogCTA() {
  return (
    <section className={styles.bottomCta}>
      <span className={styles.eyebrow}>LARFLY</span>
      <h2>Mais tempo para cuidar de cada oportunidade.</h2>
      <p>Conheça a plataforma que ajuda sua imobiliária a atender leads no WhatsApp.</p>
      <Link href="/#hero">Conheça a Larfly <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
