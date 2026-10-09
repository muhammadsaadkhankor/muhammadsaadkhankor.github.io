// ─── All portfolio content lives here. Edit this file to update the site. ───

const PROFILE = {
  name: "Muhammad Saad",
  role: "AI Researcher",
  tagline: "Building multimodal, embodied, agentic systems.",
  affiliation: "M.A.Sc. Student",
  university: "University of Ottawa",
  location: "Ottawa, Canada",
  avatar: "avatar.jpeg",
  email: "msaad104@uottawa.ca",
  links: [
    { label: "Email",          icon: "mail",     href: "mailto:msaad104@uottawa.ca" },
    { label: "GitHub",         icon: "github",   href: "https://github.com/muhammadsaadkhankor" },
    { label: "Google Scholar", icon: "scholar",  href: "https://scholar.google.com/" },
    { label: "LinkedIn",       icon: "linkedin", href: "https://www.linkedin.com/" },
  ],
};

const NATURE_PHOTOS = [
  "Assets/IMG20261003101533.jpg",
  "Assets/IMG20261003111811.jpg",
  "Assets/IMG20261003131628.jpg",
  "Assets/IMG20261003175457.jpg",
];

const MISC_PHOTOS = [
  "Assets/IMG_20250126_184907_926.jpg",
  "Assets/IMG_20250126_184908_146.jpg",
  "Assets/IMG_20250126_184908_207.jpg",
  "Assets/IMG_20250126_184908_480.jpg",
];

const WORK_LOGOS = [
  { name: "Dell Technologies", src: "Assets/dell.png" },
  { name: "EPAM Systems (HUMAIN)", src: "Assets/epam.jpg" },
  { name: "Metaverse Center, MBZUAI", src: "Assets/mbzuai.jpg" },
];

const NAV = [
  { id: "about",        label: "About" },
  { id: "education",    label: "Education" },
  { id: "news",         label: "News" },
  { id: "publications", label: "Publications" },
  { id: "experience",   label: "Experience" },
  { id: "honors",       label: "Honors" },
  { id: "misc",         label: "Beyond Research" },
];

const ABOUT = {
  intro: `Hi, I'm Muhammad Saad, a Master's (M.A.Sc.) student in Electrical and Computer Engineering (Applied AI) at the University of Ottawa, Canada, with 3+ years of experience in AI, building and deploying deep learning systems across computer vision, natural language processing (NLP), and interactive applications.`,
  extra: `Currently working on two research projects: Medical AI for MICCAI, focusing on knowledge distillation and efficient vision-language models for chest X-ray analysis; and Smart Education 5.0, exploring AI, Generative AI, digital twins, and immersive technologies to enable personalized, inclusive, and accessible learning beyond geographical, linguistic, and temporal barriers.`,
  interests: [
    {
      title: "Computer Vision & 3D AI",
      desc: "Multimodal image and video understanding, object detection, segmentation, tracking, 3D reconstruction, scene understanding, and generative 3D modeling.",
      tags: ["Vision Models", "3D Generation", "Scene Understanding"],
      icon: "vision",
    },
    {
      title: "Medical Image Analysis",
      desc: "AI-driven medical image classification, detection, segmentation, and clinically meaningful interpretation for computer-aided diagnosis and healthcare applications.",
      tags: ["Medical Imaging", "Deep Learning", "Healthcare"],
      icon: "medical",
    },
    {
      title: "Physical AI & Embodied Intelligence",
      desc: "Intelligent agents that perceive, reason, and act in physical and simulated environments, including digital twins, physics-aware simulation, and embodied learning.",
      tags: ["Physical AI", "Digital Twins", "Embodied Learning"],
      icon: "embodied",
    },
    {
      title: "Agentic AI & Autonomous Systems",
      desc: "AI agents capable of reasoning, planning, tool use, memory, and autonomous interaction with software, operating systems, and real-world environments.",
      tags: ["LLM Agents", "Agentic OS", "Tool Use"],
      icon: "agentic",
    },
  ],
  stats: [
    { value: "6+", label: "Research Publications", sub: "CHI, CVPR, ACM, IEEE venues" },
    { value: "6+", label: "Years Research & Industry", sub: "MBZUAI, EPAM, Dell, Pakistan" },
    { value: "Now", label: "Co-op Intern @ Dell", sub: "Ottawa, Canada · 2026.05 – 2026.09" },
  ],
};

const NEWS = [
  { date: "2026.05", text: "Started a Co-op internship at Dell Technologies, Ottawa — Agentic Operating Systems for AI PCs." },
  { date: "2026",    text: "Paper accepted at the ACM CHI 2026 Workshop, Barcelona, Spain." },
  { date: "2026",    text: "NewsTwin accepted in IEEE Consumer Electronics Magazine." },
  { date: "2025.09", text: "Started the M.A.Sc. program in ECE (Applied AI) at the University of Ottawa." },
  { date: "2025.09", text: "Awarded the University of Ottawa Graduate Studies Scholarship." },
  { date: "2025.09", text: "Joined EPAM Systems (client: HUMAIN), Dubai, as Software Engineer – AI." },
  { date: "2025",    text: "CP-Diffusion accepted at ACM TOMM." },
  { date: "2025",    text: "All Languages Matter accepted at CVPR 2025." },
  { date: "2024",    text: "Action Knowledge Graph paper presented at IEEE ICCE 2024, Las Vegas." },
  { date: "2023.01", text: "Joined the Metaverse Center, MBZUAI, Abu Dhabi, as a Graduate Research Assistant." },
];

const PUB_FILTERS = ["All", "2026", "2025", "2023", "2022", "Multimodal", "Embodied AI", "Medical AI", "Video Gen", "LLMs"];

const PUBLICATIONS = [
  {
    venue: "AI / CHI-W 2026",
    year: 2026,
    tags: ["Embodied AI", "HCI", "Multimodal"],
    title: "Multimodal Interaction through Embodied Agents: An Intelligent Assistant for Immersive Virtual Environments",
    authors: "Muhammad Saad, Muhammad Saeed, Faouzi Laamarti, Abdulmotaleb El Saddik",
    venueLine: "ACM CHI 2026 Workshop · Barcelona, Spain",
    tldr: "An intelligent embodied agent assistant that enables natural multimodal interaction within immersive virtual environments.",
    links: { paper: "#", project: "#", code: "#", bibtex: "#" },
  },
  {
    venue: "IEEE CEM 2026",
    year: 2026,
    tags: ["Embodied AI", "Multimodal"],
    title: "NewsTwin: An Embodied Multi-Agent Digital Twin for Personalized News Consumption",
    authors: "Z. Wang, Muhammad Saad, Muhammad Saeed, Abdulmotaleb El Saddik",
    venueLine: "IEEE Consumer Electronics Magazine, 2026",
    tldr: "An embodied multi-agent digital twin that personalizes how users consume and interact with news content.",
    links: { paper: "#", project: "#", code: "#", bibtex: "#" },
  },
  {
    venue: "ACM TOMM",
    year: 2025,
    tags: ["Video Gen", "Multimodal"],
    title: "CP-Diffusion: Conditional Prompt-Based Diffusion Models for Video Generation",
    authors: "Muhammad Saeed, Muhammad Khan, Muhammad Saad, Nasir Rahim, Wail Gueaieb, Abdulmotaleb El Saddik",
    venueLine: "ACM TOMM, 2025",
    tldr: "Conditional prompt-based diffusion models for controllable and high-quality video generation.",
    links: { paper: "#", project: "#", code: "#", bibtex: "#" },
  },
  {
    venue: "CVPR 2025",
    year: 2025,
    tags: ["LLMs", "Multimodal"],
    title: "All Languages Matter: Evaluating LMMs on Culturally Diverse 100 Languages",
    authors: "A. Vayani, D. Dissanayake, H. Watawana, N. Ahsan, et al. (incl. Muhammad Saad), F. Khan",
    venueLine: "CVPR 2025",
    tldr: "A large-scale benchmark evaluating large multimodal models across 100 culturally diverse languages.",
    links: { paper: "https://arxiv.org/abs/2411.16508", project: "#", code: "#", bibtex: "#" },
  },
  {
    venue: "ICCE 2024",
    year: 2024,
    tags: ["Multimodal"],
    title: "Action Knowledge Graph for Violence Detection Using Audiovisual Features",
    authors: "Muhammad Khan, Muhammad Saad, Abbas Khan, Wail Gueaieb, Abdulmotaleb El Saddik, Giulia De Masi, Fakhri Karray",
    venueLine: "IEEE ICCE 2024 · Las Vegas, USA",
    tldr: "Action knowledge graphs over audiovisual features to improve violence detection in videos.",
    links: { paper: "https://doi.org/10.1109/ICCE59016.2024.10444158", project: "#", code: "#", bibtex: "#" },
  },
  {
    venue: "ISC2 2023",
    year: 2023,
    tags: ["Embodied AI"],
    title: "Combating Counterfeit Products in Smart Cities with Digital Twin Technology",
    authors: "Muhammad Saad, Muhammad Khan, Muhammad Saeed, Abdulmotaleb El Saddik, Wail Gueaieb",
    venueLine: "IEEE ISC2 2023 · Bucharest, Romania",
    tldr: "Digital twin technology to detect and combat counterfeit products in smart city supply chains.",
    links: { paper: "https://ieeexplore.ieee.org/document/10293496", project: "#", code: "#", bibtex: "#" },
  },
  {
    venue: "ISC2 2023",
    year: 2023,
    tags: ["Embodied AI"],
    title: "Gaming-Based Education System for Children on Road Safety in Metaverse Towards Smart Cities",
    authors: "Muhammad Saeed, Abbas Khan, Muhammad Khan, Muhammad Saad, Abdulmotaleb El Saddik, Wail Gueaieb",
    venueLine: "IEEE ISC2 2023 · Bucharest, Romania",
    tldr: "A metaverse-based gaming system that teaches road safety to children in smart city environments.",
    links: { paper: "https://doi.org/10.1109/ISC257844.2023.10293623", project: "#", code: "#", bibtex: "#" },
  },
  {
    venue: "SITIS 2022",
    year: 2022,
    tags: ["Medical AI"],
    title: "BreastUS: Vision Transformer for Breast Cancer Classification Using Breast Ultrasound Images",
    authors: "Muhammad Saad, M. Ullah, H. Afridi, F. A. Cheikh, M. Sajjad",
    venueLine: "SITIS 2022 · Dijon, France",
    tldr: "A vision transformer model for breast cancer classification from ultrasound images.",
    links: { paper: "https://ieeexplore.ieee.org/document/10090004", project: "#", code: "#", bibtex: "#" },
  },
];

const EXPERIENCE = [
  {
    period: "2026.05 – 2026.09",
    place: "Ottawa, Canada",
    role: "Co-op Intern",
    org: "Dell Technologies",
    logo: "dell",
    points: [
      "Working on Agentic Operating Systems for AI PCs.",
      "Developing LLM-driven agents for real-world applications.",
    ],
    tags: ["LLM Agents", "OS Automation"],
  },
  {
    period: "2025.09 – 2026.02",
    place: "Dubai, UAE",
    role: "Software Engineer – AI",
    org: "EPAM Systems (Client: HUMAIN)",
    logo: "humain",
    points: [
      "Developed AI solutions for real-world applications.",
      "Focused on multimodal and agentic AI systems.",
    ],
    tags: ["Python", "LLMs", "Computer Vision", "MLOps", "Cloud", "GenAI"],
  },
  {
    period: "2023.01 – 2025.08",
    place: "Abu Dhabi, UAE",
    role: "Graduate Research Assistant",
    org: "Metaverse Center, MBZUAI",
    logo: "mbzuai",
    points: [
      "Research on embodied agents and metaverse applications.",
      "Published research in HCI, multimodal, and medical AI.",
    ],
    tags: ["Unity", "Multimodal AI", "3D Avatars", "Research"],
  },
  {
    period: "2020.12 – 2022.12",
    place: "Peshawar, Pakistan",
    role: "Undergraduate Research Assistant",
    org: "DIP Lab, Islamia College Peshawar",
    logo: "icp",
    points: [
      "Worked on computer vision and deep learning projects.",
      "Assisted in mentoring and project evaluation.",
    ],
    tags: ["Python", "Deep Learning", "Computer Vision", "Research"],
  },
];

const HONORS = [
  { year: "2025.09", title: "University of Ottawa Graduate Studies Scholarship", org: "University of Ottawa" },
  { year: "2022",    title: "Data Science Certificate", org: "Government of Pakistan (NAVTTC)" },
  { year: "2020",    title: "Award of Appreciation", org: "1st position in the Youth Talent Expo" },
];

const EDUCATION = [
  {
    period: "2025.09 – Present",
    place: "Ottawa, Canada",
    degree: "M.A.Sc. in Electrical and Computer Engineering (Applied AI)",
    school: "University of Ottawa",
    tags: ["Applied AI", "Machine Learning", "Computer Vision", "HCI"],
  },
  {
    period: "2017.08 – 2021.09",
    place: "Peshawar, Pakistan",
    degree: "BS in Software Engineering",
    school: "Islamia College Peshawar",
    tags: ["Software Engineering", "AI", "Programming", "Computer Vision"],
  },
];

const SERVICES = [
  {
    title: "Teaching Assistant",
    icon: "teaching",
    items: [
      "Computer Architecture course, University of Ottawa",
      "Python programming course, DIP Lab, Islamia College Peshawar",
    ],
  },
  {
    title: "Mentorship",
    icon: "mentorship",
    items: ["Mentor and project evaluator for final-year students' projects at the DIP Lab"],
  },
  {
    title: "Community & Reviewing",
    icon: "community",
    items: [
      "Attended NVIDIA Omniverse virtual meeting on academic and research applications",
      "Active member of research community, conferences and workshops",
    ],
  },
];

const ACADEMIC_ACTIVITIES = [
  { name: "ACM CHI 2026", detail: "Workshop · Barcelona, Spain" },
  { name: "CVPR 2025", detail: "Conference · Nashville, USA" },
  { name: "IEEE ISC2 2023", detail: "Conference · Bucharest, Romania" },
  { name: "Research Talks", detail: "Seminars & Workshops" },
  { name: "Lab Participation", detail: "Metaverse Center, MBZUAI" },
];

const BEYOND = [
  {
    title: "Cricket",
    desc: "I love cricket and always make time for it.",
    gradient: ["#16a34a", "#4ade80"],
    emoji: "🏏",
  },
  {
    title: "Strength Training",
    desc: "I stay active with regular gym workouts.",
    gradient: ["#334155", "#64748b"],
    emoji: "🏋️",
  },
  {
    title: "Community & Mentorship",
    desc: "I enjoy guiding and mentoring students and being part of the research community.",
    gradient: ["#d97706", "#fbbf24"],
    emoji: "🤝",
  },
];
