interface Props {
  cameraActive?: boolean;
}

/** The camera pill / Dynamic Island at the top of the screen. */
export default function CameraPill({ cameraActive }: Props) {
  return (
    <div className={`camera-pill ${cameraActive ? "camera-active" : ""}`}>
      <div
        className={`cam-dot active ${cameraActive ? "cam-recording" : ""}`}
      />
    </div>
  );
}
