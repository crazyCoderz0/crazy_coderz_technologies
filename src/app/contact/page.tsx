import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} for project inquiries, software consulting, and development proposals.`,
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your next app, website, or AI project"
        description="Share your goals, requirements, and timeline. We’ll review your inquiry and get back with the next best step."
      />

      <section className="section">
        <div className="container contactGrid">
          <div>
            <SectionHeading
              eyebrow="Project Inquiry"
              title="Send your project details"
              description="All inquiries can be stored in Firebase, making it easy to manage leads and follow up quickly."
            />
            <div className="contactInfo card">
              <div>
                <strong>Email</strong>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div>
                <strong>Phone</strong>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
              </div>
              <div>
                <strong>Address</strong>
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
