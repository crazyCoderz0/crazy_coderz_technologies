import { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/utils";

const routes = ["", "/about", "/services", "/pricing", "/portfolio", "/contact", "/book-meeting"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
