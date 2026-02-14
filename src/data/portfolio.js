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
    "I build biomedical software and automation tools, with a focus on qPCR workflows, primer design systems, and practical engineering tools.",
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
  publicPlaceholderProject("placeholder-aurora", "Aurora Placeholder", [
    "#5B6DF8",
    "#93C5FD",
    "#DBEAFE",
  ]),
  publicPlaceholderProject("placeholder-mosaic", "Mosaic Placeholder", [
    "#AD6A2F",
    "#F4A261",
    "#FDEBD2",
  ]),
  publicPlaceholderProject("placeholder-signal", "Signal Placeholder", [
    "#7C3AED",
    "#C4B5FD",
    "#EDE9FE",
  ]),
  placeholderProject(1),
  placeholderProject(2),
  placeholderProject(3),
];

export const visibleProjects = projects.filter((project) => !project.hidden);
