import { useState, useEffect } from "react";
import { G } from "../theme";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Timeline", "Contact"];

function Navbar({ active, setActive }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position:       "fixed",
        top:            0, left: 0, right: 0,
        zIndex:         1000,
        background:     scrolled ? `${G.bg}F0` : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom:   scrolled ? `1px solid ${G.rule}` : "none",
        transition:     "all 0.4s ease",
        padding:        "0 5vw",
      }}>
        <div style={{
          maxWidth:       1280,
          margin:         "0 auto",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          height:         64,
        }}>
          {/* Logo mark */}
          <div onClick={() => scrollTo("Home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 28, height: 28,
              background: G.accent,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: G.white, fontFamily: "'Bebas Neue'", fontSize: 16, lineHeight: 1 }}>N</span>
            </div>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em", color: G.inkMid, textTransform: "uppercase" }}>
              Mugerwa
            </span>
          </div>

          {/* Desktop links */}
          <div className="hide-mobile" style={{ display: "flex", gap: 0, alignItems: "center" }}>
            {NAV_LINKS.map((link) => (
              <button key={link} onClick={() => scrollTo(link)}
                style={{
                  background:    "none",
                  border:        "none",
                  cursor:        "pointer",
                  fontFamily:    "'DM Mono', monospace",
                  fontSize:      11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color:         active === link ? G.accent : G.inkMid,
                  padding:       "8px 16px",
                  transition:    "color 0.2s",
                  borderBottom:  active === link ? `2px solid ${G.accent}` : "2px solid transparent",
                }}
                onMouseEnter={e => e.currentTarget.style.color = G.accent}
                onMouseLeave={e => e.currentTarget.style.color = active === link ? G.accent : G.inkMid}
              >
                {link}
              </button>
            ))}

            {/* CV Download button */}
            <a href="#cv"
              style={{
                marginLeft:    16,
                background:    G.accent,
                color:         G.white,
                fontFamily:    "'DM Mono', monospace",
                fontSize:      11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding:       "8px 18px",
                textDecoration: "none",
                transition:    "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = G.accentLight}
              onMouseLeave={e => e.currentTarget.style.background = G.accent}
            >
              ↓ CV
            </a>
          </div>

          {/* Hamburger */}
          <button className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: G.ink, padding: 4 }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position:       "fixed",
          top:            64, left: 0, right: 0,
          zIndex:         999,
          background:     G.bg,
          borderBottom:   `1px solid ${G.rule}`,
          padding:        "24px 5vw",
          animation:      "fadeIn 0.2s ease",
        }}>
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{
                display:       "block",
                width:         "100%",
                background:    "none",
                border:        "none",
                cursor:        "pointer",
                fontFamily:    "'DM Mono', monospace",
                fontSize:      13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         active === link ? G.accent : G.ink,
                padding:       "14px 0",
                textAlign:     "left",
                borderBottom:  `1px solid ${G.rule}`,
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
