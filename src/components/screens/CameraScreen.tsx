import { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import {
  ArrowLeft,
  SwitchCamera,
  Circle,
  Image as ImageIcon,
  Download,
  X,
  CameraOff,
} from "lucide-react";

interface Props {
  active: boolean;
  onGoHome: () => void;
}

const ICON = { size: 22, strokeWidth: 1.8 };

/** Camera app screen — uses device webcam via react-webcam. */
export default function CameraScreen({ active, onGoHome }: Props) {
  const webcamRef = useRef<Webcam>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [captured, setCaptured] = useState<string | null>(null);
  const [cameraStarted, setCameraStarted] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);

  /* Reset state when screen becomes inactive */
  useEffect(() => {
    if (!active) {
      setCameraStarted(false);
      setPermissionDenied(false);
      setCaptured(null);
    }
  }, [active]);

  /* ── Capture photo ── */
  const capture = useCallback(() => {
    const shot = webcamRef.current?.getScreenshot();
    if (shot) setCaptured(shot);
  }, []);

  /* ── Flip camera ── */
  const flipCamera = useCallback(() => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  }, []);

  /* ── Download captured photo ── */
  const downloadPhoto = useCallback(() => {
    if (!captured) return;
    const link = document.createElement("a");
    link.href = captured;
    link.download = `portfolio-camera-${Date.now()}.jpg`;
    link.click();
  }, [captured]);

  /* ── Discard captured photo ── */
  const discard = useCallback(() => setCaptured(null), []);

  /* ── Camera ready / permission callbacks ── */
  const onUserMedia = useCallback(() => {
    setCameraStarted(true);
    setPermissionDenied(false);
  }, []);
  const onUserMediaError = useCallback(() => {
    setCameraStarted(true);
    setPermissionDenied(true);
  }, []);

  /* ── Stop event from reaching the shade trigger zone ── */
  const handleBack = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onGoHome();
    },
    [onGoHome],
  );

  return (
    <div className={`view camera-screen ${active ? "active" : ""}`}>
      {/* Camera viewfinder area */}
      <div className="camera-viewfinder">
        {captured ? (
          /* ── Photo preview ── */
          <img src={captured} alt="Captured" className="camera-preview-img" />
        ) : permissionDenied ? (
          /* ── Permission denied state ── */
          <div className="camera-denied">
            <CameraOff size={48} strokeWidth={1.2} />
            <p className="camera-denied-title">Camera Access Denied</p>
            <p className="camera-denied-body">
              Allow camera access in your browser settings to use this app.
            </p>
          </div>
        ) : active ? (
          /* ── Live webcam feed — only mount when screen is active ── */
          <>
            {!cameraStarted && (
              <div className="camera-loading">Requesting camera access…</div>
            )}
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode, width: 375, height: 600 }}
              onUserMedia={onUserMedia}
              onUserMediaError={onUserMediaError}
              mirrored={facingMode === "user"}
              className="camera-feed"
            />
          </>
        ) : null}
      </div>

      {/* Top bar — pushed below camera pill area */}
      <div className="camera-top-bar">
        <button className="camera-btn" onClick={handleBack} aria-label="Back">
          <ArrowLeft {...ICON} />
        </button>
        <span className="camera-mode-label">
          {captured ? "Preview" : "Photo"}
        </span>
        <div style={{ width: 40 }} /> {/* spacer */}
      </div>

      {/* Bottom controls */}
      <div className="camera-bottom-bar">
        {captured ? (
          /* ── Preview controls ── */
          <>
            <button className="camera-btn" onClick={discard} aria-label="Discard">
              <X {...ICON} />
            </button>
            <button
              className="camera-btn camera-download-btn"
              onClick={downloadPhoto}
              aria-label="Download"
            >
              <Download {...ICON} />
            </button>
            <div style={{ width: 40 }} />
          </>
        ) : (
          /* ── Capture controls ── */
          <>
            <button className="camera-btn" aria-label="Gallery">
              <ImageIcon {...ICON} />
            </button>
            <button
              className="camera-shutter"
              onClick={capture}
              disabled={!cameraStarted || permissionDenied}
              aria-label="Capture"
            >
              <Circle size={32} strokeWidth={2} />
            </button>
            <button
              className="camera-btn"
              onClick={flipCamera}
              aria-label="Switch camera"
            >
              <SwitchCamera {...ICON} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
