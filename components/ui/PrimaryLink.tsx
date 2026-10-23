import type { ReactNode } from "react";

type PrimaryLinkProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export function PrimaryLink({
  children,
  href = "https://app.larfly.com/",
  className = "",
}: PrimaryLinkProps) {
  const label = typeof children === "string" ? children : "Testar gratuitamente";

  return (
    <a className={`figma-primary ${className}`} href={href} aria-label={label}>
      <span className="figma-label">{children}</span>
      <span className="figma-arrow" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </span>
    </a>
  );
}
