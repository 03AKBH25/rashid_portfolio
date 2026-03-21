import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <section className="experience section" id="experience">
      <SectionHeading eyebrow="Asteroid Belt" title="Experience Timeline" />
      <div className="timeline reveal">
        {experience.map((item) => (
          <article className="timeline-card" key={item.title}>
            <span className="timeline-node"></span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.organization}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
