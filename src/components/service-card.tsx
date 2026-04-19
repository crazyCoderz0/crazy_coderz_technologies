import { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card serviceCard">
      <h3>{service.title}</h3>
      <p className="muted">{service.description}</p>
      <ul className="featureList">
        {service.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
