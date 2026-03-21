import { contactCards, profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ContactSection({ formMessage, onSubmit }) {
  return (
    <section className="contact section" id="contact">
      <SectionHeading
        eyebrow="Mission Control"
        title="Contact"
        description="Open a direct communication channel for collaboration, freelance work, internships, or product discussions."
      />

      <div className="contact-layout">
        <div className="contact-info reveal">
          <div className="contact-intro-card">
            <span className="contact-intro-eyebrow">Direct Channel</span>
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
          </div>

          <div className="contact-card-grid">
            {contactCards.map((card) => (
              <article className="contact-card" key={card.title}>
                <span className="contact-card-label">{card.title}</span>
                {card.href ? (
                  <a href={card.href} className="contact-card-value">{card.value}</a>
                ) : (
                  <span className="contact-card-value">{card.value}</span>
                )}
              </article>
            ))}
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={onSubmit}>
          <div className="form-heading">
            <h3>Transmit a message</h3>
            <p>Submit this form to open your default email client with the message prefilled.</p>
          </div>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Your email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Transmit your message" required></textarea>
          </label>
          <button type="submit" className="button button-primary">Send Signal</button>
          <p className="form-note">{formMessage}</p>
        </form>
      </div>

      <div className="social-links reveal">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </section>
  );
}
