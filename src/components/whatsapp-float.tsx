import { siteConfig } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="whatsAppFloat"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}
