import "./App.css";
import { useClock } from "./hooks/useClock";
import { usePhoneOS } from "./hooks/usePhoneOS";
import { useWeather } from "./hooks/useWeather";

// Layout
import Phone from "./components/layout/Phone";
import CameraPill from "./components/layout/CameraPill";
import NotificationShade from "./components/layout/NotificationShade";
import SpecCards from "./components/layout/SpecCards";

// Screens
import BootScreen from "./components/screens/BootScreen";
import LockScreen from "./components/screens/LockScreen";
import HomeScreen from "./components/screens/HomeScreen";
import AboutScreen from "./components/screens/AboutScreen";
import WorkScreen from "./components/screens/WorkScreen";
import SkillsScreen from "./components/screens/SkillsScreen";
import ProjectsScreen from "./components/screens/ProjectsScreen";
import EducationScreen from "./components/screens/EducationScreen";
import ContactScreen from "./components/screens/ContactScreen";
import CameraScreen from "./components/screens/CameraScreen";
import SettingsScreen from "./components/screens/SettingsScreen";

export default function App() {
  const { time, date } = useClock();
  const { weather, loading: weatherLoading, requestWeather } = useWeather();
  const {
    view,
    unlocking,
    unlockSuccess,
    badges,
    shadeOpen,
    devMode,
    toast,
    theme,
    tiles,
    notifications,
    goHome,
    unlock,
    openApp,
    openShade,
    closeShade,
    toggleTheme,
    toggleTile,
    dismissNotification,
    handleSettingsTap,
  } = usePhoneOS();

  return (
    <div className="scene" data-theme={theme}>
      <SpecCards />

      <Phone>
        <CameraPill cameraActive={view === "camera"} />
        <NotificationShade
          open={shadeOpen}
          theme={theme}
          tiles={tiles}
          notifications={notifications}
          onOpen={openShade}
          onClose={closeShade}
          onToggleTheme={toggleTheme}
          onToggleTile={toggleTile}
          onDismissNotification={dismissNotification}
        />

        <BootScreen active={view === "boot"} />
        <LockScreen
          active={view === "lock"}
          time={time}
          date={date}
          weather={weather}
          weatherLoading={weatherLoading}
          onRequestWeather={requestWeather}
          unlocking={unlocking}
          unlockSuccess={unlockSuccess}
          onUnlock={unlock}
        />
        <HomeScreen
          active={view === "home"}
          time={time}
          tiles={tiles}
          badges={badges}
          onOpenApp={openApp}
          onGoHome={goHome}
        />

        {/* App screens */}
        <AboutScreen active={view === "about"} onGoHome={goHome} />
        <WorkScreen active={view === "work"} onGoHome={goHome} />
        <SkillsScreen active={view === "skills"} onGoHome={goHome} />
        <ProjectsScreen active={view === "projects"} onGoHome={goHome} />
        <EducationScreen active={view === "edu"} onGoHome={goHome} />
        <ContactScreen active={view === "contact"} onGoHome={goHome} />
        <CameraScreen active={view === "camera"} onGoHome={goHome} />
        <SettingsScreen
          active={view === "settings"}
          devMode={devMode}
          toast={toast}
          onGoHome={goHome}
          onBuildNumberTap={handleSettingsTap}
        />
      </Phone>

      <div className="scene-label">
        Mohammed Thalha · Android Developer Portfolio · 2025
      </div>
    </div>
  );
}
