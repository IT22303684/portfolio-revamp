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

// Experience — roles at companies, rendered as a git-log timeline.
// Achievements are technical contributions, not project showcases.
export const experience = [
  {
    role: "Associate Software Engineer",
    company: "BotCalm (Pvt) Ltd",
    period: "Sep 2025 — Present",
    points: [
      "Designed and shipped Go backend services and REST/gRPC APIs across 6+ microservices",
      "Cut average API response times by 30% through query tuning and structured logging, with secured service-to-service communication",
      "Worked with Layer 1 blockchain technology",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "BotCalm (Pvt) Ltd",
    period: "Feb 2025 — Aug 2025",
    points: [
      "Built and delivered end-to-end features across React/TypeScript frontends and Node.js/Go backends",
      "Developed a reusable library of 20+ responsive, accessible React components from Figma designs",
      "Integrated payment-gateway  deposit/withdrawal APIs, lifting transaction success rates by 15%",
      "Reduced API latency by 25% and lowered UI defects through code reviews and performance tuning",
      "Shipped 3–4 features per sprint in an Agile/Scrum team using Git, Jira, and Docker",
    ],
  },
] as const;

// Projects — personal & university work only (company work stays in Experience).
// `image: null` renders an animated terminal preview instead of a screenshot.
export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string | null;
  terminal?: readonly string[]; // typed lines for image-less cards
  tech: readonly string[];
  category: string;
};

export const projects: readonly Project[] = [
  {
    title: "Blockchain Explorer",
    subtitle: "Full-Stack On-Chain Data Platform",
    description:
      "A Go indexing service and REST API over PostgreSQL with a responsive Next.js frontend for searching blocks, transactions, and wallet addresses on Ethereum Sepolia in near real time.",
    image: null,
    terminal: [
      "$ ./explorer --network sepolia",
      "→ indexing block 4,812,004…",
      "✓ 1,024 txns indexed · api listening :8080",
    ],
    tech: ["Next.js", "Go", "PostgreSQL", "go-ethereum", "JSON-RPC", "Sepolia"],
    category: "Blockchain",
  },
  {
    title: "Mini Layer 1 Blockchain",
    subtitle: "Systems Project in Go",
    description:
      "A Layer 1 blockchain programmed from scratch: proof-of-work consensus, peer-to-peer block propagation, a transaction mempool, and a CLI wallet — no frameworks, just Go.",
    image: null,
    terminal: [
      "$ go run ./cmd/chain --mine",
      "→ mining block #42… nonce=88214",
      "✓ block sealed · broadcast to 4 peers",
    ],
    tech: ["Go", "SHA-256", "ECDSA", "Proof-of-Work", "P2P Networking"],
    category: "Blockchain",
  },
  {
    title: "Waste Management System",
    subtitle: "ecoRecycle",
    description:
      "A comprehensive waste management platform promoting sustainability — user registration, waste submission management, pickup scheduling, real-time status tracking, payment integration, and recycling statistics.",
    image: "/projects/waste.webp",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "JWT", "Chart.js"],
    category: "Web Application",
  },
  {
    title: "React Note Manager",
    subtitle: "Team-Based Note Management",
    description:
      "A centralized platform for real-time team collaboration on notes — Redux for global state, Firebase and Firestore for live syncing, with shared workspaces for organizing and sharing notes.",
    image: "/projects/notemanager.webp",
    tech: ["React", "Redux", "Firebase", "Firestore", "Tailwind CSS", "React Router"],
    category: "Web Application",
  },
  {
    title: "Study Time Management App",
    subtitle: "MyStudy Life",
    description:
      "An Android app helping students manage study schedules, track progress, and collaborate with peers — to-do lists, study planning, task deadlines, and progress tracking on the go.",
    image: "/projects/mystudy.webp",
    tech: ["Kotlin", "Android Studio", "Room Database", "RecyclerView", "MVVM"],
    category: "Android App",
  },
  {
    title: "TV Show Recommendation App",
    subtitle: "TvFinder",
    description:
      "A React application that recommends TV shows based on user searches, using public REST APIs and React Hooks for a fast, dynamic browsing experience.",
    image: "/projects/tvshow.webp",
    tech: ["React", "Tailwind CSS", "REST APIs", "React Router", "Axios"],
    category: "Web Application",
  },
  {
    title: "Educational App",
    subtitle: "EduApp",
    description:
      "An Android learning app designed in Figma and built in Android Studio — course materials, quizzes, and progress tracking to keep students organized and motivated.",
    image: "/projects/eduapp.webp",
    tech: ["Kotlin", "Android Studio", "Figma", "Firebase"],
    category: "Android App",
  },
  {
    title: "Wedding Planning System",
    subtitle: "Wedding Planner",
    description:
      "A wedding management system with an admin panel for guest lists, event scheduling, and vendor coordination — built as a first-year IWT final project.",
    image: "/projects/wedding.webp",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "jQuery"],
    category: "Web Application",
  },
  {
    title: "Music Festival Website",
    subtitle: "UI/UX Design",
    description:
      "A responsive frontend for a music festival — schedule, artists, and ticket information presented through intuitive navigation and visually engaging layouts.",
    image: "/projects/music.webp",
    tech: ["Tailwind CSS", "HTML", "CSS", "JavaScript"],
    category: "UI/UX Project",
  },
] as const;

// Research — final-year research project (NextGen QA).
export const research = {
  name: "NextGen QA",
  tagline: "Intelligent Test Case Generation",
  status: "ONGOING · Final-Year Research · expected 2026",
  overview:
    "A four-component research platform whose six-stage human-in-the-loop pipeline turns plain user stories into Gherkin scenarios and executable Selenium, Playwright, and Cypress suites — run on GitHub Actions with live logs and Allure reports.",
  novelty:
    "The core novelty: a vision-guided LLM agent that explores live apps through Set-of-Mark annotated screenshots, reasons as Planner / Actor / Observer / Critic with Reflexion failure memory, and stops on a coverage-plateau criterion — grounding every action in real page elements to eliminate selector hallucination.",
  highlights: [
    "Six-stage human-in-the-loop pipeline: user story → Gherkin → executable suites",
    "Vision agent navigates real UIs via Set-of-Mark screenshots — no selector hallucination",
    "RandomForest (SMOTE) risk model runs likely-failing tests first",
    "13-metric evaluation plan: executability, selector accuracy, seeded-fault detection, APFD",
  ],
  pipeline: [
    "user story",
    "gherkin scenarios",
    "agent exploration",
    "test suites",
    "ci execution",
    "allure reports",
  ],
  agents: ["Planner", "Actor", "Observer", "Critic"],
  tech: [
    "Next.js 16",
    "React 19",
    "FastAPI",
    "Claude Vision API",
    "Playwright",
    "Selenium",
    "Cypress",
    "PostgreSQL",
    "GitHub Actions",
    "scikit-learn",
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
