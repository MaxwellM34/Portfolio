import React from "react";
import { Link } from "react-router-dom";
import { education, experience, projects, resume, site } from "../data/portfolio";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const heroProjects = projects.slice(0, 3);

  return (
    <div className="page">
      <SiteNav />
      <main>
        <section className="hero">
          <div className="hero__content">
            <p className="eyebrow">Portfolio 2026</p>
            <h1>
              {site.name}
              <span>{site.role}</span>
            </h1>
            <p className="hero__intro">{site.intro}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                View work
              </a>
              <a className="button button--ghost" href="#contact">
                Let's collaborate
              </a>
            </div>
            <div className="hero__meta">
              <div>
                <span>Location</span>
                <strong>{site.location}</strong>
              </div>
              <div>
                <span>Availability</span>
                <strong>{site.availability}</strong>
              </div>
            </div>
          </div>
          <div className="hero__stack">
            {heroProjects.map((project, index) => {
              const gradient = `linear-gradient(145deg, ${project.palette[0]}, ${project.palette[1]})`;
              return (
                <Link
                  key={project.slug}
                  to={`/work/${project.slug}`}
                  className={`hero-card hero-card--${index + 1}`}
                  style={{ backgroundImage: gradient }}
                >
                  <div className="hero-card__top">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="hero-card__label">Image placeholder</div>
                </Link>
              );
            })}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Strategic builds with a calm, premium feel.</h2>
            </div>
            <p className="section__lead">
              Each project below includes a full case study page with the context, the
              process, and the visuals that shaped the outcome.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="services" className="section section--split">
          <div>
            <p className="eyebrow">Services</p>
            <h2>From strategy to shipped interface.</h2>
            <p className="section__lead">
              I help teams move from discovery to delivery with a tight loop of
              research, concepting, and front-end production.
            </p>
            <div className="service-tags">
              {[
                "Product strategy",
                "UX research",
                "Design systems",
                "Interaction design",
                "Front-end builds",
                "Content design",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="service-cards">
            {[
              {
                title: "Discovery Sprint",
                text: "Map the problem space, align on outcomes, and build a clear plan in 1-2 weeks.",
              },
              {
                title: "Experience Design",
                text: "Translate complex workflows into elegant interfaces and scalable components.",
              },
              {
                title: "Front-End Delivery",
                text: "Ship responsive, production-ready UI with motion and polish baked in.",
              },
            ].map((card) => (
              <div key={card.title} className="service-card reveal">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section section--about">
          <div className="about-card reveal">
            <div>
              <p className="eyebrow">About</p>
              <h2>Design that feels inevitable, not overworked.</h2>
              <p>
                I partner with founders, product teams, and creative studios to build
                experiences that are structured, expressive, and easy to maintain. My
                sweet spot is translating messy requirements into a clean system that
                ships fast and looks refined.
              </p>
              <div className="about-stats">
                <div>
                  <strong>8+</strong>
                  <span>Years shipping digital products</span>
                </div>
                <div>
                  <strong>40+</strong>
                  <span>Launches with teams and studios</span>
                </div>
                <div>
                  <strong>12</strong>
                  <span>Industries explored</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">Portrait placeholder</div>
            </div>
          </div>
        </section>

        <section id="resume" className="section section--resume">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Resume</p>
              <h2>Medical device and biotech experience.</h2>
            </div>
            <p className="section__lead">
              A quick view of my background in biomedical engineering, research, and R&D.
            </p>
          </div>
          <div className="resume-grid">
            <div className="resume-card reveal">
              <h3>Resume snapshot</h3>
              <p>{resume.summary}</p>
              <ul className="resume-highlights">
                {resume.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="resume-actions">
                <a className="button button--primary" href={resume.resumeUrl}>
                  Download resume
                </a>
                <span className="resume-note">Replace /resume.pdf with your file.</span>
              </div>
              <div className="skill-grid">
                {resume.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="experience-stack">
              <h3>Work experience</h3>
              {experience.map((role) => (
                <div key={role.title} className="experience-card reveal">
                  <div className="experience-meta">
                    <div>
                      <strong>{role.title}</strong>
                      <span>{role.company}</span>
                    </div>
                    <div className="experience-dates">
                      <span>{role.location}</span>
                      <span>{role.dates}</span>
                    </div>
                  </div>
                  <p>{role.summary}</p>
                  <ul>
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="education-card reveal">
                <p className="eyebrow">Education</p>
                {education.map((item) => (
                  <div key={item.degree}>
                    <strong>{item.degree}</strong>
                    <span>{item.school}</span>
                    <span>{item.dates}</span>
                    <p>{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--process">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Process</p>
              <h2>Clear steps, no drama.</h2>
            </div>
            <p className="section__lead">
              A lightweight framework that keeps stakeholders aligned and keeps design moving.
            </p>
          </div>
          <div className="process-grid">
            {[
              {
                step: "01",
                title: "Align",
                text: "Define goals, constraints, and success metrics in a working brief.",
              },
              {
                step: "02",
                title: "Shape",
                text: "Sketch flows, test concepts, and craft the visual system.",
              },
              {
                step: "03",
                title: "Build",
                text: "Deliver production-ready UI and collaborate with engineering.",
              },
              {
                step: "04",
                title: "Refine",
                text: "Measure impact, gather feedback, and iterate quickly.",
              },
            ].map((item) => (
              <div key={item.step} className="process-card reveal">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Ready to build something distinct?</h2>
              <p>
                Share a quick overview of the project and I will reply with next steps
                and availability.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button--primary" href={`mailto:${site.email}`}>
                Email {site.email}
              </a>
              <a className="button button--ghost" href={`tel:${site.phone}`}>
                Call {site.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
