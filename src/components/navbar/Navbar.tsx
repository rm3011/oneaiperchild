import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Impacts", href: "#impacts" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      // Hysteresis: activate at 60px, deactivate at 20px
      // Prevents flicker when hovering exactly at the threshold
      setIsScrolled((prev) => {
        if (!prev && y > 60) return true;
        if (prev && y < 20) return false;
        return prev;
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`site-navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-inner">

        <a href="#" className="brand">
          <img
            src="/logo-2.3.png"
            alt="1A1C Logo"
            className="brand-logo"
          />
          <span className="brand-name">1A1C</span>
        </a>

        <div className="nav-right">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a href="#get-involved" className="mission-btn">
            <span>Join the Mission</span>
            <span className="mission-arrow">→</span>
          </a>
        </div>

      </div>
    </nav>
  );
}