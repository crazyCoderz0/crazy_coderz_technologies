import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, teamMembers } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: `Learn about ${siteConfig.name}, our mission, our vision, and the team behind our software, mobile, and AI delivery services.`,
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We build practical digital products with long-term value."
        description="Crazy Coderz Technologies partners with startups and businesses to create scalable software, mobile apps, websites, and AI-powered workflows."
      />

      <section className="section">
        <div className="container aboutGrid">
          <div className="glassPanel card">
            <SectionHeading
              eyebrow="Company Introduction"
              title="A modern agency for teams that want quality and momentum"
              description="We blend product thinking, design clarity, and strong engineering to deliver software that feels premium and performs well."
            />
          </div>
          <div className="glassPanel card">
            <SectionHeading
              eyebrow="Mission & Vision"
              title="Mission"
              description="To help businesses launch and grow digital products with reliable engineering, strong UX, and practical AI adoption."
            />
            <SectionHeading
              eyebrow="Vision"
              title="Vision"
              description="To become the go-to product development partner for ambitious brands that want fast execution without compromising quality."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Team"
            title="A multidisciplinary team focused on shipping strong outcomes"
            align="center"
          />
          <div className="grid3">
            {teamMembers.map((member) => (
              <article key={member.name} className="card teamCard">
                <p className="eyebrow">{member.role}</p>
                <h3>{member.name}</h3>
                <p className="muted">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
