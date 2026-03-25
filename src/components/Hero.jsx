// ─── COMPONENT: Hero.jsx ─────────────────────────────────────────────────────
// Hero section with a 2-slide system:
//   Slide 0 — Your name + intro text (name pushed lower on screen)
//   Slide 1 — Your photo + personal caption
// Auto-advances every 6 seconds. Click dots or arrows to switch manually.

import { useState, useEffect } from "react";
import { G } from "../theme";

const ROLES = ["IT Student", "Systems Thinker", "Web Developer", "Tech Futurist"];

// ── Typing effect ─────────────────────────────────────────────────────────────
function TypingEffect({ words }) {
  const [display,  setDisplay]  = useState("");
  const [wordIdx,  setWordIdx]  = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word  = words[wordIdx];
    const speed = deleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, charIdx + 1));
        if (charIdx + 1 === word.length) setTimeout(() => setDeleting(true), 2200);
        else setCharIdx(c => c + 1);
      } else {
        setDisplay(word.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
          setCharIdx(0);
        } else setCharIdx(c => c - 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span>
      {display}
      <span style={{
        display:       "inline-block",
        width:         3,
        height:        "0.85em",
        background:    G.accent,
        marginLeft:    3,
        verticalAlign: "middle",
        animation:     "fadeIn 0.8s ease-in-out infinite alternate",
      }} />
    </span>
  );
}

// ── Slide 0: Name + intro ─────────────────────────────────────────────────────
function SlideIntro() {
  return (
    <div style={{
      minHeight:      "100vh",
      background:     G.bgDark,
      display:        "flex",
      flexDirection:  "column",
      justifyContent: "flex-end",   // ← name pushed toward bottom
      padding:        "0 5vw 100px",
      position:       "relative",
      overflow:       "hidden",
    }}>

      {/* Subtle vertical texture lines */}
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position:      "absolute",
          top:           0, bottom: 0,
          left:          `${10 + i * 16}%`,
          width:         1,
          background:    `linear-gradient(transparent, ${G.ruleDark}55, transparent)`,
          pointerEvents: "none",
        }} />
      ))}

      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32, animation: "fadeUp 0.8s ease 0.1s both" }}>
          <div style={{ width: 40, height: 1, background: G.accent }} />
          <span className="label" style={{ color: "#505050" }}>Portfolio · 2025</span>
        </div>

        {/* Name */}
        <h1 className="display" style={{ color: G.inkInverse, marginBottom: 0, animation: "fadeUp 0.9s ease 0.2s both" }}>
          NICKSON
        </h1>
        <h1 className="display" style={{
          color: "transparent", WebkitTextStroke: `2px ${G.inkInverse}`,
          marginBottom: 40, animation: "fadeUp 0.9s ease 0.3s both",
        }}>
          MUGERWA
        </h1>

        {/* Bottom two-col row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end", animation: "fadeUp 0.8s ease 0.4s both" }} className="two-col">

          {/* Left — role + bio */}
          <div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "#808080", marginBottom: 16 }}>
              <TypingEffect words={ROLES} />
            </div>
            <p style={{ fontFamily: "'Manrope'", fontSize: "0.95rem", color: "#606060", lineHeight: 1.85, fontWeight: 300, maxWidth: 420 }}>
              Driven by the conviction that{" "}
              <span style={{ color: G.accent, fontWeight: 600 }}>technology shapes tomorrow</span>
              {" "}— I build systems that connect people and solve real problems.
            </p>
          </div>

          {/* Right — CTAs + stats */}
          <div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <a href="#projects" style={{ background: G.inkInverse, color: G.bgDark, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = G.accent}
                onMouseLeave={e => e.currentTarget.style.background = G.inkInverse}
              >View Work →</a>
              <a href="#contact" style={{ background: "transparent", color: G.inkInverse, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", border: "1px solid #2A2A2A", transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = G.inkInverse}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#2A2A2A"}
              >Contact</a>
            </div>
            <div style={{ display: "flex", gap: 40 }}>
              {[{ n: "6+", label: "Projects" }, { n: "3+", label: "Years Learning" }, { n: "10+", label: "Technologies" }].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Bebas Neue'", fontSize: "2.2rem", color: G.accent, lineHeight: 1 }}>{s.n}</div>
                  <div className="label" style={{ color: "#505050", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Slide 1: Photo ────────────────────────────────────────────────────────────
function SlidePhoto() {
  return (
    <div style={{ minHeight: "100vh", background: G.bgDark, display: "flex", alignItems: "stretch", position: "relative", overflow: "hidden" }}>

      {/* Left — photo */}
      <div style={{ flex: "0 0 55%", position: "relative", overflow: "hidden" }}>
        {/*
          ── YOUR PHOTO ────────────────────────────────────────────────────────
          Replace the src with your own photo:
            1. Put your photo file (e.g. "my-photo.jpg") in the /public folder
            2. Change src to "/my-photo.jpg"
          ─────────────────────────────────────────────────────────────────────
        */}
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
          alt="Nickson Mugerwa"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", filter: "grayscale(15%)" }}
        />
        {/* Gradient blending right edge */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, transparent 55%, ${G.bgDark} 100%)` }} />
        {/* Accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 4, background: G.accent }} />
      </div>

      {/* Right — info */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 5vw 80px 60px", position: "relative", zIndex: 1 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48, animation: "fadeUp 0.8s ease 0.1s both" }}>
          <div style={{ width: 40, height: 1, background: G.accent }} />
          <span className="label" style={{ color: "#505050" }}>The Person</span>
        </div>

        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: G.inkInverse, lineHeight: 0.95, marginBottom: 32, animation: "fadeUp 0.8s ease 0.2s both" }}>
          BUILDING<br />
          <span style={{ color: G.accent }}>THE FUTURE</span><br />
          ONE LINE<br />AT A TIME.
        </h2>

        <p style={{ fontFamily: "'Manrope'", fontSize: "0.9rem", color: "#606060", lineHeight: 1.9, fontWeight: 300, maxWidth: 340, marginBottom: 48, animation: "fadeUp 0.8s ease 0.3s both" }}>
          IT & Computer Systems student based in Riga. Passionate about networks, full-stack development, and the systems that make the modern world run.
        </p>

        <div style={{ display: "flex", gap: 24, animation: "fadeUp 0.8s ease 0.4s both" }}>
          {[{ label: "GitHub", href: "#" }, { label: "LinkedIn", href: "#" }, { label: "Email", href: "#contact" }].map(s => (
            <a key={s.label} href={s.href}
              style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#505050", textDecoration: "none", borderBottom: "1px solid #2A2A2A", paddingBottom: 4, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = G.accent; e.currentTarget.style.borderColor = G.accent; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#505050"; e.currentTarget.style.borderColor = "#2A2A2A"; }}
            >{s.label} ↗</a>
          ))}
        </div>

        <div style={{ position: "absolute", bottom: 40, right: "5vw", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#303030", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Riga, Latvia 🇱🇻
        </div>
      </div>
    </div>
  );
}

// ── Main Hero with slide controller ──────────────────────────────────────────
function Hero() {
  const [slide, setSlide] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % 2), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" style={{ position: "relative", overflow: "hidden" }}>

      {/* Slide content */}
      <div key={slide} style={{ animation: "slideInRight 0.7s ease both" }}>
        {slide === 0 ? <SlideIntro /> : <SlidePhoto />}
      </div>

      {/* Dots */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10, zIndex: 10 }}>
        {[0, 1].map(i => (
          <button key={i} onClick={() => setSlide(i)}
            style={{ width: i === slide ? 28 : 8, height: 8, borderRadius: 4, background: i === slide ? G.accent : "#2A2A2A", border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      {["←", "→"].map((arrow, idx) => (
        <button key={arrow} onClick={() => setSlide(s => (s + 1) % 2)}
          style={{
            position: "absolute", top: "50%", transform: "translateY(-50%)",
            [idx === 0 ? "left" : "right"]: "2vw",
            zIndex: 10, background: "transparent", border: "1px solid #2A2A2A",
            color: "#404040", fontFamily: "'DM Mono', monospace", fontSize: 18,
            width: 44, height: 44, cursor: "pointer", transition: "all 0.2s",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = G.accent; e.currentTarget.style.color = G.accent; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.color = "#404040"; }}
        >
          {arrow}
        </button>
      ))}

      {/* Slide counter */}
      <div style={{ position: "absolute", bottom: 32, right: "5vw", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#2A2A2A", letterSpacing: "0.2em", zIndex: 10 }}>
        0{slide + 1} / 02
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div className="rule-dark" />
    </section>
  );
}

export default Hero;