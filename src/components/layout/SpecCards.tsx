import type { SpecCard } from "../../types";
import { LEFT_SPEC_CARDS, RIGHT_SPEC_CARDS } from "../../data/specCards";

function CardGroup({
  cards,
  side,
}: {
  cards: SpecCard[];
  side: "left" | "right";
}) {
  return (
    <div className={`spec-cards ${side}`}>
      {cards.map((c, i) => (
        <div key={i} className="spec-card">
          <div className="spec-card-label">{c.label}</div>
          <div className="spec-card-value">{c.value}</div>
        </div>
      ))}
    </div>
  );
}

/** Floating spec cards displayed beside the phone on desktop viewports. */
export default function SpecCards() {
  return (
    <>
      <CardGroup cards={LEFT_SPEC_CARDS} side="left" />
      <CardGroup cards={RIGHT_SPEC_CARDS} side="right" />
    </>
  );
}
