import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { pricingTiers, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Pricing",
  description: `View starting pricing for app development, website development, and bug fixing services from ${siteConfig.name}.`,
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent starting pricing to help you plan with confidence"
        description="We price based on scope, complexity, integrations, timelines, and long-term support needs."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Starting From"
            title="Estimated pricing for common project categories"
            description="Final pricing depends on project requirements."
            align="center"
          />
          <div className="grid2">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.title} tier={tier} />
            ))}
          </div>
          <div className="ctaPanel" style={{ marginTop: "1.5rem" }}>
            <p className="muted">
              Disclaimer: Final pricing depends on project requirements, integrations, revisions, delivery speed, and maintenance expectations.
            </p>
            <div className="buttonRow" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="button buttonPrimary">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
