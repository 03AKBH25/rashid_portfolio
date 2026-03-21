import { heroTags, profile } from "../data/portfolio";

export default function HeroSection({ typedText, heroRef }) {
  return (
    <section className="hero section" id="hero" ref={heroRef}>
      <div className="hero-copy reveal">
        <span className="eyebrow">Universe Entry</span>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">
          Building intelligent systems, resilient backends, and immersive web experiences across the modern software stack.
        </p>
        <p className="typing-line">
          Initializing profile: <span>{typedText}</span>
        </p>
        <div className="hero-cta">
          <a className="button button-primary" href="#about">Explore Galaxy</a>
          <a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
          <a className="button button-ghost" href="#contact">Contact</a>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="hero-orbit">
          <div className="hero-planet hero-planet-main">
            <img src={profile.image} alt={profile.name} className="hero-profile-image" />
          </div>
          <div className="hero-ring ring-one"></div>
          <div className="hero-ring ring-two"></div>
          {heroTags.map((tag, index) => (
            <div className={`floating-tag tag-${index + 1}`} key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
