import { G } from "../theme";

function CVDownload() {
  return (
    <section id="cv" style={{ background: G.accent, padding: "80px 5vw" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 40 }}>

        <div>
          <div className="label" style={{ color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>Curriculum Vitae</div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: G.white, lineHeight: 0.9, marginBottom: 16 }}>
            DOWNLOAD<br />MY CV
          </h2>
          <p style={{ fontFamily: "'Manrope'", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", fontWeight: 300, maxWidth: 380, lineHeight: 1.7 }}>
            Full résumé including education, technical skills, project history, language proficiency, and references.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
          {/* Main download button */}
          <a
            href="/cv-nickson-mugerwa.pdf"          /* ← replace with your real CV file */
            download="Nickson_Mugerwa_CV.pdf"
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              gap:            12,
              background:     G.white,
              color:          G.accent,
              fontFamily:     "'DM Mono', monospace",
              fontSize:       13,
              letterSpacing:  "0.12em",
              textTransform:  "uppercase",
              padding:        "18px 36px",
              textDecoration: "none",
              fontWeight:     500,
              transition:     "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = G.ink; e.currentTarget.style.color = G.white; }}
            onMouseLeave={e => { e.currentTarget.style.background = G.white; e.currentTarget.style.color = G.accent; }}
          >
            <span style={{ fontSize: 18 }}>↓</span>
            Download CV — PDF
          </a>

          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
            {/* Update this when you add your real CV */}
            Last updated · 2025
          </span>
        </div>

      </div>
    </section>
  );
}

export default CVDownload;
