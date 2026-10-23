import Link from "next/link";
import { articles } from "@/lib/content";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

const asset = (name: string) => `/images/${name}`;

const blogImages = ["blog-lead-response.png", "blog-future-ai.png", "figma-blog-3.png", "blog-lgpd.png", "blog-brand-voice.png", "blog-visits-organization.png"];
const blogTitles = ["Como responder leads de imóveis em segundos, 24h por dia", "O futuro do atendimento imobiliário é por IA no WhatsApp", "Erros comuns que fazem sua imobiliária perder leads no WhatsApp", "LGPD no WhatsApp: o que toda imobiliária precisa saber", "Como calibrar a voz da IA para a sua marca", "Como organizar visitas e agilizar o atendimento dos interessados"];
const blogCats = ["Atendimento", "Tecnologia", "Vendas", "Gestão", "Produto", "Atendimento"];
function Blog() { return <section className="fh-blog" id="blog"><h2>Conteúdo para corretores e<br/> imobiliárias</h2><div className="fh-blog-grid">{blogTitles.map((title, i) => <Link href={`/blog/${articles[i]?.slug ?? articles[0].slug}`} className="fh-blog-card" key={`${title}-${i}`}><div className="fh-blog-image"><img src={asset(blogImages[i])} alt=""/><span>{blogCats[i]}</span></div><small>{["12 jan 2026", "12 jan 2026", "12 jan 2026", "08 abr 2026", "15 mar 2026", "20 abr 2026"][i]}</small><h3>{title}</h3></Link>)}</div><PrimaryLink href="/blog">Ler mais</PrimaryLink></section>; }

export { Blog };
