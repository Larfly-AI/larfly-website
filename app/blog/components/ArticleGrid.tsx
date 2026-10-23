import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/content";
import styles from "./BlogPage.module.css";

export function ArticleGrid() {
  return (
    <section className={styles.articles} id="artigos">
      <div className={styles.sectionHeading}>
        <div>
          <span className={styles.eyebrow}>PARA CORRETORES E IMOBILIÁRIAS</span>
          <h2>Conteúdo para colocar em prática</h2>
        </div>
        <span className={styles.count}>{articles.length} artigos</span>
      </div>
      <div className={styles.grid}>
        {articles.map((article, index) => (
          <Link className={styles.card} href={`/blog/${article.slug}`} key={article.slug}>
            <div className={styles.image}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority={index < 3}
                sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
              <span>{article.category}</span>
            </div>
            <div className={styles.meta}><span>{article.category}</span><span>5 min de leitura</span></div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <span className={styles.read}>Ler artigo <b aria-hidden="true">↗</b></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
