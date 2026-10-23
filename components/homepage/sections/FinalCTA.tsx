import { PrimaryLink } from "@/components/ui/PrimaryLink";

const asset = (name: string) => `/images/${name}`;

function FinalCTA() { return <section className="fh-cta"><div className="fh-cta-copy"><h2>Pare de perder lead por falta de resposta</h2><p>Comece a testar a Larfly no WhatsApp da sua imobiliária hoje.</p><PrimaryLink>Começar agora</PrimaryLink><a className="fh-start" href="#hero">Comece por aqui <span>→</span></a><div className="fh-cta-small"><img src={asset("cta-small-team.png")} alt="Equipe da Larfly"/><span>Fale com a gente agora mesmo</span></div></div><div className="fh-cta-large"><img src={asset("cta-large-city.png")} alt="Vista da cidade e da região litorânea"/><span>Veja como funciona <i>↗</i></span></div></section>; }

export { FinalCTA };
