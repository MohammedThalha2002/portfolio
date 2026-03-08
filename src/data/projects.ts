import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    type: "⚡ Open Source Library",
    name: "ComposeNodeEditor",
    description:
      "A Jetpack Compose visual node editor with infinite canvas (zoom/pan), draggable nodes, Bezier edge routing, port-based connections, and undo/redo. Targets Compose Multiplatform — Android + Desktop.",
    tags: ["Kotlin", "Jetpack Compose", "Multiplatform", "Open Source"],
    link: {
      label: "View on GitHub →",
      url: "https://github.com/MohammedThalha2002",
    },
  },
  {
    type: "🏢 Cross-Org Internal Library",
    name: "Media Editor SDK",
    description:
      "Designed & solely maintained a media editing library (crop, draw, text overlay) adopted by Zoho Cliq, Arattai, and multiple internal Zoho applications.",
    tags: ["Canvas API", "Kotlin", "Bitmap", "Library Design"],
    note: "Adopted by 3+ Zoho products →",
  },
  {
    type: "📄 Internal Library",
    name: "Custom PDF Viewer",
    description:
      "Zero paging dependencies PDF viewer resolving cross-app Paging library version conflicts across Zoho's entire Android ecosystem.",
    tags: ["Kotlin", "Custom Scroll", "Memory Mgmt"],
  },
];
