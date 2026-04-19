"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="mobileMenu">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="menuButton"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      {open ? (
        <div className="mobileMenuPanel">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("mobileNavLink", pathname === item.href && "active")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
