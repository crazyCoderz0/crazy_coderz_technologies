import { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card projectCard">
      <p className="eyebrow">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="muted">{project.summary}</p>
      <div className="tagRow">
        {project.stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
      <p>{project.results}</p>
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="button buttonSecondary"
        >
          {project.linkLabel || "View Project"}
        </a>
      ) : null}
    </article>
  );
}
