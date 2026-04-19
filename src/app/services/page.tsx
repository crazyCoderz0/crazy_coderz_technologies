import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import { services, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description: `${siteConfig.name} offers Android, iOS, Flutter, web development, AI integration, and bug fixing services for modern businesses.`,
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Flexible development services for startups and growing businesses"
        description="Choose from native mobile builds, cross-platform apps, high-performing websites, admin panels, AI features, and maintenance support."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="Detailed service areas"
            description="Each engagement is tailored to the business goal, delivery timeline, and technical complexity of the project."
          />
          <div className="grid2">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ctaPanel">
            <p className="eyebrow">Need Custom Scope?</p>
            <h2>We can combine services into one end-to-end engagement.</h2>
            <p className="muted">
              Many clients start with one product and expand into dashboards, automation, analytics, or ongoing support.
            </p>
            <div className="buttonRow" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="button buttonPrimary">
                Discuss Your Project
              </Link>
              <Link href="/pricing" className="button buttonSecondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
