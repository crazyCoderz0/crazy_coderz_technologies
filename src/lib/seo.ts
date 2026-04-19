import { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/utils";

type CreateMetadataProps = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "" }: CreateMetadataProps): Metadata {
  const url = new URL(path, getSiteUrl()).toString();

  return {
    title,
    description,
    metadataBase: new URL(getSiteUrl()),
    alternates: {
      canonical: path || "/"
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
