import React from "react";
import Link from "next/link";

export default function ProjectCard({ project, index }) {
  const solidCardColor = project.palette[0];
  const accent = project.palette[2];
  const cardImage = project.image || project.heroImage;
  const cardVideo = project.mediaVideo || null;
  const cardImageStyle = {
    backgroundColor: solidCardColor,
    backgroundImage: cardVideo
      ? "none"
      : `linear-gradient(160deg, rgba(10, 10, 10, 0.08), rgba(10, 10, 10, 0.45)), url("${cardImage}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card reveal"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="project-card__image" style={cardImageStyle}>
        {cardVideo ? (
          <video
            className="project-card__video"
            src={cardVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : null}
        <div className="project-card__image-overlay" aria-hidden="true"></div>
        <div className="project-card__badge" style={{ borderColor: accent }}>
          {project.category}
        </div>
        <div className="project-card__label">View project</div>
      </div>
      <div className="project-card__body">
        <div className="project-card__title">
          <h3>{project.title}</h3>
          <span>{project.year}</span>
        </div>
        <p>{project.summary}</p>
        <div className="project-card__tags">
          {project.services.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
