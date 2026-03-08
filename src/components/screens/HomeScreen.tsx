import { Settings } from "lucide-react";
import type { ViewId } from "../../types";
import type { TileStates } from "../../hooks/usePhoneOS";
import { APPS, DOCK_APPS } from "../../data/apps";
import StatusBar from "../layout/StatusBar";
import HomeIndicator from "../layout/HomeIndicator";

interface Props {
  active: boolean;
  time: string;
  tiles: TileStates;
  badges: Record<string, number>;
  onOpenApp: (id: ViewId) => void;
  onGoHome: () => void;
}

/** Home screen with greeting, app grid, dock, and status bar. */
export default function HomeScreen({
  active,
  time,
  tiles,
  badges,
  onOpenApp,
  onGoHome,
}: Props) {
  return (
    <div className={`view home-screen ${active ? "active" : ""}`}>
      <div className="home-wallpaper-glow" />

      <StatusBar time={time} tiles={tiles} />

      <div className="home-greeting">
        <div className="greeting-small">// welcome to my portfolio</div>
        <div className="greeting-big">
          Hi, I'm
          <br />
          <span>Thalha.</span>
        </div>
      </div>

      <div className="app-grid">
        {APPS.map((app) => (
          <button
            key={app.id}
            className="app-icon"
            onClick={() => onOpenApp(app.id)}
          >
            <div className="app-icon-wrapper">
              <div className={`app-icon-bg ${app.colorClass}`}>{app.icon}</div>
              {badges[app.id] && (
                <div className="app-badge">{badges[app.id]}</div>
              )}
            </div>
            <span className="app-label">{app.label}</span>
          </button>
        ))}
        {/* Settings — hidden 7th app */}
        <button className="app-icon" onClick={() => onOpenApp("settings")}>
          <div className="app-icon-bg app-settings">
            <Settings size={26} strokeWidth={1.8} />
          </div>
          <span className="app-label">Settings</span>
        </button>
      </div>

      <div className="dock">
        {DOCK_APPS.map((app) => (
          <button
            key={app.id}
            className="app-icon"
            onClick={() => onOpenApp(app.id)}
          >
            <div className={`app-icon-bg ${app.colorClass}`}>{app.icon}</div>
          </button>
        ))}
      </div>

      <HomeIndicator onGoHome={onGoHome} />
    </div>
  );
}
