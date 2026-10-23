import { FigmaHomepage } from "@/components/homepage/FigmaHomepage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Larfly",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "pt-BR",
  url: "https://larfly.com/",
  description: "A Larfly é a IA que atende seus leads no WhatsApp 24h por dia: responde em segundos, qualifica interessados e agenda visitas para a sua imobiliária.",
  offers: [{ "@type": "Offer", name: "Gratuito", price: "0", priceCurrency: "BRL" }, { "@type": "Offer", name: "Pro", price: "97.00", priceCurrency: "BRL" }],
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/><FigmaHomepage/></>;
}
