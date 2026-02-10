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

export const site = {
  name: "Maxwell McInnis",
  role: "Biomedical Engineer + Software Builder",
  location: "Mississauga, Ontario, Canada",
  intro:
    "I build biomedical software and automation tools, with a focus on qPCR workflows, primer design systems, and practical engineering tools.",
  email: "hello@yourname.com",
  phone: "(555) 123-4567",
  availability: "Open to collaborations and product engineering roles.",
  socials: [
    { label: "GitHub", url: "https://github.com/MaxwellM34" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
  ],
};

export const resume = {
  summary:
    "This section is now a placeholder while portfolio content is being updated with real project history only.",
  resumeUrl: "/resume.pdf",
  highlights: [
    "Replace with verified highlights from your actual work history.",
    "Keep this section factual and project-backed.",
  ],
  skills: [
    "Python",
    "React",
    "Next.js",
    "FastAPI",
    "qPCR workflows",
    "Lab automation",
  ],
};

export const experience = [
  {
    title: "Role title placeholder",
    company: "Company placeholder",
    location: "Location placeholder",
    dates: "Dates placeholder",
    summary: "Replace with a real role summary.",
    bullets: ["Add real bullet 1", "Add real bullet 2", "Add real bullet 3"],
  },
];

export const education = [
  {
    degree: "Degree placeholder",
    school: "School placeholder",
    dates: "Dates placeholder",
    note: "Replace with real education details.",
  },
];

export const projects = [
  {
    slug: "better-bmr-calculator",
    hidden: false,
    title: "BetterBMRCalculator",
    category: "Health + Nutrition Software",
    year: "2026",
    summary:
      "A public BMR and TDEE calculator focused on stronger calorie estimates with training, step count, and lifestyle context.",
    description:
      "BetterBMRCalculator is a web app for estimating daily energy needs. It goes beyond a single activity multiplier by collecting workout and daily movement context and showing an accuracy estimate alongside results.",
    role: "Product design, front-end engineering, full-stack integration",
    timeline: "Ongoing",
    image: "/projects/better-bmr-calculator.svg",
    heroImage: "/projects/better-bmr-calculator.svg",
    services: [
      "Calculation UX",
      "Feature design",
      "Front-end development",
      "API integration",
    ],
    tools: ["React", "Tailwind CSS", "FastAPI", "Python"],
    highlights: [
      "BMR + TDEE calculations in a public web app flow.",
      "Accuracy estimation layer to communicate estimate confidence.",
      "Extended input model for training volume, steps, and job activity.",
    ],
    stats: [
      { label: "Focus", value: "BMR + TDEE" },
      { label: "Mode", value: "Accuracy-aware estimate" },
      { label: "Website", value: "betterbmrcalculator.net" },
    ],
    gallery: [
      { label: "Calculator workflow", image: "/projects/better-bmr-calculator.svg" },
      { label: "Results + accuracy panel", image: "/projects/better-bmr-calculator.svg" },
      { label: "Project goals and rationale", image: "/projects/better-bmr-calculator.svg" },
    ],
    challenge:
      "Most calorie calculators rely on a generic activity multiplier and do not communicate confidence clearly.",
    approach:
      "Built an input and calculation flow that captures more relevant context and surfaces a confidence-oriented accuracy estimate.",
    outcome:
      "A clearer, user-facing energy estimate experience that prioritizes interpretability and practical use.",
    palette: ["#2F6B5F", "#F2C078", "#E07A5F"],
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
    image: "/projects/portfolio-site.svg",
    heroImage: "/projects/portfolio-site.svg",
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
      { label: "Home and project listing", image: "/projects/portfolio-site.svg" },
      { label: "Dynamic project route", image: "/projects/portfolio-site.svg" },
      { label: "Content visibility workflow", image: "/projects/portfolio-site.svg" },
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
      "qPCRLabAutomation is a repository focused on end-to-end qPCR workflow automation. It integrates specialized modules for primer design and sequence analysis to support practical lab operations.",
    role: "Project creator and software developer",
    timeline: "Ongoing",
    image: "/projects/qpcr-lab-automation.svg",
    heroImage: "/projects/qpcr-lab-automation.svg",
    services: [
      "Lab workflow automation",
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
      { label: "Workflow architecture", image: "/projects/qpcr-lab-automation.svg" },
      { label: "Primer design pipeline", image: "/projects/qpcr-lab-automation.svg" },
      { label: "Consensus/alignment automation", image: "/projects/qpcr-lab-automation.svg" },
    ],
    challenge:
      "Small labs often need to stitch together multiple manual steps for qPCR design and analysis.",
    approach:
      "Built a unified automation repo and linked focused tooling repos through submodules for primer design and sequence processing.",
    outcome:
      "A central foundation for scaling qPCR software workflows with less manual handoff across tools.",
    palette: ["#14532D", "#22C55E", "#A7F3D0"],
  },
  placeholderProject(1),
  placeholderProject(2),
  placeholderProject(3),
];

export const visibleProjects = projects.filter((project) => !project.hidden);
