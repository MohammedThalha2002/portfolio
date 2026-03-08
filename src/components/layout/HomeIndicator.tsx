interface Props {
  onGoHome: () => void;
}

/** The pill/bar at the bottom of a screen, acts as a home gesture target. */
export default function HomeIndicator({ onGoHome }: Props) {
  return (
    <div className="home-indicator">
      <div className="home-bar" onClick={onGoHome} />
    </div>
  );
}
