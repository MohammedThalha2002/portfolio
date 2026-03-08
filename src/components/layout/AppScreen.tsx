import type { ReactNode } from "react";

interface Props {
  viewId: string;
  active: boolean;
  headerClass: string;
  chip: string;
  titleLine1: string;
  titleLine2: string;
  onGoHome: () => void;
  children: ReactNode;
}

/**
 * Reusable wrapper for every app screen.
 * Provides: back button, title chip, two-line title, scrollable content, and home bar.
 *
 * Usage:
 *   <AppScreen viewId="about" active={view === "about"} headerClass="about-header"
 *     chip="// about.kt" titleLine1="About" titleLine2="Me." onGoHome={goHome}>
 *     {content}
 *   </AppScreen>
 */
export default function AppScreen({
  active,
  headerClass,
  chip,
  titleLine1,
  titleLine2,
  onGoHome,
  children,
}: Props) {
  return (
    <div className={`view app-screen ${active ? "active" : ""}`}>
      <div className={`app-header ${headerClass}`}>
        <button className="back-btn" onClick={onGoHome}>
          ← Home
        </button>
        <div className="app-title-chip">{chip}</div>
        <div className="app-screen-title">
          {titleLine1}
          <br />
          <span>{titleLine2}</span>
        </div>
      </div>
      <div className="app-content">{children}</div>
      <div className="home-indicator">
        <div className="home-bar" onClick={onGoHome} />
      </div>
    </div>
  );
}
