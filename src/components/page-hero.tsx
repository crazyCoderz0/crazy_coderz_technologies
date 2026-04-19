import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref = "/contact?intent=get-a-quote#inquiry-form",
  primaryLabel = "Get a Quote",
  secondaryHref = "/book-meeting",
  secondaryLabel = "Book a Meeting"
}: PageHeroProps) {
  return (
    <section className="pageHero">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="pageIntro">{description}</p>
        <div className="buttonRow">
          <Link href={primaryHref} className="button buttonPrimary">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="button buttonSecondary">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
