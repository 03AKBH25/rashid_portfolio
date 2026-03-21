import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

export default function SkillsSection() {
  return (
    <section className="skills section" id="skills">
      <SectionHeading
        eyebrow="Planetary Systems"
        title="Skills"
        description="Each planet represents a technical zone with its own gravity, tools, and delivery strengths."
      />

      <div className="planet-grid">
        {skills.map((skill) => (
          <article className="planet-card reveal" key={skill.title}>
            <div className={`planet ${skill.planetClass}`}></div>
            <h3>{skill.title}</h3>
            <p>{skill.items}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
