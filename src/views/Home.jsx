"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  education,
  experience,
  projects,
  resume,
  site,
  visibleProjects,
} from "../data/portfolio";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import ProjectCard from "../components/ProjectCard";

function buildOrbitSlots(total, startRadius, ringGap, minSpacing) {
  const slots = [];

  if (total <= 0) {
    return slots;
  }

  let remaining = total;
  let offset = 0;
  let ring = 0;

  while (remaining > 0) {
    const radius = startRadius + ring * ringGap;
    const circumference = Math.PI * 2 * radius;
    const capacity = Math.max(1, Math.floor(circumference / Math.max(1, minSpacing)));
    const count = Math.min(remaining, capacity);

    for (let i = 0; i < count; i += 1) {
      const jitter = (i % 2 === 0 ? -1 : 1) * 0.06 + ring * 0.17;
      slots[offset + i] = {
        ring,
        radius,
        count,
        angleOffset: (Math.PI * 2 * i) / count + jitter,
      };
    }

    remaining -= count;
    offset += count;
    ring += 1;
  }

  return slots;
}

export default function Home() {
  const heroProjects = visibleProjects;
  const hiddenProjectCount = Math.max(0, projects.length - heroProjects.length);
  const [orbitTime, setOrbitTime] = useState(0);
  const [isCompactOrbit, setIsCompactOrbit] = useState(false);
  const [hoverLock, setHoverLock] = useState(null);

  useEffect(() => {
    const onResize = () => setIsCompactOrbit(window.innerWidth <= 980);
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setHoverLock((current) => {
      if (!current) {
        return current;
      }

      return current.index < heroProjects.length ? current : null;
    });
  }, [heroProjects.length]);

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

  const orbitConfig = useMemo(() => {
    const total = heroProjects.length;
    const sizePenalty = Math.max(0, total - (isCompactOrbit ? 2 : 3));
    const cardWidth = Math.round(
      Math.max(isCompactOrbit ? 220 : 260, (isCompactOrbit ? 292 : 360) - sizePenalty * 12)
    );
    const crowdScale = Math.max(isCompactOrbit ? 0.78 : 0.72, 1 - sizePenalty * 0.05);
    const minSpacing = cardWidth * (isCompactOrbit ? 0.72 : 0.74);
    const baseRadius = isCompactOrbit ? 120 : 176;
    const ringGap = Math.max(minSpacing * 0.88, isCompactOrbit ? 150 : 190);
    const verticalScale = isCompactOrbit ? 0.82 : 0.76;
    const slots = buildOrbitSlots(total, baseRadius, ringGap, minSpacing);
    const maxRing = slots.reduce((max, slot) => Math.max(max, slot.ring), 0);
    const stackHeight = (isCompactOrbit ? 350 : 470) + maxRing * (isCompactOrbit ? 104 : 128);

    return {
      cardWidth,
      crowdScale,
      minSpacing,
      ringGap,
      verticalScale,
      slots,
      maxRing,
      stackHeight,
    };
  }, [heroProjects.length, isCompactOrbit]);

  const normalOrbitStates = useMemo(() => {
    if (heroProjects.length === 0) {
      return [];
    }

    const baseSpeed = isCompactOrbit ? 0.00024 : 0.00018;
    const ringLift = (orbitConfig.maxRing * 8) / 2;

    return orbitConfig.slots.map((slot) => {
      const speed = baseSpeed / (1 + slot.ring * 0.16);
      const angle = orbitTime * speed + slot.angleOffset;
      const depth = (Math.cos(angle) + 1) / 2;
      const x = Math.cos(angle) * slot.radius;
      const y = Math.sin(angle) * slot.radius * orbitConfig.verticalScale + slot.ring * 8 - ringLift;
      const z = -78 + depth * (isCompactOrbit ? 110 : 148) - slot.ring * 8;
      const scale = orbitConfig.crowdScale * (0.84 + depth * 0.2 - slot.ring * 0.02);
      const tilt = Math.sin(angle) * (slot.ring === 0 ? 5 : 3);

      return { depth, x, y, z, scale, tilt };
    });
  }, [heroProjects.length, isCompactOrbit, orbitConfig, orbitTime]);

  const orbitStates = useMemo(() => {
    if (!hoverLock || hoverLock.index >= heroProjects.length) {
      return normalOrbitStates;
    }

    const states = normalOrbitStates.map((orbit) => ({ ...orbit }));
    const lockedIndex = hoverLock.index;
    const otherIndices = [];

    for (let i = 0; i < heroProjects.length; i += 1) {
      if (i !== lockedIndex) {
        otherIndices.push(i);
      }
    }

    const swirlSlots = buildOrbitSlots(
      otherIndices.length,
      orbitConfig.minSpacing * 0.9,
      orbitConfig.ringGap * 0.9,
      orbitConfig.minSpacing * 0.92
    );

    const swirlSpeed = isCompactOrbit ? 0.00042 : 0.00034;
    const swirlVerticalScale = isCompactOrbit ? 0.9 : 0.82;

    states[lockedIndex] = {
      depth: 1,
      x: hoverLock.x,
      y: hoverLock.y,
      z: Math.max(24, hoverLock.z),
      scale: hoverLock.scale * 1.02,
      tilt: hoverLock.tilt * 0.15,
    };

    otherIndices.forEach((cardIndex, order) => {
      const slot = swirlSlots[order];
      const speed = swirlSpeed / (1 + slot.ring * 0.15);
      const angle = orbitTime * speed + slot.angleOffset;
      const radiusScale = 0.84 + 0.16 * Math.sin(angle * 1.5 + slot.ring * 0.7);
      const radius = slot.radius * radiusScale;
      const waveX = Math.cos(angle * 0.48 + order * 0.35) * 14;
      const waveY = Math.sin(angle * 0.62 + order * 0.55) * 10;
      const x = hoverLock.x + Math.cos(angle) * radius + waveX;
      const y =
        hoverLock.y +
        Math.sin(angle * 1.1 + slot.ring * 0.35) * radius * swirlVerticalScale +
        waveY;
      const depthWave = Math.sin(angle * 1.32 + order * 0.68);

      states[cardIndex] = {
        depth: 0.44 - slot.ring * 0.07 + (depthWave + 1) * 0.05,
        x,
        y,
        z: -46 - slot.ring * 14 + depthWave * 18,
        scale: orbitConfig.crowdScale * Math.max(0.74, 0.9 - slot.ring * 0.08),
        tilt: Math.sin(angle * 0.9 + order * 0.4) * 2.8 + Math.cos(angle * 0.45) * 1.4,
      };
    });

    return states;
  }, [heroProjects.length, hoverLock, isCompactOrbit, normalOrbitStates, orbitConfig, orbitTime]);

  const depthZIndexMap = useMemo(() => {
    const ranking = orbitStates
      .map((orbit, index) => ({ index, depth: orbit.depth }))
      .sort((a, b) => a.depth - b.depth);

    const zIndexMap = new Array(orbitStates.length).fill(1);
    ranking.forEach((entry, rank) => {
      zIndexMap[entry.index] = 40 + rank;
    });

    if (hoverLock && hoverLock.index < zIndexMap.length) {
      zIndexMap[hoverLock.index] = 200;
    }

    return zIndexMap;
  }, [hoverLock, orbitStates]);

  const frontCardIndex = useMemo(() => {
    if (hoverLock && hoverLock.index < orbitStates.length) {
      return hoverLock.index;
    }

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
  }, [hoverLock, orbitStates]);

  const releaseHoverLock = () => setHoverLock(null);

  const handleCardHover = (index) => {
    const currentOrbit = normalOrbitStates[index];

    if (!currentOrbit) {
      return;
    }

    setHoverLock({
      index,
      x: currentOrbit.x,
      y: currentOrbit.y,
      z: currentOrbit.z,
      scale: currentOrbit.scale,
      tilt: currentOrbit.tilt,
    });
  };

  const handleCardLeave = (index) => {
    if (!hoverLock || hoverLock.index !== index) {
      return;
    }

    releaseHoverLock();
  };

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
          <div
            className="hero__stack"
            style={{
              "--hero-card-width": `${orbitConfig.cardWidth}px`,
              "--hero-stack-height": `${orbitConfig.stackHeight}px`,
            }}
            onMouseLeave={releaseHoverLock}
          >
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
                const brightness = hoverLock
                  ? isTopCard
                    ? 1.05
                    : 0.94
                  : 0.82 + orbit.depth * 0.2;
                const saturate = hoverLock
                  ? isTopCard
                    ? 1.06
                    : 0.96
                  : 1 + orbit.depth * 0.15;
                const shadowStrength = isTopCard ? 0.34 : 0.2 + orbit.depth * 0.12;

                const shellStyle = {
                  zIndex: depthZIndexMap[index] ?? 1,
                  pointerEvents: "auto",
                  opacity: hoverLock ? (isTopCard ? 1 : 0.86) : 0.6 + orbit.depth * 0.4,
                  filter: `brightness(${brightness}) saturate(${saturate})`,
                  boxShadow: `0 ${12 + orbit.depth * 14}px ${22 + orbit.depth * 18}px rgba(17, 14, 12, ${shadowStrength})`,
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
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={() => handleCardLeave(index)}
                    onFocusCapture={() => handleCardHover(index)}
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
                        {isTopCard ? "Click to open case study" : hoverLock ? "Orbiting" : "Up next"}
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
                  <strong>{heroProjects.length}</strong>
                  <span>Published real projects</span>
                </div>
                <div>
                  <strong>{hiddenProjectCount}</strong>
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
