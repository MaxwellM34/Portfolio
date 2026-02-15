import "./globals.css";
import { site } from "../data/portfolio";

const siteDescription =
  "Maxwell McInnis portfolio: biomedical engineering, software products, automation systems, and technical project case studies.";
const SITE_URL = (process.env.SITE_URL || "https://maxwellmcinnis.com").replace(/\/$/, "");

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
    icon: [{ url: "/projects/Maxwell.png", type: "image/png" }],
    shortcut: ["/projects/Maxwell.png"],
    apple: [{ url: "/projects/Maxwell.png" }],
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Portfolio`,
    description: siteDescription,
    url: SITE_URL,
    images: [{ url: "/projects/Maxwell.png", alt: "Maxwell McInnis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Portfolio`,
    description: siteDescription,
    images: ["/projects/Maxwell.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
