"use client";

import { usePathname } from "next/navigation";
import { Footer, Header } from "@/components/Site";
import { ChatWidget } from "@/components/ChatWidget";
import { FigmaFooter, FigmaHeader } from "@/components/FigmaHomepage";

export function RouteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return <>{children}<ChatWidget/></>;
  if (pathname.startsWith("/blog") || pathname === "/privacy-policy" || pathname === "/terms-conditions") return <div className="figma-home"><FigmaHeader/><main>{children}</main><FigmaFooter/><ChatWidget/></div>;
  return <><Header/><main>{children}</main><Footer/><ChatWidget/></>;
}
