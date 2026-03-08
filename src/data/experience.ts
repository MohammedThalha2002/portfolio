import type { Experience } from "../types";

export const EXPERIENCE: Experience[] = [
  {
    company: "Zoho Corporation",
    role: "Member Technical Staff · Android",
    period: "Feb 2024 – Present",
    cardClass: "zoho",
    isCurrent: true,
    bullets: [
      "Arattai Messenger — 10M+ downloads, #1 Play Store India",
      "40% cold-start improvement via lazy init & thread offloading",
      "Hybrid message search: AppSearch + E2EE migration",
      "Encrypted backup & cross-device transfer system",
      "Canvas sticker creation & Bitmap rendering module",
      "Media Editor library: Cliq, Arattai & internal apps",
      "Custom PDF Viewer resolving org-wide paging conflicts",
    ],
  },
  {
    company: "Worldline Global",
    role: "Java Developer",
    period: "Sep 2023 – Jan 2024",
    cardClass: "worldline",
    isCurrent: false,
    bullets: ["Fintech payment workflows & integration systems"],
  },
  {
    company: "Raptee Energy",
    role: "Full Stack Developer",
    period: "Aug 2022 – May 2023",
    cardClass: "raptee",
    isCurrent: false,
    bullets: [
      "Built & deployed official company website",
      "Improved page load performance & user engagement",
    ],
  },
];
