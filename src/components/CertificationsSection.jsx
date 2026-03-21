import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolio";

export default function CertificationsSection() {
  return (
    <section className="certifications section" id="certifications">
      <SectionHeading eyebrow="Satellites" title="Certifications" />
      <div className="satellite-system reveal">
        {certifications.map((certification) => (
          <article className="satellite-card" key={certification.title}>
            <h3>{certification.title}</h3>
            <p>{certification.subtitle}</p>
            <a href={certification.href} target="_blank" rel="noreferrer">View Certificate</a>
          </article>
        ))}
      </div>
    </section>
  );
}
