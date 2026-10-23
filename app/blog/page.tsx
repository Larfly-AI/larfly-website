import type { Metadata } from "next";
import styles from "./components/BlogPage.module.css";
import { ArticleGrid, BlogCTA, BlogHero } from "./components";

export const metadata: Metadata = {
  title: "Conteúdos",
  description: "Ideias práticas sobre atendimento, tecnologia e gestão para corretores e imobiliárias.",
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <BlogHero />
      <ArticleGrid />
      <BlogCTA />
    </div>
  );
}
