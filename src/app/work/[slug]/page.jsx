import React from "react";
import { notFound } from "next/navigation";
import { site, visibleProjects } from "../../../data/portfolio";
import ProjectDetail from "../../../views/ProjectDetail";

const SITE_URL = (process.env.SITE_URL || "https://maxwellmcinnis.com").replace(/\/$/, "");

export function generateStaticParams() {
  return visibleProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = visibleProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: `Not found | ${site.name}`,
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.summary,
      url: `${SITE_URL}/work/${project.slug}`,
      images: [{ url: "/og-image.svg", alt: "Portfolio preview" }],
    },
    twitter: {
      title: `${project.title} | ${site.name}`,
      description: project.summary,
      images: ["/og-image.svg"],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const projectIndex = visibleProjects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = visibleProjects[projectIndex];
  const nextProject = visibleProjects[(projectIndex + 1) % visibleProjects.length];

  return <ProjectDetail project={project} nextProject={nextProject} />;
}

