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
      { label: "Calculator workflow", image: "/projects/betterbmrcalculator.png" },
      { label: "Results + accuracy panel", image: "/projects/betterbmrcalculator.png" },
      { label: "Project goals and rationale", image: "/projects/betterbmrcalculator.png" },
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
      { label: "Home and project listing", image: "/projects/portfolio.png" },
      { label: "Dynamic project route", image: "/projects/portfolio.png" },
      { label: "Content visibility workflow", image: "/projects/portfolio.png" },
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
    image: "/projects/qPCRLabAutomation.jpg",
    heroImage: "/projects/qPCRLabAutomation.jpg",
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
  placeholderProject(2),
  placeholderProject(3),
];

export const visibleProjects = projects.filter((project) => !project.hidden);
