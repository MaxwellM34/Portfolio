const placeholderProject = (index) => ({
  slug: `placeholder-project-${index}`,
  hidden: true,
  title: `Placeholder Project ${index}`,
  category: "Coming soon",
  year: "TBD",
  summary: "Draft slot. Replace with a real project when ready.",
  description:
    "This is a hidden placeholder project. Set hidden: false and add real content to publish it.",
  role: "TBD",
  timeline: "TBD",
  services: ["TBD"],
  tools: ["TBD"],
  image: "/og-image.svg",
  heroImage: "/og-image.svg",
  highlights: ["Add project details when this case study is ready."],
  stats: [
    { label: "Status", value: "Hidden draft" },
    { label: "Progress", value: "TBD" },
    { label: "Publish", value: "Set hidden to false" },
  ],
  gallery: [
    { label: "Placeholder image 1", image: "/og-image.svg" },
    { label: "Placeholder image 2", image: "/og-image.svg" },
    { label: "Placeholder image 3", image: "/og-image.svg" },
  ],
  challenge: "TBD",
  approach: "TBD",
  outcome: "TBD",
  palette: ["#6B7280", "#9CA3AF", "#D1D5DB"],
});

const publicPlaceholderProject = (slug, title, palette) => ({
  slug,
  hidden: false,
  title,
  category: "Placeholder Case Study",
  year: "2026",
  summary: "Placeholder card for layout testing. Replace with a real project when ready.",
  description:
    "This placeholder project is visible for card/orbit testing. Replace content and visuals with a real case study before publishing publicly.",
  role: "TBD",
  timeline: "TBD",
  services: ["Placeholder content", "Orbit layout test", "Card interaction test"],
  tools: ["Next.js", "React", "Tailwind CSS"],
  image: "/og-image.svg",
  heroImage: "/og-image.svg",
  highlights: [
    "Visible placeholder used to stress-test the homepage card system.",
    "Can be swapped for a real project by editing this entry in portfolio.js.",
  ],
  stats: [
    { label: "Status", value: "Placeholder" },
    { label: "Visibility", value: "Published" },
    { label: "Action", value: "Replace with real case study" },
  ],
  gallery: [
    { label: "Placeholder frame 1", image: "/og-image.svg" },
    { label: "Placeholder frame 2", image: "/og-image.svg" },
    { label: "Placeholder frame 3", image: "/og-image.svg" },
  ],
  challenge: "Placeholder challenge text.",
  approach: "Placeholder approach text.",
  outcome: "Placeholder outcome text.",
  palette,
});

export const site = {
  name: "Maxwell McInnis",
  role: "Biomedical Engineer + Software Builder",
  location: "Mississauga, Ontario, Canada",
  intro:
    "I build at the intersection of biomedical engineering, software, and execution: from technical products, APIs, and automation systems to small-business operations tooling and practical coaching that helps people perform better in work and life.",
  email: "maxwellmcinnis123@gmail.com",
  phone: "+1 (289) 923-0540",
  //availability: "Open to collaborations and product engineering roles.",
  socials: [
    { label: "GitHub", url: "https://github.com/MaxwellM34" },
    { label: "LinkedIn", url: "https://linkedin.com/in/maxwellmcinnis" },
    { label: "Website", url: "https://www.maxwellmcinnis.com" },
  ],
};

export const resume = {
  summary:
    "Biomedical software engineer with experience across device-facing systems, internal engineering platforms, workflow automation, and applied research in biomechanics and biosensing.",
  resumeUrl: "/projects/Resume.pdf",
  cvUrl: "/projects/MaxwellMcInnisCV.pdf",
  highlights: [
    "Designed and commercialized accessory hardware, and built supporting software systems for engineering and operations.",
    "Built internal tools spanning ERP, CRM, qPCR design automation, and lab workflow data handling.",
    "Contributed to peer-reviewed biomedical research and conference-level publications.",
  ],
  skills: [
    "Biomedical software",
    "Python",
    "Node.js",
    "React",
    "Next.js",
    "FastAPI",
    "REST APIs",
    "SQL",
    "PostgreSQL",
    "Power BI",
    "qPCR workflows",
    "Lab automation",
    "Embedded systems",
  ],
};

export const experience = [
  {
    title: "Biomedical Software Engineer & Operations Manager",
    company: "Kraken Sense",
    location: "Oakville, Canada",
    dates: "Nov 2025 - Current",
    summary:
      "Leading product lifecycle coordination across hardware, chemistry, and software, while designing and commercializing device hardware and core digital infrastructure.",
    bullets: [
      "Designed and commercialized accessory hardware including CAD, fluidics systems, metallic pumps, and sensor integration for manufacturing planning and device cost modeling.",
      "Built internal engineering software including ERP, AI-automated CRM, and qPCR primer design automation with Python, FastAPI, PostgreSQL, Redis, REST APIs, and cloud deployment.",
      "Developed full-stack internal tooling with Node.js, React, Next.js, and SQL supporting engineering, lab, production, and data workflows.",
    ],
  },
  {
    title: "Engineering Administrator",
    company: "Walinga Inc",
    location: "Guelph, Canada",
    dates: "Jul 2025 - Nov 2025",
    summary:
      "Supported engineering operations, R&D coordination, workflow automation, and SR&ED technical documentation.",
    bullets: [
      "Streamlined reporting and collaboration workflows to reduce internal delays.",
      "Built automated planning/reporting systems with MariaDB, SQL data models, and Power BI dashboards.",
      "Converted manual planning processes into near real-time KPI-driven workflows.",
    ],
  },
  {
    title: "Research Engineer",
    company: "University of Guelph",
    location: "Guelph, Canada",
    dates: "Jan 2024 - Apr 2025",
    summary:
      "Conducted biomedical engineering research across biomechanics, wearable sensing systems, bioinstrumentation, and sustainable biomaterials.",
    bullets: [
      "Designed and validated wearable sensor systems and gait-correction monitoring with ESP32 microcontrollers, IMUs, and vibration feedback.",
      "Developed sensor fusion and calibration algorithms for real-time biomechanical monitoring and feedback control.",
      "Contributed to peer-reviewed publications and technical reporting, including publication output tied to pubmed record 40347002.",
    ],
  },
  {
    title: "Bookkeeper",
    company: "Concorde Accounting and Tax Inc.",
    location: "Guelph, Canada",
    dates: "May 2024 - Aug 2024",
    summary:
      "Supported tax-season processing, documentation verification, and administrative workflows in a high-volume accounting environment.",
    bullets: [
      "Processed tax documentation for 100+ clients with compliance and accuracy.",
      "Maintained confidential financial records and supporting documentation systems.",
      "Coordinated client communication and internal workflow timelines.",
    ],
  },
  {
    title: "Municipal Student Landscaper",
    company: "City of Pickering",
    location: "Pickering, Canada",
    dates: "May 2022 - Aug 2023",
    summary:
      "Maintained municipal parks and public infrastructure with field operations teams under safety and quality standards.",
    bullets: [
      "Supported scheduled maintenance across multiple public sites.",
      "Maintained safety-first execution while meeting service timelines.",
      "Worked across field crews to deliver reliable day-to-day operations.",
    ],
  },
  {
    title: "Food Service Worker",
    company: "McDonald's",
    location: "Scarborough, Canada",
    dates: "Oct 2018 - Jul 2021",
    summary:
      "Supported high-volume customer service and multi-station restaurant operations.",
    bullets: [
      "Maintained food safety and quality control standards under peak demand.",
      "Supported front counter, kitchen, and drive-thru operations.",
      "Contributed to team coordination and service consistency.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering (B.Eng.) - Biomedical Engineering",
    school: "University of Guelph",
    dates: "Aug 2021 - Jul 2025",
    note:
      "Biomedical engineering training covering biomechanics, bioinstrumentation, medical device design, robotics, signal processing, and embedded sensing systems.",
    address: "50 Stone Rd E, Guelph, ON, N1G 2W1, Canada",
    website: "https://www.uoguelph.ca/",
    fieldOfStudy: "Engineering, manufacturing and construction",
    finalGrade: "A",
    eqfLevel: "EQF level 6",
    publication: "https://pubmed.ncbi.nlm.nih.gov/40347002/",
  },
];

export const projects = [
  {
    slug: "peptpal",
    hidden: false,
    title: "PeptPal",
    category: "Health + Harm Reduction Mobile App",
    year: "2026",
    summary:
      "A peptide harm-reduction mobile app with an evidence engine, weight-scaled dose recommendations, degradation modeling, and community-weighted consensus across 17 peptides.",
    description:
      "PeptPal is a React Native + Expo app backed by FastAPI and PostgreSQL. It tracks inventory, doses, cycles, and biomarkers, while flagging dangerous protocols by comparing user weight against trial cohorts. The core wedge is an evidence engine with trust-tiered citations, harmonic-decayed weighting, and per-peptide hard ceilings.",
    role: "Full-stack engineering, mobile development, data modeling",
    timeline: "Ongoing",
    image: "/projects/peptpal_code.svg",
    heroImage: "/projects/peptpal_code.svg",
    services: [
      "Mobile app development",
      "Evidence engine + dose scaling",
      "Pharmacokinetic modeling",
      "Community consensus weighting",
    ],
    tools: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "FastAPI",
      "PostgreSQL",
      "Tortoise ORM",
      "Turborepo",
    ],
    highlights: [
      "Evidence engine spans 17 peptides x 4 personas with trust-tiered citations (A-F).",
      "Weight-scales every protocol dose and flags 'dangerous' at 1.4x trial per-kg exposure.",
      "Per-peptide first-order degradation model with live potency bar and dose compensation math.",
      "Weighted-median forum consensus: bloodwork-attached posts count 5x, 60+ day logs 2x.",
      "Passphrase-encrypted JSON backup with no server-side storage of user data.",
    ],
    stats: [
      { label: "Stack", value: "Expo + FastAPI + PostgreSQL" },
      { label: "Tests", value: "114 passing (Vitest)" },
      { label: "Repository", value: "https://github.com/MaxwellM34/peptpal" },
    ],
    gallery: [
      { label: "doseSafety.ts — dose scaling logic", image: "/projects/peptpal_code.svg" },
    ],
    challenge:
      "Peptide forums propagate dangerous default doses copied from trial cohorts that are 60+ lb heavier than typical users, with no per-kg scaling and no source quality signal.",
    approach:
      "Built a per-kg dose scaling layer over a trust-tiered evidence engine, added a first-order degradation model so live vial potency is part of every injection decision, and wrote a weighted forum consensus that promotes bloodwork-backed posts over anecdote.",
    outcome:
      "A working monorepo mobile app with a functional evidence engine, degradation tracking, biomarker panels, and a tested consensus pipeline.",
    palette: ["#0F766E", "#14B8A6", "#CCFBF1"],
  },
  {
    slug: "imm-sourcing-pipeline",
    hidden: false,
    title: "IMM Sourcing Pipeline",
    category: "Procurement Automation",
    year: "2026",
    summary:
      "A four-stage Python pipeline that pulls injection molding machine quotes from Gmail, downloads supplier PDFs, extracts pricing, and builds a unified comparison document.",
    description:
      "IMM is an internal procurement tool that automates an otherwise manual injection molding machine sourcing workflow. It searches Gmail for quotes from a curated supplier list, downloads attachments, extracts text from PDFs, and assembles a comparison-ready report with known-price reference data.",
    role: "Python automation, pipeline design",
    timeline: "Internal tool",
    image: "/projects/imm_code.svg",
    heroImage: "/projects/imm_code.svg",
    services: [
      "Email + attachment automation",
      "PDF text extraction",
      "Procurement reporting",
      "Supplier comparison",
    ],
    tools: ["Python", "Gmail API", "Google OAuth", "PDF parsing"],
    highlights: [
      "Four-stage pipeline: fetch threads, download PDFs, extract text, build document.",
      "Searches a curated allowlist of 17+ injection molding machine suppliers.",
      "Master runner supports re-running individual stages without redoing earlier work.",
      "Reference price data tracked per-supplier in a structured JSON file.",
    ],
    stats: [
      { label: "Pipeline stages", value: "4" },
      { label: "Suppliers tracked", value: "17+" },
      { label: "Repository", value: "https://github.com/MaxwellM34/IMM" },
    ],
    gallery: [
      { label: "01_fetch_emails.py — Gmail ingestion", image: "/projects/imm_code.svg" },
    ],
    challenge:
      "Comparing IMM quotes across many suppliers means manually digging through email threads and PDF attachments with inconsistent formatting and no central reference.",
    approach:
      "Split the workflow into four idempotent scripts so each stage can be re-run independently, paired with a Gmail allowlist query and a known-price reference file for sanity checks.",
    outcome:
      "Compressed multi-day procurement comparison work into a repeatable pipeline that produces a single comparison document on demand.",
    palette: ["#475569", "#94A3B8", "#E2E8F0"],
  },
  {
    slug: "resumai",
    hidden: false,
    title: "Resumai",
    category: "AI Resume + Job Application Platform",
    year: "2026",
    summary:
      "A Turborepo monorepo with a Next.js frontend, FastAPI backend, Clerk authentication, and a billing layer for AI-assisted resumes and application tracking.",
    description:
      "Resumai is a full-stack resume and job application platform. The web app handles applications, profiles, billing, and admin views, while the FastAPI backend persists data through Alembic migrations and exposes the AI-driven resume tooling.",
    role: "Full-stack engineering, monorepo architecture",
    timeline: "In development",
    image: "/projects/resumai_code.svg",
    heroImage: "/projects/resumai_code.svg",
    services: [
      "Resume generation",
      "Application tracking",
      "Billing + auth integration",
      "Admin tooling",
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Alembic",
      "Clerk",
      "Turborepo",
      "Docker",
    ],
    highlights: [
      "Turborepo monorepo with separate web and API apps deployed via GitHub Actions.",
      "Next.js App Router with route groups for auth, app, and Chrome extension auth flows.",
      "FastAPI backend with Alembic migrations and dedicated profile + application models.",
      "Clerk-based authentication and billing scaffolding for paid-tier features.",
    ],
    stats: [
      { label: "Architecture", value: "Turborepo monorepo" },
      { label: "Auth", value: "Clerk" },
      { label: "Repository", value: "https://github.com/MaxwellM34/Resumai" },
    ],
    gallery: [
      { label: "application.py — SQLAlchemy model", image: "/projects/resumai_code.svg" },
    ],
    challenge:
      "Job seekers tailor resumes per application but lose track of versions, applications, and what was sent where.",
    approach:
      "Built a monorepo so the resume tooling and the application tracking dashboard share types and auth, and structured the API around discrete profile and application models that the AI generation flow consumes.",
    outcome:
      "A working full-stack base with auth, billing scaffolding, and the data models needed to ship the AI resume + application tracking workflow.",
    palette: ["#1E40AF", "#60A5FA", "#DBEAFE"],
  },
  {
    slug: "mogbot",
    hidden: false,
    title: "Mogbot",
    category: "Autonomous AI Agent",
    year: "2026",
    summary:
      "A Claude-powered autonomous agent that browses the web with Playwright, executes code, manages files, and chains multi-step plans, with real-time CAD spend tracking and PostgreSQL-backed history.",
    description:
      "Mogbot is a self-hosted Manus-style agent. A React UI talks over WebSocket + REST to a FastAPI backend that wraps the Anthropic API, a Playwright browser, and a code execution sandbox. The agent pauses for the user on CAPTCHAs, 2FA, or login walls instead of failing silently.",
    role: "AI engineering, full-stack architecture, browser automation",
    timeline: "Personal project",
    image: "/projects/mogbot_code.svg",
    heroImage: "/projects/mogbot_code.svg",
    services: [
      "AI agent design",
      "Browser automation",
      "Code execution sandbox",
      "Spend + history tracking",
    ],
    tools: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React",
      "Playwright",
      "PostgreSQL",
      "Anthropic API",
      "Docker",
    ],
    highlights: [
      "WebSocket + REST architecture between React UI and FastAPI control plane.",
      "Playwright integration handles real browser interactions: click, type, scroll, fill forms.",
      "Real-time CAD budget enforcement to keep autonomous runs from over-spending.",
      "PostgreSQL-backed task history and logs for replay and auditing.",
      "Pauses for human input on CAPTCHAs, 2FA, and login walls.",
    ],
    stats: [
      { label: "Stack", value: "FastAPI + React + Playwright" },
      { label: "Model", value: "Anthropic Claude" },
      { label: "Repository", value: "https://github.com/MaxwellM34/Mogbot" },
    ],
    gallery: [
      { label: "browser.py — Playwright automation", image: "/projects/mogbot_code.svg" },
    ],
    challenge:
      "Hosted agent platforms hide cost, can't be paused on auth challenges, and don't give you the full execution history.",
    approach:
      "Built a self-hosted control plane with explicit budget tracking, a Playwright browser the user can take over, and PostgreSQL persistence so every run is inspectable.",
    outcome:
      "A working autonomous agent that completes browse + code + file workflows end-to-end while staying within a CAD budget and yielding control on human-only steps.",
    palette: ["#7C2D12", "#F97316", "#FED7AA"],
  },
  {
    slug: "agent-bootdev",
    hidden: false,
    title: "Boot.dev Agent Project",
    category: "AI / LLM Course Project",
    year: "2026",
    summary:
      "Boot.dev coursework building a small Python agent against the Gemini API with a simple tool-calling loop and a calculator example.",
    description:
      "A guided Boot.dev project that walks through the basics of LLM tool use. The agent exposes a small set of file and calculator functions to the Gemini API and runs a multi-turn loop until the model returns a final answer.",
    role: "Course project",
    timeline: "Boot.dev coursework",
    image: "/projects/agent_code.svg",
    heroImage: "/projects/agent_code.svg",
    services: [
      "Tool-calling loop",
      "LLM API integration",
      "Python project setup",
    ],
    tools: ["Python", "Gemini API", "uv"],
    highlights: [
      "Implements a basic tool-calling loop against the Gemini API.",
      "Exposes file inspection and calculator helpers as agent tools.",
      "Built with uv for reproducible Python environments.",
    ],
    stats: [
      { label: "Course", value: "Boot.dev — Build an Agent" },
      { label: "Language", value: "Python" },
      { label: "Repository", value: "https://github.com/MaxwellM34/agent" },
    ],
    gallery: [
      { label: "main.py — Gemini tool-calling loop", image: "/projects/agent_code.svg" },
    ],
    challenge:
      "Build an end-to-end LLM agent loop from scratch without an agent framework.",
    approach:
      "Followed the Boot.dev guided project: defined tool schemas, parsed model tool calls, executed each tool, and fed results back into the next model turn until completion.",
    outcome:
      "A small but complete agent showing the core tool-use loop pattern that scales up to larger production agents.",
    palette: ["#0F172A", "#38BDF8", "#E0F2FE"],
  },
  {
    slug: "nova-newborn-care",
    hidden: false,
    title: "Nova — Newborn Care Marketplace",
    category: "Two-Sided Marketplace",
    year: "2026",
    summary:
      "An overnight newborn care marketplace for the DC/MD/VA area, built for NOVA Birth Partners with live availability, verified credentials, and direct booking.",
    description:
      "Nova lets families browse vetted night nannies, newborn care specialists, postpartum doulas, and registered nurses. The stack pairs a React + Vite frontend with a FastAPI backend, PostGIS for location queries, Clerk for auth, and Stripe Connect for payouts.",
    role: "Full-stack engineering, marketplace architecture",
    timeline: "Client project (NOVA Birth Partners)",
    image: "/projects/nova_code.svg",
    heroImage: "/projects/nova_code.svg",
    services: [
      "Marketplace product engineering",
      "Auth + payments integration",
      "Geospatial search",
      "Containerized deployment",
    ],
    tools: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "SQLAlchemy 2",
      "PostgreSQL + PostGIS",
      "Clerk",
      "Stripe Connect",
      "Docker Compose",
    ],
    highlights: [
      "PostGIS-backed geospatial search to surface providers by service area.",
      "Clerk-based auth with JWT verification through JWKS on the FastAPI side.",
      "Stripe Connect integration for split payouts between platform and providers.",
      "Docker Compose dev environment that mirrors production layout.",
    ],
    stats: [
      { label: "Client", value: "NOVA Birth Partners" },
      { label: "Region", value: "DC / MD / VA" },
      { label: "Repository", value: "https://github.com/MaxwellM34/Nova" },
    ],
    gallery: [
      { label: "auth.py — Clerk JWT verification", image: "/projects/nova_code.svg" },
    ],
    challenge:
      "Overnight newborn care is hard to find on short notice, and existing platforms don't surface live availability or verified credentials clearly.",
    approach:
      "Built a marketplace data model around vetted providers with verified credentials, used PostGIS so families see provider coverage by location, and wired Stripe Connect for direct booking and payout.",
    outcome:
      "A production-shaped marketplace stack with auth, geo search, and payments wired end-to-end for the DC/MD/VA region.",
    palette: ["#2037E8", "#7C9CFF", "#E0E7FF"],
  },
  {
    slug: "webposter",
    hidden: false,
    title: "Webposter",
    category: "Content Publishing API",
    year: "2025",
    summary:
      "A Python + FastAPI web app with Tortoise ORM and Postgres that publishes content, with Google OAuth login, image uploads via ImageKit, and OpenAI-assisted post tooling.",
    description:
      "Webposter is a content publishing app that pairs FastAPI with Tortoise ORM and PostgreSQL. It supports Google authentication, image uploads, OpenAI tool integration, and persistent post + user models with iterative migrations.",
    role: "Backend engineering, integration work",
    timeline: "Personal project",
    image: "/projects/webposter_code.svg",
    heroImage: "/projects/webposter_code.svg",
    services: [
      "Backend API design",
      "Auth + OAuth integration",
      "Image upload handling",
      "OpenAI tool integration",
    ],
    tools: [
      "Python",
      "FastAPI",
      "Tortoise ORM",
      "PostgreSQL",
      "Aerich",
      "Google OAuth",
      "ImageKit",
      "OpenAI",
    ],
    highlights: [
      "FastAPI + Tortoise ORM stack with iterative Aerich migrations across user and post models.",
      "Google OAuth login flow with a dedicated authentication module.",
      "Image upload pipeline integrated with ImageKit for hosted media.",
      "OpenAI tool definitions exposed for content-generation workflows.",
    ],
    stats: [
      { label: "Stack", value: "FastAPI + Tortoise + Postgres" },
      { label: "Auth", value: "Google OAuth" },
      { label: "Repository", value: "https://github.com/MaxwellM34/webposter" },
    ],
    gallery: [
      { label: "pablo.py — FastAPI + Tortoise router", image: "/projects/webposter_code.svg" },
    ],
    challenge:
      "Build a content publishing app that handles auth, image uploads, and AI-assisted tooling without stitching together unrelated services.",
    approach:
      "Used FastAPI as the single backend, Tortoise ORM with Aerich migrations for evolving user and post models, and integrated Google auth, ImageKit, and OpenAI tool definitions through dedicated modules.",
    outcome:
      "A backend that supports authenticated content publishing with image hosting and an OpenAI tool surface, ready to back a frontend or extension.",
    palette: ["#0E7490", "#22D3EE", "#CFFAFE"],
  },
  {
    slug: "gcp-virtualmin-mailserver",
    hidden: false,
    title: "GCP Virtualmin Mail Server",
    category: "Infrastructure + DevOps",
    year: "2026",
    summary:
      "A documented and scripted setup for a Virtualmin / Webmin mail server on Google Cloud (Debian 12), capturing the real fixes for hosts resolution, GCP firewall rules, ClamAV, and BIND.",
    description:
      "This repository documents and partially automates a Virtualmin / Webmin mail server build on GCP Debian 12. It covers the specific issues encountered in practice: incorrect /etc/hosts breaking Virtualmin links, firewall rules for Webmin on port 10000, ClamAV freshclam locks, BIND DNS handling, and Let's Encrypt setup.",
    role: "Infrastructure engineering, technical writing",
    timeline: "Self-hosted mail project",
    image: "/projects/smtp_code.svg",
    heroImage: "/projects/smtp_code.svg",
    services: [
      "Mail server setup",
      "GCP infrastructure",
      "Operations runbook",
      "Shell automation",
    ],
    tools: ["Virtualmin", "Webmin", "Postfix", "ClamAV", "BIND", "GCP", "Debian 12", "Bash"],
    highlights: [
      "Documents the exact /etc/hosts fix that resolves Virtualmin generating internal-IP links.",
      "Captures the GCP firewall rule needed to expose Webmin on 0.0.0.0:10000.",
      "Includes scripts for installing Virtualmin, fixing hosts, installing ClamAV, and restarting services.",
      "Explicit decision notes for BIND DNS, Let's Encrypt, and mail DNS records.",
      "Safe to share publicly: no secrets, private keys, or DKIM material committed.",
    ],
    stats: [
      { label: "Platform", value: "GCP Debian 12" },
      { label: "Stack", value: "Virtualmin + Webmin + Postfix" },
      { label: "Repository", value: "https://github.com/MaxwellM34/Create_my_own_SMTP_server" },
    ],
    gallery: [
      { label: "install_virtualmin.sh — GCP installer", image: "/projects/smtp_code.svg" },
    ],
    challenge:
      "Standing up a self-hosted mail server on GCP runs into hostname resolution, firewall, and antivirus issues that are not well documented in a single place.",
    approach:
      "Captured the working steps as a layered docs + scripts repo so the build is reproducible, and isolated each fix (hosts, firewall, ClamAV, BIND) in its own document and shell script.",
    outcome:
      "A reusable runbook plus automation for spinning up a Virtualmin / Webmin mail server on GCP without rediscovering the same gotchas.",
    palette: ["#1E293B", "#64748B", "#CBD5E1"],
  },
  {
    slug: "better-bmr-calculator",
    hidden: false,
    title: "BetterBMRCalculator",
    category: "Health + Nutrition Software",
    year: "2026",
    summary:
      "A live BMR and TDEE app that is publicly available for free, successfully crowdfunded, and actively used while a paid version is in development.",
    description:
      "BetterBMRCalculator is a live web app for estimating daily energy needs. It goes beyond a single activity multiplier by collecting workout and daily movement context, provides an accuracy estimate alongside results, and is currently available to all users for free.",
    role: "Product design, front-end engineering, full-stack integration",
    timeline: "Ongoing",
    image: "/projects/betterbmrcalculator.png",
    heroImage: "/projects/betterbmrcalculator.png",
    services: [
      "Calculation UX",
      "Feature design",
      "Front-end development",
      "API integration",
    ],
    tools: ["React", "Tailwind CSS", "FastAPI", "Python"],
    highlights: [
      "Live and publicly accessible application with active real-world use.",
      "Successfully crowdfunded and available to all users for free.",
      "Paid version in progress with expanded feature roadmap.",
    ],
    stats: [
      { label: "Status", value: "Live + publicly usable" },
      { label: "Access", value: "Free for all users" },
      { label: "Website", value: "https://betterbmrcalculator.net" },
    ],
    gallery: [
      { label: "Live calculator with accuracy panel", image: "/projects/bbmr-app.png" },
      { label: "Basics input section", image: "/projects/bbmr-basics.png" },
      { label: "Brand mark", image: "/projects/betterbmrcalculator.png" },
    ],
    challenge:
      "Most calorie calculators rely on a generic activity multiplier and do not communicate confidence clearly.",
    approach:
      "Built an input and calculation flow that captures more relevant context and surfaces a confidence-oriented accuracy estimate.",
    outcome:
      "The app is live, openly accessible, and supports users today, with a paid version currently in progress.",
    palette: ["#2F6B5F", "#F2C078", "#E07A5F"],
  },
  {
    slug: "alan-fraud-detection",
    hidden: false,
    title: "Alan Fraud Detection Dashboard",
    category: "FinTech + Healthcare Analytics",
    year: "2026",
    summary:
      "A full-stack fraud detection system for an insurance provider that scores optical care providers 0–100 using four independent detection rules and automatically routes claims to approval, manual review, or hold.",
    description:
      "Built for Alan, a French health insurer, this dashboard analyzes optical care claims (eyeglasses and contact lenses) to identify suspicious billing patterns. Four detection engines score each provider, and scores drive automated routing: auto-approve, manual review queue, or payment hold pending audit.",
    role: "Full-stack engineering, fraud detection algorithm design, data modeling",
    timeline: "Interview project",
    image: "/projects/alan1.png",
    heroImage: "/projects/alan1.png",
    services: [
      "Fraud detection algorithms",
      "Full-stack development",
      "Data visualization",
    ],
    tools: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Recharts", "Tailwind CSS", "Docker"],
    highlights: [
      "Four independent fraud detection engines: monthly billing spikes, dual-product co-billing, repeated exact amounts, and round-number bias.",
      "Risk scores 0–100 drive automated claim routing: auto-approve (<30), manual review (30–70), or payment hold (>70).",
      "8 of 12 providers flagged across a dataset of 221 claims; 5 automatically held pending audit.",
      "Live demo deployed on Railway with CSV import and full review workflow.",
    ],
    stats: [
      { label: "Status", value: "Live demo" },
      { label: "Dataset", value: "12 providers · 221 claims" },
      { label: "Demo", value: "https://alan-production-0d14.up.railway.app" },
    ],
    gallery: [
      { label: "Dashboard overview", image: "/projects/alan1.png" },
      { label: "Provider list + risk scores", image: "/projects/alan2.png" },
      { label: "Claims detail + fraud flags", image: "/projects/alan3.png" },
      { label: "Review workflow", image: "/projects/alan4.png" },
    ],
    challenge:
      "Identify fraudulent optical care providers from billing data alone, without access to patient records or ground-truth labels, using only statistical patterns in the claims history.",
    approach:
      "Designed four rule-based detection engines targeting distinct fraud signals: billing spikes versus a provider's own rolling median, simultaneous glasses and contact lens billing, repeated identical euro amounts, and an abnormally high rate of round-number invoices. Scores are additive and provider-level, enabling transparent explanations for every flag.",
    outcome:
      "8 of 12 providers were flagged with evidence-backed risk scores. 5 were automatically held. The system surfaces the exact rules triggered per provider, making audit decisions explainable and defensible.",
    palette: ["#1A3A5C", "#E63946", "#F4A261"],
  },
  {
    slug: "asteroids-pygame",
    hidden: false,
    title: "Asteroids",
    category: "Game Development",
    year: "2025",
    summary:
      "A Python + Pygame recreation of the classic 1979 arcade game, built as part of the Boot.dev curriculum with full collision detection, asteroid splitting, and 60 FPS gameplay.",
    description:
      "A faithful recreation of the classic Asteroids arcade game built with Python and Pygame. The player pilots a spaceship through an asteroid field, rotating and thrusting to maneuver while firing projectiles to split and destroy asteroids. Built as part of the Boot.dev \"Build Asteroids\" course.",
    role: "Game development",
    timeline: "Boot.dev course project",
    image: "/projects/asteroids1.png",
    heroImage: "/projects/asteroids1.png",
    services: [
      "Game mechanics",
      "Object-oriented design",
      "Collision detection",
    ],
    tools: ["Python", "Pygame", "UV"],
    highlights: [
      "Classic arcade gameplay loop at 60 FPS with rotation, thrust, and shooting.",
      "Asteroids split into smaller pieces on hit, matching the original arcade behavior.",
      "Object-oriented architecture with separate classes for ship, asteroids, and shots.",
      "Built end-to-end through Boot.dev's guided project curriculum.",
    ],
    stats: [
      { label: "Course", value: "Boot.dev — Build Asteroids" },
      { label: "Language", value: "Python + Pygame" },
      { label: "Source", value: "https://github.com/MaxwellM34/asteroids" },
    ],
    gallery: [
      { label: "Spaceship and asteroid", image: "/projects/asteroids1.png" },
      { label: "Multiple asteroid sizes", image: "/projects/asteroids2.png" },
      { label: "Victory screen", image: "/projects/asteroids3.png" },
      { label: "Game over screen", image: "/projects/asteroids4.png" },
    ],
    challenge:
      "Implement the full arcade Asteroids experience from scratch — including physics-based movement, asteroid splitting logic, and collision detection — using only Python and Pygame.",
    approach:
      "Used an object-oriented architecture with base classes for all game objects. Asteroid splitting is handled recursively by spawning two smaller asteroids on collision. Movement uses vector math for realistic thrust and drift.",
    outcome:
      "A fully playable Asteroids clone with authentic arcade feel, completed as a guided project through Boot.dev's Python game development curriculum.",
    palette: ["#0D0D0D", "#A3E635", "#FACC15"],
  },
  {
    slug: "ltrv-django",
    hidden: false,
    title: "Lucky Twyn Rivers Variety",
    category: "Web Development",
    year: "2024",
    summary:
      "A production Django website built for a local Pickering convenience store, containerized with Docker and served through an Nginx reverse proxy.",
    description:
      "A production website built for Lucky Twyn Rivers Variety, a convenience store in Pickering, ON. The site was built with Django, containerized via Docker, and deployed behind an Nginx reverse proxy. Designed to give a local small business a professional web presence.",
    role: "Full-stack development, deployment, infrastructure",
    timeline: "Completed",
    image: "/projects/ltrv2.jpg",
    heroImage: "/projects/ltrv2.jpg",
    services: [
      "Web development",
      "Containerized deployment",
      "Small business site",
    ],
    tools: ["Django", "Python", "Docker", "Nginx", "HTML", "CSS"],
    highlights: [
      "Built and deployed a production website for a local Pickering convenience store.",
      "Containerized with Docker and served behind an Nginx reverse proxy.",
      "Django backend with static asset management and a clean frontend.",
    ],
    stats: [
      { label: "Client", value: "Lucky Twyn Rivers Variety, Pickering ON" },
      { label: "Stack", value: "Django + Docker + Nginx" },
      { label: "Source", value: "https://github.com/MaxwellM34/ltrvDjango" },
    ],
    gallery: [
      { label: "Store exterior", image: "/projects/ltrv2.jpg" },
      { label: "Store front", image: "/projects/ltrv1.jpg" },
      { label: "Location — 159 Twyn Rivers Dr, Pickering", image: "/projects/ltrv3.jpg" },
      { label: "Lucky Twyn Rivers Variety", image: "/projects/ltrv4.jpg" },
    ],
    challenge:
      "Give a local convenience store a professional web presence with a maintainable, containerized stack that's easy to update and deploy.",
    approach:
      "Built a Django site with a clean HTML/CSS frontend, packaged the entire application in Docker for reproducible deploys, and configured Nginx as a reverse proxy to handle production traffic.",
    outcome:
      "A live, containerized production site delivered for a local Pickering business.",
    palette: ["#B45309", "#FCD34D", "#78350F"],
  },
  {
    slug: "image-quality-mtf",
    hidden: false,
    title: "Image Quality & MTF Analysis",
    category: "Medical Imaging + Signal Processing",
    year: "2024",
    summary:
      "A Python analysis of spatial resolution and Modulation Transfer Function (MTF) in medical imaging systems, evaluating how voxel size, filtering, and projection count affect image quality.",
    description:
      "A computational analysis of image quality in medical imaging systems using Modulation Transfer Function (MTF) methodology. The project evaluates how key acquisition parameters — voxel size, filter type, and projection count — affect spatial resolution and contrast preservation in reconstructed images, using both line pair and edge response phantoms.",
    role: "Signal processing, data analysis, scientific computing",
    timeline: "University project — ENGG4040",
    image: "/projects/mtf1.jpg",
    heroImage: "/projects/mtf1.jpg",
    services: [
      "MTF analysis",
      "Spatial resolution assessment",
      "Medical imaging evaluation",
    ],
    tools: ["Python", "CSV", "Excel", "NumPy", "Matplotlib"],
    highlights: [
      "Computed MTF curves from slanted-edge and line pair phantoms to quantify spatial resolution.",
      "Evaluated the effect of voxel size, filtering parameters, and projection count on image quality.",
      "Applied both 2D and CT imaging analysis frameworks.",
    ],
    stats: [
      { label: "Domain", value: "Medical imaging / signal processing" },
      { label: "Methods", value: "MTF · edge response · line pair phantoms" },
      { label: "Source", value: "https://github.com/MaxwellM34/ENGG4040_Lab1_Image_Quality_MTF" },
    ],
    gallery: [
      { label: "MTF curves vs spatial frequency", image: "/projects/mtf1.jpg" },
      { label: "LSF and SFR intermediate analysis", image: "/projects/mtf2.jpg" },
      { label: "Edge angle effects on MTF accuracy", image: "/projects/mtf3.jpg" },
      { label: "Siemens star resolution test chart", image: "/projects/mtf4.png" },
    ],
    challenge:
      "Quantify spatial resolution in medical imaging systems using only raw measurement data, without direct access to the imaging hardware.",
    approach:
      "Applied Modulation Transfer Function methodology with slanted-edge and line pair phantoms, computing MTF curves from CSV measurement profiles and systematically varying acquisition parameters to isolate each variable's effect.",
    outcome:
      "Produced MTF curves and resolution metrics demonstrating measurable trade-offs between voxel size, filtering, and projection count in reconstructed medical images.",
    palette: ["#1E3A5F", "#38BDF8", "#E0F2FE"],
  },
  {
    slug: "spect-reconstruction",
    hidden: false,
    title: "SPECT Image Reconstruction",
    category: "Medical Imaging + Scientific Computing",
    year: "2024",
    summary:
      "A Python implementation of SPECT (Single Photon Emission CT) image reconstruction, applying attenuation correction and filtered back projection to reconstruct emission slices from raw projection profiles.",
    description:
      "A Python-based implementation of SPECT image reconstruction for nuclear medicine imaging. The project loads emission and attenuation CSV profiles, computes attenuation correction factors, reconstructs cross-sectional slices using filtered back projection, and performs statistical validation of the output — mirroring the computational pipeline used in clinical SPECT/CT systems.",
    role: "Medical image reconstruction, scientific computing, data analysis",
    timeline: "University project — ENGG4040",
    image: "/projects/spect1.png",
    heroImage: "/projects/spect1.png",
    services: [
      "Image reconstruction",
      "Attenuation correction",
      "Nuclear medicine imaging",
    ],
    tools: ["Python", "NumPy", "Matplotlib", "CSV"],
    highlights: [
      "Implemented attenuation correction factor (ACF) computation from raw emission and attenuation profiles.",
      "Reconstructed SPECT cross-sectional slices using filtered back projection methodology.",
      "Validated outputs with statistical analysis (mean and standard deviation) against known phantom geometry.",
    ],
    stats: [
      { label: "Domain", value: "Nuclear medicine / SPECT/CT" },
      { label: "Methods", value: "FBP · attenuation correction · sinogram" },
      { label: "Source", value: "https://github.com/MaxwellM34/ENGG4040_Lab4_SPECT_RECONSTRUCTION" },
    ],
    gallery: [
      { label: "Phantom and sinogram projection data", image: "/projects/spect1.png" },
      { label: "Reconstruction filter frequency responses", image: "/projects/spect2.png" },
      { label: "Filtered back projection reconstruction", image: "/projects/spect3.png" },
      { label: "SART iterative reconstruction comparison", image: "/projects/spect4.png" },
    ],
    challenge:
      "Reconstruct a meaningful cross-sectional image from raw 1D emission projection profiles, accounting for photon attenuation through tissue.",
    approach:
      "Loaded emission and attenuation CSV profiles, computed per-ray attenuation correction factors, then applied filtered back projection to synthesize reconstructed slices. Output was validated statistically against known phantom values.",
    outcome:
      "Successfully reconstructed SPECT slices with attenuation correction, producing results consistent with expected phantom geometry and demonstrating the core computational pipeline of clinical nuclear medicine systems.",
    palette: ["#1C1917", "#7C3AED", "#C4B5FD"],
  },
  {
    slug: "autonomous-vehicle",
    hidden: false,
    title: "Autonomous Maze Vehicle",
    category: "Embedded Systems + Robotics",
    year: "2022",
    summary:
      "An Arduino-powered autonomous vehicle that navigates mazes using three ultrasonic sensors, proportional wall-following control, and real-time obstacle avoidance — all on a resource-constrained microcontroller.",
    description:
      "A compact autonomous vehicle built on an Arduino platform that navigates mazes independently. Using three ultrasonic distance sensors, the vehicle executes a left-wall-following strategy with proportional steering control, detects and avoids obstacles in real time, and maintains a consistent wall offset — all within the tight processing constraints of an Arduino.",
    role: "Embedded systems programming, sensor integration, control logic",
    timeline: "First year engineering project",
    image: "/projects/car1.jpeg",
    heroImage: "/projects/car1.jpeg",
    services: [
      "Embedded programming",
      "Sensor fusion",
      "Autonomous navigation",
    ],
    tools: ["Arduino", "C++", "Ultrasonic sensors", "PWM motor control", "Servo steering"],
    highlights: [
      "Left-wall-following algorithm with proportional control maintains 14 cm wall offset.",
      "Three ultrasonic sensors provide front, left, and right distance readings with median filtering for noise reduction.",
      "Obstacle avoidance logic detects objects within 25 cm, reverses, and steers toward the wider opening.",
      "80 ms control loop with 25 ms sensor timeout — tuned for real-time responsiveness on Arduino hardware.",
    ],
    stats: [
      { label: "Platform", value: "Arduino (C++)" },
      { label: "Sensors", value: "3× ultrasonic distance sensors" },
      { label: "Source", value: "https://github.com/MaxwellM34/First_Year_Autonomous_Vehicle" },
    ],
    gallery: [
      { label: "Vehicle build", image: "/projects/car1.jpeg" },
      { label: "Sensor layout", image: "/projects/car2.jpeg" },
      { label: "Maze navigation", image: "/projects/car3.jpeg" },
      { label: "Vehicle detail", image: "/projects/car4.jpeg" },
    ],
    challenge:
      "Navigate an unknown maze autonomously using only local sensor readings, with no external positioning or mapping — on an Arduino with limited processing power.",
    approach:
      "Implemented a left-wall-following strategy using proportional control to maintain a target wall distance. Median filtering across three consecutive ultrasonic reads reduces noise, and a backup-and-turn maneuver handles dead ends and head-on obstacles.",
    outcome:
      "A fully functional autonomous vehicle capable of navigating maze environments in real time, demonstrating sensor integration, embedded control logic, and practical robotics on constrained hardware.",
    palette: ["#1C2B1A", "#4ADE80", "#BBF7D0"],
  },
  {
    slug: "connect-four",
    hidden: false,
    title: "Connect Four",
    category: "Web Game",
    year: "2024",
    summary:
      "A browser-based Connect Four game built with vanilla HTML, CSS, and JavaScript — two-player local multiplayer with win detection, draw detection, and full keyboard support.",
    description:
      "A clean implementation of the classic Connect Four board game built entirely with vanilla HTML, CSS, and JavaScript — no frameworks or dependencies. Players take turns dropping coloured discs into a 6×7 grid, with automatic win detection across all four directions (horizontal, vertical, and both diagonals). Winning discs are highlighted on victory, a draw is detected when the board fills, and a reset button restarts the game. Fully keyboard accessible with ARIA labels throughout.",
    role: "Sole developer",
    timeline: "Personal project",
    services: ["Game logic", "DOM manipulation", "Accessibility"],
    tools: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/connect41.png",
    heroImage: "/projects/connect41.png",
    highlights: [
      "Two-player local multiplayer with turn indicator.",
      "Win detection across all four directions with disc highlighting.",
      "Draw detection when the board is full.",
      "Full keyboard support and ARIA labels for accessibility.",
      "Bump animation feedback on full-column drops.",
    ],
    stats: [
      { label: "Stack", value: "Vanilla JS / HTML / CSS" },
      { label: "Grid", value: "6 × 7" },
      { label: "Source", value: "https://github.com/MaxwellM34/connect_4" },
    ],
    gallery: [
      { label: "Game board", image: "/projects/connect41.png" },
      { label: "Connect Four grid", image: "/projects/connect42.png" },
      { label: "Board layout", image: "/projects/connect43.png" },
      { label: "Classic Connect Four", image: "/projects/connect44.png" },
    ],
    challenge:
      "Build a fully functional Connect Four game with no libraries — clean game-state management, multi-directional win detection, and accessible controls in plain JavaScript.",
    approach:
      "Represented the board as a 2D array with values 0 (empty), 1, and 2 for each player. After every move, a single check function scans all four directions from the last-placed disc. Keyboard events map to column drops, and ARIA live regions announce the active player.",
    outcome:
      "A lightweight, dependency-free Connect Four game playable in any browser, with solid game logic and accessible controls.",
    palette: ["#EF4444", "#EAB308", "#1E3A5F"],
  },
  {
    slug: "portfolio-site",
    hidden: false,
    title: "Portfolio Website",
    category: "Personal Engineering Portfolio",
    year: "2026",
    summary:
      "A Next.js + React + Tailwind portfolio with static project pages and structured content controls.",
    description:
      "A production-ready portfolio frontend that uses Next.js App Router, static generation for project pages, and a single source of truth in a data file for content management.",
    role: "Architecture, front-end implementation, content systems",
    timeline: "Current",
    image: "/projects/portfolio.png",
    heroImage: "/projects/portfolio.png",
    services: [
      "Frontend architecture",
      "UI engineering",
      "SEO routing",
      "Content modeling",
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "pnpm"],
    highlights: [
      "Implemented a clean App Router structure.",
      "Added static `robots.txt` and sitemap generation.",
      "Project visibility control with a per-project `hidden` flag.",
    ],
    stats: [
      { label: "Stack", value: "Next.js 15" },
      { label: "Rendering", value: "Static generation" },
      { label: "Data source", value: "src/data/portfolio.js" },
    ],
    gallery: [
      { label: "Live home page", image: "/projects/portfolio-live.png" },
      { label: "Home and project listing", image: "/projects/portfolio.png" },
      { label: "Dynamic project route", image: "/projects/portfolio.png" },
    ],
    challenge:
      "Needed a maintainable structure for publishing only verified projects while keeping drafts private.",
    approach:
      "Used a single structured data source and explicit publication flags to control what appears on the site.",
    outcome:
      "A simpler, maintainable portfolio codebase where projects can be prepared privately and published intentionally.",
    palette: ["#1E3A8A", "#38BDF8", "#E2E8F0"],
  },
  {
    slug: "qpcr-lab-automation",
    hidden: false,
    title: "qPCRLabAutomation",
    category: "qPCR Workflow Automation",
    year: "2026",
    summary:
      "A Python-based qPCR automation platform aimed at covering workflow steps and reducing operational overhead in small labs.",
    description:
      "qPCRLabAutomation is a repository focused on end-to-end qPCR workflow automation. It integrates specialized modules for primer design and sequence analysis to support practical workflow operations.",
    role: "Project creator and software developer",
    timeline: "Ongoing",
    image: "/projects/qPCRLabAutomation.jpg",
    heroImage: "/projects/qPCRLabAutomation.jpg",
    services: [
      "Workflow automation",
      "Primer design pipeline integration",
      "Sequence analysis integration",
      "Tooling architecture",
    ],
    tools: ["Python", "primer3", "NUPACK (planned)", "Entrez", "Git submodules"],
    highlights: [
      "Structured as a full qPCR workflow automation project.",
      "Includes `primerPlus` submodule for constrained primer design and scoring.",
      "Includes `PrimeSpecPCR` submodule for consensus/alignment via Entrez.",
    ],
    stats: [
      { label: "Primary language", value: "Python" },
      { label: "Submodules", value: "2" },
      { label: "Repository", value: "github.com/MaxwellM34/qPCRLabAutomation" },
    ],
    gallery: [
      { label: "Workflow architecture", image: "/projects/qPCRLabAutomation.jpg" },
      { label: "Primer design pipeline", image: "/projects/qPCRLabAutomation.jpg" },
      { label: "Consensus/alignment automation", image: "/projects/qPCRLabAutomation.jpg" },
    ],
    challenge:
      "Small labs often need to stitch together multiple manual steps for qPCR design and analysis.",
    approach:
      "Built a unified automation repo and linked focused tooling repos through submodules for primer design and sequence processing.",
    outcome:
      "A central foundation for scaling qPCR software workflows with less manual handoff across tools.",
    palette: ["#14532D", "#22C55E", "#A7F3D0"],
  },
  {
    slug: "foot-allign-capstone",
    hidden: false,
    title: "Foot Allign Capstone",
    category: "Wearable Biomechanics",
    year: "2025",
    summary:
      "Capstone project focused on out-toeing correction using a wearable feedback device, combining hardware, signal processing, and real-time gait feedback.",
    description:
      "Foot Allign is a biomechanics capstone project that detects excessive out-toeing during walking and provides corrective haptic feedback. The build combined embedded sensing, IMU calibration, and validation against reference motion data.",
    role: "Capstone co-developer (biomedical engineering)",
    timeline: "Capstone term",
    image: "/projects/footallign-combined.jpg",
    heroImage: "/projects/footallign-combined.jpg",
    heroImagePosition: "62% center",
    services: [
      "Wearable device prototyping",
      "Biomechanics validation",
      "Embedded sensing",
      "Signal analysis",
    ],
    tools: ["IMU", "ESP32", "Arduino", "Data analysis", "Prototype fabrication"],
    highlights: [
      "Designed a wearable approach for detecting out-toeing gait behavior and prompting corrective action.",
      "Built and validated prototype outputs against reference motion capture data.",
      "Presented full capstone poster with system architecture, device logic, and test outcomes.",
    ],
    stats: [
      { label: "Domain", value: "Gait biomechanics" },
      { label: "Format", value: "Engineering capstone" },
      { label: "Output", value: "Wearable prototype + poster" },
    ],
    gallery: [
      { label: "Capstone poster", image: "/projects/footallignbanner.jpg" },
      { label: "Project presentation", image: "/projects/footallignselfie.jpg" },
      { label: "Team presentation", image: "/projects/mikoselfie.jpg" },
    ],
    challenge:
      "Excessive out-toeing can increase joint stress and injury risk, but practical real-time corrective tools are limited.",
    approach:
      "Developed a compact wearable concept that tracks gait angle and triggers haptic feedback when out-toeing exceeds a calibrated threshold.",
    outcome:
      "Delivered a validated capstone prototype and full technical presentation demonstrating feasibility for real-time gait behavior feedback.",
    palette: ["#1A4D8F", "#4DA3FF", "#D6E8FF"],
  },
  {
    slug: "reverse-engineering-sewing-machine",
    hidden: false,
    title: "Reverse Engineering Sewing Machine",
    category: "Mechanical CAD + Reverse Engineering",
    year: "2025",
    summary:
      "Reverse engineering project where a broken sewing machine was disassembled, missing components were modeled, and a complete SolidWorks assembly was rebuilt to mechanically function.",
    description:
      "This project started with a damaged sewing machine and required reconstructing the system geometry, identifying missing parts, and producing a complete CAD-based mechanical assembly. The final SolidWorks model integrated recreated components and restored kinematic compatibility across the mechanism.",
    role: "Mechanical reverse engineering and CAD reconstruction",
    timeline: "Course project",
    image: "/projects/reverse_engg2.png",
    heroImage: "/projects/reverse_engg2.png",
    mediaVideo: "/projects/reverse_engineering.mp4",
    heroVideoFit: "contain",
    services: [
      "Mechanical teardown",
      "Missing part reconstruction",
      "SolidWorks assembly",
      "Motion-fit validation",
    ],
    tools: ["SolidWorks", "Mechanical design", "Assembly constraints", "Reverse engineering"],
    highlights: [
      "Reverse engineered the machine from physical hardware condition and known component interfaces.",
      "Modeled missing components and integrated them into a full assembly tree.",
      "Validated the final CAD assembly for mechanical fit and working motion relationships.",
    ],
    stats: [
      { label: "Platform", value: "SolidWorks" },
      { label: "Project type", value: "Reverse engineering" },
      { label: "Outcome", value: "Working assembly model" },
    ],
    gallery: [
      { label: "Assembly reference view", image: "/projects/reverse_engg2.png" },
      { label: "Detailed CAD output", image: "/projects/reverse_engg3.png" },
      { label: "Final mechanism perspective", image: "/projects/reverse_engg2.png" },
    ],
    challenge:
      "The source hardware was incomplete and damaged, so geometry and interfaces had to be inferred while preserving realistic mechanical behavior.",
    approach:
      "I documented the physical system, recreated missing components in CAD, and constrained the full assembly iteratively until movement and part relationships were consistent.",
    outcome:
      "Produced a complete SolidWorks assembly that represented a mechanically functional version of the original machine, including reconstructed missing parts.",
    palette: ["#2E3E56", "#6F8AA9", "#D9E4F0"],
  },
  {
    slug: "food-storage-device",
    hidden: false,
    title: "Food Storage Device",
    category: "Embedded Systems + Arduino",
    year: "2026",
    summary:
      "Arduino joystick-driven LCD menu system for browsing food storage categories with filtered analog input and reliable menu controls.",
    description:
      "Food Storage Device is an Arduino project using a 16x2 I2C LCD and joystick input to navigate storage categories. It samples analog joystick data, averages readings to reduce noise, and maps directional actions to menu navigation and capitalization toggling.",
    role: "Embedded software + hardware integration",
    timeline: "Prototype",
    image: "/projects/fooddevicemain.jpg",
    heroImage: "/projects/fooddevicemain.jpg",
    services: [
      "Embedded UI design",
      "Joystick input handling",
      "Signal smoothing",
      "Arduino prototyping",
    ],
    tools: ["Arduino", "C++", "I2C LCD", "hd44780 library", "Analog sensing"],
    highlights: [
      "Implemented 100 ms sampling with 1-second averaging for stable joystick behavior.",
      "Built menu navigation with wraparound across Leftovers, Meal Prep, Frozen Food, and Dry Goods.",
      "Added right-axis behavior to toggle selected label case and serial output for calibration/debugging.",
    ],
    stats: [
      { label: "Platform", value: "Arduino" },
      { label: "Language", value: "C++" },
      { label: "Repository", value: "github.com/MaxwellM34/food_storage_device" },
    ],
    gallery: [
      { label: "Main device", image: "/projects/fooddevicemain.jpg" },
      { label: "Device angle", image: "/projects/fooddevice2.jpg" },
      { label: "Device detail", image: "/projects/fooddevice3.jpg" },
    ],
    challenge:
      "Raw joystick inputs can be noisy and cause unstable menu behavior in small embedded interfaces.",
    approach:
      "Used timed sampling + averaging, threshold-based directional actions, and structured menu logic for predictable navigation on limited hardware.",
    outcome:
      "Delivered a working embedded food menu prototype with clear user interaction, lower input jitter, and configurable thresholds for different joystick ranges.",
    palette: ["#1E4D3E", "#5FA07A", "#D5E8DD"],
  },
  {
    slug: "fea-barbell-bench-capstone",
    hidden: false,
    title: "FEA Barbell Bench Analysis",
    category: "Finite Element Analysis",
    year: "2025",
    summary:
      "Finite element analysis project evaluating barbell loading on a bench rack, with boundary-condition-focused modeling and load-to-damage threshold prediction.",
    description:
      "For a finite element analysis course project, I modeled a bench-rack loading scenario inspired by real gym setup constraints. The analysis focused on accurate boundary conditions and load distribution to estimate when structural damage would occur while the bar rests on the rack.",
    role: "Biomechanics and FEA modeling",
    timeline: "Final course project",
    image: "/projects/fea-combined.jpg",
    heroImage: "/projects/fea-combined.jpg",
    services: [
      "Boundary condition modeling",
      "Structural load analysis",
      "FEA interpretation",
      "Engineering reporting",
    ],
    tools: ["Finite Element Analysis", "Solid mechanics", "Engineering simulation"],
    highlights: [
      "Defined and iterated boundary conditions to match realistic bench rack contact behavior.",
      "Estimated the load threshold at which rack-bar interaction would cause damage.",
      "Documented a complete analysis workflow with extensive figure-based reporting.",
    ],
    stats: [
      { label: "Core skill", value: "Boundary condition modeling" },
      { label: "Analysis focus", value: "Load path + stress interpretation" },
      { label: "Project type", value: "Finite element analysis capstone" },
    ],
    gallery: [
      { label: "FEA setup and baseline view", image: "/projects/feamain.jpg" },
      { label: "Bench rack scenario context", image: "/projects/fea2.jpg" },
      { label: "Detailed result snapshot", image: "/projects/fea3.jpg" },
    ],
    challenge:
      "Simple-looking geometries can still produce misleading outputs unless supports and contact constraints are modeled correctly.",
    approach:
      "I treated boundary conditions as the core problem, validated assumptions against the physical setup, and iterated the model until response behavior was consistent.",
    outcome:
      "The final model estimated a 267.67 kg damage threshold for the bench-rack loading condition and provided a practical interpretation of safe loading context.",
    palette: ["#2F3D4A", "#5A6E7F", "#D8DEE5"],
  },
  {
    slug: "research-conference-presentation",
    hidden: false,
    title: "Research Conference Presentation",
    category: "Biomedical Research + Conference",
    year: "2025",
    summary:
      "Prepared and presented a biomedical engineering research project at a University of Guelph conference, covering methodology, results, and practical implications.",
    description:
      "This project focused on preparing a complete research presentation for conference delivery at the University of Guelph. The work included consolidating experimental context, structuring the narrative for technical audiences, and presenting outcomes tied to published research.",
    role: "Research presentation author and presenter",
    timeline: "Conference presentation",
    image: "/projects/research_conference_main.jpg",
    heroImage: "/projects/research_conference_main.jpg",
    services: [
      "Research communication",
      "Technical presentation design",
      "Data interpretation",
      "Conference delivery",
    ],
    tools: ["Scientific writing", "Data visualization", "Slide design", "Biomedical analysis"],
    highlights: [
      "Prepared an end-to-end conference presentation from research material and analysis outputs.",
      "Presented the work at a University of Guelph research conference setting.",
      "Connected conference communication to the related published article.",
    ],
    stats: [
      { label: "Venue", value: "University of Guelph" },
      { label: "Project type", value: "Research conference presentation" },
      { label: "Publication", value: "https://pubmed.ncbi.nlm.nih.gov/40347002/" },
    ],
    gallery: [
      { label: "Conference presentation main", image: "/projects/research_conference_main.jpg" },
      { label: "Presentation angle", image: "/projects/research_conference_2.jpg" },
      { label: "Conference detail view", image: "/projects/research_conference3.jpg" },
    ],
    challenge:
      "Translating technical biomedical research into a concise, understandable conference format while preserving scientific integrity.",
    approach:
      "Built a clear story arc from problem to method to results, focused on evidence-backed interpretation, and tailored communication for a mixed technical audience.",
    outcome:
      "Delivered a structured conference presentation at the University of Guelph and aligned it with the linked publication record.",
    palette: ["#1E4D70", "#4E86AF", "#D5E7F5"],
  },
  {
    slug: "kinderegg-toy-launcher",
    hidden: false,
    title: "Kinder Egg Toy Launcher",
    category: "Mechanical Design + Product Prototyping",
    year: "2025",
    summary:
      "Designed a Kinder Egg toy concept that launches a toy soldier with parachute up to a 3-meter target while packing all parts inside the egg.",
    description:
      "This project focused on designing a compact toy mechanism that fits inside a Kinder Egg and launches a toy/object to approximately 3 meters. Our concept used a toy soldier launcher with a parachute payload, balancing packaging constraints, launch mechanics, and repeatable user interaction.",
    role: "Mechanical concept design and prototyping",
    timeline: "Course project",
    image: "/projects/kinderegg_3.png",
    heroImage: "/projects/kinderegg_3.png",
    mediaVideo: "/projects/kinderegg_1.mp4",
    mediaVideos: ["/projects/kinderegg_1.mp4", "/projects/Kinderegg_2.mp4"],
    services: [
      "Toy mechanism concepting",
      "Compact packaging design",
      "Prototype testing",
      "Design iteration",
    ],
    tools: [
      "Mechanical prototyping",
      "Rapid iteration",
      "Physical testing",
      "Product design",
    ],
    highlights: [
      "Designed a launch mechanism to reach a 3-meter target range.",
      "Packaged launcher + toy soldier + parachute within Kinder Egg constraints.",
      "Validated launch behavior across iterative physical tests.",
    ],
    stats: [
      { label: "Target launch height", value: "3 m" },
      { label: "Form factor", value: "Kinder Egg" },
      { label: "Payload", value: "Toy soldier + parachute" },
    ],
    gallery: [
      {
        label: "Launcher demo reel",
        image: "/projects/kinderegg_3.png",
        mediaType: "video",
        mediaVideos: ["/projects/kinderegg_1.mp4", "/projects/Kinderegg_2.mp4"],
      },
      { label: "Kinder Egg prototype", image: "/projects/kinderegg_3.png" },
      {
        label: "Test snapshot",
        image: "/projects/Screenshot 2026-02-14 165449.png",
      },
    ],
    challenge:
      "Create a toy that could reliably propel an object to around 3 meters while fitting the complete experience inside a Kinder Egg shell.",
    approach:
      "We designed and tested a toy soldier launcher concept with a parachute payload, iterating geometry and mechanism behavior to balance launch force, packaging, and usability.",
    outcome:
      "Delivered a functioning Kinder Egg toy concept with full component packaging and repeatable launch demonstrations captured on video.",
    palette: ["#245C86", "#4E90B8", "#DDECF7"],
  },
  {
    slug: "engg3150-force-plate-fft-lab",
    hidden: false,
    title: "Force Plate FFT Analysis",
    category: "Biomechanics Signal Analysis",
    year: "2024",
    summary:
      "MATLAB analysis of force-plate data comparing shod and barefoot trials using GRF, center-of-pressure trends, loading rate estimation, and FFT frequency analysis.",
    description:
      "This project analyzes force-plate CSV trial data from shod and barefoot conditions at high and low sampling rates. The workflow extracts vertical ground reaction force (GRF), estimates loading rate, evaluates center-of-pressure behavior, and uses FFT/PSD to compare frequency content across conditions.",
    role: "Biomechanics data analysis and MATLAB implementation",
    timeline: "ENGG3150 Module 1",
    image: "/projects/3150l1-1.png",
    heroImage: "/projects/3150l1-1.png",
    services: [
      "Force-plate data processing",
      "MATLAB signal analysis",
      "FFT + PSD interpretation",
      "Biomechanics comparison",
    ],
    tools: ["MATLAB", "FFT", "CSV processing", "Force-plate analysis"],
    highlights: [
      "Built a complete MATLAB workflow for trial loading, GRF extraction, and derived metrics.",
      "Compared shod vs barefoot behavior across high and low sampling frequencies.",
      "Produced report visuals for COP trends, spectra, and loading-rate discussion.",
    ],
    stats: [
      { label: "Platform", value: "MATLAB" },
      { label: "Data type", value: "Force-plate CSV trials" },
      { label: "Repository", value: "https://github.com/MaxwellM34/ENGG3150-Force-Plate-FFT-Lab" },
    ],
    gallery: [
      { label: "Report overview", image: "/projects/3150l1-1.png" },
      { label: "COP comparison chart", image: "/projects/3150l1-2.png" },
      { label: "Frequency spectrum comparison", image: "/projects/3150l1-3.png" },
    ],
    challenge:
      "Determine how footwear condition and sampling rate affect measured impact characteristics while preserving signal quality and interpretability.",
    approach:
      "I implemented a MATLAB pipeline that ingests selected trials, computes GRF and loading-rate features, maps center-of-pressure behavior, and applies single-sided FFT/PSD analysis for condition-level comparison.",
    outcome:
      "Delivered a full analysis with reproducible scripts, comparative visualizations, and conclusions on impact peaks, loading behavior, and sampling-rate implications for accuracy.",
    palette: ["#1E3A8A", "#3B82F6", "#DBEAFE"],
  },

  {
    slug: "engg3150-vicon-jump-kinematics-lab",
    hidden: false,
    title: "VICON Jump Kinematics Analysis",
    category: "Biomechanics Motion Analysis",
    year: "2024",
    summary:
      "VICON-based motion analysis of submaximal and maximal broad-jump trials, quantifying joint ROM, angular velocity, and knee adduction behavior at landing.",
    description:
      "This project used VICON motion capture and force-plate synchronized analysis to evaluate ankle, knee, and hip mechanics during broad jumping at multiple effort levels. The workflow processed marker trajectories, computed sagittal-plane joint range of motion and angular velocity, and examined frontal-plane knee adduction angles at impact.",
    role: "Biomechanics analysis and MATLAB processing",
    timeline: "ENGG3150 Module 2",
    image: "/projects/3150l2-1.png",
    heroImage: "/projects/3150l2-1.png",
    services: [
      "VICON kinematic processing",
      "Joint angle analysis",
      "Landing mechanics assessment",
      "Technical reporting",
    ],
    tools: ["VICON Nexus", "Visual3D", "MATLAB", "Force-plate integration"],
    highlights: [
      "Analyzed joint ROM and angular velocity across ankle, knee, and hip during broad-jump efforts.",
      "Quantified landing-phase knee adduction behavior to support injury-risk discussion.",
      "Produced multi-figure report outputs linking biomechanics interpretation to measured trends.",
    ],
    stats: [
      { label: "Capture system", value: "VICON" },
      { label: "Module", value: "ENGG3150 Module 2" },
      { label: "Repository", value: "Not linked" },
    ],
    gallery: [
      { label: "Module 2 report overview", image: "/projects/3150l2-1.png" },
      { label: "Joint angular velocity plots", image: "/projects/3150l2-2.png" },
      { label: "Knee adduction comparison", image: "/projects/3150l2-3.png" },
    ],
    challenge:
      "Measure how jump effort level influences joint mechanics while keeping kinematic calculations and event timing consistent across repeated trials.",
    approach:
      "I processed motion-capture outputs in MATLAB, derived ROM and angular velocity metrics for key joints, aligned landing frames using force-plate events, and compared results across effort distances.",
    outcome:
      "Delivered a complete biomechanics analysis showing clear joint-level trends and a practical framework for evaluating landing mechanics and knee-risk indicators.",
    palette: ["#5A4B9A", "#A08DD8", "#ECE8FA"],
  },
  {
    slug: "engg3150-emg-biceps-curl-lab",
    hidden: false,
    title: "EMG Biceps Curl Analysis",
    category: "EMG + Biomechanics Signal Processing",
    year: "2024",
    summary:
      "MATLAB-based EMG analysis of isometric and dynamic elbow contractions, comparing biceps and brachioradialis activation across load, angle, and movement phase.",
    description:
      "This project processes surface EMG and goniometer data from biceps-curl trials. The workflow filters and normalizes EMG signals, computes RMS-based comparisons, and evaluates activation behavior across elbow moments, joint angles, and dynamic repetition phases.",
    role: "Biomechanics signal analysis and MATLAB implementation",
    timeline: "ENGG3150 Module 3",
    image: "/projects/3150l3-1.png",
    heroImage: "/projects/3150l3-1.png",
    services: [
      "EMG filtering + normalization",
      "Joint-angle phase analysis",
      "Dynamic rep segmentation",
      "Technical reporting",
    ],
    tools: ["MATLAB", "EMG processing", "Signal Processing Toolbox", "Goniometer data"],
    highlights: [
      "Implemented EMG preprocessing with band-pass filtering and envelope-based signal preparation.",
      "Normalized activation profiles against isometric reference trials for consistent comparison.",
      "Analyzed muscle behavior in both static-angle and dynamic biceps-curl contexts.",
    ],
    stats: [
      { label: "Platform", value: "MATLAB" },
      { label: "Module", value: "ENGG3150 Module 3" },
      { label: "Repository", value: "https://github.com/MaxwellM34/EMG_Lab3_Biceps_Curl_Analysis" },
    ],
    gallery: [
      { label: "Module 3 report overview", image: "/projects/3150l3-1.png" },
      { label: "EMG normalization trends", image: "/projects/3150l3-2.png" },
      { label: "Dynamic ensemble EMG", image: "/projects/3150l3-3.png" },
    ],
    challenge:
      "Quantify muscle activation differences across contraction conditions while handling noisy biosignal data and preserving fair normalization between trials.",
    approach:
      "I built MATLAB scripts to filter raw EMG, compute normalized RMS metrics, align data to biomechanical phases, and compare activation across load, angle, and repetition segments.",
    outcome:
      "Delivered a reproducible EMG analysis pipeline and report-ready visual outputs showing clear activation trends for biceps brachii and brachioradialis in isometric and dynamic conditions.",
    palette: ["#8B2C4A", "#C66A8A", "#F7E6ED"],
  },
  {
    slug: "copper-vision-mood-classifier",
    hidden: false,
    title: "Copper Vision Mood Classifier",
    category: "Computer Vision + Applied ML",
    year: "2026",
    summary:
      "Python computer-vision project that detects Copper in-frame and predicts mood states from facial/body cues, then overlays live labels in the camera feed.",
    description:
      "Copper Vision is a personal ML project where I used a computer-vision pipeline to identify my son Copper and classify mood states from image features. The model outputs an on-screen label (for example Relaxed, Curious/Annoyed, or Content) with a live bounding box overlay.",
    role: "ML prototyping, model iteration, and CV pipeline integration",
    timeline: "Personal project",
    image: "/projects/coppervision1.png",
    heroImage: "/projects/coppervision1.png",
    services: [
      "Dataset prep + labeling",
      "Mood-state classification",
      "Inference overlay UI",
      "Model iteration",
    ],
    tools: [
      "Python",
      "OpenCV",
      "NumPy",
      "PyTorch",
      "scikit-learn",
      "Pandas",
    ],
    highlights: [
      "Built a practical mood-label inference flow with bounding-box visualization.",
      "Used iterative class definitions to distinguish similar behavior states.",
      "Implemented with a Python CV/ML stack including OpenCV, NumPy, Pandas, scikit-learn, and PyTorch.",
    ],
    stats: [
      { label: "Primary stack", value: "Python + CV/ML" },
      { label: "Subject", value: "Copper (cat mood inference)" },
      { label: "Output", value: "Live label + bounding box" },
    ],
    gallery: [
      { label: "Relaxed prediction", image: "/projects/coppervision1.png" },
      { label: "Curious/Annoyed prediction", image: "/projects/coppervision2.png" },
      { label: "Content prediction", image: "/projects/coppervision3.png" },
    ],
    challenge:
      "Translate subtle behavioral cues into consistent mood labels while keeping inference understandable and visually clear in real scenes.",
    approach:
      "I used a supervised ML workflow with labeled examples, tuned class boundaries through iteration, and integrated model inference into a vision overlay that displays both detection and predicted mood.",
    outcome:
      "Delivered a working end-to-end prototype that can classify and display Copper's likely mood directly on the camera output.",
    palette: ["#B06A2B", "#E09A58", "#FCE8D3"],
  },
  {
    slug: "a3-pulley-crimp-grip-lab",
    hidden: false,
    title: "A3 Pulley Crimp Grip Analysis",
    category: "Climbing Biomechanics + EMG",
    year: "2024",
    summary:
      "Biomechanics analysis of A3 pulley loading in ring vs middle finger during crimp-grip tasks using VICON, force-plate data, and FDP EMG processing.",
    description:
      "This project evaluates finger-tendon loading during rock-climbing crimp grip by combining motion capture, force-plate measurements, and EMG analysis. MATLAB scripts estimate frame-by-frame A3 pulley forces, compare middle and ring finger behavior, and process FDP EMG envelopes for baseline versus active trials.",
    role: "Biomechanics modeling and MATLAB signal/data analysis",
    timeline: "ENGG3150 Module 4",
    image: "/projects/3150l4-1.png",
    heroImage: "/projects/3150l4-1.png",
    services: [
      "Biomechanical force modeling",
      "EMG envelope processing",
      "Marker + force-plate integration",
      "Comparative trial analysis",
    ],
    tools: ["MATLAB", "VICON motion capture", "Force plate", "Wireless EMG"],
    highlights: [
      "Computed A3 pulley force estimates frame-by-frame from synchronized kinematic and force data.",
      "Compared ring and middle finger loading patterns using RMS and distribution-based metrics.",
      "Processed FDP EMG with band-pass filtering and normalized envelope analysis across trials.",
    ],
    stats: [
      { label: "Platform", value: "MATLAB" },
      { label: "Module", value: "ENGG3150 Module 4" },
      { label: "Repository", value: "https://github.com/MaxwellM34/Measuring-A3-Pulleys-Forces-of-the-Ring-and-Middle-Finger-in-a-Rock-Climbing-Crimp-Grip" },
    ],
    gallery: [
      { label: "Module 4 report overview", image: "/projects/3150l4-1.png" },
      { label: "MOCAP marker + methods detail", image: "/projects/3150l4-2.png" },
      { label: "A3 pulley model and anatomy", image: "/projects/3150l4-3.png" },
    ],
    challenge:
      "Estimate pulley loading in a complex hand posture where tendon force, finger geometry, and contact mechanics all interact during crimp grip.",
    approach:
      "I combined VICON marker trajectories, force-plate components, and EMG signals in MATLAB, then used biomechanical equations to estimate A3 pulley forces and compare middle versus ring finger trial behavior.",
    outcome:
      "Delivered reproducible scripts and report outputs quantifying A3 pulley force behavior and supporting interpretation of finger-specific loading risk in climbing grip mechanics.",
    palette: ["#2F4F6B", "#6E95B5", "#E1EDF7"],
  },
  {
    slug: "gripsense-rsi-prevention-mouse",
    hidden: false,
    title: "GripSense RSI Prevention Mouse",
    category: "Ergonomic Product Design",
    year: "2024",
    summary:
      "Designed GripSense, a low-cost ergonomic mouse concept that prevents wrist and hand repetitive strain injuries using grip-force feedback and timed break reminders.",
    description:
      "This project addresses repetitive strain injury risk from chronic computer use by focusing on prevention rather than treatment. The final concept, GripSense, combines ergonomic geometry, force-based vibrational feedback to discourage excessive grip, and periodic break reminders to reduce long-term wrist and hand strain during productivity work.",
    role: "Product strategy, engineering design, and systems evaluation",
    timeline: "Design project",
    image: "/projects/3100-2.png",
    heroImage: "/projects/3100-2.png",
    mediaVideo: "/projects/3100-1.mp4",
    services: [
      "Ergonomic product design",
      "Human-factor risk prevention",
      "Decision-matrix selection",
      "Lifecycle and impact analysis",
    ],
    tools: [
      "UBC design model",
      "Weighted decision matrix",
      "Sensitivity analysis",
      "Economic input-output LCA",
      "Gantt planning",
    ],
    highlights: [
      "Developed four alternatives and selected GripSense through weighted decision matrix and sensitivity analysis.",
      "Designed around prevention constraints including affordability, broad compatibility, maintenance simplicity, and usability.",
      "Integrated grip-force feedback plus 30-minute break prompts to lower cumulative overuse risk.",
    ],
    stats: [
      { label: "Target lifespan", value: "5-8 years" },
      { label: "Design budget cap", value: "$20,000 CAD" },
      { label: "Economic IO impact", value: "$47 per mouse (2021 USD)" },
    ],
    gallery: [
      { label: "GripSense concept demo", image: "/projects/3100-1.mp4", mediaType: "video" },
      { label: "Design report page 1", image: "/projects/3100-2.png" },
      { label: "Design report page 2", image: "/projects/3100-3.png" },
    ],
    challenge:
      "Create a practical, affordable product that reduces RSI risk at the source for everyday computer users, rather than only treating symptoms after injury occurs.",
    approach:
      "I defined prevention-focused constraints and criteria, iterated concepts using the UBC model, selected the final design through structured tradeoff analysis, and evaluated lifecycle, economic, and implementation factors for a realistic deployment path.",
    outcome:
      "Produced a complete prevention-focused design for GripSense with ergonomic geometry, force-feedback behavior control, and scheduled break prompting, plus clear next steps for prototyping and sensor validation.",
    palette: ["#2E5E63", "#5A8F95", "#DCEEEF"],
  },
  {
    slug: "annotool",
    hidden: false,
    title: "Annotool",
    category: "Internal Web App + Time Tracking",
    year: "2026",
    summary:
      "FastAPI + React annotation tool for an employee to mark up LeBlanc design comparison images, with active time tracking and auto-generated weekly invoices.",
    description:
      "Annotool is an internal web app where an authorized employee draws red-rectangle annotations on side-by-side comparison images pushed in from the LeBlanc design loop. It tracks active working time with idle-gap exclusion and produces weekly invoice PDFs at the user's hourly rate.",
    role: "Full-stack engineering and operations tooling",
    timeline: "Ongoing",
    image: "/projects/annotool-login.png",
    heroImage: "/projects/annotool-login.png",
    services: [
      "Annotation UI",
      "Active time tracking",
      "Weekly invoice generation",
      "Google OAuth + allowlist",
    ],
    tools: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Vite", "React", "TypeScript", "Tailwind", "ReportLab"],
    highlights: [
      "SVG overlay annotation UI with multi-round notes per image.",
      "Active-time tracker excludes idle gaps over 30 seconds for honest billable hours.",
      "Automated weekly invoice PDF generation with ReportLab.",
    ],
    stats: [
      { label: "Backend", value: "FastAPI + Postgres" },
      { label: "Frontend", value: "Vite + React + TS" },
      { label: "Repository", value: "github.com/MaxwellM34/annotool" },
    ],
    gallery: [
      { label: "Live sign-in screen", image: "/projects/annotool-login.png" },
      { label: "Active-time tracking + invoice service", image: "/projects/annotool_code.svg" },
      { label: "Pushed comparison handoff from LeBlanc", image: "/projects/leblanc-classes.png" },
    ],
    challenge:
      "Track an employee's real working time across an open-ended design review loop and bill it accurately without manual timesheets.",
    approach:
      "Built a tight annotation UI tied to a server-side activity timer that pauses on idle gaps, then layered weekly invoice generation on top of the tracked totals.",
    outcome:
      "A live internal tool that captures annotations, tracks honest billable hours, and ships weekly invoice PDFs without manual reconciliation.",
    palette: ["#2A4365", "#4299E1", "#BEE3F8"],
  },
  {
    slug: "leblanc-design-loop",
    hidden: false,
    title: "LeBlanc Figma-to-Elementor Loop",
    category: "Design Automation + Agent Loop",
    year: "2026",
    summary:
      "Automation system that converts Figma section designs into Elementor-ready WordPress sections through a repeatable design loop with screenshot diffing.",
    description:
      "The LeBlanc project is a long-running design-to-WordPress automation that pulls section-level Figma designs, generates Elementor-ready blocks, captures iteration screenshots, and pushes side-by-side comparisons into Annotool for human review. The loop is driven by structured plans and runs across multiple worktrees.",
    role: "Architecture, agent loop orchestration, design tooling",
    timeline: "Ongoing",
    image: "/projects/leblanc-main.png",
    heroImage: "/projects/leblanc-main.png",
    services: [
      "Figma extraction",
      "Elementor block generation",
      "Iteration screenshotting",
      "Review handoff to Annotool",
    ],
    tools: ["Python", "Figma API", "WordPress", "Elementor", "Playwright"],
    highlights: [
      "Section-level Figma references drive Elementor block generation rather than full-page guesses.",
      "Each loop iteration is screenshotted and pushed into Annotool for structured human review.",
      "Multi-worktree workflow keeps experiments isolated from the main design loop state.",
    ],
    stats: [
      { label: "Pipeline", value: "Figma -> Elementor" },
      { label: "Review handoff", value: "Annotool side-by-side" },
      { label: "Repository", value: "github.com/MaxwellM34/leblanc" },
    ],
    gallery: [
      { label: "Homepage rendering option", image: "/projects/leblanc-main.png" },
      { label: "Hero section detail", image: "/projects/leblanc-hero.png" },
      { label: "Section iteration loop", image: "/projects/leblanc_code.svg" },
    ],
    challenge:
      "Convert evolving Figma designs into clean Elementor sections at a rate that a small operation can actually review and approve.",
    approach:
      "Treated the conversion as a structured agent loop with explicit plans, isolated worktrees, automatic screenshots, and a human review step routed through the Annotool app.",
    outcome:
      "A repeatable pipeline that turns Figma section updates into reviewed Elementor sections with auditable iteration history.",
    palette: ["#1A365D", "#2C5282", "#BEE3F8"],
  },
  {
    slug: "payitforward-redux",
    hidden: false,
    title: "PayItForward Redux",
    category: "Web + Mobile PWA",
    year: "2026",
    summary:
      "Web + mobile pay-it-forward platform built as a Firebase-backed PWA with a separate mobile app, shared logic, and storage rules.",
    description:
      "PayItForward Redux is a multi-surface project including a web PWA, a mobile client, shared logic, and a Firebase backend with cloud functions, Firestore rules, and storage rules. The web surface ships as an installable PWA with full icon and manifest support.",
    role: "Full-stack engineering across web, mobile, and Firebase",
    timeline: "Ongoing",
    image: "/projects/pif-logo.jpg",
    heroImage: "/projects/pif-logo.jpg",
    services: [
      "PWA delivery",
      "Cross-surface architecture",
      "Firebase functions + rules",
      "Shared package design",
    ],
    tools: ["Firebase", "Firestore", "Cloud Functions", "PWA", "React", "Mobile"],
    highlights: [
      "Web, mobile, shared, and functions split keeps logic reusable across surfaces.",
      "Full PWA icon set including maskable variants and Apple touch icon.",
      "Firestore + storage rules defined as code alongside the application.",
    ],
    stats: [
      { label: "Surfaces", value: "Web + mobile + functions" },
      { label: "Backend", value: "Firebase + Firestore" },
      { label: "Delivery", value: "Installable PWA" },
    ],
    gallery: [
      { label: "PWA brand mark", image: "/projects/pif-logo.jpg" },
      { label: "PWA install icon", image: "/projects/pif-pwa.png" },
      { label: "Match-ranking logic", image: "/projects/payitforward_code.svg" },
    ],
    challenge:
      "Ship a coordinated web + mobile experience without duplicating business logic or losing offline-friendly behavior on the web surface.",
    approach:
      "Split the codebase into web, mobile, shared, and functions packages, and used Firebase for authoritative storage and rules while keeping the web surface installable.",
    outcome:
      "A coherent multi-surface platform where web, mobile, and backend share logic and the web app installs as a real PWA.",
    palette: ["#1B5E20", "#43A047", "#A5D6A7"],
  },
  {
    slug: "chromology-brand",
    hidden: false,
    title: "Chromology Brand + Logo System",
    category: "Brand Design + Logo Iteration",
    year: "2026",
    summary:
      "Brand and logo iteration project for Chromology with a tracked review of saturation, fuzz, and treatment variants leading to a final selected mark.",
    description:
      "The Chromology project documents an end-to-end brand and logo iteration cycle, including a structured logo review covering grayscale baselines, fuzz variants, saturation masks, and effects-driven treatments. The selected mark and a white transparent variant ship as the working brand assets.",
    role: "Brand iteration and asset selection",
    timeline: "Iteration cycle",
    image: "/projects/chromology-final.png",
    heroImage: "/projects/chromology-final.png",
    services: [
      "Logo iteration",
      "Variant comparison",
      "Asset selection",
      "Working asset packaging",
    ],
    tools: ["Brand iteration", "Asset review", "Image treatments"],
    highlights: [
      "Iterated through grayscale baseline, fuzz variants, saturation masks, and effects treatments.",
      "Locked a single working mark and produced a white transparent variant for varied backgrounds.",
      "Captured the review as a tracked changelog rather than disposable explorations.",
    ],
    stats: [
      { label: "Project type", value: "Brand iteration" },
      { label: "Final asset", value: "Selected mark + white transparent" },
      { label: "Repository", value: "github.com/MaxwellM34/chromology" },
    ],
    gallery: [
      { label: "Final selected mark", image: "/projects/chromology-final.png" },
      { label: "Working white transparent", image: "/projects/chromology-logo.png" },
      { label: "Variant review code", image: "/projects/chromology_code.svg" },
    ],
    challenge:
      "Avoid the common brand-iteration trap where dozens of variants are explored but no decision or rationale is ever recorded.",
    approach:
      "Ran a side-by-side variant review with labeled treatments, picked the final mark with reasoning, and shipped the working assets in a versioned repo.",
    outcome:
      "Delivered a working brand mark plus packaged variants and a written iteration record for future brand decisions.",
    palette: ["#0F172A", "#475569", "#E2E8F0"],
  },
  {
    slug: "happyface-firebase",
    hidden: false,
    title: "HappyFace",
    category: "Firebase Functions + Testing",
    year: "2026",
    summary:
      "Firebase-backed application with cloud functions, emulator-based local development, and Jest-driven Firestore rules testing.",
    description:
      "HappyFace is a Firebase application structured around emulator-driven local development. It uses Cloud Functions for backend logic, Firestore rules for access control, and the @firebase/rules-unit-testing harness with Jest to verify rule behavior automatically.",
    role: "Full-stack engineering and Firebase architecture",
    timeline: "Ongoing",
    image: "/projects/happyface_code.svg",
    heroImage: "/projects/happyface_code.svg",
    services: [
      "Cloud functions",
      "Firestore rule design",
      "Emulator-based dev",
      "Rules unit testing",
    ],
    tools: ["Firebase", "Cloud Functions", "Firestore", "Jest", "TypeScript"],
    highlights: [
      "Firebase emulators wire local dev across functions, Firestore, and rules.",
      "Jest + @firebase/rules-unit-testing enforces correct security rules.",
      "Functions package compiled and shipped as a standalone workspace.",
    ],
    stats: [
      { label: "Backend", value: "Firebase + functions" },
      { label: "Testing", value: "Jest rules unit tests" },
      { label: "Local dev", value: "Firebase emulators" },
    ],
    gallery: [
      { label: "Firestore rules unit tests", image: "/projects/happyface_code.svg" },
      { label: "Emulator workflow", image: "/projects/happyface_code.svg" },
      { label: "Backend structure", image: "/projects/happyface_code.svg" },
    ],
    challenge:
      "Avoid the common Firebase trap of shipping rules and functions that pass manual testing but break under realistic access patterns.",
    approach:
      "Adopted emulators as the dev loop and built rules-unit-testing coverage with Jest so access behavior is verified before deploy.",
    outcome:
      "A Firebase project with backend functions, locked-down Firestore rules, and an automated test pass on the rules.",
    palette: ["#7C2D12", "#EA580C", "#FED7AA"],
  },
  {
    slug: "coppercrm",
    hidden: false,
    title: "CopperCRM",
    category: "Internal CRM System",
    year: "2026",
    summary:
      "Python-based CRM project exploring lightweight contact, pipeline, and follow-up tracking suited to small internal teams.",
    description:
      "CopperCRM is a Python project focused on the small-team CRM use case: managing contacts, tracking pipeline state, and surfacing follow-up actions without the overhead of large enterprise CRM platforms.",
    role: "Backend engineering and CRM data modeling",
    timeline: "Ongoing",
    image: "/projects/coppercrm_code.svg",
    heroImage: "/projects/coppercrm_code.svg",
    services: [
      "CRM data modeling",
      "Pipeline state tracking",
      "Follow-up surfacing",
      "Lightweight internal tooling",
    ],
    tools: ["Python", "SQL", "FastAPI"],
    highlights: [
      "Targeted at small-team CRM use, not enterprise feature bloat.",
      "Pipeline state and follow-up logic modeled explicitly in the data layer.",
      "Designed as a foundation for AI-augmented CRM workflows.",
    ],
    stats: [
      { label: "Primary language", value: "Python" },
      { label: "Use case", value: "Small-team CRM" },
      { label: "Repository", value: "github.com/MaxwellM34/CopperCRM" },
    ],
    gallery: [
      { label: "Pipeline stages + follow-up logic", image: "/projects/coppercrm_code.svg" },
      { label: "Stage definitions", image: "/projects/coppercrm_code.svg" },
      { label: "Follow-up queue computation", image: "/projects/coppercrm_code.svg" },
    ],
    challenge:
      "Most CRM tools optimize for enterprise sales and become heavy for small teams that need lightweight pipeline visibility.",
    approach:
      "Modeled the smallest viable CRM data shape with explicit pipeline states and follow-up cues, and built it in Python for easy extension.",
    outcome:
      "A working CRM foundation that small teams can run and extend, including downstream AI augmentation.",
    palette: ["#B45309", "#D97706", "#FDE68A"],
  },
  {
    slug: "out-toe-gait-correction",
    hidden: false,
    title: "Out-Toe Gait Correction (ESP32 + IMU)",
    category: "Wearable Embedded Systems",
    year: "2025",
    summary:
      "Paired ESP32 boards with BNO055 IMUs that measure relative foot rotation, stream over ESP-NOW, and trigger LED or vibration feedback when out-toeing exceeds threshold.",
    description:
      "This repo is the embedded firmware for the out-toe gait correction system underlying the Foot Allign capstone. A slave board broadcasts cumulative yaw over ESP-NOW; the master unwraps its own yaw, compares the relative angle to a threshold, and drives an LED or vibration motor. WiFi/TCP variants stream live angle data into Dash dashboards with CSV logging.",
    role: "Embedded firmware and live telemetry engineering",
    timeline: "Capstone-era work",
    image: "/projects/footallignbanner.jpg",
    heroImage: "/projects/footallignbanner.jpg",
    services: [
      "ESP32 firmware",
      "BNO055 IMU integration",
      "ESP-NOW pairing",
      "Live telemetry dashboards",
    ],
    tools: ["ESP32", "C++", "BNO055", "ESP-NOW", "WiFi", "Dash", "CSV logging"],
    highlights: [
      "Paired-board architecture using ESP-NOW for low-latency relative yaw signaling.",
      "Threshold-driven LED and vibration feedback for real-time gait correction.",
      "WiFi/TCP variants stream IMU data into Dash dashboards with CSV recording.",
    ],
    stats: [
      { label: "Platform", value: "ESP32 + BNO055" },
      { label: "Comms", value: "ESP-NOW + WiFi/TCP" },
      { label: "Repository", value: "github.com/MaxwellM34/out_toe_gait_correction" },
    ],
    gallery: [
      { label: "Wearable form factor", image: "/projects/footallignbanner.jpg" },
      { label: "ESP-NOW master loop", image: "/projects/outtoe_code.svg" },
      { label: "Team validation", image: "/projects/mikoselfie.jpg" },
    ],
    challenge:
      "Measure real-time foot rotation reliably between two independent moving boards without expensive motion capture hardware.",
    approach:
      "Used BNO055 IMUs for stable orientation, ESP-NOW for low-latency board-to-board comms, and a threshold-based feedback loop tied to LED and vibration output.",
    outcome:
      "Delivered a working paired ESP32 system that detects excessive out-toeing in real time and provides haptic feedback, with WiFi telemetry for offline analysis.",
    palette: ["#1A4D8F", "#4DA3FF", "#D6E8FF"],
  },
  {
    slug: "engg4040-ct-radon-reconstruction",
    hidden: false,
    title: "CT Radon Reconstruction",
    category: "Medical Imaging Lab",
    year: "2025",
    summary:
      "MATLAB exploration of Radon-based CT reconstruction with sinogram corruption, limited-angle Hamming filtering, and noise-test recovery using spatial filters.",
    description:
      "This ENGG4040 lab uses MATLAB to explore Radon-based CT reconstruction. It examines sinogram corruption, limited-angle projection effects under Hamming filtering, and noise scenarios (salt and pepper, Gaussian) with average, Gaussian, and median spatial filters.",
    role: "Medical imaging analysis and MATLAB implementation",
    timeline: "ENGG4040 Lab 3",
    image: "/og-image.svg",
    heroImage: "/og-image.svg",
    services: [
      "Radon-based CT reconstruction",
      "Sinogram analysis",
      "Limited-angle reconstruction",
      "Noise filtering studies",
    ],
    tools: ["MATLAB", "Radon transform", "Image filtering"],
    highlights: [
      "Investigated sinogram corruption impact on CT reconstruction quality.",
      "Compared limited-angle reconstruction behavior using Hamming filtering.",
      "Benchmarked average, Gaussian, and median spatial filters against synthetic noise.",
    ],
    stats: [
      { label: "Platform", value: "MATLAB" },
      { label: "Module", value: "ENGG4040 Lab 3" },
      { label: "Repository", value: "github.com/MaxwellM34/ENGG4040_Lab3_CT_Radon_Reconstruction" },
    ],
    gallery: [
      { label: "Sinogram corruption", image: "/og-image.svg" },
      { label: "Filtered reconstruction", image: "/og-image.svg" },
      { label: "Noise filter comparison", image: "/og-image.svg" },
    ],
    challenge:
      "Understand how sinogram quality, limited angles, and noise interact with reconstruction filters in practical CT imaging.",
    approach:
      "Built MATLAB scripts to corrupt sinograms, apply Hamming-filtered reconstructions over restricted angles, and benchmark spatial filters under controlled noise.",
    outcome:
      "Delivered a hands-on understanding of CT reconstruction sensitivity to acquisition and filtering choices.",
    palette: ["#0F172A", "#0EA5E9", "#BAE6FD"],
  },
  {
    slug: "engg4040-fourier-transform",
    hidden: false,
    title: "DICOM 2D Fourier Transform Analysis",
    category: "Medical Imaging Lab",
    year: "2025",
    summary:
      "MATLAB analysis applying 2D FFT to DICOM medical images - resolution and SNR studies, rotation in the frequency domain, plus low- and high-pass filtering.",
    description:
      "This ENGG4040 assignment applies 2D Fourier Transforms to medical DICOM images in MATLAB. The workflow examines how resolution and voxel size affect image quality, compares SNR across regions, demonstrates rotation effects in the frequency domain, and applies low-pass and high-pass filtering to modify image detail.",
    role: "Medical imaging analysis and MATLAB implementation",
    timeline: "ENGG4040 assignment",
    image: "/og-image.svg",
    heroImage: "/og-image.svg",
    services: [
      "DICOM image handling",
      "2D FFT analysis",
      "SNR comparison",
      "Frequency-domain filtering",
    ],
    tools: ["MATLAB", "DICOM", "FFT", "Image processing"],
    highlights: [
      "Worked directly with DICOM-format medical imaging data.",
      "Demonstrated how rotation in the spatial domain manifests in the frequency domain.",
      "Applied targeted low-pass and high-pass filters to modify perceived detail.",
    ],
    stats: [
      { label: "Platform", value: "MATLAB" },
      { label: "Format", value: "DICOM" },
      { label: "Repository", value: "github.com/MaxwellM34/ENGG4040_Fourier_Transform_Assignment" },
    ],
    gallery: [
      { label: "FFT magnitude view", image: "/og-image.svg" },
      { label: "Filtered image output", image: "/og-image.svg" },
      { label: "Rotation in frequency", image: "/og-image.svg" },
    ],
    challenge:
      "Connect frequency-domain behavior to practical medical image quality and filtering decisions.",
    approach:
      "Built MATLAB scripts to apply 2D FFTs on DICOM images, then ran SNR, rotation, and filtering studies in the frequency domain.",
    outcome:
      "Delivered a complete frequency-domain analysis of medical images that ties theoretical FFT behavior to visible image quality outcomes.",
    palette: ["#312E81", "#6366F1", "#C7D2FE"],
  },
  {
    slug: "spring-vs-sleeve-knee-brace",
    hidden: false,
    title: "Spring vs Sleeve Knee Brace Lab",
    category: "Biomechanics Comparative Study",
    year: "2024",
    summary:
      "MATLAB workflow comparing a spring-loaded knee brace, a sleeve brace, and no brace across balance and squat tasks for a single participant.",
    description:
      "This single-participant biomechanics lab compares Brace 1 (spring-loaded), Brace 2 (sleeve), and a no-brace condition during balance and squat tasks. MATLAB scripts process force-plate and kinematic exports, generate resultant force vectors, and plot stability, mobility, and peak-force metrics.",
    role: "Biomechanics analysis and MATLAB implementation",
    timeline: "Biomechanics lab",
    image: "/og-image.svg",
    heroImage: "/og-image.svg",
    services: [
      "Force-plate analysis",
      "Kinematic processing",
      "Resultant vector computation",
      "Comparative biomechanics",
    ],
    tools: ["MATLAB", "Force plate", "Kinematics"],
    highlights: [
      "Single-participant repeated-condition design with consistent task framing.",
      "Generated resultant force vectors from raw force-plate data.",
      "Produced comparative plots for stability, mobility, and peak forces across braces.",
    ],
    stats: [
      { label: "Platform", value: "MATLAB" },
      { label: "Conditions", value: "Spring + sleeve + control" },
      { label: "Repository", value: "github.com/MaxwellM34/Spring-Loaded_vs_Sleeve_Knee_Brace" },
    ],
    gallery: [
      { label: "Resultant vector output", image: "/og-image.svg" },
      { label: "Stability comparison", image: "/og-image.svg" },
      { label: "Peak force comparison", image: "/og-image.svg" },
    ],
    challenge:
      "Compare two brace types against a no-brace baseline with limited subjects while keeping the analysis honest.",
    approach:
      "Standardized tasks and processing across conditions in MATLAB and reported comparative metrics rather than absolute claims.",
    outcome:
      "Delivered a reproducible MATLAB comparison of spring vs sleeve knee bracing across stability, mobility, and peak loading.",
    palette: ["#0F766E", "#14B8A6", "#99F6E4"],
  },
  {
    slug: "yellow-fanuc-tests",
    hidden: false,
    title: "FANUC Arm Python Control",
    category: "Industrial Robotics + Python",
    year: "2025",
    summary:
      "Python tools and Jupyter notebooks to drive a FANUC arm via the PCDK TCP bridge - jogging in multiple coordinate spaces, pose reading, and gripper actuation.",
    description:
      "This repo provides Python tools and notebooks for controlling a FANUC arm through the PCDK TCP bridge. Capabilities include connecting to the server, jogging in joint, world, and linear space, adjusting speed, reading current pose, and actuating the gripper. Lab safety guidance is embedded in the workflow.",
    role: "Robotics scripting and lab tooling",
    timeline: "Robotics lab",
    image: "/og-image.svg",
    heroImage: "/og-image.svg",
    services: [
      "FANUC PCDK integration",
      "Multi-frame jogging",
      "Pose telemetry",
      "Lab safety scripting",
    ],
    tools: ["Python", "Jupyter", "FANUC PCDK", "TCP bridge"],
    highlights: [
      "Drives the FANUC arm directly from Python via the PCDK TCP bridge.",
      "Supports joint, world, and linear jogging plus speed adjustment.",
      "Provides pose telemetry and gripper actuation with safety guidance.",
    ],
    stats: [
      { label: "Platform", value: "FANUC PCDK" },
      { label: "Format", value: "Python + Jupyter" },
      { label: "Repository", value: "github.com/MaxwellM34/yellow_fanuc_tests" },
    ],
    gallery: [
      { label: "Connection setup", image: "/og-image.svg" },
      { label: "Jogging script", image: "/og-image.svg" },
      { label: "Gripper actuation", image: "/og-image.svg" },
    ],
    challenge:
      "Make FANUC arm control accessible from a Python notebook environment for lab use without losing safety discipline.",
    approach:
      "Wrapped the PCDK TCP bridge in Python helpers, exposed multi-frame jogging and pose reads, and embedded safety conventions directly in the workflow.",
    outcome:
      "A working Python toolkit that lets a student safely operate a FANUC arm from notebooks for lab tasks.",
    palette: ["#854D0E", "#EAB308", "#FEF08A"],
  },
  {
    slug: "fanuc-lab-tp",
    hidden: false,
    title: "FANUC Teach Pendant Programs",
    category: "Industrial Robotics + TP Programming",
    year: "2025",
    summary:
      "Five FANUC TP examples - HOME_READY, PICK_PLACE, WAVE_GREETING, DRAW_SQUARE, PUSH_BUTTON - with shared frames and reusable lab structure.",
    description:
      "This repo contains five FANUC teach-pendant (TP) programs: HOME_READY, PICK_PLACE, WAVE_GREETING, DRAW_SQUARE, and PUSH_BUTTON. Each sets UFRAME and UTOOL #1 and includes safe approaches. Behaviors include gripper DO[1] actuation, wave loops, square tracing, and dwell-based button presses, all suitable for lab templates.",
    role: "Robotics lab content and TP programming",
    timeline: "Robotics lab",
    image: "/og-image.svg",
    heroImage: "/og-image.svg",
    services: [
      "FANUC TP programming",
      "Frame and tool setup",
      "Safe-approach trajectories",
      "Lab template authoring",
    ],
    tools: ["FANUC TP", "UFRAME/UTOOL", "Robotics"],
    highlights: [
      "Five reusable TP examples covering core lab motions.",
      "Consistent UFRAME and UTOOL #1 setup across all programs.",
      "Includes safe approaches and dwell-based behaviors for shared lab use.",
    ],
    stats: [
      { label: "Programs", value: "5 TP examples" },
      { label: "Frames", value: "UFRAME/UTOOL #1" },
      { label: "Repository", value: "github.com/MaxwellM34/Fanuc_Lab" },
    ],
    gallery: [
      { label: "Program list", image: "/og-image.svg" },
      { label: "Square trace", image: "/og-image.svg" },
      { label: "Pick and place", image: "/og-image.svg" },
    ],
    challenge:
      "Give students a clean set of FANUC TP examples that demonstrate core lab behaviors without unsafe shortcuts.",
    approach:
      "Authored five reusable TP programs with consistent frame setup and safe approaches, ready to drop into a teach pendant.",
    outcome:
      "A drop-in template set for FANUC lab work covering home, pick-place, wave, draw, and button-press behaviors.",
    palette: ["#92400E", "#F59E0B", "#FDE68A"],
  },
  {
    slug: "emg-lab-foundation",
    hidden: false,
    title: "EMG Signal Processing Lab",
    category: "Biosignal Processing",
    year: "2024",
    summary:
      "Foundational MATLAB lab for EMG signal processing - rectification, integration, spectra, high-pass artifact removal, and grasp-force correlation.",
    description:
      "This MATLAB lab covers core EMG signal processing for bicep and wrist recordings: rectification, integration, spectral exploration, designing and applying high-pass filters to reduce motion artifacts, visualizing fatigue, and correlating EMG features to grasp force using provided CSV data.",
    role: "Biosignal analysis and MATLAB implementation",
    timeline: "Biosignal lab",
    image: "/og-image.svg",
    heroImage: "/og-image.svg",
    services: [
      "EMG rectification + integration",
      "Spectral analysis",
      "Artifact-removal filtering",
      "Force correlation",
    ],
    tools: ["MATLAB", "EMG processing", "Filter design"],
    highlights: [
      "Rectifies and integrates raw EMG to derive activation envelopes.",
      "Designs and applies high-pass filters to reduce motion artifacts.",
      "Correlates EMG features with grasp force using lab CSV data.",
    ],
    stats: [
      { label: "Platform", value: "MATLAB" },
      { label: "Signals", value: "Bicep + wrist EMG" },
      { label: "Repository", value: "github.com/MaxwellM34/EMG_Lab" },
    ],
    gallery: [
      { label: "Rectified EMG", image: "/og-image.svg" },
      { label: "Filter design", image: "/og-image.svg" },
      { label: "Force vs EMG", image: "/og-image.svg" },
    ],
    challenge:
      "Build a clean foundation for EMG processing that handles realistic artifacts and supports physiology-level interpretation.",
    approach:
      "Implemented rectification, integration, spectral inspection, and artifact-removal filtering as MATLAB building blocks tied to clear physiology questions.",
    outcome:
      "A reusable MATLAB foundation for downstream EMG projects, with documented behavior on motion artifacts and force correlation.",
    palette: ["#9F1239", "#E11D48", "#FECDD3"],
  },
  {
    slug: "math2130-root-finding",
    hidden: false,
    title: "MATH*2130 Root-Finding Methods",
    category: "Numerical Methods",
    year: "2024",
    summary:
      "MATLAB implementations of bisection, false position, Newton, secant, and fixed-point root-finding methods with terminal-driven workflows.",
    description:
      "This MATH*2130 assignment contains MATLAB implementations of bisection, false position, Newton, secant, and fixed-point root-finding methods. Each method is paired with a terminal driver that lets the user pick a function, tolerance, and initial guesses, with PDFs of the writeups and earlier checkpoints kept in-repo.",
    role: "Numerical methods implementation",
    timeline: "MATH*2130 assignment",
    image: "/og-image.svg",
    heroImage: "/og-image.svg",
    services: [
      "Numerical root-finding",
      "Terminal-driven workflows",
      "Convergence reporting",
      "Documentation packaging",
    ],
    tools: ["MATLAB", "Numerical methods"],
    highlights: [
      "Five root-finding methods implemented from scratch in MATLAB.",
      "Terminal drivers expose function, tolerance, and initial-guess controls.",
      "Repository keeps writeup PDFs and earlier checkpoints for reference.",
    ],
    stats: [
      { label: "Platform", value: "MATLAB" },
      { label: "Methods", value: "5 root-finders" },
      { label: "Repository", value: "github.com/MaxwellM34/math2130_root_finding_methods" },
    ],
    gallery: [
      { label: "Bisection driver", image: "/og-image.svg" },
      { label: "Newton method", image: "/og-image.svg" },
      { label: "Convergence comparison", image: "/og-image.svg" },
    ],
    challenge:
      "Build the classic root-finding methods cleanly enough that they can be compared against each other on the same problem.",
    approach:
      "Implemented each method in MATLAB with a shared terminal driver and consistent convergence reporting.",
    outcome:
      "A working numerical-methods toolkit ready to use as a reference for future coursework.",
    palette: ["#1F2937", "#4B5563", "#D1D5DB"],
  },
  {
    slug: "goniometer-calibration-refresher",
    hidden: false,
    title: "Goniometer Calibration Refresher",
    category: "Sensor Calibration",
    year: "2024",
    summary:
      "MATLAB refresher that loads eight goniometer calibration CSVs, averages voltages per angle, and fits slope, intercept, and R-squared.",
    description:
      "This MATLAB refresher loads eight goniometer calibration CSVs, averages measured voltages per angle, and runs a small linear regression helper to compute slope, intercept, and R-squared. PDF/doc instructions and optional plotting are included for quick sensor calibration checks.",
    role: "Sensor calibration tooling",
    timeline: "Lab refresher",
    image: "/og-image.svg",
    heroImage: "/og-image.svg",
    services: [
      "Calibration CSV loading",
      "Per-angle averaging",
      "Linear regression fit",
      "Calibration reporting",
    ],
    tools: ["MATLAB", "Linear regression"],
    highlights: [
      "Loads and averages voltages from eight calibration CSVs.",
      "Returns slope, intercept, and R-squared for quick sanity checks.",
      "Includes PDF instructions and optional plotting hooks.",
    ],
    stats: [
      { label: "Platform", value: "MATLAB" },
      { label: "Inputs", value: "8 calibration CSVs" },
      { label: "Repository", value: "github.com/MaxwellM34/MAMATLAB_Goniometer_Calibration_Refresher." },
    ],
    gallery: [
      { label: "Calibration data", image: "/og-image.svg" },
      { label: "Regression fit", image: "/og-image.svg" },
      { label: "Linearity check", image: "/og-image.svg" },
    ],
    challenge:
      "Provide a fast, reliable sanity-check routine for goniometer calibration without re-deriving the math each lab.",
    approach:
      "Wrote a small MATLAB helper that averages voltages per angle and runs a single linear regression for slope/intercept/R-squared.",
    outcome:
      "A drop-in calibration check that turns eight CSV files into a clear linear fit and reusable parameters.",
    palette: ["#7C2D12", "#C2410C", "#FED7AA"],
  },
  {
    slug: "running-mocap-dataset",
    hidden: false,
    title: "Running Motion Capture Dataset",
    category: "Biomechanics Dataset",
    year: "2024",
    summary:
      "200 Hz running gait dataset for one participant - calibration plus running trials at four labeled speeds with c3d, GRF, and joint exports.",
    description:
      "A curated single-participant running gait dataset, including static calibration and running trials at labeled speeds 25/50/75/100 with three repeats each. Exports include c3d marker/analog files, Kistler GRF CSVs, joint angle and velocity text exports, plus camera and session metadata, all captured at 200 Hz.",
    role: "Dataset preparation and biomechanics curation",
    timeline: "Lab dataset",
    image: "/og-image.svg",
    heroImage: "/og-image.svg",
    services: [
      "MOCAP dataset prep",
      "GRF export curation",
      "Joint angle exports",
      "Session metadata packaging",
    ],
    tools: ["VICON Nexus", "Visual3D", "Kistler force plate"],
    highlights: [
      "200 Hz capture rate with consistent calibration across trials.",
      "Four labeled speeds with three repeats each for repeated-measures work.",
      "Includes c3d, GRF, joint angles, and metadata for downstream analysis.",
    ],
    stats: [
      { label: "Capture rate", value: "200 Hz" },
      { label: "Conditions", value: "4 speeds x 3 repeats" },
      { label: "Repository", value: "github.com/MaxwellM34/Running_Motion_Capture_Dataset" },
    ],
    gallery: [
      { label: "Dataset layout", image: "/og-image.svg" },
      { label: "Calibration files", image: "/og-image.svg" },
      { label: "Joint exports", image: "/og-image.svg" },
    ],
    challenge:
      "Package a usable running gait dataset that other students or researchers can analyze without reverse-engineering missing metadata.",
    approach:
      "Captured a structured single-participant protocol at 200 Hz, exported across c3d, GRF, and joint formats, and documented session metadata explicitly.",
    outcome:
      "A reusable, multi-format running gait dataset suitable for repeated-measures biomechanics work.",
    palette: ["#581C87", "#9333EA", "#E9D5FF"],
  },];

const featuredProjectOrder = [
  "annotool",
  "leblanc-design-loop",
  "payitforward-redux",
  "reverse-engineering-sewing-machine",
  "better-bmr-calculator",
  "gripsense-rsi-prevention-mouse",
  "copper-vision-mood-classifier",
  "kinderegg-toy-launcher",
  "fea-barbell-bench-capstone",
  "foot-allign-capstone",
  "out-toe-gait-correction",
  "chromology-brand",
  "happyface-firebase",
  "coppercrm",
];

const featuredProjectRank = new Map(
  featuredProjectOrder.map((slug, index) => [slug, index])
);

export const visibleProjects = projects
  .map((project, index) => ({ project, index }))
  .filter(({ project }) => !project.hidden)
  .sort((a, b) => {
    const rankA = featuredProjectRank.has(a.project.slug)
      ? featuredProjectRank.get(a.project.slug)
      : Number.POSITIVE_INFINITY;
    const rankB = featuredProjectRank.has(b.project.slug)
      ? featuredProjectRank.get(b.project.slug)
      : Number.POSITIVE_INFINITY;

    if (rankA !== rankB) {
      return rankA - rankB;
    }

    return a.index - b.index;
  })
  .map(({ project }) => project);














