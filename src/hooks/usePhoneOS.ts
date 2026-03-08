import { useState, useEffect, useRef, useCallback } from "react";
import type { ViewId } from "../types";
import { INITIAL_BADGES } from "../data/apps";
import { NOTIFICATIONS } from "../data/notifications";

/** Quick-settings tile active states. */
export interface TileStates {
  wifi: boolean;
  bluetooth: boolean;
  location: boolean;
  flashlight: boolean;
  airplane: boolean;
  silent: boolean;
  autoRotate: boolean;
}

const INITIAL_TILES: TileStates = {
  wifi: true,
  bluetooth: true,
  location: true,
  flashlight: false,
  airplane: false,
  silent: false,
  autoRotate: false,
};

/**
 * Central state machine for the phone OS:
 * boot → lock → home ↔ app screens
 * Plus: unlock animation, badges, notification shade, settings easter egg.
 */
export function usePhoneOS() {
  const [view, setView] = useState<ViewId>("boot");
  const [unlocking, setUnlocking] = useState(false);
  const [unlockSuccess, setUnlockSuccess] = useState(false);
  const [badges, setBadges] = useState<Record<string, number>>({
    ...INITIAL_BADGES,
  });
  const [shadeOpen, setShadeOpen] = useState(false);
  const [settingsTaps, setSettingsTaps] = useState(0);
  const [devMode, setDevMode] = useState(false);
  const [toast, setToast] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [tiles, setTiles] = useState<TileStates>({ ...INITIAL_TILES });
  const [notifications, setNotifications] = useState([...NOTIFICATIONS]);
  const touchStartY = useRef(0);

  /* ── Boot sequence ── */
  useEffect(() => {
    const id = setTimeout(() => setView("lock"), 2500);
    return () => clearTimeout(id);
  }, []);

  /* ── Keyboard handler ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (shadeOpen) {
          setShadeOpen(false);
          return;
        }
        if (view !== "lock" && view !== "boot") goHome();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, shadeOpen]);

  /* ── Touch swipe-down → go home ── */
  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      const diff = e.changedTouches[0].clientY - touchStartY.current;
      if (diff > 80 && !["lock", "boot", "home"].includes(view)) goHome();
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  /* ── Actions ── */
  const goHome = useCallback(() => {
    setView("home");
    setShadeOpen(false);
  }, []);

  const unlock = useCallback(() => {
    if (unlocking) return;
    setUnlocking(true);
    setTimeout(() => setUnlockSuccess(true), 400);
    setTimeout(() => {
      setView("home");
      setUnlocking(false);
      setUnlockSuccess(false);
    }, 900);
  }, [unlocking]);

  const openApp = useCallback((id: ViewId) => {
    setView(id);
    setBadges((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    // Reset notifications when opening any app
    setNotifications([...NOTIFICATIONS]);
  }, []);

  const openShade = useCallback(() => setShadeOpen(true), []);
  const closeShade = useCallback(() => setShadeOpen(false), []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const toggleTile = useCallback((key: keyof TileStates) => {
    setTiles((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const dismissNotification = useCallback((index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  }, []);

  const handleSettingsTap = useCallback(() => {
    setSettingsTaps((prev) => {
      const next = prev + 1;
      if (next >= 7) {
        setDevMode(true);
        showToast("You are now a developer! 🎉");
      } else {
        showToast(`${7 - next} taps to developer mode`);
      }
      return next;
    });
  }, [showToast]);

  return {
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
  };
}
