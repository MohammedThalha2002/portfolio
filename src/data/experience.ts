import type { Experience } from "../types";

export const EXPERIENCE: Experience[] = [
  {
    company: "Zoho Corporation",
    role: "Member Technical Staff · Android",
    period: "Feb 2024 – Present",
    cardClass: "zoho",
    isCurrent: true,
    bullets: [
      "Core Android engineer on Arattai Messenger (10M+ downloads, #1 ranked on Google Play India), architecting features for India's leading privacy-first messaging platform serving 4M+ MAUs",
      "Optimized app cold-start time by 40% via Baseline Profile generation, lazy initialization, coroutine-based async loading and cold/warm/hot startup trace instrumentation",
      "Contributed to end-to-end encryption using the Labyrinth protocol. Integrated multi-device E2EE with primary/companion device session management, epoch reset, and recovery code generation",
      "Extended message search to support E2EE chats by building an on-device indexing layer using Android AppSearch enabling offline full-text retrieval",
      "Designed and built encrypted chat backup and restore system and device-to-device chat transfer (cross-platform) ensuring reliable data recovery across device transitions",
      "Designed and solely maintained a cross-organization internal Media Editor library (crop, draw, text overlay) adopted by 15+ Zoho products including Arattai, Zoho Cliq",
      "Built a zero-dependency custom PDF Viewer library with custom scroll and memory-efficient page rendering, adopted by 3+ Zoho products",
    ],
  },
  {
    company: "Worldline Global",
    role: "Java Developer",
    period: "Sep 2023 – Jan 2024",
    cardClass: "worldline",
    isCurrent: false,
    bullets: [
      "Payment workflows & fintech integration systems",
      "Enterprise-level Java applications with Spring Boot",
      "JPA & Hibernate for data persistence layer",
      "Microservices architecture & RESTful APIs",
      "Banking domain: Cards, transactions & compliance",
    ],
  },
  {
    company: "Raptee Energy",
    role: "Full Stack Developer",
    period: "Aug 2022 – May 2023",
    cardClass: "raptee",
    isCurrent: false,
    bullets: [
      "Developed & deployed official company website",
      "Next.js framework for enhanced front-end performance",
      "40% improvement in page load times",
      "Optimized user engagement & interaction flows",
      "Responsive design with modern web technologies",
    ],
  },
];
