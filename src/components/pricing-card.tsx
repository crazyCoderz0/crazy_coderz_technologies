import { PricingTier } from "@/types";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article className="card pricingCard">
      <h3>{tier.title}</h3>
      <p className="price">{tier.price}</p>
      <p className="muted">{tier.description}</p>
      <ul className="featureList">
        {tier.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
