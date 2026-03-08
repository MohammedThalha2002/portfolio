import { PartyPopper } from "lucide-react";
import AppScreen from "../layout/AppScreen";
import { SETTINGS_ITEMS } from "../../data/settings";

interface Props {
  active: boolean;
  devMode: boolean;
  toast: string;
  onGoHome: () => void;
  onBuildNumberTap: () => void;
}

/** Settings / About Phone screen with 7-tap developer mode easter egg. */
export default function SettingsScreen({
  active,
  devMode,
  toast,
  onGoHome,
  onBuildNumberTap,
}: Props) {
  return (
    <AppScreen
      viewId="settings"
      active={active}
      headerClass="settings-header"
      chip="// settings.kt"
      titleLine1="About"
      titleLine2="Phone."
      onGoHome={onGoHome}
    >
      {SETTINGS_ITEMS.map((item, i) => (
        <div key={i} className="settings-item">
          <div className="settings-item-label">{item.label}</div>
          <div className="settings-item-value">{item.value}</div>
        </div>
      ))}

      {/* Build number — the tappable easter egg */}
      <div className="settings-item tappable" onClick={onBuildNumberTap}>
        <div className="settings-item-label">Build number</div>
        <div className="settings-item-value">
          {devMode ? (
            <>
              <PartyPopper size={14} strokeWidth={1.8} /> Dev Mode
            </>
          ) : (
            "tap 7x"
          )}
        </div>
      </div>

      {toast && <div className="dev-toast">{toast}</div>}
    </AppScreen>
  );
}
