import AppScreen from "../layout/AppScreen";
import { CONTACT_LINKS } from "../../data/contact";

interface Props {
  active: boolean;
  onGoHome: () => void;
}

/** Contact / Let's Connect app screen. */
export default function ContactScreen({ active, onGoHome }: Props) {
  return (
    <AppScreen
      viewId="contact"
      active={active}
      headerClass="contact-header"
      chip="// contact.kt"
      titleLine1="Let's"
      titleLine2="Connect."
      onGoHome={onGoHome}
    >
      <div className="location-card">
        <div className="location-flag">🇮🇳</div>
        <div className="location-city">Chennai, India</div>
        <div className="location-country">Tamil Nadu · Open to Connect</div>
      </div>

      {CONTACT_LINKS.map((link, i) => (
        <a
          key={i}
          className="contact-card"
          href={link.href}
          {...(link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <div className="contact-icon-box" style={{ background: link.iconBg }}>
            {link.icon}
          </div>
          <div className="contact-info">
            <div className="contact-label">{link.label}</div>
            <div className="contact-value">{link.value}</div>
          </div>
          <div className="contact-arrow">›</div>
        </a>
      ))}
    </AppScreen>
  );
}
