import { plans } from "@/lib/content";

export function PricingCards() {
  return (
    <div className="pricing-grid">
      {plans.map((plan) => (
        <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
          {plan.featured && <span className="popular">MAIS ESCOLHIDO</span>}
          <h3>{plan.name}</h3>
          <p className="plan-description">{plan.description}</p>
          <div className="price">{plan.price}<small>{plan.period}</small></div>
          <a href={plan.href} className={plan.featured ? "button button-dark full" : "button button-outline full"}>
            Começar agora <span>↗</span>
          </a>
          <div className="plan-rule" />
          <p className="includes">O que está incluído:</p>
          <ul>
            {plan.features.map((feature) => <li key={feature}><span className="check">✓</span>{feature}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
