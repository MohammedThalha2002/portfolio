import { MapPin, Building2, Clock, Smartphone } from "lucide-react";
import AppScreen from "../layout/AppScreen";

interface Props {
  active: boolean;
  onGoHome: () => void;
}

/** About Me app screen. */
export default function AboutScreen({ active, onGoHome }: Props) {
  return (
    <AppScreen
      viewId="about"
      active={active}
      headerClass="about-header"
      chip="// about.kt"
      titleLine1="About"
      titleLine2="Me."
      onGoHome={onGoHome}
    >
      <div className="about-bio">
        <p>
          I build <strong>systems that scale and solve real problems.</strong>
          <br />
          <br />
          Currently shaping <strong>Arattai Messenger</strong> at Zoho — India's
          #1 messaging app on Google Play with 10M+ downloads.
          <br />
          <br />
          <strong>Full-stack engineer</strong> with production experience across
          Android, web applications, IoT systems, and enterprise backends. From
          Spring Boot microservices handling payment workflows to React
          dashboards driving real-time IoT monitoring.
          <br />
          <br />
          I care about the invisible work: the 40ms shaved off a cold start, the
          AI-driven certificate system serving thousands, the embedded sensors
          that prevent accidents.
          <br />
          <br />
          Architecture. Performance. <strong>Craft.</strong>
        </p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-num">10M+</div>
          <div className="stat-label">App Downloads</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">20+</div>
          <div className="stat-label">Projects Shipped</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">3+</div>
          <div className="stat-label">Org-wide libs</div>
        </div>
      </div>

      <div className="detail-chip-row">
        <div className="detail-chip">
          <MapPin size={14} strokeWidth={1.8} /> Chennai, India
        </div>
        <div className="detail-chip">
          <Building2 size={14} strokeWidth={1.8} /> Zoho Corp
        </div>
        <div className="detail-chip">
          <Clock size={14} strokeWidth={1.8} /> 2.5 YOE
        </div>
        <div className="detail-chip">
          <Smartphone size={14} strokeWidth={1.8} /> Full Stack
        </div>
      </div>
    </AppScreen>
  );
}
