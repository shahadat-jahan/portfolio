const skills = [
  "PHP",
  "Laravel",
  "RESTful APIs",
  "Laravel Sanctum",
  "Laravel JSON API",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "GitHub Actions",
  "Swagger/OpenAPI",
  "JavaScript",
  "Vue.js Integration",
  "jQuery",
  "Bootstrap",
  "Tailwind CSS",
];

const strengths = [
  "Builds API-first backend systems for CRM, ERP, and academic platforms.",
  "Optimizes database-heavy workflows with indexing, query tuning, and cleaner schemas.",
  "Works comfortably across product, QA, and frontend teams inside agile delivery cycles.",
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Vivasoft Limited",
    period: "Oct 2022 - Mar 2026",
    points: [
      "Architected and maintained a CRM platform covering lead tracking, prospect movement, and sales operations.",
      "Designed a Student Management System for academic, examination, and financial workflows.",
      "Built secure REST APIs with JSON API standards, token auth, and role-based access control.",
      "Used Docker to keep development, staging, and production environments consistent.",
      "Reduced slow bulk operations by improving indexing strategy and query design.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Swapnoloke",
    period: "Apr 2022 - Sep 2022",
    points: [
      "Developed backend modules for a Laravel-based Library Management System.",
      "Implemented ERP workflows for purchase, sales, and tender management.",
      "Contributed to requirement analysis, feature delivery, and production issue resolution.",
    ],
  },
];

const projects = [
  {
    name: "Student Management System",
    type: "Academic and Financial Platform",
    stack: "PHP, Laravel, MySQL, JavaScript, Ajax, jQuery, Bootstrap, Docker",
    status: "Large-scale academic operations backend",
    description:
      "Scalable backend covering scheduling, attendance, examinations, automated promotion, configurable fees, dues calculation, and role-based access.",
  },
  {
    name: "Flash Card API Platform",
    type: "API-First Content Platform",
    stack: "PHP, Laravel, PostgreSQL, Laravel Sanctum, Laravel Scout, Laravel Pulse, Docker",
    status: "API-first architecture and search-heavy workflows",
    description:
      "REST API platform with token authentication, full-text search, monitoring, and containerized deployment.",
  },
  {
    name: "CRM System",
    type: "Sales Lifecycle Platform",
    stack: "PHP, Laravel, MySQL, JavaScript, Ajax, jQuery, Docker",
    status: "Lead and conversion pipeline management",
    description:
      "CRM for lead tracking, prospect management, conversion workflows, and interactive AJAX-powered internal tools.",
  },
  {
    name: "ERP System",
    type: "Enterprise Workflow Solution",
    stack: "PHP, Laravel, MySQL, Bootstrap, JavaScript, jQuery",
    status: "Procurement and internal business workflow modules",
    description:
      "Custom ERP modules for purchase, sales, and tender operations with a strong focus on data consistency and business rules.",
  },
];

const profile = {
  image: "/shahadat-profile.png",
  resume: "/Shahadat_Resume_v2.pdf",
  github: "https://github.com/shahadat-jahan",
  linkedin: "https://www.linkedin.com/in/shahadat-jahan/",
};

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark">SU</span>
            <div>
              <p>MD. Shahadat Uddin</p>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="nav-actions">
            <a className="nav-link" href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Laravel Engineer / API Systems / CRM / ERP</p>
            <h1>Backend systems that stay maintainable as products scale.</h1>
            <p className="lead">
              I build Laravel applications, REST APIs, and database-driven
              platforms for teams that need reliable business software, not
              fragile demos.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a
                className="button secondary"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
              <a className="button secondary" href="mailto:shahadat.jahan@gmail.com">
                Email Me
              </a>
            </div>
          </div>

          <aside className="hero-card">
            <img
              className="profile-photo"
              src={profile.image}
              alt="Portrait of MD. Shahadat Uddin"
            />
            <p className="card-label">Profile Snapshot</p>
            <ul>
              <li>4 years of software engineering experience</li>
              <li>Strong in PHP, Laravel, MySQL, PostgreSQL, Docker</li>
              <li>Built CRM, ERP, Student Management, and API platforms</li>
            </ul>
            <div className="meta-grid">
              <div>
                <span>Location</span>
                <strong>Dhaka, Bangladesh</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>shahadat.jahan@gmail.com</strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>+8801673622719</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>APIs & Business Apps</strong>
              </div>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </aside>
        </section>
      </header>

      <main>
        <section className="section intro" id="about">
          <div className="section-heading">
            <p>About</p>
            <h2>Engineering focus</h2>
          </div>
          <div className="intro-grid">
            <p className="intro-copy">
              Software Engineer with experience building scalable web
              applications and backend services using PHP and Laravel. My work
              has centered on business-critical systems where API design,
              maintainable architecture, and database performance matter every
              day.
            </p>
            <div className="strength-list">
              {strengths.map((item) => (
                <article key={item} className="strength-card">
                  <span />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p>Skills</p>
            <h2>Core stack</h2>
          </div>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p>Experience</p>
            <h2>Career timeline</h2>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.company}>
                <div className="timeline-head">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>
                  <span>{experience.period}</span>
                </div>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p>Projects</p>
            <h2>Selected work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <strong>{project.status}</strong>
                <span>{project.stack}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="section-heading">
            <p>Resume Link</p>
            <h2>Add this portfolio to your CV</h2>
          </div>
          <p className="intro-copy">
            This site is ready to be deployed and used as your portfolio link on
            future CV versions. After deployment, place the live URL beside your
            email, GitHub, and LinkedIn.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={profile.resume} target="_blank" rel="noreferrer">
              Open Resume PDF
            </a>
            <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              View LinkedIn
            </a>
          </div>
        </section>

        <section className="section split-section" id="education">
          <article className="panel">
            <div className="section-heading compact">
              <p>Education</p>
              <h2>Academic background</h2>
            </div>
            <h3>B.Sc. in Computer Science & Engineering (CSE)</h3>
            <p>Uttara University, Dhaka</p>
            <span>Sep 2014 - Dec 2017</span>
          </article>

          <article className="panel" id="contact">
            <div className="section-heading compact">
              <p>Contact</p>
              <h2>Open to backend engineering roles</h2>
            </div>
            <p>
              If you are hiring for Laravel, API, or database-focused software
              engineering work, I am available for discussion.
            </p>
            <div className="contact-list">
              <a href="mailto:shahadat.jahan@gmail.com">shahadat.jahan@gmail.com</a>
              <a href="tel:+8801673622719">+8801673622719</a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/shahadat-jahan
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/shahadat-jahan
              </a>
              <span>Dhaka, Bangladesh</span>
            </div>
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>MD. Shahadat Uddin</p>
        <span>Laravel, APIs, CRM, ERP, and scalable backend systems.</span>
      </footer>
    </div>
  );
}
