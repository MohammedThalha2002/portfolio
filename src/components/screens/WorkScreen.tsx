import AppScreen from "../layout/AppScreen";
import { EXPERIENCE } from "../../data/experience";

interface Props {
  active: boolean;
  onGoHome: () => void;
}

/** Work Experience app screen. */
export default function WorkScreen({ active, onGoHome }: Props) {
  return (
    <AppScreen
      viewId="work"
      active={active}
      headerClass="work-header"
      chip="// experience.kt"
      titleLine1="Work"
      titleLine2="Experience."
      onGoHome={onGoHome}
    >
      {EXPERIENCE.map((exp, i) => (
        <div key={i} className={`work-card ${exp.cardClass}`}>
          {exp.isCurrent && <div className="badge">CURRENT</div>}
          <div className="work-company">{exp.company}</div>
          <div className="work-role">{exp.role}</div>
          <div className="work-period">{exp.period}</div>
          <ul className="work-bullets">
            {exp.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </AppScreen>
  );
}
