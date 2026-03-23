import { useEffect, useRef, useCallback } from "react";
import { Fingerprint, MapPin, CloudSun } from "lucide-react";
import type { WeatherData } from "../../hooks/useWeather";

interface Props {
  active: boolean;
  time: string;
  date: string;
  weather: WeatherData | null;
  weatherLoading: boolean;
  onRequestWeather: () => void;
  unlocking: boolean;
  unlockSuccess: boolean;
  onUnlock: () => void;
}

/** Lock screen with clock, weather, name card, particles, and fingerprint unlock. */
export default function LockScreen({
  active,
  time,
  date,
  weather,
  weatherLoading,
  onRequestWeather,
  unlocking,
  unlockSuccess,
  onUnlock,
}: Props) {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = 6 + Math.random() * 10 + "s";
      p.style.animationDelay = Math.random() * 8 + "s";
      const size = 1 + Math.random() * 2 + "px";
      p.style.width = size;
      p.style.height = size;
      p.style.opacity = String(0.3 + Math.random() * 0.7);
      container.appendChild(p);
    }
  }, []);

  const fpClass = unlocking ? (unlockSuccess ? "success" : "scanning") : "";

  const handleWeatherTap = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation(); // don't trigger unlock
      onRequestWeather();
    },
    [onRequestWeather],
  );

  return (
    <div
      className={`view lock-screen ${active ? "active" : ""}`}
      onClick={onUnlock}
    >
      <div className="lock-wallpaper-glow" />
      <div className="particles" ref={particlesRef} />

      <div className="lock-top">
        <div className="lock-time">{time}</div>
        <div className="lock-date">{date}</div>
        {weather ? (
          <div className="lock-weather">
            <span className="lock-weather-icon">{weather.icon}</span>
            <span className="lock-weather-temp">{weather.temp}°C</span>
            <span className="lock-weather-sep">·</span>
            <span className="lock-weather-desc">{weather.description}</span>
            <span className="lock-weather-city">
              <MapPin size={10} strokeWidth={2} />
              {weather.city}
            </span>
          </div>
        ) : (
          <div className="lock-weather-hint" onClick={handleWeatherTap}>
            <CloudSun size={14} strokeWidth={1.8} />
            {weatherLoading ? "Fetching weather…" : "Tap for weather"}
          </div>
        )}
      </div>

      <div className="lock-name-card">
        <div className="dev-label">// Full Stack Developer</div>
        <div className="dev-name">Mohammed Thalha</div>
      </div>

      <div className="fingerprint-area">
        <div className={`fingerprint-icon ${fpClass}`}>
          <Fingerprint size={32} strokeWidth={1.5} />
        </div>
        <div className="swipe-hint">TAP TO UNLOCK</div>
      </div>
    </div>
  );
}
