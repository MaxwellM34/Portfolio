"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function ProjectDetail({ project, nextProject }) {
  const solidCardColor = project.palette[0];
  const heroImage = project.heroImage || project.image;
  const heroImagePosition = project.heroImagePosition || "center";
  const [activeGalleryItem, setActiveGalleryItem] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveGalleryItem(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="page">
      <SiteNav />
      <main>
        <section className="detail-hero">
          <div className="detail-hero__content">
            <p className="eyebrow">Case study</p>
            <h1>{project.title}</h1>
            <p className="detail-hero__summary">{project.description}</p>
            <div className="detail-meta">
              <div>
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>
              <div>
                <span>Timeline</span>
                <strong>{project.timeline}</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>{project.category}</strong>
              </div>
            </div>
            <div className="detail-tags">
              {project.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
          <div
            className="detail-hero__image"
            style={{
              backgroundColor: solidCardColor,
              backgroundImage: `url("${heroImage}")`,
              backgroundSize: "cover",
              backgroundPosition: heroImagePosition,
            }}
          ></div>
        </section>

        <section className="section section--stats">
          <div className="stats-grid">
            {project.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--story">
          <div className="story-grid">
            <div>
              <p className="eyebrow">The brief</p>
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </div>
            <div>
              <p className="eyebrow">Approach</p>
              <h2>What we made</h2>
              <p>{project.approach}</p>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Outcome</p>
              <h2>Results</h2>
              <p>{project.outcome}</p>
              <div className="tools">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2>Visual snapshots</h2>
            </div>
            <p className="section__lead">Click any image to expand.</p>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((item) => (
              <button
                key={item.label}
                type="button"
                className="gallery-card"
                style={{
                  backgroundColor: solidCardColor,
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.02) 48%, rgba(0, 0, 0, 0.46) 100%), url("${item.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => setActiveGalleryItem(item)}
              >
              </button>
            ))}
          </div>
        </section>

        <section className="section section--next">
          <div className="next-card">
            <div>
              <p className="eyebrow">Next project</p>
              <h2>{nextProject.title}</h2>
              <p>{nextProject.summary}</p>
            </div>
            <Link className="button button--primary" href={`/work/${nextProject.slug}`}>
              View next case study
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />

      {activeGalleryItem ? (
        <div className="gallery-modal" onClick={() => setActiveGalleryItem(null)}>
          <button
            type="button"
            className="gallery-modal__close"
            onClick={() => setActiveGalleryItem(null)}
            aria-label="Close image"
          >
            x
          </button>
          <img
            className="gallery-modal__image"
            src={activeGalleryItem.image}
            alt={activeGalleryItem.label}
            onClick={(event) => event.stopPropagation()}
          />
          <p className="gallery-modal__caption">{activeGalleryItem.label}</p>
        </div>
      ) : null}
    </div>
  );
}
