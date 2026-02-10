import React from "react";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function NotFoundView() {
  return (
    <div className="page">
      <SiteNav />
      <main className="not-found">
        <p className="eyebrow">Page not found</p>
        <h1>That page does not exist.</h1>
        <p>Try heading back to the portfolio overview.</p>
        <Link className="button button--primary" href="/">
          Back to home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
