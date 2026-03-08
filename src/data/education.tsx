import { Trophy, Bot, Code2 } from "lucide-react";
import type { Education, Achievement } from "../types";

export const EDUCATION: Education[] = [
  {
    degree: "B.E Electronics & Communication Engineering",
    school: "Chennai Institute of Technology",
    period: "Sep 2020 – Jun 2024 · Chennai, Tamil Nadu",
    cgpa: "8.64 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Computer Networks",
      "Communication Systems",
      "Embedded Systems",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: <Trophy size={20} strokeWidth={1.8} />,
    title: "Zoho Cliqtrix'24 — Honorable Mention",
    description:
      "Recognized for technical innovation in an organization-wide hackathon at Zoho.",
  },
  {
    icon: <Bot size={20} strokeWidth={1.8} />,
    title: "IoT Mentor",
    description:
      "Conducted hands-on workshops for 50+ students on IoT technologies, sensor integration, and practical applications.",
  },
  {
    icon: <Code2 size={20} strokeWidth={1.8} />,
    title: "Full Stack Dev Team Lead",
    description:
      "Led development teams for Vidyutrenz 2022 & 2023 technical symposiums and LUMOS 2023 college magazine.",
  },
];
