import SectionHeading from "./SectionHeading";
import { profile, projects } from "../data/portfolio";

export default function ProjectsSection() {
  return (
    <section className="projects section" id="projects">
      <SectionHeading
        eyebrow="Galaxy Clusters"
        title="Projects"
        description="Focused builds that combine intelligent workflows, modern frontend systems, and full-stack execution."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.title}>
            <span className="project-index">{project.index}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={profile.github} target="_blank" rel="noreferrer">View on GitHub</a>
          </article>
        ))}
      </div>
    </section>
  );
}
