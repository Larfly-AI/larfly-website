import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/content";

type Article = (typeof articles)[number];

type ArticleContentProps = {
  article: Article;
};

export function ArticleContent({ article }: ArticleContentProps) {
  const index = articles.indexOf(article);

  return (
    <article className="article-page">
      <Link className="back-link" href="/blog">← Voltar para o blog</Link>
      <div className={`article-hero-art art-${index}`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 820px) 100vw, 780px"
        />
        <span>{article.category}</span>
      </div>
      <div className="article-content">
        <div className="article-meta">
          <span>{article.category}</span>
          <span>5 min de leitura</span>
        </div>
        <h1>{article.title}</h1>
        <p className="article-lead">{article.excerpt}</p>
        <p>O primeiro contato de um cliente com uma imobiliária pode definir toda a experiência. Em um mercado cada vez mais conectado, responder com agilidade e atenção é essencial para construir confiança e transformar interesse em negócio.</p>
        <h2>O atendimento que acompanha o cliente</h2>
        <p>As pessoas esperam respostas rápidas e úteis. Com a tecnologia certa, sua equipe pode oferecer um atendimento mais próximo sem deixar nenhuma conversa de lado. Automatizar tarefas repetitivas libera tempo para que corretores foquem no relacionamento e nas decisões importantes.</p>
        <blockquote>“Cada conversa é uma oportunidade de entender o que o cliente realmente precisa.”</blockquote>
        <h2>Uma experiência melhor para todos</h2>
        <p>Organizar informações, responder dúvidas e acompanhar cada oportunidade em um único lugar ajuda sua imobiliária a criar uma jornada simples, pessoal e consistente. A inteligência artificial pode apoiar esse processo, sempre com o cuidado e a voz da sua marca.</p>
        <p>Com a Larfly, seu time fica livre para fazer o que faz de melhor: ajudar pessoas a encontrar o próximo lugar para chamar de lar.</p>
        <Link className="button button-dark" href="/">Conheça a Larfly <span>↗</span></Link>
      </div>
    </article>
  );
}
