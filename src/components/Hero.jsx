// ─── COMPONENT: Hero.jsx ─────────────────────────────────────────────────────
// Slide 0: Name on left (pushed down) + floating tech photo cards on right
// Slide 1: Your photo slide (add your own photo to /public folder)
// Auto-advances every 12 seconds. Arrows + dots for manual control.

import { useState, useEffect } from "react";
import { G } from "../theme";

const ROLES = ["IT Student", "Systems Thinker", "Web Developer", "Tech Futurist"];

// ✏️ CHANGE PHOTOS HERE — swap src with your own URLs or "/filename.jpg" from /public
const FLOAT_PHOTOS = [
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80", label: "Coding",    rotate: "-5deg", top: "12%",  left: "2%"  },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80", label: "Hardware",  rotate: "4deg",  top: "8%",   left: "45%" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80", label: "Networks",  rotate: "-3deg", top: "52%",  left: "10%" },
  { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=80", label: "AI",        rotate: "5deg",  top: "55%",  left: "50%" },
];

// ── Typing effect ─────────────────────────────────────────────────────────────
function TypingEffect({ words }) {
  const [display,  setDisplay]  = useState("");
  const [wordIdx,  setWordIdx]  = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word  = words[wordIdx];
    const speed = deleting ? 50 : 110;
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, charIdx + 1));
        if (charIdx + 1 === word.length) setTimeout(() => setDeleting(true), 2400);
        else setCharIdx(c => c + 1);
      } else {
        setDisplay(word.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) { setDeleting(false); setWordIdx(i => (i + 1) % words.length); setCharIdx(0); }
        else setCharIdx(c => c - 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span>
      {display}
      <span style={{ display: "inline-block", width: 3, height: "0.85em", background: G.accent, marginLeft: 3, verticalAlign: "middle", animation: "fadeIn 0.9s ease-in-out infinite alternate" }} />
    </span>
  );
}

// ── Floating photo cards ──────────────────────────────────────────────────────
function FloatingCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "100vh" }}>
      {FLOAT_PHOTOS.map((photo, i) => (
        <div key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            position:   "absolute",
            top:        photo.top,
            left:       photo.left,
            width:      190,
            zIndex:     hovered === i ? 20 : i + 1,
            transform:  hovered === i
              ? "rotate(0deg) scale(1.1) translateY(-8px)"
              : `rotate(${photo.rotate})`,
            transition: "transform 0.4s ease, box-shadow 0.4s ease, z-index 0s",
            boxShadow:  hovered === i
              ? `0 24px 60px rgba(0,0,0,0.8), 0 0 0 2px ${G.accent}`
              : "0 8px 30px rgba(0,0,0,0.6)",
            // Each card floats at its own pace
            animation: `float${i} ${4 + i * 0.7}s ease-in-out infinite`,
          }}
        >
          <img src={photo.src} alt={photo.label}
            style={{ width: "100%", height: 130, objectFit: "cover", display: "block", filter: "grayscale(10%)" }}
          />
          <div style={{ background: "#111111", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: "0.15em", color: "#505050", textTransform: "uppercase" }}>
              {photo.label}
            </span>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: G.accent }} />
          </div>
        </div>
      ))}

      {/* Keyframes for each card's float animation */}
      <style>{`
        @keyframes float0 { 0%,100%{transform:rotate(-5deg) translateY(0px)} 50%{transform:rotate(-5deg) translateY(-12px)} }
        @keyframes float1 { 0%,100%{transform:rotate(4deg) translateY(0px)}  50%{transform:rotate(4deg) translateY(-8px)} }
        @keyframes float2 { 0%,100%{transform:rotate(-3deg) translateY(0px)} 50%{transform:rotate(-3deg) translateY(-14px)} }
        @keyframes float3 { 0%,100%{transform:rotate(5deg) translateY(0px)}  50%{transform:rotate(5deg) translateY(-10px)} }
      `}</style>
    </div>
  );
}

// ── Slide 0: Name left + floating cards right ─────────────────────────────────
function SlideIntro() {
  return (
    <div style={{
      minHeight: "100vh",
      background: G.bgDark,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Vertical texture lines */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: "absolute", top: 0, bottom: 0,
          left: `${5 + i * 13}%`, width: 1,
          background: `linear-gradient(transparent, ${G.ruleDark}44, transparent)`,
          pointerEvents: "none",
        }} />
      ))}

      {/* LEFT — name pushed to bottom */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "0 40px 100px 5vw", position: "relative", zIndex: 2,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28, animation: "fadeUp 0.8s ease 0.1s both" }}>
          <div style={{ width: 40, height: 1, background: G.accent }} />
          <span className="label" style={{ color: "#505050" }}>Portfolio · 2025</span>
        </div>

        <h1 className="display" style={{ color: G.inkInverse, marginBottom: 0, animation: "fadeUp 0.9s ease 0.15s both" }}>
          NICKSON
        </h1>
        <h1 className="display" style={{
          color: "transparent", WebkitTextStroke: `2px ${G.inkInverse}`,
          marginBottom: 28, animation: "fadeUp 0.9s ease 0.25s both",
        }}>
          MUGERWA
        </h1>

        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1rem, 1.8vw, 1.35rem)", color: "#808080", marginBottom: 14, animation: "fadeUp 0.8s ease 0.3s both" }}>
          <TypingEffect words={ROLES} />
        </div>

        <p style={{ fontFamily: "'Manrope'", fontSize: "0.88rem", color: "#606060", lineHeight: 1.85, fontWeight: 300, maxWidth: 380, marginBottom: 32, animation: "fadeUp 0.8s ease 0.35s both" }}>
          Driven by the conviction that{" "}
          <span style={{ color: G.accent, fontWeight: 600 }}>technology shapes tomorrow</span>
          {" "}— I build systems that connect people and solve real problems.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32, animation: "fadeUp 0.8s ease 0.4s both" }}>
          <a href="#projects" style={{ background: G.inkInverse, color: G.bgDark, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "13px 26px", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = G.accent}
            onMouseLeave={e => e.currentTarget.style.background = G.inkInverse}
          >View Work →</a>
          <a href="#contact" style={{ background: "transparent", color: G.inkInverse, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "13px 26px", textDecoration: "none", border: "1px solid #2A2A2A", transition: "all 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = G.inkInverse}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#2A2A2A"}
          >Contact</a>
        </div>

        <div style={{ display: "flex", gap: 36, animation: "fadeUp 0.8s ease 0.45s both" }}>
          {[{ n: "6+", label: "Projects" }, { n: "3+", label: "Years Learning" }, { n: "10+", label: "Technologies" }].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Bebas Neue'", fontSize: "2rem", color: G.accent, lineHeight: 1 }}>{s.n}</div>
              <div className="label" style={{ color: "#505050", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — floating photo cards */}
      <div style={{ position: "relative", zIndex: 1, animation: "fadeIn 1s ease 0.6s both" }}>
        <FloatingCards />
      </div>
    </div>
  );
}

// ── Slide 1: Photo ────────────────────────────────────────────────────────────
function SlidePhoto() {
  return (
    <div style={{ minHeight: "100vh", background: G.bgDark, display: "flex", alignItems: "stretch", position: "relative", overflow: "hidden" }}>
      <div style={{ flex: "0 0 55%", position: "relative", overflow: "hidden" }}>
        {/*
          ✏️ YOUR PHOTO: put your image in /public folder, then change src to "/your-photo.jpg"
        */}
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
          alt="Nickson Mugerwa"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", filter: "grayscale(15%)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, transparent 55%, ${G.bgDark} 100%)` }} />
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 4, background: G.accent }} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 5vw 80px 60px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48, animation: "fadeUp 0.8s ease 0.1s both" }}>
          <div style={{ width: 40, height: 1, background: G.accent }} />
          <span className="label" style={{ color: "#505050" }}>The Person</span>
        </div>

        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: G.inkInverse, lineHeight: 0.95, marginBottom: 32, animation: "fadeUp 0.8s ease 0.2s both" }}>
          BUILDING<br /><span style={{ color: G.accent }}>THE FUTURE</span><br />ONE LINE<br />AT A TIME.
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

// ── Main Hero ─────────────────────────────────────────────────────────────────
function Hero() {
  const [slide, setSlide] = useState(0);

  // ✏️ Change the number below to control how long each slide shows (in milliseconds)
  // 12000 = 12 seconds, 15000 = 15 seconds
  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % 2), 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" style={{ position: "relative", overflow: "hidden" }}>

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

      {/* Arrows */}
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
        >{arrow}</button>
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