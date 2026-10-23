import OrbitingCirclesGlobe from "./OrbitingCircles";
import styles from "./BlogPage.module.css";

export function BlogHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.eyebrow}>LARFLY · CONTEÚDOS</span>
      <h1>Ideias para um atendimento imobiliário <em>que vai mais longe.</em></h1>
      <p>Leituras práticas para responder melhor, organizar sua operação e transformar conversas em oportunidades.</p>
      <a className={styles.heroLink} href="#artigos">Explore os artigos <span aria-hidden="true">↓</span></a>
      <OrbitingCirclesGlobe />
    </section>
  );
}
