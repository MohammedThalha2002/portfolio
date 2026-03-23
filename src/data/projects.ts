import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    type: "⚡ Full-Stack Monitoring Platform",
    name: "PulseSDK",
    description:
      "Full-stack crash & ANR monitoring SDK built with Kotlin Multiplatform: shared KMP core, Android lib, Ktor backend, and React dashboard. ANR watchdog with 5s heartbeat-thread detection, breadcrumb engine auto-capturing navigation/network/memory (circular buffer, 30 events). HMAC-SHA256 authentication with APK fingerprint validation. AI insight pipeline (Gemini, Ollama, OpenAI, Claude) generating root cause & fix suggestions. Model Context Protocol server enabling AI editors to query crashes via natural language. <200ms ingest latency with Room-buffered batch upload.",
    tags: ["Kotlin Multiplatform", "Ktor", "React", "TypeScript", "AI", "MCP"],
  },
  {
    type: "� Full Stack Web Application",
    name: "CertifyEase",
    description:
      "Revolutionized bulk digital certificate generation with AI-driven image recognition for enhanced verification accuracy. Web dashboard with automated workflows and Docker containerization.",
    tags: ["ReactJS", "Node.js", "MongoDB", "Docker", "AI/ML"],
    link: {
      label: "View on GitHub →",
      url: "https://github.com/MohammedThalha2002/certificate-generator",
    },
  },
  {
    type: "🚗 IoT Connected Systems",
    name: "Next-Gen Cockpit Intelligence",
    description:
      "Collaborated with Accenture on IoT-enabled vehicle project. Real-time monitoring dashboard with EAR detection, alcohol sensing, and comprehensive driving parameter analysis using embedded systems.",
    tags: ["IoT", "Raspberry Pi", "Firebase", "React", "Real-time"],
    link: {
      label: "View Demo →",
      url: "https://iot-car-accenture.vercel.app/",
    },
  },
  {
    type: "� Full Stack Service Platform",
    name: "HandyHub",
    description:
      "Comprehensive home service website connecting users with local technicians and service providers. Built with enterprise architecture patterns and microservices design.",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "REST API"],
    link: {
      label: "View Backend →",
      url: "https://github.com/MohammedThalha2002/Home-Service-Backend/",
    },
  },
];
