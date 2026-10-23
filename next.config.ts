import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/blog/maximizing-your-rental-property-s-potential", destination: "/blog/como-responder-leads-imobiliarios", permanent: true },
      { source: "/blog/the-future-of-real-estate-management", destination: "/blog/futuro-atendimento-imobiliario-ia-whatsapp", permanent: true },
      { source: "/blog/top-tips-for-effective-tenant-management", destination: "/blog/erros-perder-leads-whatsapp", permanent: true },
      { source: "/blog/how-can-designers-prepare-for-the-future", destination: "/blog/lgpd-whatsapp-imobiliarias", permanent: true },
      { source: "/blog/building-a-navigation-component", destination: "/blog/calibrar-voz-ia-marca", permanent: true },
    ];
  },
};

export default nextConfig;
