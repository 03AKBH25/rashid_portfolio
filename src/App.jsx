import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { profile, typingPhrases } from "./data/portfolio";

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero">RN</a>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function LoadingScreen({ hidden }) {
  return (
    <div className={`loading-screen${hidden ? " hidden" : ""}`}>
      <div className="loading-core"></div>
      <p>Entering Universe...</p>
    </div>
  );
}

export default function App() {
  const [loadingHidden, setLoadingHidden] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [formMessage, setFormMessage] = useState(
    "This demo form uses a client-side interaction. Connect it to your preferred backend or form service for production."
  );
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoadingHidden(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timerId;

    const tick = () => {
      const phrase = typingPhrases[phraseIndex];
      const nextText = deleting ? phrase.slice(0, charIndex--) : phrase.slice(0, charIndex++);
      setTypedText(nextText);

      let delay = deleting ? 45 : 75;
      if (!deleting && charIndex > phrase.length) {
        deleting = true;
        delay = 1100;
      } else if (deleting && charIndex < 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        charIndex = 0;
        delay = 350;
      }
      timerId = window.setTimeout(tick, delay);
    };

    tick();
    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updatePointer = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });

      if (!heroRef.current) {
        return;
      }

      const offsetX = (event.clientX / window.innerWidth - 0.5) * 18;
      const offsetY = (event.clientY / window.innerHeight - 0.5) * 18;

      heroRef.current.style.transform = `translate3d(${offsetX * -0.12}px, ${offsetY * -0.12}px, 0)`;

      document.querySelectorAll(".floating-tag").forEach((tag, index) => {
        const factor = (index + 1) * 0.4;
        tag.style.transform = `translate3d(${offsetX * factor}px, ${offsetY * factor}px, 0)`;
      });
    };

    const hidePointer = () => {
      setCursor((current) => ({ ...current, visible: false }));
    };

    window.addEventListener("pointermove", updatePointer);
    window.addEventListener("pointerleave", hidePointer);

    return () => {
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", hidePointer);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrame = 0;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: Math.min(220, Math.floor(window.innerWidth / 7)) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.4,
        speed: Math.random() * 0.35 + 0.08,
        alpha: Math.random() * 0.8 + 0.2
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -4;
          star.x = Math.random() * canvas.width;
        }

        context.beginPath();
        context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        context.shadowBlur = 10;
        context.shadowColor = "rgba(125, 211, 252, 0.7)";
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormMessage(
      "Your mail client should open with the message prefilled. If it does not, use the email card on the left."
    );
    event.currentTarget.reset();
  }

  return (
    <>
      <LoadingScreen hidden={loadingHidden} />
      <div
        className="cursor-trail"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
          opacity: cursor.visible ? 1 : 0
        }}
      ></div>
      <canvas className="starfield" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="nebula nebula-a"></div>
      <div className="nebula nebula-b"></div>
      <div className="noise-overlay"></div>

      <Header />

      <main>
        <HeroSection typedText={typedText} heroRef={heroRef} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection formMessage={formMessage} onSubmit={handleSubmit} />
      </main>
    </>
  );
}
