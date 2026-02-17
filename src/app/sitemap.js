import { visibleProjects } from "../data/portfolio";

const siteUrl = new URL(process.env.SITE_URL || "https://www.maxwellmcinnis.com");
if (siteUrl.hostname === "maxwellmcinnis.com") {
  siteUrl.hostname = "www.maxwellmcinnis.com";
}
const SITE_URL = siteUrl.origin;
const LAST_MODIFIED = new Date("2026-01-01T00:00:00.000Z");

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...visibleProjects.map((project) => ({
      url: `${SITE_URL}/work/${project.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.7,
    })),
  ];
}

