import { Mail, Linkedin, Github } from "lucide-react";
import type { ContactLink } from "../types";

const ICON_SIZE = 20;
const ICON_STROKE = 1.8;

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: <Mail size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "Email",
    value: "mohammedthalhama@gmail.com",
    href: "mailto:mohammedthalhama@gmail.com",
    iconBg: "rgba(242,139,130,0.15)",
  },
  {
    icon: <Linkedin size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "LinkedIn",
    value: "mohammed-thalha",
    href: "https://linkedin.com/in/mohammed-thalha",
    iconBg: "rgba(168,199,250,0.15)",
    external: true,
  },
  {
    icon: <Github size={ICON_SIZE} strokeWidth={ICON_STROKE} />,
    label: "GitHub",
    value: "MohammedThalha2002",
    href: "https://github.com/MohammedThalha2002",
    iconBg: "rgba(118,215,196,0.15)",
    external: true,
  },
];
