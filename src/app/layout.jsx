import "./globals.css";
import { site } from "../data/portfolio";

const siteDescription =
  "Maxwell McInnis portfolio: biomedical engineering, software products, automation systems, and technical project case studies.";
const siteUrl = new URL(process.env.SITE_URL || "https://www.maxwellmcinnis.com");
if (siteUrl.hostname === "maxwellmcinnis.com") {
  siteUrl.hostname = "www.maxwellmcinnis.com";
}
const SITE_URL = siteUrl.origin;
const SOCIAL_IMAGE = "/projects/portfolio.png";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Portfolio`,
    template: `%s | ${site.name}`,
  },
  description: siteDescription,
  keywords: [
    "Maxwell McInnis",
    "Maxwell McInnis portfolio",
    "biomedical engineer",
    "software engineer",
    "automation",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Portfolio`,
    description: siteDescription,
    url: SITE_URL,
    images: [{ url: SOCIAL_IMAGE, alt: "Maxwell McInnis Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Portfolio`,
    description: siteDescription,
    images: [SOCIAL_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
