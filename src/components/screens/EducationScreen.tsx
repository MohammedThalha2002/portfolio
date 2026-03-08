import { BarChart3 } from "lucide-react";
import AppScreen from "../layout/AppScreen";
import { EDUCATION, ACHIEVEMENTS } from "../../data/education";

interface Props {
  active: boolean;
  onGoHome: () => void;
}

/** Education & Achievements app screen. */
export default function EducationScreen({ active, onGoHome }: Props) {
  return (
    <AppScreen
      viewId="edu"
      active={active}
      headerClass="edu-header"
      chip="// education.kt"
      titleLine1="Education &"
      titleLine2="Achievements."
      onGoHome={onGoHome}
    >
      {EDUCATION.map((edu, i) => (
        <div key={i} className="edu-card">
          <div className="edu-degree">{edu.degree}</div>
          <div className="edu-school">{edu.school}</div>
          <div className="edu-period">{edu.period}</div>
          <div className="edu-cgpa">
            <BarChart3
              size={16}
              strokeWidth={1.8}
              style={{
                display: "inline",
                verticalAlign: "middle",
                marginRight: 4,
              }}
            />
            CGPA: {edu.cgpa}
          </div>
          <div className="coursework-label">Coursework</div>
          <div className="course-chips">
            {edu.coursework.map((course, j) => (
              <span key={j} className="course-chip">
                {course}
              </span>
            ))}
          </div>
        </div>
      ))}

      {ACHIEVEMENTS.map((ach, i) => (
        <div key={i} className="achievement-card">
          <div className="achievement-icon">{ach.icon}</div>
          <div className="achievement-title">{ach.title}</div>
          <div className="achievement-desc">{ach.description}</div>
        </div>
      ))}
    </AppScreen>
  );
}
