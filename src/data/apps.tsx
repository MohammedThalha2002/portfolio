import {
  User,
  Briefcase,
  Settings2,
  Rocket,
  GraduationCap,
  Mail,
  Camera,
} from "lucide-react";
import type { AppEntry, DockEntry } from "../types";

const ICON_SIZE = 26;
const ICON_STROKE = 1.8;

/**
 * Main app grid entries.
 * To add a new app:
 * 1. Add a ViewId to types.ts
 * 2. Add an entry here
 * 3. Create a screen component in components/screens/
 * 4. Register it in App.tsx's screen map
 */
export const APPS: AppEntry[] = [
  {
    id: "about",
    icon: <User size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "About Me",
    colorClass: "app-about",
  },
  {
    id: "work",
    icon: <Briefcase size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "Experience",
    colorClass: "app-work",
  },
  {
    id: "skills",
    icon: <Settings2 size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "Skills",
    colorClass: "app-skills",
  },
  {
    id: "projects",
    icon: <Rocket size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "Projects",
    colorClass: "app-projects",
  },
  {
    id: "edu",
    icon: <GraduationCap size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "Education",
    colorClass: "app-edu",
  },
  {
    id: "contact",
    icon: <Mail size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "Contact",
    colorClass: "app-contact",
  },
  {
    id: "camera",
    icon: <Camera size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "Camera",
    colorClass: "app-camera",
  },
];

/** Dock shortcuts (max 4 recommended) */
export const DOCK_APPS: DockEntry[] = [
  {
    id: "about",
    icon: <User size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    colorClass: "app-about",
  },
  {
    id: "work",
    icon: <Briefcase size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    colorClass: "app-work",
  },
  {
    id: "projects",
    icon: <Rocket size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    colorClass: "app-projects",
  },
  {
    id: "contact",
    icon: <Mail size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    colorClass: "app-contact",
  },
];

/** Initial notification badges shown on home screen */
export const INITIAL_BADGES: Record<string, number> = {
  work: 3,
  projects: 2,
  contact: 1,
};
