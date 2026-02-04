import React from "react";
import { Link } from "react-router-dom";
import { site } from "../data/portfolio";

export default function SiteNav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link className="nav__brand" to="/">
          <span className="nav__mark" aria-hidden="true"></span>
          <span>{site.name}</span>
        </Link>
        <nav className="nav__links">
          <a href="/#work">Work</a>
          <a href="/#services">Services</a>
          <a href="/#about">About</a>
          <a href="/#resume">Resume</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="nav__cta" href="/#contact">
          Start a project
        </a>
      </div>
    </header>
  );
}
