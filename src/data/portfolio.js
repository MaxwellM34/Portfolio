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
  },];

const featuredProjectOrder = [
  "reverse-engineering-sewing-machine",
  "better-bmr-calculator",
  "gripsense-rsi-prevention-mouse",
  "copper-vision-mood-classifier",
  "kinderegg-toy-launcher",
  "fea-barbell-bench-capstone",
  "foot-allign-capstone",
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














