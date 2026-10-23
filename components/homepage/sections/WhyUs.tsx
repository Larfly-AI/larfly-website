import { PrimaryLink } from "@/components/ui/PrimaryLink";

const asset = (name: string) => `/images/${name}`;

function WhyUs() { return <section className="fh-why" id="why-us"><img className="fh-why-bg" src={asset("figma-why-us.jpg")} alt="Sala de estar de um imóvel"/><span className="fh-label fh-label-one">IA Responde Primeiro <i><img src={asset("figma-why-ai.svg")} alt=""/></i></span><span className="fh-label fh-label-two">Atendimento 24 Horas <i><img src={asset("figma-why-hours.svg")} alt=""/></i></span><span className="fh-label fh-label-three">Nunca Prospecta <i><img src={asset("figma-why-never.svg")} alt=""/></i></span><span className="fh-label fh-label-four">Fala Como Sua Marca <i><img src={asset("figma-why-brand.svg")} alt=""/></i></span><div className="fh-why-card"><span className="fh-eyebrow">Por que escolher a Larfly</span><h2>A IA que responde primeiro, para o seu time fechar negócio mais rápido.</h2><PrimaryLink>Testar gratuitamente</PrimaryLink></div></section>; }

export { WhyUs };
