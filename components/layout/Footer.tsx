import Link from "next/link";

export function Footer() {
  return (
    <footer className="fh-footer">
      <div className="fh-footer-top">
        <Link href="/" className="fh-logo" aria-label="Larfly início">
          <img src="/images/figma-logo.png" alt="Larfly" />
        </Link>
        <nav aria-label="Navegação do rodapé">
          <a href="/#hero">Início</a>
          <a href="/#recursos">Soluções</a>
          <a href="/#why-us">Por que nós</a>
          <a href="/#planos">Preços</a>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
      <div className="fh-footer-bottom">
        <span>Feito com muito carinho para o mercado imobiliário</span>
        <nav aria-label="Links legais">
          <Link href="/terms-conditions">Termos e Condições</Link>
          <Link href="/privacy-policy">Política de Privacidade</Link>
        </nav>
      </div>
    </footer>
  );
}
