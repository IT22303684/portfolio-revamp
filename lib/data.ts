// Single source of truth for portfolio content, derived from the CV
// (doc/Dasun_Tharuka_Resume_associate_software_engineer.pdf).

export const site = {
  name: "Dasun Tharuka",
  fullName: "Dasun Tharuka Abeygunasekara",
  role: "Associate Software Engineer",
  company: "BotCalm (Pvt) Ltd",
  location: "Colombo, Sri Lanka",
  email: "dasuntharuka456@gmail.com",
  phone: "+94 77 293 1811",
  github: "https://github.com/IT22303684",
  linkedin: "https://linkedin.com/in/dasun-tharuka-9327a3245",
  cvPath: "/Dasun_Tharuka_Resume.pdf",
} as const;

export const hero = {
  eyebrow: "Associate Software Engineer ",
  // Short and human — one line that says what I do and how it feels to work with me.
  thesis:
    "I craft seamless, user-centric web apps end-to-end — clean front-ends, solid back-ends, and everything in between. Let's build something amazing together!",
  // Rendered as one quiet terminal line under the thesis.
  proofLine: "2+ years experience · Full-stack · Web & blockchain apps",
} as const;

// About — rendered as a terminal session (whoami / cat / ls).
export const about = {
  whoami: "Dasun Tharuka — Associate Software Engineer",
  bio: "I'm a full-stack engineer who builds production web apps end-to-end — React and Next.js on the front, Node.js and Go microservices on the back, with PostgreSQL and MongoDB underneath. I work across REST and gRPC APIs, real-time flows over WebSockets, payment and blockchain-wallet integrations, and containerized deploys with Docker and Kubernetes. I care about clean architecture, fast APIs, and AI-assisted workflows.",
  education: {
    degree: "B.Sc. (Hons) in IT — Software Engineering",
    school: "SLIIT",
    period: "2022 — 2026 (expected)",
    gpa: "3.79 / 4.00",
    honors: "Dean's List ×3 (incl. full scholarship)",
  },
  now: [
    "Building NextGen QA — a vision-LLM agent that writes UI tests (final-year research)",
    "Shipping Go microservices & React dashboards in production",
    "Exploring LLM agents, RAG, and on-chain integrations",
  ],
  meta: [
    { k: "location", v: "Colombo, Sri Lanka" },
    { k: "experience", v: "2+ years, production" },
    { k: "focus", v: "Web & blockchain" },
    { k: "status", v: "Open to opportunities" },
  ],
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
] as const;

// Section registry — drives placeholder rendering and keeps ids consistent
// with navLinks anchors.
export const sections = [
  {
    id: "about",
    label: "About",
    blurb:
      "B.Sc. (Hons) IT — Software Engineering at SLIIT, 3.79 GPA, multiple Dean's List awards. Docker, Kubernetes and AI-assisted development in daily practice.",
  },
  {
    id: "experience",
    label: "Experience",
    blurb:
      "BotCalm (Pvt) Ltd — intern to associate. Go services across 6+ microservices for an enterprise compliance platform; API response times cut 30%.",
  },
  {
    id: "projects",
    label: "Projects",
    blurb:
      "Casino gaming platform for 10k+ users, compliance dashboards, a blockchain explorer, and a Layer 1 chain written from scratch in Go.",
  },
  {
    id: "research",
    label: "Research",
    blurb:
      "NextGen QA — a vision-guided LLM agent that explores live apps and generates executable Selenium, Playwright and Cypress suites.",
  },
  {
    id: "skills",
    label: "Skills",
    blurb:
      "React · Next.js · TypeScript · Go · Node.js · gRPC · PostgreSQL · MongoDB · Docker · Kubernetes · Web3.js · Ethers.js",
  },
  {
    id: "contact",
    label: "Contact",
    blurb: "Open to interesting problems. The fastest route is email.",
  },
] as const;
