import type { SkillSection } from "../types";

export const SKILL_SECTIONS: SkillSection[] = [
  {
    title: "Languages",
    skills: [
      { name: "Kotlin ⭐", colorClass: "kotlin", featured: true },
      { name: "Java ⭐", colorClass: "arch", featured: true },
      { name: "JavaScript", colorClass: "compose" },
      { name: "TypeScript", colorClass: "compose" },
      { name: "C", colorClass: "green" },
      { name: "Dart", colorClass: "kotlin" },
      { name: "SQL", colorClass: "green" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Jetpack Compose ⭐", colorClass: "compose", featured: true },
      { name: "ReactJS", colorClass: "compose" },
      { name: "Next.js", colorClass: "kotlin" },
      { name: "Angular", colorClass: "arch" },
      { name: "Flutter", colorClass: "kotlin" },
      { name: "THREE.js", colorClass: "compose" },
      { name: "Tailwind CSS", colorClass: "green" },
      { name: "HTML/CSS", colorClass: "pink" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Spring Boot ⭐", colorClass: "green", featured: true },
      { name: "Node.js", colorClass: "compose" },
      { name: "Express.js", colorClass: "kotlin" },
      { name: "MySQL", colorClass: "arch" },
      { name: "PostgreSQL", colorClass: "kotlin" },
      { name: "MongoDB", colorClass: "green" },
      { name: "Firebase", colorClass: "pink" },
      { name: "Room", colorClass: "kotlin" },
    ],
  },
  {
    title: "Android Development",
    skills: [
      { name: "Compose Multiplatform", colorClass: "compose" },
      { name: "Coroutines & Flow", colorClass: "arch" },
      { name: "MVVM + Clean Arch", colorClass: "arch" },
      { name: "Retrofit", colorClass: "kotlin" },
      { name: "WorkManager", colorClass: "arch" },
      { name: "Canvas API", colorClass: "compose" },
      { name: "AppSearch", colorClass: "green" },
      { name: "E2EE", colorClass: "green" },
      { name: "Navigation", colorClass: "kotlin" },
      { name: "JUnit", colorClass: "arch" },
    ],
  },
  {
    title: "Developer Tools & DevOps",
    skills: [
      { name: "Docker", colorClass: "compose" },
      { name: "Kubernetes", colorClass: "kotlin" },
      { name: "Git", colorClass: "green" },
      { name: "CI/CD", colorClass: "compose" },
      { name: "AWS", colorClass: "pink" },
      { name: "Linux/Unix", colorClass: "green" },
      { name: "REST API", colorClass: "arch" },
      { name: "Gradle", colorClass: "green" },
      { name: "Figma", colorClass: "arch" },
    ],
  },
  {
    title: "IoT & Embedded",
    skills: [
      { name: "Raspberry Pi", colorClass: "pink" },
      { name: "ESP32 & ESP8266", colorClass: "kotlin" },
      { name: "Sensor Integration", colorClass: "green" },
      { name: "Real-time Systems", colorClass: "compose" },
      { name: "Arduino", colorClass: "arch" },
    ],
  },
];
