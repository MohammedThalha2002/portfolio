import { useRef, useCallback } from "react";
import {
  Wifi,
  Bluetooth,
  MapPin,
  Flashlight,
  Plane,
  VolumeX,
  RotateCw,
  Sun,
  Moon,
} from "lucide-react";
import type { Notification } from "../../types";
import type { TileStates } from "../../hooks/usePhoneOS";

interface Props {
  open: boolean;
  theme: "dark" | "light";
  tiles: TileStates;
  notifications: Notification[];
  onOpen: () => void;
  onClose: () => void;
  onToggleTheme: () => void;
  onToggleTile: (key: keyof TileStates) => void;
  onDismissNotification: (index: number) => void;
}

const TILE_SIZE = 18;
const TILE_STROKE = 1.8;

/** Pull-down notification shade with quick tiles and notification cards. */
export default function NotificationShade({
  open,
  theme,
  tiles,
  notifications,
  onOpen,
  onClose,
  onToggleTheme,
  onToggleTile,
  onDismissNotification,
}: Props) {
  const dragStartY = useRef<number | null>(null);
  const shadeRef = useRef<HTMLDivElement>(null);

  /* ── Swipe-down trigger zone (top 52px of screen) ── */
  const onTriggerPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (open) return;
      dragStartY.current = e.clientY;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [open],
  );

  const onTriggerPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (dragStartY.current === null || open) return;
      const diff = e.clientY - dragStartY.current;
      if (diff > 50) {
        dragStartY.current = null;
        onOpen();
      }
    },
    [open, onOpen],
  );

  const onTriggerPointerUp = useCallback(() => {
    dragStartY.current = null;
  }, []);

  /* ── Swipe-up to close the shade ── */
  const shadeStartY = useRef<number | null>(null);

  const onShadePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!open) return;
      shadeStartY.current = e.clientY;
    },
    [open],
  );

  const onShadePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (shadeStartY.current === null || !open) return;
      const diff = shadeStartY.current - e.clientY;
      if (diff > 60) {
        shadeStartY.current = null;
        onClose();
      }
    },
    [open, onClose],
  );

  const onShadePointerUp = useCallback(() => {
    shadeStartY.current = null;
  }, []);

  const TILES: {
    key: keyof TileStates | "theme";
    icon: React.ReactNode;
    active: boolean;
  }[] = [
    {
      key: "wifi",
      icon: <Wifi size={TILE_SIZE} strokeWidth={TILE_STROKE} />,
      active: tiles.wifi,
    },
    {
      key: "bluetooth",
      icon: <Bluetooth size={TILE_SIZE} strokeWidth={TILE_STROKE} />,
      active: tiles.bluetooth,
    },
    {
      key: "location",
      icon: <MapPin size={TILE_SIZE} strokeWidth={TILE_STROKE} />,
      active: tiles.location,
    },
    {
      key: "flashlight",
      icon: <Flashlight size={TILE_SIZE} strokeWidth={TILE_STROKE} />,
      active: tiles.flashlight,
    },
    {
      key: "airplane",
      icon: <Plane size={TILE_SIZE} strokeWidth={TILE_STROKE} />,
      active: tiles.airplane,
    },
    {
      key: "silent",
      icon: <VolumeX size={TILE_SIZE} strokeWidth={TILE_STROKE} />,
      active: tiles.silent,
    },
    {
      key: "autoRotate",
      icon: <RotateCw size={TILE_SIZE} strokeWidth={TILE_STROKE} />,
      active: tiles.autoRotate,
    },
    {
      key: "theme",
      icon:
        theme === "dark" ? (
          <Moon size={TILE_SIZE} strokeWidth={TILE_STROKE} />
        ) : (
          <Sun size={TILE_SIZE} strokeWidth={TILE_STROKE} />
        ),
      active: theme === "light",
    },
  ];

  const handleTileClick = useCallback(
    (key: keyof TileStates | "theme") => {
      if (key === "theme") onToggleTheme();
      else onToggleTile(key);
    },
    [onToggleTheme, onToggleTile],
  );

  return (
    <>
      {/* Invisible swipe-down trigger zone at the top of the screen */}
      <div
        className="shade-trigger-zone"
        onPointerDown={onTriggerPointerDown}
        onPointerMove={onTriggerPointerMove}
        onPointerUp={onTriggerPointerUp}
        onClick={!open ? onOpen : undefined}
      />

      <div
        ref={shadeRef}
        className={`notification-shade ${open ? "open" : ""}`}
        onPointerDown={onShadePointerDown}
        onPointerMove={onShadePointerMove}
        onPointerUp={onShadePointerUp}
      >
        <div className="shade-handle-bar" />
        <div className="shade-quick-tiles">
          {TILES.map((tile) => (
            <div
              key={tile.key}
              className={`shade-tile ${tile.active ? "active" : ""}`}
              onClick={() => handleTileClick(tile.key)}
              style={{ cursor: "pointer" }}
            >
              {tile.icon}
            </div>
          ))}
        </div>

        {notifications.length > 0 ? (
          notifications.map((n, i) => (
            <DismissableNotification
              key={`${n.app}-${n.title}-${i}`}
              notification={n}
              onDismiss={() => onDismissNotification(i)}
            />
          ))
        ) : (
          <div className="shade-no-notifications">No notifications</div>
        )}

        <div className="shade-close-hint" onClick={onClose}>
          Swipe up or tap to close · Press Esc
        </div>
      </div>
    </>
  );
}

/* ── Dismissable notification card (horizontal swipe) ── */
function DismissableNotification({
  notification,
  onDismiss,
}: {
  notification: Notification;
  onDismiss: () => void;
}) {
  const startX = useRef<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    startX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (startX.current === null || !cardRef.current) return;
    const dx = e.clientX - startX.current;
    cardRef.current.style.transform = `translateX(${dx}px)`;
    cardRef.current.style.opacity = `${Math.max(0, 1 - Math.abs(dx) / 200)}`;
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (startX.current === null || !cardRef.current) return;
      const dx = e.clientX - startX.current;
      startX.current = null;

      if (Math.abs(dx) > 100) {
        // Dismiss: animate out
        const dir = dx > 0 ? 1 : -1;
        cardRef.current.style.transition =
          "transform 0.25s ease, opacity 0.25s ease";
        cardRef.current.style.transform = `translateX(${dir * 400}px)`;
        cardRef.current.style.opacity = "0";
        setTimeout(onDismiss, 250);
      } else {
        // Snap back
        cardRef.current.style.transition =
          "transform 0.2s ease, opacity 0.2s ease";
        cardRef.current.style.transform = "translateX(0)";
        cardRef.current.style.opacity = "1";
        setTimeout(() => {
          if (cardRef.current) {
            cardRef.current.style.transition = "";
          }
        }, 200);
      }
    },
    [onDismiss],
  );

  return (
    <div
      ref={cardRef}
      className="shade-notification"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{ touchAction: "pan-y" }}
    >
      <div className="shade-notif-title">
        {notification.app}: {notification.title}
      </div>
      <div className="shade-notif-body">{notification.body}</div>
      <div className="shade-notif-time">{notification.time}</div>
    </div>
  );
}
