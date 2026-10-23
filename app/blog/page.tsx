import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/content";
import styles from "./BlogPage.module.css";
import OrbitingCirclesGlobe from "@/components/ui/orbiting-circles-02";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Ideias práticas sobre atendimento, tecnologia e gestão para corretores e imobiliárias.",
};

export default function Blog() {
  return <main className={styles.page}>
    <section className={styles.hero}>
      <span className={styles.eyebrow}>LARFLY · CONTEÚDOS</span>
      <h1>Ideias para um atendimento imobiliário <em>que vai mais longe.</em></h1>
      <p>Leituras práticas para responder melhor, organizar sua operação e transformar conversas em oportunidades.</p>
      <a className={styles.heroLink} href="#artigos">Explore os artigos <span aria-hidden="true">↓</span></a>
      <OrbitingCirclesGlobe/>
    </section>
    <section className={styles.articles} id="artigos">
      <div className={styles.sectionHeading}><div><span className={styles.eyebrow}>PARA CORRETORES E IMOBILIÁRIAS</span><h2>Conteúdo para colocar em prática</h2></div><span className={styles.count}>{articles.length} artigos</span></div>
      <div className={styles.grid}>{articles.map((article, index) => <Link className={styles.card} href={`/blog/${article.slug}`} key={article.slug}>
        <div className={styles.image}><Image src={article.image} alt="" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" priority={index < 3} style={{ objectFit: "cover" }}/><span>{article.category}</span></div>
        <div className={styles.meta}><span>{article.category}</span><span>5 min de leitura</span></div>
        <h3>{article.title}</h3><p>{article.excerpt}</p>
        <span className={styles.read}>Ler artigo <b aria-hidden="true">↗</b></span>
      </Link>)}</div>
    </section>
    <section className={styles.bottomCta}><span className={styles.eyebrow}>LARFLY</span><h2>Mais tempo para cuidar de cada oportunidade.</h2><p>Conheça a plataforma que ajuda sua imobiliária a atender leads no WhatsApp.</p><Link href="/#hero">Conheça a Larfly <span aria-hidden="true">↗</span></Link></section>
  </main>;
}
