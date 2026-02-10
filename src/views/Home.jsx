"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  education,
  experience,
  resume,
  site,
  visibleProjects,
} from "../data/portfolio";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const heroProjects = visibleProjects;
  const [orbitTime, setOrbitTime] = useState(0);
  const [isCompactOrbit, setIsCompactOrbit] = useState(false);

  useEffect(() => {
    const onResize = () => setIsCompactOrbit(window.innerWidth <= 980);
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (heroProjects.length <= 1) {
      return undefined;
    }

    let animationFrame;
    let startTime;

    const animate = (now) => {
      if (startTime === undefined) {
        startTime = now;
      }

      setOrbitTime(now - startTime);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [heroProjects.length]);

  const orbitStates = useMemo(() => {
    if (heroProjects.length === 0) {
      return [];
    }

    const speed = 0.0002;
    const orbitWarp = 0.42;
    const radiusX = isCompactOrbit ? 104 : 176;
    const radiusY = isCompactOrbit ? 22 : 34;
    const depthRange = isCompactOrbit ? 170 : 240;
    const verticalOffset = isCompactOrbit ? 18 : 24;

    return heroProjects.map((_, index) => {
      const spacing = (Math.PI * 2) / heroProjects.length;
      const rawAngle = orbitTime * speed + index * spacing;
      // Warp angular speed so cards appear to linger near the front.
      const angle = rawAngle - orbitWarp * Math.sin(rawAngle * 2);
      const depth = (Math.cos(angle) + 1) / 2;
      const x = Math.sin(angle) * radiusX;
      const y = Math.cos(angle) * radiusY + verticalOffset + (1 - depth) * 16;
      const z = -126 + depth * depthRange;
      const scale = 0.76 + depth * 0.28;
      const tilt = -5 * Math.sin(angle);

      return { depth, x, y, z, scale, tilt };
    });
  }, [heroProjects, isCompactOrbit, orbitTime]);

  const depthZIndexMap = useMemo(() => {
    const ranking = orbitStates
      .map((orbit, index) => ({ index, depth: orbit.depth }))
      .sort((a, b) => a.depth - b.depth);

    const zIndexMap = new Array(orbitStates.length).fill(1);
    ranking.forEach((entry, rank) => {
      zIndexMap[entry.index] = 20 + rank;
    });

    return zIndexMap;
  }, [orbitStates]);

  const frontCardIndex = useMemo(() => {
    if (orbitStates.length === 0) {
      return -1;
    }

    let frontIndex = 0;
    for (let i = 1; i < orbitStates.length; i += 1) {
      if (orbitStates[i].depth > orbitStates[frontIndex].depth) {
        frontIndex = i;
      }
    }

    return frontIndex;
  }, [orbitStates]);

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
            {heroProjects.length > 0 ? (
              heroProjects.map((project, index) => {
                const orbit = orbitStates[index] || {
                  depth: 0,
                  x: 0,
                  y: 0,
                  z: -126,
                  scale: 0.8,
                  tilt: 0,
                };

                const solidCardColor = project.palette[0];
                const isTopCard = index === frontCardIndex;
                const brightness = 0.8 + orbit.depth * 0.2;
                const saturate = 1 + orbit.depth * 0.15;
                const shadowStrength = 0.2 + orbit.depth * 0.18;

                const shellStyle = {
                  zIndex: depthZIndexMap[index] ?? 1,
                  pointerEvents: isTopCard ? "auto" : "none",
                  opacity: 0.58 + orbit.depth * 0.42,
                  filter: `brightness(${brightness}) saturate(${saturate})`,
                  boxShadow: `0 ${12 + orbit.depth * 16}px ${22 + orbit.depth * 20}px rgba(17, 14, 12, ${shadowStrength})`,
                  "--orbit-x": `${orbit.x}px`,
                  "--orbit-y": `${orbit.y}px`,
                  "--orbit-z": `${orbit.z}px`,
                  "--orbit-r": `${orbit.tilt}deg`,
                  "--orbit-s": orbit.scale,
                };

                return (
                  <div
                    key={project.slug}
                    className="hero-card-shell"
                    style={shellStyle}
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      className="hero-card"
                      style={{ backgroundColor: solidCardColor }}
                    >
                      <div className="hero-card__top">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <div className="hero-card__label">
                        {isTopCard ? "Click to open case study" : "Up next"}
                      </div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="service-card">
                <h3>No published projects yet</h3>
                <p>Set `hidden: false` on a project in `src/data/portfolio.js` to publish it.</p>
              </div>
            )}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Strategic builds with a calm, premium feel.</h2>
            </div>
            <p className="section__lead">
              Only projects with `hidden: false` are shown here. Hidden drafts stay in
              your data file until you are ready to publish them.
            </p>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="services" className="section section--split">
          <div>
            <p className="eyebrow">Services</p>
            <h2>From strategy to shipped interface.</h2>
            <p className="section__lead">
              Current focus areas: biomedical software, lab workflow automation, and
              practical engineering tools with clean user-facing UX.
            </p>
            <div className="service-tags">
              {[
                "Product strategy",
                "qPCR workflow automation",
                "Primer design tooling",
                "Data pipeline integration",
                "Front-end engineering",
                "API integration",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="service-cards">
            {[
              {
                title: "Discovery Sprint",
                text: "Define workflow constraints, users, and outcomes before writing implementation plans.",
              },
              {
                title: "System Design",
                text: "Design architecture across UI, APIs, and domain-specific processing modules.",
              },
              {
                title: "Build + Validate",
                text: "Ship usable software quickly, then iterate with real use-cases and direct feedback.",
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
              <h2>Engineering-first product work.</h2>
              <p>
                This portfolio focuses on verified project work only. Draft projects can
                stay hidden until they are fully documented and ready to publish.
              </p>
              <div className="about-stats">
                <div>
                  <strong>3</strong>
                  <span>Published real projects</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>Hidden placeholders</span>
                </div>
                <div>
                  <strong>1</strong>
                  <span>Data file controls visibility</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">Add your real profile image</div>
            </div>
          </div>
        </section>

        <section id="resume" className="section section--resume">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Resume</p>
              <h2>Resume details are now placeholder-only.</h2>
            </div>
            <p className="section__lead">
              Replace this section with verified experience and education entries.
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
                <span className="resume-note">Replace /resume.pdf with your real file.</span>
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
              <h2>How I ship technical products.</h2>
            </div>
            <p className="section__lead">
              Workflow adapted for technical products where domain logic and UX both matter.
            </p>
          </div>
          <div className="process-grid">
            {[
              {
                step: "01",
                title: "Scope",
                text: "Document the workflow, hard constraints, and success criteria.",
              },
              {
                step: "02",
                title: "Model",
                text: "Design the data and processing model before committing to UI details.",
              },
              {
                step: "03",
                title: "Build",
                text: "Implement, validate, and connect domain logic to usable interfaces.",
              },
              {
                step: "04",
                title: "Publish",
                text: "Keep drafts hidden, publish intentionally, then iterate with real users.",
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
