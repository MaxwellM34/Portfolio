import "./globals.css";
import { site } from "../data/portfolio";

const siteDescription =
  "Portfolio of product design and front-end work. Explore case studies, services, and collaboration details.";

export const metadata = {
  metadataBase: new URL("https://your-portfolio.com"),
  title: {
    default: `${site.name} | Portfolio`,
    template: `%s | ${site.name}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Portfolio`,
    description: siteDescription,
    url: "https://your-portfolio.com",
    images: [{ url: "/og-image.svg", alt: "Portfolio preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Portfolio`,
    description: siteDescription,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
