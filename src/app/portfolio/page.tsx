import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { portfolioProjects, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Portfolio",
  description: `Explore sample app, web, and AI projects from ${siteConfig.name}.`,
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Sample projects that reflect our delivery quality and range"
        description="Explore example work across mobile applications, business websites, admin dashboards, and AI-powered experiences."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Work"
            title="App, website, and AI project examples"
            description="These examples show the kind of product thinking, UX quality, and engineering care we bring to client work."
          />
          <div className="grid3">
            {portfolioProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
