import { useEffect, useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Impacts", href: "#impacts" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setIsScrolled((p) => (p ? y > 20 : y > 60));
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const close = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`site-navbar${isScrolled ? " is-scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#" className="brand" aria-label="1A1C home" onClick={close}>
            <img src="/logo-2.3.png" alt="" className="brand-logo" />
            <span className="brand-name">1A1C</span>
          </a>

          <div className="nav-right">
            <ul className="nav-links">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>

            <a href="#get-involved" className="mission-btn">
              Join the Mission <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              className={`hamburger${isMenuOpen ? " is-open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile dropdown — inside <nav> so it anchors beneath the navbar */}
        <div
          id="mobile-menu"
          className={`mobile-menu${isMenuOpen ? " is-open" : ""}`}
        >
          <ul>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={close}>{label}</a>
              </li>
            ))}
          </ul>

          <a href="#get-involved" className="mission-btn" onClick={close}>
            Join the Mission <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>

      <div
        className={`mobile-backdrop${isMenuOpen ? " is-open" : ""}`}
        onClick={close}
      />
    </>
  );
}