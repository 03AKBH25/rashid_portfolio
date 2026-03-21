import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section className="about section" id="about">
      <SectionHeading
        eyebrow="About Me"
        title="About Me"
        description="A quick overview of who I am, where I work best, and the areas I am still improving."
      />

      <div className="about-layout reveal">
        <div className="about-copy">
          <p>
            I am Rashid Nayyer, a Full Stack Developer with a strong interest in building practical, scalable, and user-focused digital products. I enjoy working across both frontend and backend systems, turning ideas into clean interfaces, efficient APIs, and reliable application workflows. My technical background includes Java, C++, Python, React.js, Node.js, REST APIs, microservices, databases, and cloud tools such as AWS, Docker, Kubernetes, and Azure. I am also deeply interested in AI-driven applications and enjoy exploring how intelligent systems can solve real-world problems. Through projects like an AI Resume Analyzer, a MERN Food Ordering Platform, and a Bus Booking Management System, I have strengthened my skills in problem solving, full stack architecture, and modern development practices. I aim to keep learning, build meaningful software, and contribute to products that combine performance, usability, and innovation.
          </p>
        </div>

        <div className="about-meta">
          <article className="about-panel">
            <h3>Strengths</h3>
            <ul>
              <li>Strong problem solving with full stack implementation skills.</li>
              <li>Comfortable across frontend, backend, APIs, databases, and cloud tools.</li>
              <li>Quick learner with interest in AI-driven and scalable product development.</li>
            </ul>
          </article>

          <article className="about-panel">
            <h3>Weakness</h3>
            <p>
              I sometimes spend extra time refining implementation details because I care deeply about code quality and end-user experience, but I continuously work on balancing perfection with delivery speed.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
