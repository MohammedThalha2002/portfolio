import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/** The physical phone shell with side buttons, screen inset, and 3D tilt. */
export default function Phone({ children }: Props) {
  return (
    <div className="phone">
      <div className="screen">{children}</div>
    </div>
  );
}
