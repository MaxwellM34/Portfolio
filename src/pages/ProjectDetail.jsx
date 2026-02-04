import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="page">
        <SiteNav />
        <main className="not-found">
          <p className="eyebrow">Case study not found</p>
          <h1>That project does not exist.</h1>
          <p>Try heading back to the portfolio overview.</p>
          <Link className="button button--primary" to="/">
            Back to home
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const heroGradient = `linear-gradient(140deg, ${project.palette[0]}, ${project.palette[1]})`;

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
          <div className="detail-hero__image" style={{ backgroundImage: heroGradient }}>
            <div className="detail-hero__label">Hero image placeholder</div>
          </div>
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
            <p className="section__lead">
              Replace these placeholders with final screens, photography, or brand assets.
            </p>
          </div>
          <div className="gallery-grid">
            {project.gallery.map((item) => (
              <div key={item.label} className="gallery-card" style={{ backgroundImage: heroGradient }}>
                <div className="gallery-card__label">{item.label}</div>
              </div>
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
            <Link className="button button--primary" to={`/work/${nextProject.slug}`}>
              View next case study
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
