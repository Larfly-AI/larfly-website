import type { Metadata } from "next";
import { FinalCTA, PricingCards } from "@/components/Site";
export const metadata: Metadata = { title: "Planos", description: "Conheça os planos da Larfly para automatizar o atendimento da sua imobiliária." };
export default function Pricing() { return <><section className="page-hero"><span className="eyebrow">PLANOS LARFLY</span><h1>O plano certo para<br/>o seu próximo <em>passo.</em></h1><p>Comece gratuitamente. Cresça no seu ritmo.</p></section><section className="section pricing-section page-pricing"><div className="section-heading"><span className="eyebrow">SIMPLES E TRANSPARENTE</span><h2>Escolha o plano ideal para o tamanho da sua <em>operação.</em></h2></div><PricingCards/></section><FinalCTA/></>; }
