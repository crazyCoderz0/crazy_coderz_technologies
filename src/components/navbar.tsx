import Link from "next/link";

import { navItems, siteConfig } from "@/data/site";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="siteHeader">
      <div className="container navShell">
        <Link href="/" className="brandMark" aria-label={siteConfig.name}>
          <span className="brandIcon">CC</span>
          <span className="brandText">
            <strong>{siteConfig.shortName}</strong>
            <small>Technologies</small>
          </span>
        </Link>

        <nav className="desktopNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={cn("navLink")}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="navActions">
          <ThemeToggle />
          <Link href="/contact" className="button buttonSecondary desktopOnly">
            Get a Quote
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
