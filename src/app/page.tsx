import Link from "next/link";

import { PricingCard } from "@/components/pricing-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { portfolioProjects, pricingTiers, services, siteConfig, testimonials, whyChooseUs } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Home",
  description: `${siteConfig.tagline}. Crazy Coderz Technologies builds web apps, mobile apps, admin panels, and AI solutions for modern businesses.`,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <section className="heroSection">
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Software Development Agency</p>
            <h1>{siteConfig.tagline}</h1>
            <p>
              We help startups, founders, and growing businesses launch fast, polished, and scalable digital products across mobile, web, and AI.
            </p>
            <div className="heroActions">
              <Link href="/contact?intent=get-a-quote#inquiry-form" className="button buttonPrimary">
                Get a Quote
              </Link>
              <Link href="/book-meeting" className="button buttonSecondary">
                Book a Meeting
              </Link>
            </div>
            <div className="heroMetric">
              <div>
                <strong>50+</strong>
                <span className="muted">Projects delivered</span>
              </div>
              <div>
                <strong>7 Days</strong>
                <span className="muted">Average kickoff timeline</span>
              </div>
              <div>
                <strong>AI + Apps</strong>
                <span className="muted">Full-service execution</span>
              </div>
            </div>
          </div>

          <div className="heroPanel">
            <div className="panelGlow">
              <p className="eyebrow">What We Deliver</p>
              <h2>Design-forward builds with engineering discipline.</h2>
              <p className="muted">
                Strategy, UI/UX, frontend, backend, mobile delivery, AI integration, and post-launch maintenance under one roof.
              </p>
              <div className="statsStrip">
                <div className="card">
                  <strong>99%</strong>
                  <p className="muted">Client satisfaction focus</p>
                </div>
                <div className="card">
                  <strong>24/7</strong>
                  <p className="muted">Lead capture with AI</p>
                </div>
                <div className="card">
                  <strong>SEO</strong>
                  <p className="muted">Optimized pages and structure</p>
                </div>
                <div className="card">
                  <strong>Fast</strong>
                  <p className="muted">Performance-minded builds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Product development support that covers the full journey"
            description="From first idea to launch and optimization, we create experiences that look premium and perform reliably."
          />
          <div className="grid3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitSection">
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="A delivery partner that thinks like a product team"
              description="We combine modern development practices with practical business thinking, so the final product is not just functional, but effective."
            />
          </div>
          <div className="grid2">
            {whyChooseUs.map((item) => (
              <article key={item} className="card chooseCard">
                <h3>{item}</h3>
                <p className="muted">
                  Clear planning, efficient execution, and launch support built around real business outcomes.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio Snapshot"
            title="Recent builds across apps, websites, and AI workflows"
            description="A sample of the kind of practical, polished, and scalable work we help clients bring to market."
          />
          <div className="grid3">
            {portfolioProjects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Clients value speed, clarity, and dependable execution"
            align="center"
          />
          <div className="grid3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Starting Pricing"
            title="Transparent starting points for common project types"
            description="Final pricing depends on project requirements, integrations, scope, and delivery timeline."
          />
          <div className="grid2">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.title} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="ctaPanel">
            <p className="eyebrow">Start Your Project</p>
            <h2>Need a reliable development team for your next product?</h2>
            <p className="muted">
              Tell us what you’re building, get a clear proposal, and move quickly with a team that understands modern digital delivery.
            </p>
            <div className="buttonRow" style={{ justifyContent: "center" }}>
              <Link href="/contact?intent=get-a-quote#inquiry-form" className="button buttonPrimary">
                Get a Quote
              </Link>
              <Link href="/book-meeting" className="button buttonSecondary">
                Book a Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
