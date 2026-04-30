export type MenuChild = {
  label: string;
  href: string;
  description: string;
  badge?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: MenuChild[];
};

export type DetailCard = {
  title: string;
  body: string;
  href?: string;
  meta?: string;
};

export type DetailPageData = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  cards: DetailCard[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export const serviceLinks: MenuChild[] = [
  {
    label: "Solar Power Systems",
    href: "/services/solar",
    description: "Turnkey solar design, storage, and installation for homes and businesses.",
    badge: "Core",
  },
  {
    label: "Electric Mobility",
    href: "/services/mobility",
    description: "Charging infrastructure and fleet electrification built for scale.",
  },
  {
    label: "DC Living",
    href: "/services/dc-living",
    description: "Efficient low-voltage energy systems for modern daily living.",
  },
  {
    label: "ENVAC Systems",
    href: "/services/envac",
    description: "Engineered clean-energy utility systems for resilient operations.",
  },
  {
    label: "PayGo Services",
    href: "/services/paygo",
    description: "Flexible financing and payment models that widen energy access.",
  },
  {
    label: "Training",
    href: "/services/training",
    description: "Hands-on technical education for installers, teams, and operators.",
  },
  {
    label: "Street Lights",
    href: "/services/streetlights",
    description: "Reliable solar lighting for estates, roads, and public spaces.",
  },
  {
    label: "Solar Water Pumps",
    href: "/services/solar-water-pumps",
    description: "Sustainable solar pumping solutions for agriculture and water access.",
  }
];

export const careerLinks: MenuChild[] = [
  {
    label: "Training",
    href: "/careers/training",
    description: "Upskill with practical energy and mobility learning tracks.",
  },
  {
    label: "Industrial Training",
    href: "/careers/industrial-training",
    description: "Structured placements for students ready for field exposure.",
  },
  {
    label: "Find a Job",
    href: "/careers/find-a-job",
    description: "Explore openings across engineering, delivery, and operations.",
    badge: "Hiring",
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", children: serviceLinks },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers", children: careerLinks },
  { label: "Contact Us", href: "/contact" },
];

export const footerGroups = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Services: serviceLinks.slice(0, 5).map((item) => ({
    label: item.label,
    href: item.href,
  })),
  Opportunities: careerLinks.map((item) => ({
    label: item.label,
    href: item.href,
  })),
};

export const homeJourney = [
  {
    step: "01",
    title: "Audit and Plan",
    body: "We begin with site studies, load profiling, and a practical delivery roadmap that matches your budget and growth plans.",
  },
  {
    step: "02",
    title: "Build and Commission",
    body: "Our team executes installation, quality checks, and commissioning with visible milestones and stronger on-site coordination.",
  },
  {
    step: "03",
    title: "Support and Scale",
    body: "After handover, we stay close with training, maintenance guidance, and expansion support as your energy needs evolve.",
  },
];

export const pageContent: Record<string, DetailPageData> = {
  about: {
    eyebrow: "About Enerplaz",
    title: "A clean-energy company focused on reliable execution, not just good ideas.",
    description:
      "Enerplaz combines engineering discipline, practical field experience, and customer education to deliver energy systems that actually perform in real Nigerian conditions.",
    highlights: ["10+ years of experience", "Solar and mobility expertise", "Nationwide project support"],
    cards: [
      {
        title: "Built for local reality",
        body: "Every design choice is shaped by grid instability, maintenance needs, and the realities of long-term system ownership.",
      },
      {
        title: "Cross-functional delivery",
        body: "We bring strategy, technical design, installation, training, and aftercare into one coordinated delivery flow.",
      },
      {
        title: "Trust through clarity",
        body: "Clients get practical recommendations, clear scopes, and guidance that helps them make better decisions with confidence.",
      },
    ],
    primaryCta: { label: "Talk to Our Team", href: "/contact" },
    secondaryCta: { label: "See Our Services", href: "/services" },
  },
  services: {
    eyebrow: "Services",
    title: "Energy and mobility solutions arranged around what people need to run every day.",
    description:
      "From solar generation to clean transport and training, our service stack is designed to help homes, businesses, and institutions adopt dependable power in phases or at scale.",
    highlights: ["Turnkey solar systems", "Mobility infrastructure", "Training and support programs"],
    cards: serviceLinks.map((service) => ({
      title: service.label,
      body: service.description,
      href: service.href,
    })),
    primaryCta: { label: "Request a Solution Review", href: "/contact" },
    secondaryCta: { label: "Explore Careers", href: "/careers" },
  },
  projects: {
    eyebrow: "Projects",
    title: "Projects that mix strong engineering with smoother delivery.",
    description:
      "Our work spans estates, commercial facilities, public infrastructure, and community energy programs, each structured for durability, clarity, and measurable impact.",
    highlights: ["Estate electrification", "Institutional installations", "Public-lighting programs"],
    cards: [
      {
        title: "Residential and estate power",
        body: "Solar-backed systems that improve daily comfort, lower generator reliance, and deliver quieter, cleaner energy.",
      },
      {
        title: "Commercial reliability",
        body: "Business-critical installations that support uptime, equipment protection, and better operating efficiency.",
      },
      {
        title: "Public impact infrastructure",
        body: "Street-lighting and access programs designed to improve visibility, safety, and reach across communities.",
      },
    ],
    primaryCta: { label: "Start a Project Conversation", href: "/contact" },
    secondaryCta: { label: "Browse Services", href: "/services" },
  },
  blog: {
    eyebrow: "Insights",
    title: "A content space for practical clean-energy thinking.",
    description:
      "We use our blog to share explainers, field lessons, product thinking, and career guidance that make solar and mobility adoption easier to understand.",
    highlights: ["Technical explainers", "Field lessons", "Career guidance"],
    cards: [
      {
        title: "System education",
        body: "Plain-language breakdowns of solar sizing, battery choices, maintenance, and long-term value.",
      },
      {
        title: "Mobility and infrastructure",
        body: "Updates on electric mobility readiness, charging strategy, and how cities can plan for the transition.",
      },
      {
        title: "People and opportunities",
        body: "Articles for trainees, students, and professionals looking to grow in the clean-energy space.",
      },
    ],
    primaryCta: { label: "Join Our Newsletter", href: "/contact" },
    secondaryCta: { label: "View Careers", href: "/careers" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Bring us the challenge. We will help shape the next step.",
    description:
      "Whether you need a quote, a project review, a training conversation, or partnership support, we make it easy to reach the right team quickly.",
    highlights: ["Fast project response", "Training and partnership enquiries", "Support for homes and businesses"],
    cards: [
      {
        title: "Project enquiries",
        body: "Tell us what you are building, your timeline, and where you need support. We will help map the right route forward.",
      },
      {
        title: "Visit or call",
        body: "Port Harcourt, Nigeria. Reach our team on +234 800 ENERPLAZ or email hello@enerplaz.com.",
      },
      {
        title: "Partnerships",
        body: "We welcome collaboration across institutions, communities, developers, and technology providers.",
      },
    ],
    primaryCta: { label: "Email Enerplaz", href: "mailto:hello@enerplaz.com" },
    secondaryCta: { label: "Call the Team", href: "tel:+23480036377529" },
  },
  careers: {
    eyebrow: "Careers",
    title: "Grow with a company building energy systems that matter in the real world.",
    description:
      "The careers experience now gives people three clear routes: professional training, industrial training placements, and direct job opportunities.",
    highlights: ["Training tracks", "Industrial training placements", "Current job pathway"],
    cards: careerLinks.map((item) => ({
      title: item.label,
      body: item.description,
      href: item.href,
    })),
    primaryCta: { label: "Find a Job", href: "/careers/find-a-job" },
    secondaryCta: { label: "Explore Training", href: "/careers/training" },
  },
};

export const servicePages: Record<string, DetailPageData> = {
  solar: {
    eyebrow: "Solar Power Systems",
    title: "Solar design and installation built for stable day-to-day performance.",
    description:
      "We deliver solar systems for homes, businesses, and institutions with attention to sizing, storage strategy, resilience, and long-term maintainability.",
    highlights: ["Design and sizing", "Battery and inverter planning", "Commissioning and aftercare"],
    cards: [
      {
        title: "Residential systems",
        body: "Reliable solar and storage for homes that want cleaner power and less generator dependency.",
      },
      {
        title: "Commercial systems",
        body: "Site-specific systems that support uptime, protect operations, and improve energy cost control.",
      },
      {
        title: "Support model",
        body: "Training, documentation, and maintenance guidance that helps each system stay effective after launch.",
      },
    ],
    primaryCta: { label: "Get a Solar Quote", href: "/contact" },
    secondaryCta: { label: "Back to Services", href: "/services" },
  },
  mobility: {
    eyebrow: "Electric Mobility",
    title: "Charging and mobility systems prepared for the shift to cleaner transport.",
    description:
      "Enerplaz supports electric mobility adoption with infrastructure strategy, charging deployment, and cleaner fleet planning.",
    highlights: ["Charging infrastructure", "Fleet readiness", "Operational planning"],
    cards: [
      {
        title: "Charging points",
        body: "Scalable charger deployment for campuses, estates, and commercial sites.",
      },
      {
        title: "Fleet transition",
        body: "Assessment and deployment support for organizations moving toward lower-emission operations.",
      },
      {
        title: "Smarter adoption",
        body: "Education and planning that help teams understand power demand, uptime, and user behavior.",
      },
    ],
    primaryCta: { label: "Plan a Mobility Rollout", href: "/contact" },
    secondaryCta: { label: "View Projects", href: "/projects" },
  },
  "dc-living": {
    eyebrow: "DC Living",
    title: "Low-voltage power systems designed for efficient everyday use.",
    description:
      "Our DC Living offering focuses on practical, efficient energy delivery for appliances, lighting, and spaces that benefit from streamlined consumption.",
    highlights: ["Efficient power use", "Flexible layouts", "Modern energy living"],
    cards: [
      {
        title: "Efficient appliance planning",
        body: "We help align system design with actual daily needs so clients get better efficiency from the start.",
      },
      {
        title: "Comfort and continuity",
        body: "Well-planned DC systems support convenience, cleaner backup experiences, and reduced waste.",
      },
      {
        title: "Future extensions",
        body: "Design choices leave room for upgrades as spaces or energy expectations change.",
      },
    ],
    primaryCta: { label: "Discuss DC Living", href: "/contact" },
    secondaryCta: { label: "See Solar Services", href: "/services/solar" },
  },
  envac: {
    eyebrow: "ENVAC Systems",
    title: "Energy utility systems engineered for structured, dependable operations.",
    description:
      "ENVAC deployments are planned around long-term reliability, operational clarity, and infrastructure discipline.",
    highlights: ["Engineered system planning", "Operational resilience", "Utility-grade thinking"],
    cards: [
      {
        title: "Structured deployment",
        body: "We map each installation carefully so the finished system is easier to manage and scale.",
      },
      {
        title: "Reliability focus",
        body: "Choices are guided by durability, serviceability, and performance in live operating environments.",
      },
      {
        title: "Integrated support",
        body: "Clients get documentation, training, and practical guidance to help teams operate with confidence.",
      },
    ],
    primaryCta: { label: "Talk About ENVAC", href: "/contact" },
    secondaryCta: { label: "Back to Services", href: "/services" },
  },
  paygo: {
    eyebrow: "PayGo Services",
    title: "Flexible access models that make clean energy easier to adopt.",
    description:
      "PayGo is designed for clients and communities that need more flexible pathways into reliable energy ownership and use.",
    highlights: ["Flexible payment models", "Access expansion", "Community impact"],
    cards: [
      {
        title: "Affordability design",
        body: "Programs are structured to reduce entry barriers while maintaining system quality and accountability.",
      },
      {
        title: "Community deployment",
        body: "We use PayGo to expand reliable access where traditional adoption can be financially difficult.",
      },
      {
        title: "Support and onboarding",
        body: "Users are guided through setup, use, and support so adoption remains smooth after deployment.",
      },
    ],
    primaryCta: { label: "Ask About PayGo", href: "/contact" },
    secondaryCta: { label: "Explore Training", href: "/careers/training" },
  },
  training: {
    eyebrow: "Technical Training",
    title: "Practical learning programs for people building real energy skills.",
    description:
      "Training at Enerplaz combines field context, technical grounding, and practical instruction so participants leave with more usable confidence.",
    highlights: ["Hands-on learning", "Field-ready knowledge", "Growth-focused support"],
    cards: [
      {
        title: "Installer readiness",
        body: "Learners build skill around solar installation, quality thinking, and safe operational habits.",
      },
      {
        title: "Mobility awareness",
        body: "Training also covers the growing electric mobility landscape and infrastructure needs.",
      },
      {
        title: "Career connection",
        body: "Programs are designed to strengthen employability and practical readiness, not just theory.",
      },
    ],
    primaryCta: { label: "Join Career Training", href: "/careers/training" },
    secondaryCta: { label: "Contact the Team", href: "/contact" },
  },
  streetlights: {
    eyebrow: "Street Lights",
    title: "Solar lighting systems that improve safety, visibility, and confidence in public spaces.",
    description:
      "We design and deploy solar street lighting for estates, campuses, roads, and public environments that need dependable nighttime coverage.",
    highlights: ["Estate and campus lighting", "Public-space safety", "Low-maintenance deployment"],
    cards: [
      {
        title: "Visibility and security",
        body: "Well-lit environments support safer movement, better monitoring, and stronger public confidence.",
      },
      {
        title: "Scalable rollout",
        body: "Projects can be phased carefully to suit funding, site priorities, and maintenance capacity.",
      },
      {
        title: "Cleaner infrastructure",
        body: "Solar-powered lighting reduces fuel reliance while supporting consistent operation in the field.",
      },
    ],
    primaryCta: { label: "Plan a Lighting Project", href: "/contact" },
    secondaryCta: { label: "View Projects", href: "/projects" },
  },
};

export const careerPages: Record<string, DetailPageData> = {
  training: {
    eyebrow: "Career Training",
    title: "Learn practical clean-energy skills with clear, hands-on direction.",
    description:
      "This track is for learners who want deeper technical confidence in solar systems, energy operations, and project delivery workflows.",
    highlights: ["Hands-on modules", "Mentored learning", "Career-building support"],
    cards: [
      {
        title: "Technical foundations",
        body: "Participants build confidence around solar system components, layouts, installation logic, and performance thinking.",
      },
      {
        title: "Field discipline",
        body: "Training emphasizes site behavior, team coordination, and the habits that improve execution quality.",
      },
      {
        title: "Growth pathway",
        body: "The program is structured to help learners move from curiosity into practical readiness.",
      },
    ],
    primaryCta: { label: "Apply via Contact", href: "/contact" },
    secondaryCta: { label: "See Careers Overview", href: "/careers" },
  },
  "industrial-training": {
    eyebrow: "Industrial Training",
    title: "Structured placement for students who want real project exposure.",
    description:
      "Industrial training at Enerplaz is designed for students who want to connect theory with live delivery across engineering, operations, and technical support.",
    highlights: ["Student placements", "Project exposure", "Professional mentoring"],
    cards: [
      {
        title: "Live environment learning",
        body: "Students experience how planning, procurement, installation, and support connect in an operating clean-energy company.",
      },
      {
        title: "Mentored participation",
        body: "We create room for observation, contribution, and feedback so trainees leave with more than surface exposure.",
      },
      {
        title: "Career confidence",
        body: "The placement helps students better understand where they fit in the industry and how to keep growing.",
      },
    ],
    primaryCta: { label: "Request a Placement", href: "/contact" },
    secondaryCta: { label: "View Training", href: "/careers/training" },
  },
  "find-a-job": {
    eyebrow: "Find a Job",
    title: "Explore roles for people ready to build the next stage of energy delivery.",
    description:
      "We hire across delivery, operations, technical teams, and business support when the right people can strengthen how we serve clients and communities.",
    highlights: ["Engineering and operations", "Business support roles", "Mission-driven team culture"],
    cards: [
      {
        title: "What we value",
        body: "We look for people who combine practical thinking, accountability, curiosity, and the ability to work well with others.",
      },
      {
        title: "How to stand out",
        body: "Clear communication, evidence of execution, and genuine interest in clean-energy work matter more than generic applications.",
      },
      {
        title: "Where roles grow",
        body: "Team members gain room to learn across project delivery, field work, customer success, and operational leadership.",
      },
    ],
    primaryCta: { label: "Send Your CV", href: "mailto:hello@enerplaz.com?subject=Enerplaz%20Job%20Application" },
    secondaryCta: { label: "See Industrial Training", href: "/careers/industrial-training" },
  },
};
