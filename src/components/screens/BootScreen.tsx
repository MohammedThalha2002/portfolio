interface Props {
  active: boolean;
}

/** Initial boot animation — logo pulse, subtitle, and spinner. */
export default function BootScreen({ active }: Props) {
  return (
    <div className={`view boot-screen ${active ? "active" : ""}`}>
      <div className="boot-logo">MT</div>
      <div className="boot-text">Android Developer</div>
      <div className="boot-spinner" />
    </div>
  );
}
