"use client";

import { useState } from "react";
import { plans } from "@/lib/content";
import { PrimaryLink } from "@/components/ui/PrimaryLink";

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const formatCurrency = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  const monthlyPrice = (price: string) => Number(price.replace(/[^\d,]/g, "").replace(",", "."));
  const billingTotal = (price: string) => monthlyPrice(price) * (annual ? 12 : 1);
  const hourlyEquivalent = (price: string) => formatCurrency(monthlyPrice(price) / 30 / 24);
  return <section className="fh-pricing" id="planos"><h2>Escolha o plano ideal para o tamanho da sua<br/> operação</h2><div className="fh-billing"><span className={!annual ? "is-active" : ""} onClick={() => setAnnual(false)}>Mensal</span><button type="button" className={`fh-billing-toggle${annual ? " is-annual" : ""}`} role="switch" aria-checked={annual} aria-label="Alternar cobrança mensal ou anual" onClick={() => setAnnual(value => !value)}><i/></button><span className={annual ? "is-active" : ""} onClick={() => setAnnual(true)}>Anual</span></div><div className="fh-plans">{plans.map((p) => <article key={p.name} className={`fh-plan ${p.featured ? "is-featured" : ""}`}><header><strong>{p.period === "para sempre" ? formatCurrency(0) : <>{hourlyEquivalent(p.price)}<span className="fh-hourly-unit">/hora</span></>}</strong><small className="fh-billing-total">{p.period === "para sempre" ? "Grátis para sempre" : `${formatCurrency(billingTotal(p.price))}${annual ? " por ano" : " por mês"}`}</small><small>{p.description}</small></header><ul>{p.features.map((f) => <li key={f}><span>⊙</span>{f}</li>)}</ul><PrimaryLink>Escolher plano</PrimaryLink></article>)}</div></section>;
}

export { Pricing };
