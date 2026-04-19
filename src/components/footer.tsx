import Link from "next/link";

import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <p className="eyebrow">Crazy Coderz Technologies</p>
          <h3>Building digital products that help businesses move faster.</h3>
          <p className="muted">
            From mobile apps and web platforms to AI workflows, we ship practical solutions with modern engineering standards.
          </p>
        </div>

        <div>
          <p className="footerTitle">Pages</p>
          <div className="footerLinks">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footerTitle">Contact</p>
          <div className="footerLinks">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
            <span>{siteConfig.address}</span>
          </div>
        </div>
      </div>
      <div className="container footerBottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
