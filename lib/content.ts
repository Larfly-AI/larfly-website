export const plans = [
  {
    name: "Gratuito",
    price: "R$0",
    period: "para sempre",
    description: "Para sempre, sem cartão.",
    features: ["Atendimento com IA", "Central de conversas", "Catálogo de imóveis (até 5)", "Agenda básica"],
    href: "https://app.larfly.com/",
  },
  {
    name: "Pro",
    price: "R$97",
    period: "/mês",
    description: "Para imobiliárias em crescimento.",
    features: ["Tudo do plano Gratuito", "Catálogo ilimitado de imóveis", "Sincronização com Airbnb", "Times e permissões", "Suporte prioritário"],
    href: "https://app.larfly.com/",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "R$199,99",
    period: "/mês",
    description: "Para operações maiores.",
    features: ["Tudo do plano Pro", "Gestão multiempresa", "Contatos protegidos (LGPD)", "Automações customizadas"],
    href: "https://app.larfly.com/",
  },
];

export const articles = [
  { slug: "como-responder-leads-imobiliarios", image: "/images/blog-lead-response.png", title: "Como responder leads de imóveis em segundos, 24h por dia", category: "Atendimento", excerpt: "Descubra como responder cada oportunidade no momento certo e transformar conversas em visitas." },
  { slug: "futuro-atendimento-imobiliario-ia-whatsapp", image: "/images/blog-future-ai.png", title: "O futuro do atendimento imobiliário é por IA no WhatsApp", category: "Tecnologia", excerpt: "Como a inteligência artificial está mudando a relação entre imobiliárias e seus clientes." },
  { slug: "erros-perder-leads-whatsapp", image: "/images/figma-blog-3.png", title: "Erros comuns que fazem sua imobiliária perder leads no WhatsApp", category: "Vendas", excerpt: "Pequenos atrasos no atendimento podem custar grandes oportunidades. Veja como evitá-los." },
  { slug: "lgpd-whatsapp-imobiliarias", image: "/images/blog-lgpd.png", title: "LGPD no WhatsApp: o que toda imobiliária precisa saber", category: "Gestão", excerpt: "Boas práticas para proteger os dados dos seus clientes no atendimento digital." },
  { slug: "calibrar-voz-ia-marca", image: "/images/blog-brand-voice.png", title: "Como calibrar a voz da IA para a sua marca", category: "Produto", excerpt: "Mantenha a personalidade da sua marca em todas as conversas com seus leads." },
  { slug: "organizar-visitas-imobiliarias", image: "/images/blog-visits-organization.png", title: "Como organizar visitas e não perder nenhuma oportunidade", category: "Gestão", excerpt: "Organize horários, acompanhe cada imóvel e ofereça uma experiência mais simples para seus clientes." },
];

export const faqs = [
  ["Posso conectar o WhatsApp que já uso na imobiliária?", "A Larfly foi pensada para encaixar no atendimento que você já faz. Conecte seu número de WhatsApp e mantenha suas conversas no mesmo canal, enquanto a IA ajuda a responder os leads com mais agilidade."],
  ["A Larfly envia mensagens para pessoas que ainda não falaram comigo?", "O atendimento começa quando o próprio lead chama sua imobiliária. A IA responde a conversa iniciada pelo cliente e não dispara mensagens de prospecção ou divulgação por conta própria."],
  ["Como eu ou minha equipe assumimos uma conversa?", "Você acompanha as conversas pela central e pode entrar no atendimento quando quiser. Assim, a IA cuida das dúvidas iniciais e seu time continua a conversa diretamente com o lead quando for o momento certo."],
  ["Consigo organizar imóveis de temporada e reservas?", "Você pode cadastrar imóveis de temporada e acompanhar disponibilidade pela agenda. No plano Pro, também é possível importar anúncios do Airbnb e sincronizar informações de disponibilidade."],
  ["Como a Larfly ajuda a proteger os dados dos meus clientes?", "A plataforma reúne as conversas e informações dos leads em um ambiente de gestão para sua operação. O acesso e o uso desses dados devem seguir as permissões da sua equipe e as práticas de privacidade da sua imobiliária; consulte nossa Política de Privacidade para mais detalhes."],
  ["A Larfly atende corretores autônomos ou só imobiliárias?", "A plataforma pode apoiar tanto quem trabalha por conta própria quanto equipes imobiliárias. Você organiza seus imóveis, acompanha os contatos e usa a IA para dar retorno aos leads sem depender de uma operação grande."],
] as const;

export const features = [
  { icon: "✦", title: "Atendimento com IA", text: "Responde dúvidas sobre imóveis, preço e disponibilidade na hora, com a voz calibrada da sua marca." },
  { icon: "⌂", title: "Catálogo de Imóveis", text: "Cadastre imóveis para venda, locação e temporada, com fotos, preço e status tudo que a IA consulta para responder." },
  { icon: "▤", title: "Central de Conversas", text: "Inbox único com todas as conversas: filtros por não lidas, com IA, com humano, aguardando ou encerradas." },
  { icon: "◷", title: "Agenda de Disponibilidade", text: "Calendário visual por imóvel, com bloqueios, reservas e dias de troca sincronizados automaticamente." },
];
