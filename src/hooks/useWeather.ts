import { useState, useCallback } from "react";

export interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  city: string;
}

/* WMO weather code → description + icon emoji */
const WMO_MAP: Record<number, [string, string]> = {
  0: ["Clear sky", "☀️"],
  1: ["Mostly clear", "🌤️"],
  2: ["Partly cloudy", "⛅"],
  3: ["Overcast", "☁️"],
  45: ["Foggy", "🌫️"],
  48: ["Rime fog", "🌫️"],
  51: ["Light drizzle", "🌦️"],
  53: ["Drizzle", "🌦️"],
  55: ["Dense drizzle", "🌧️"],
  61: ["Light rain", "🌦️"],
  63: ["Rain", "🌧️"],
  65: ["Heavy rain", "🌧️"],
  71: ["Light snow", "🌨️"],
  73: ["Snow", "❄️"],
  75: ["Heavy snow", "❄️"],
  77: ["Snow grains", "❄️"],
  80: ["Light showers", "🌦️"],
  81: ["Showers", "🌧️"],
  82: ["Heavy showers", "⛈️"],
  85: ["Snow showers", "🌨️"],
  86: ["Heavy snow showers", "🌨️"],
  95: ["Thunderstorm", "⛈️"],
  96: ["Thunderstorm + hail", "⛈️"],
  99: ["Heavy thunderstorm", "⛈️"],
};

function decodeWMO(code: number): [string, string] {
  return WMO_MAP[code] ?? ["Unknown", "🌡️"];
}

/** Reverse geocode coordinates to a city name using Nominatim */
async function reverseGeocode(lat: number, lon: number): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=10`,
    );
    const data = await res.json();
    return (
      data.address?.city ??
      data.address?.town ??
      data.address?.village ??
      data.address?.state ??
      "Your location"
    );
  } catch {
    return "Your location";
  }
}

/**
 * On-demand weather hook — only fetches when requestWeather() is called.
 * Uses Browser Geolocation + Open-Meteo + Nominatim.
 */
export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [denied, setDenied] = useState(false);

  const requestWeather = useCallback(() => {
    if (loading || weather || denied) return;

    if (!("geolocation" in navigator)) {
      setDenied(true);
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const [weatherRes, city] = await Promise.all([
            fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`,
            ).then((r) => r.json()),
            reverseGeocode(pos.coords.latitude, pos.coords.longitude),
          ]);

          const current = weatherRes.current_weather;
          const [description, icon] = decodeWMO(current.weathercode);

          setWeather({
            temp: Math.round(current.temperature),
            description,
            icon,
            city,
          });
        } catch {
          setDenied(true);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setDenied(true);
        setLoading(false);
      },
      { timeout: 8000 },
    );
  }, [loading, weather, denied]);

  return { weather, loading, denied, requestWeather };
}
