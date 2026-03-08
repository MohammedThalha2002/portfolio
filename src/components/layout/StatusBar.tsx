import {
  Wifi,
  WifiOff,
  BatteryFull,
  Signal,
  Bluetooth,
  MapPin,
  Plane,
  VolumeX,
} from "lucide-react";
import type { TileStates } from "../../hooks/usePhoneOS";

interface Props {
  time: string;
  tiles: TileStates;
}

const SZ = 11;
const SW = 2;

/** Top status bar with time and state-driven icons. */
export default function StatusBar({ time, tiles }: Props) {
  return (
    <div className="status-bar">
      <span className="status-time">{time}</span>
      <div className="status-icons">
        {tiles.silent && <VolumeX size={SZ} strokeWidth={SW} />}
        {tiles.airplane && <Plane size={SZ} strokeWidth={SW} />}
        {tiles.location && <MapPin size={SZ} strokeWidth={SW} />}
        {tiles.bluetooth && <Bluetooth size={SZ} strokeWidth={SW} />}
        {tiles.wifi ? (
          <Wifi size={SZ} strokeWidth={SW} />
        ) : (
          <WifiOff size={SZ} strokeWidth={SW} className="status-icon-off" />
        )}
        <Signal size={SZ} strokeWidth={SW} />
        <BatteryFull size={13} strokeWidth={SW} />
      </div>
    </div>
  );
}
