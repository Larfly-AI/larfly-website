"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FigmaHomepage } from "@/components/homepage/FigmaHomepage";

export function RouteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") {
    return (
      <div className="figma-home">
        <Header />
        <FigmaHomepage />
        <Footer />
        <ChatWidget />
      </div>
    );
  }

  return (
    <div className="figma-home">
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
