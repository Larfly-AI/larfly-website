import { PrimaryLink } from "@/components/ui/PrimaryLink";

const asset = (name: string) => `/images/${name}`;

const serviceItems = [
 ["Atendimento com IA", "Responde dúvidas sobre imóveis, preço e disponibilidade na hora, com a voz calibrada da sua marca.", "figma-icon-ai.png"],
 ["Catálogo de Imóveis", "Cadastre imóveis para venda, locação e temporada, com fotos, preço e status tudo que a IA consulta para responder.", "figma-icon-catalog.png"],
 ["Central de Conversas", "Inbox único com todas as conversas: filtros por não lidas, com IA, com humano, aguardando ou encerradas.", "figma-icon-inbox.png"],
 ["Agenda de Disponibilidade", "Calendário visual por imóvel, com bloqueios, reservas e dias de troca sincronizados automaticamente.", "figma-icon-calendar.png"],
];
function Services() { return <section className="fh-services" id="recursos"><div className="fh-services-panel"><h2>Tudo que o atendimento da<br className="desktop-only"/> sua imobiliária precisa</h2><div className="fh-service-grid">{serviceItems.map(([title, text, icon]) => <article className="fh-service" key={title}><div className="fh-service-head"><h3>{title}</h3><span><img src={asset(icon)} alt=""/></span></div><p>{text}</p></article>)}</div></div></section>; }

export { Services };
