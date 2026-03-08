import type { SkillSection } from "../types";

export const SKILL_SECTIONS: SkillSection[] = [
  {
    title: "Android Core",
    skills: [
      { name: "Kotlin ⭐", colorClass: "kotlin", featured: true },
      { name: "Jetpack Compose ⭐", colorClass: "compose", featured: true },
      { name: "Compose Multiplatform", colorClass: "compose" },
      { name: "Coroutines & Flow", colorClass: "arch" },
      { name: "MVVM + Clean Arch", colorClass: "arch" },
      { name: "Room", colorClass: "kotlin" },
      { name: "Retrofit", colorClass: "kotlin" },
      { name: "WorkManager", colorClass: "arch" },
      { name: "Canvas API", colorClass: "compose" },
      { name: "AppSearch", colorClass: "green" },
      { name: "E2EE", colorClass: "green" },
      { name: "Navigation", colorClass: "kotlin" },
      { name: "JUnit", colorClass: "arch" },
      { name: "ViewBinding", colorClass: "kotlin" },
    ],
  },
  {
    title: "Tools & Infra",
    skills: [
      { name: "Android Studio", colorClass: "arch" },
      { name: "Gradle", colorClass: "green" },
      { name: "Git", colorClass: "green" },
      { name: "CI/CD", colorClass: "compose" },
      { name: "Firebase", colorClass: "pink" },
      { name: "ProGuard/R8", colorClass: "pink" },
      { name: "Figma", colorClass: "arch" },
      { name: "Linux", colorClass: "green" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Kotlin", colorClass: "kotlin" },
      { name: "Java", colorClass: "arch" },
      { name: "SQL", colorClass: "green" },
      { name: "XML", colorClass: "compose" },
    ],
  },
];
