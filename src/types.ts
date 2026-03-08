/* ═══════════════════════════════════════
   Shared types for the Phone Portfolio
   ═══════════════════════════════════════ */

import type { ReactNode } from "react";

export type ViewId =
  | "boot"
  | "lock"
  | "home"
  | "about"
  | "work"
  | "skills"
  | "projects"
  | "edu"
  | "contact"
  | "camera"
  | "settings";

export interface AppEntry {
  id: ViewId;
  icon: ReactNode;
  label: string;
  colorClass: string;
}

export interface DockEntry {
  id: ViewId;
  icon: ReactNode;
  colorClass: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  cardClass: string;
  isCurrent: boolean;
  bullets: string[];
}

export interface SkillSection {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  colorClass: string;
  featured?: boolean;
}

export interface Project {
  type: string;
  name: string;
  description: string;
  tags: string[];
  link?: { label: string; url: string };
  note?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  cgpa: string;
  coursework: string[];
}

export interface Achievement {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ContactLink {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  iconBg: string;
  external?: boolean;
}

export interface Notification {
  app: string;
  title: string;
  body: string;
  time: string;
}

export interface SettingsItem {
  label: string;
  value: string;
  tappable?: boolean;
}

export interface SpecCard {
  label: string;
  value: string;
}
