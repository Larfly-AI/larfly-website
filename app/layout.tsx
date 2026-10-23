import type { Metadata } from "next";
import "./globals.css";
import { RouteShell } from "@/components/RouteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://larfly.com"),
  title: { default: "Larfly | Atendimento com IA no WhatsApp para Imobiliárias", template: "%s | Larfly" },
  description: "A Larfly é a IA que atende seus leads no WhatsApp 24h por dia: responde em segundos, qualifica interessados e agenda visitas para a sua imobiliária.",
  openGraph: { siteName: "Larfly", locale: "pt_BR", type: "website", images: ["/og-image.webp"] },
  icons: { icon: "/favicon.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><RouteShell>{children}</RouteShell></body></html>;
}
