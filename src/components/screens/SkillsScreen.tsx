import AppScreen from "../layout/AppScreen";
import { SKILL_SECTIONS } from "../../data/skills";

interface Props {
  active: boolean;
  onGoHome: () => void;
}

/** Skills / Craft app screen. */
export default function SkillsScreen({ active, onGoHome }: Props) {
  return (
    <AppScreen
      viewId="skills"
      active={active}
      headerClass="skills-header"
      chip="// skills.kt"
      titleLine1="The"
      titleLine2="Craft."
      onGoHome={onGoHome}
    >
      {SKILL_SECTIONS.map((section, i) => (
        <div key={i}>
          <div className="skills-section-title">{section.title}</div>
          <div className="skills-tags">
            {section.skills.map((skill, j) => (
              <span
                key={j}
                className={`skill-tag ${skill.colorClass}${skill.featured ? " featured" : ""}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </AppScreen>
  );
}
