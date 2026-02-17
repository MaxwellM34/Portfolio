const siteUrl = new URL(process.env.SITE_URL || "https://www.maxwellmcinnis.com");
if (siteUrl.hostname === "maxwellmcinnis.com") {
  siteUrl.hostname = "www.maxwellmcinnis.com";
}
const SITE_URL = siteUrl.origin;

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
