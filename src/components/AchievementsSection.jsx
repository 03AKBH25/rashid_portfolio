import SectionHeading from "./SectionHeading";
import { achievements } from "../data/portfolio";

export default function AchievementsSection() {
  return (
    <section className="achievements section" id="achievements">
      <SectionHeading eyebrow="Constellations" title="Achievements" />
      <div className="constellation-card reveal">
        <svg viewBox="0 0 600 280" className="constellation-map" aria-label="Achievement constellation">
          <path d="M70 210 L180 120 L315 160 L430 90 L540 145" />
          <circle cx="70" cy="210" r="9" />
          <circle cx="180" cy="120" r="10" />
          <circle cx="315" cy="160" r="8" />
          <circle cx="430" cy="90" r="12" />
          <circle cx="540" cy="145" r="10" />
        </svg>
        <div className="achievement-copy">
          <h3>{achievements[0].title}</h3>
          <p>{achievements[0].description}</p>
        </div>
      </div>
    </section>
  );
}
