export const site = {
  name: "Maxwell McInnis",
  role: "Biomedical Engineer + Product Builder",
  location: "Mississauga, Canada",
  intro:
    "Biomedical engineer with academic research and biotech R&D experience. I design and build medical and biological devices plus the software that supports them. Gym enthusiast, cat dad, and passionate about building.",
  email: "hello@yourname.com",
  phone: "(555) 123-4567",
  availability: "Open to new opportunities in 2026.",
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/yourname" },
    { label: "GitHub", url: "https://github.com/yourname" },
    { label: "Dribbble", url: "https://dribbble.com/yourname" },
  ],
};

export const resume = {
  summary:
    "Biomedical engineer focused on medical devices, biological systems, and the software that supports them. Experienced across academic research and biotech R&D with a hands-on, build-first approach.",
  resumeUrl: "/resume.pdf",
  highlights: [
    "Biomedical engineering background with lab and product experience.",
    "1 year academic engineering research + 1 year biotech R&D engineering.",
    "Comfortable bridging hardware, wet lab, and software workflows.",
  ],
  skills: [
    "Medical device prototyping",
    "Biomechanics",
    "Experimental design",
    "CAD + rapid prototyping",
    "Python + data analysis",
    "React + front-end builds",
  ],
};

export const experience = [
  {
    title: "R&D Biotech Engineering",
    company: "Biotech R&D Team",
    location: "Mississauga, Canada",
    dates: "2024 - 2025",
    summary:
      "Supported product development through prototyping, testing, and cross-functional collaboration across biology and engineering teams.",
    bullets: [
      "Built and iterated on device prototypes for biological workflows.",
      "Designed experiments and analyzed data to guide product decisions.",
      "Documented test protocols to improve repeatability and speed.",
    ],
  },
  {
    title: "Academic Engineering Research",
    company: "Biomedical Engineering Lab",
    location: "Mississauga, Canada",
    dates: "2023 - 2024",
    summary:
      "Conducted research in biomedical engineering with a focus on experimental design, data analysis, and lab instrumentation.",
    bullets: [
      "Designed experiments and analyzed results for academic studies.",
      "Collaborated with research teams to refine lab workflows.",
      "Presented findings and translated insights into next-step prototypes.",
    ],
  },
];

export const education = [
  {
    degree: "BSc, Biomedical Engineering",
    school: "Your University",
    dates: "2019 - 2023",
    note: "Focused on medical devices, biological systems, and engineering design.",
  },
];

export const projects = [
  {
    slug: "atlas-fitness",
    title: "Atlas Fitness",
    category: "Membership Platform",
    year: "2025",
    summary:
      "A boutique gym experience with live class inventory, flexible passes, and a calmer booking flow.",
    description:
      "Atlas Fitness wanted a unified experience across web and mobile for class discovery, membership upgrades, and coach bios. The goal was to remove friction for first-time visitors and make class planning feel effortless.",
    role: "Product design, UX strategy, front-end build",
    timeline: "8 weeks",
    services: [
      "Product strategy",
      "UX/UI design",
      "Design system",
      "React build",
      "Content design",
    ],
    tools: ["Figma", "React", "Tailwind", "After Effects"],
    highlights: [
      "Example impact: +18% trial-to-paid conversion.",
      "Reduced booking time from 2:10 to 0:55.",
      "Unified web and mobile booking patterns.",
    ],
    stats: [
      { label: "Conversion", value: "+18%" },
      { label: "Booking time", value: "-55%" },
      { label: "Active members", value: "+1.4x" },
    ],
    gallery: [
      { label: "Class schedule with filters" },
      { label: "Trainer spotlight cards" },
      { label: "Mobile booking confirmation" },
    ],
    challenge:
      "New visitors struggled to compare class types, and returning members had to re-enter preferences each time they booked.",
    approach:
      "We built a preference-aware class explorer, simplified pass selection, and introduced a steady cadence of coach-led highlights.",
    outcome:
      "The experience feels guided and confident, with a clear path from curiosity to booking.",
    palette: ["#F27D52", "#F6D365", "#3B6F6A"],
  },
  {
    slug: "lumen-ledger",
    title: "Lumen Ledger",
    category: "Fintech Dashboard",
    year: "2024",
    summary:
      "A modern operations dashboard for regional banks managing risk, cash flow, and compliance.",
    description:
      "Lumen Ledger needed to unify reporting across five internal tools while reducing time spent exporting spreadsheets. The new dashboard prioritizes clarity, fast scanning, and scenario planning.",
    role: "Product design, data visualization, front-end build",
    timeline: "10 weeks",
    services: [
      "Research synthesis",
      "Information architecture",
      "Data visualization",
      "Interaction design",
      "React build",
    ],
    tools: ["Figma", "React", "D3", "Storybook"],
    highlights: [
      "Example impact: 2.3x faster weekly reporting.",
      "Introduced a single-source compliance dashboard.",
      "Reduced manual exports with smart views.",
    ],
    stats: [
      { label: "Reporting time", value: "2.3x faster" },
      { label: "Tools consolidated", value: "5 to 1" },
      { label: "Data freshness", value: "Hourly" },
    ],
    gallery: [
      { label: "Risk radar and exposure heatmap" },
      { label: "Scenario planning workspace" },
      { label: "Compliance snapshot" },
    ],
    challenge:
      "Teams were jumping between multiple tools to answer the same questions, creating blind spots and delays.",
    approach:
      "We reframed the dashboard around the top 3 daily decisions and redesigned reporting as a narrative flow.",
    outcome:
      "Executives can spot risk early and drill into decisions without leaving the dashboard.",
    palette: ["#2A5C8A", "#80C4D8", "#F4B976"],
  },
  {
    slug: "harbor-supply",
    title: "Harbor Supply",
    category: "B2B Ordering",
    year: "2023",
    summary:
      "A wholesale ordering portal that turns sprawling SKUs into a confident, repeatable flow.",
    description:
      "Harbor Supply distributes interior and hardware products to boutique hotels. The new portal reduces order errors with a structured cart, clear inventory signals, and re-order automation.",
    role: "Product design, UX writing, front-end build",
    timeline: "7 weeks",
    services: ["UX audit", "UX writing", "UI design", "React build"],
    tools: ["Figma", "React", "TypeScript", "Notion"],
    highlights: [
      "Example impact: 42% fewer order errors.",
      "Re-order templates cut purchasing time in half.",
      "New catalog explorer for 3,000+ SKUs.",
    ],
    stats: [
      { label: "Order errors", value: "-42%" },
      { label: "Re-order time", value: "-50%" },
      { label: "SKUs mapped", value: "3,000+" },
    ],
    gallery: [
      { label: "Visual catalog with filters" },
      { label: "Smart cart with alerts" },
      { label: "Bulk re-order builder" },
    ],
    challenge:
      "Purchasing teams relied on spreadsheets and email threads, leading to missed substitutions and order mistakes.",
    approach:
      "We introduced a guided cart with inline inventory logic, plus reusable order templates for frequent buyers.",
    outcome:
      "Teams can place large orders confidently without leaving the portal.",
    palette: ["#9A6B4F", "#E1C699", "#355C5A"],
  },
  {
    slug: "echo-house",
    title: "Echo House",
    category: "Brand + Web",
    year: "2025",
    summary:
      "A tactile brand system and marketing site for a premium podcast studio.",
    description:
      "Echo House wanted a digital presence that felt as warm and analog as their studio. The site pairs editorial storytelling with bold booking calls to action.",
    role: "Brand design, UI design, front-end build",
    timeline: "6 weeks",
    services: ["Brand identity", "Web design", "Webflow build", "Art direction"],
    tools: ["Illustrator", "Figma", "React", "GSAP"],
    highlights: [
      "Example impact: 3x inquiry volume.",
      "Introduced a modular content kit for producers.",
      "Photographic styling guidelines for consistency.",
    ],
    stats: [
      { label: "Inquiry volume", value: "3x" },
      { label: "Studio tours", value: "+64%" },
      { label: "Brand assets", value: "40+" },
    ],
    gallery: [
      { label: "Studio showcase hero" },
      { label: "Session booking flow" },
      { label: "Editorial feature layout" },
    ],
    challenge:
      "The studio relied on word-of-mouth and lacked a consistent digital identity to support growth.",
    approach:
      "We paired a tactile brand system with layered photography and a booking flow built for speed.",
    outcome:
      "Echo House now has a premium digital presence that matches the in-studio experience.",
    palette: ["#1F1D1B", "#C38D63", "#E5D9C6"],
  },
  {
    slug: "terracycle-os",
    title: "TerraCycle OS",
    category: "Sustainability Analytics",
    year: "2024",
    summary:
      "An analytics platform that helps enterprise teams track waste diversion and supplier impact.",
    description:
      "TerraCycle needed to give sustainability teams a live view of partner performance. The platform organizes audits, targets, and supplier conversations in one place.",
    role: "Product strategy, UI design, front-end build",
    timeline: "12 weeks",
    services: [
      "Stakeholder workshops",
      "Data visualization",
      "Dashboard design",
      "React build",
    ],
    tools: ["Figma", "React", "Mapbox", "Airtable"],
    highlights: [
      "Example impact: 28% increase in supplier compliance.",
      "Live reporting across 12 countries.",
      "Clear narrative on diversion targets.",
    ],
    stats: [
      { label: "Compliance", value: "+28%" },
      { label: "Countries", value: "12" },
      { label: "Waste diverted", value: "2.1M lbs" },
    ],
    gallery: [
      { label: "Supplier scorecards" },
      { label: "Impact map view" },
      { label: "Goal tracking timeline" },
    ],
    challenge:
      "Sustainability reporting was manual and inconsistent across suppliers, making it hard to track progress.",
    approach:
      "We built a unified dashboard that ties supplier audits to target milestones with a clear timeline.",
    outcome:
      "Teams can prove impact with confidence and keep suppliers accountable.",
    palette: ["#2F6B5F", "#9BD3AE", "#EAD7A5"],
  },
  {
    slug: "northwind-trails",
    title: "Northwind Trails",
    category: "Travel Planning",
    year: "2023",
    summary:
      "A trip-planning app that blends curated guides with collaborative itineraries.",
    description:
      "Northwind Trails needed a cohesive experience for couples planning multi-city trips. The new product focuses on shared decision-making and gentle nudges to finalize plans.",
    role: "Product design, UX research, front-end build",
    timeline: "9 weeks",
    services: ["UX research", "Journey mapping", "UI design", "React build"],
    tools: ["Figma", "React", "Supabase", "Miro"],
    highlights: [
      "Example impact: 2.1x increase in completed itineraries.",
      "Shared wishlists keep planning collaborative.",
      "Smart nudges help travelers finish booking.",
    ],
    stats: [
      { label: "Itinerary completion", value: "2.1x" },
      { label: "Saved locations", value: "+65%" },
      { label: "Trip planning", value: "-35% time" },
    ],
    gallery: [
      { label: "Collaborative itinerary board" },
      { label: "Guide collections" },
      { label: "Packing timeline" },
    ],
    challenge:
      "Trip planners were overwhelmed by endless options and struggled to align with their travel partners.",
    approach:
      "We built shared decision tools, lightweight voting, and visual timelines to keep momentum.",
    outcome:
      "Travelers finish plans faster with less back-and-forth.",
    palette: ["#486B9A", "#B3C7E6", "#F1B45B"],
  },
];
