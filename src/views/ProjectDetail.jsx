"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

function SequentialVideo({
  sources,
  className,
  poster,
  controls = false,
  muted = true,
  autoPlay = true,
  onClick,
}) {
  const safeSources = Array.isArray(sources) ? sources.filter(Boolean) : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [safeSources.join("|")]);

  if (!safeSources.length) {
    return null;
  }

  const source = safeSources[activeIndex];

  return (
    <video
      className={className}
      src={source}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      controls={controls}
      playsInline
      preload="metadata"
      loop={safeSources.length === 1}
      onEnded={() => {
        if (safeSources.length > 1) {
          setActiveIndex((index) => (index + 1) % safeSources.length);
        }
      }}
      onClick={onClick}
    />
  );
}

export default function ProjectDetail({ project, nextProject }) {
  const solidCardColor = project.palette[0];
  const heroImage = project.heroImage || project.image;
  const heroImagePosition = project.heroImagePosition || "center";
  const heroVideoSources = Array.isArray(project.mediaVideos) && project.mediaVideos.length
    ? project.mediaVideos
    : project.mediaVideo
      ? [project.mediaVideo]
      : [];
  const [activeGalleryItem, setActiveGalleryItem] = useState(null);

  const isLikelyUrl = (value) =>
    typeof value === "string" && /^(https?:\/\/|www\.|[\w.-]+\.[a-z]{2,}(?:\/.*)?$)/i.test(value);

  const toAbsoluteUrl = (value) =>
    value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;

  const getGalleryVideoSources = (item) => {
    if (Array.isArray(item.mediaVideos) && item.mediaVideos.length) {
      return item.mediaVideos;
    }

    if (item.mediaType === "video") {
      return [item.image];
    }

    if (typeof item.image === "string" && item.image.toLowerCase().endsWith(".mp4")) {
      return [item.image];
    }

    return [];
  };

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
              backgroundImage: heroVideoSources.length ? "none" : `url("${heroImage}")`,
              backgroundSize: "cover",
              backgroundPosition: heroImagePosition,
            }}
          >
            {heroVideoSources.length ? (
              <SequentialVideo
                className="detail-hero__video"
                sources={heroVideoSources}
                poster={heroImage}
                muted
                autoPlay
              />
            ) : null}
          </div>
        </section>

        <section className="section section--stats">
          <div className="stats-grid">
            {project.stats.map((stat) => {
              const isLink = isLikelyUrl(stat.value);
              const href = isLink ? toAbsoluteUrl(stat.value) : "";

              return (
                <div key={stat.label} className="stat-card">
                  {isLink ? (
                    <strong>
                      <a href={href} target="_blank" rel="noreferrer">
                        {stat.value}
                      </a>
                    </strong>
                  ) : (
                    <strong>{stat.value}</strong>
                  )}
                  <span>{stat.label}</span>
                </div>
              );
            })}
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
            {project.gallery.map((item) => {
              const videoSources = getGalleryVideoSources(item);
              const isVideo = videoSources.length > 0;

              return (
                <button
                  key={item.label}
                  type="button"
                  className="gallery-card"
                  style={
                    isVideo
                      ? { backgroundColor: solidCardColor }
                      : {
                          backgroundColor: solidCardColor,
                          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.02) 48%, rgba(0, 0, 0, 0.46) 100%), url("${item.image}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                  }
                  onClick={() => setActiveGalleryItem(item)}
                >
                  {isVideo ? (
                    <SequentialVideo
                      className="gallery-card__video"
                      sources={videoSources}
                      poster={item.image || heroImage}
                      muted
                      autoPlay
                    />
                  ) : null}
                </button>
              );
            })}
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
              View next project
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
          {getGalleryVideoSources(activeGalleryItem).length ? (
            <SequentialVideo
              className="gallery-modal__video"
              sources={getGalleryVideoSources(activeGalleryItem)}
              poster={activeGalleryItem.image || heroImage}
              controls
              muted
              autoPlay
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              className="gallery-modal__image"
              src={activeGalleryItem.image}
              alt={activeGalleryItem.label}
              onClick={(event) => event.stopPropagation()}
            />
          )}
          <p className="gallery-modal__caption">{activeGalleryItem.label}</p>
        </div>
      ) : null}
    </div>
  );
}
