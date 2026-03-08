import AppScreen from "../layout/AppScreen";
import { PROJECTS } from "../../data/projects";

interface Props {
  active: boolean;
  onGoHome: () => void;
}

/** Projects app screen. */
export default function ProjectsScreen({ active, onGoHome }: Props) {
  return (
    <AppScreen
      viewId="projects"
      active={active}
      headerClass="projects-header"
      chip="// projects.kt"
      titleLine1="Things I"
      titleLine2="Built."
      onGoHome={onGoHome}
    >
      {PROJECTS.map((proj, i) => (
        <div key={i} className="project-card">
          <div className="project-type">{proj.type}</div>
          <div className="project-name">{proj.name}</div>
          <div className="project-desc">{proj.description}</div>
          <div className="project-tags">
            {proj.tags.map((tag, j) => (
              <span key={j} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          {proj.link && (
            <a
              className="project-link"
              href={proj.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {proj.link.label}
            </a>
          )}
          {proj.note && <div className="project-link">{proj.note}</div>}
        </div>
      ))}
    </AppScreen>
  );
}
