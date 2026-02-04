import React from "react";
import { site } from "../data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <h3>{site.name}</h3>
          <p>{site.role}</p>
          <p className="footer__meta">{site.availability}</p>
        </div>
        <div className="footer__links">
          {site.socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
        <div className="footer__contact">
          <p>{site.email}</p>
          <p>{site.phone}</p>
        </div>
      </div>
      <div className="footer__bottom">
        <span>2026 Portfolio. All projects shown are sample work.</span>
        <span>Made with the PrimerPlus framework.</span>
      </div>
    </footer>
  );
}
