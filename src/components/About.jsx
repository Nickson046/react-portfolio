import { useState } from "react";
import { G } from "../theme";

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="section" style={{ background: G.bgDark, color: G.inkInverse }}>
      <div className="container">

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 80 }} className="two-col">
          <div>
            <div className="section-index" style={{ color: G.accent }}>
              <span>01</span> About
            </div>
            <h2 className="heading" style={{ color: G.inkInverse, maxWidth: 500 }}>
              Building the future,<br />
              <span className="heading-italic">one system at a time.</span>
            </h2>
          </div>
          <div style={{ maxWidth: 420, paddingTop: 8 }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#A0A0A0", fontWeight: 300 }}>
              I'm an IT & Computer Systems student at university in Riga, deeply convinced that the next decade will be defined by the people who understand both <em>how</em> technology works and <em>why</em> it matters.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="rule-dark" style={{ marginBottom: 80 }} />

        {/* Info grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, marginBottom: 80 }} className="two-col">
          {[
            { label: "Degree",     value: "IT & Computer Systems",    sub: "University · 2022–Present" },
            { label: "Location",   value: "Riga, Latvia",              sub: "Open to remote work globally" },
            { label: "Focus",      value: "Full Stack + Systems",      sub: "Web · Networks · AI" },
            { label: "Status",     value: "Open to Opportunities",     sub: "Internships & Projects" },
          ].map((c, i) => (
            <div key={i} style={{
              borderLeft:  i === 0 ? "none" : `1px solid ${G.ruleDark}`,
              padding:     i === 0 ? "0 32px 0 0" : "0 32px",
            }}>
              <div className="label" style={{ color: G.accent, marginBottom: 12 }}>{c.label}</div>
              <div style={{ fontFamily: "'Manrope'", fontWeight: 600, fontSize: "0.95rem", color: G.inkInverse, marginBottom: 4 }}>{c.value}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#606060" }}>{c.sub}</div>
            </div>
          ))}
        </div>

        {/* Bio expanded */}
        <div className="rule-dark" style={{ marginBottom: 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }} className="two-col">
          <div>
            <span className="label" style={{ color: "#606060" }}>Personal Statement</span>
          </div>
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#A0A0A0", marginBottom: 20, fontWeight: 300 }}>
              I thrive at the intersection of software and systems — whether crafting performant UIs or designing reliable backend architectures. I bring the same relentless curiosity to every layer of the stack.
            </p>
            {expanded && (
              <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#A0A0A0", marginBottom: 20, fontWeight: 300, animation: "fadeUp 0.4s ease" }}>
                Outside code, I explore AI ethics, network security, and how digital infrastructure reshapes society. My goal is to build systems that are not just functional, but genuinely transformative — for individuals, communities, and industries alike.
              </p>
            )}
            <button onClick={() => setExpanded(!expanded)}
              style={{
                marginTop:     8,
                background:    "none",
                border:        `1px solid ${G.ruleDark}`,
                color:         "#606060",
                fontFamily:    "'DM Mono', monospace",
                fontSize:      11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding:       "10px 20px",
                cursor:        "pointer",
                transition:    "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = G.accent; e.currentTarget.style.color = G.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = G.ruleDark; e.currentTarget.style.color = "#606060"; }}
            >
              {expanded ? "Read less ↑" : "Read more ↓"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
