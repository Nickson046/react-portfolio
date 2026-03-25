import { useState } from "react";
import projects from "../data/projects";
import { G } from "../theme";

const CATEGORIES = ["All", "Frontend", "Backend", "Full Stack", "Tools", "AI/ML"];

function Projects() {
  const [search,  setSearch]  = useState("");
  const [cat,     setCat]     = useState("All");

  const filtered = projects.filter(p => {
    const matchCat    = cat === "All" || p.category === cat;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                        p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="section" style={{ background: G.surface }}>
      <div className="container">

        <div className="section-index"><span>03</span> Selected Work</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <h2 className="heading">Projects I've<br /><span className="heading-italic">built & shipped.</span></h2>

          {/* Search */}
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or tech..."
            style={{
              background:    G.white,
              border:        `1px solid ${G.rule}`,
              color:         G.ink,
              fontFamily:    "'DM Mono', monospace",
              fontSize:      12,
              letterSpacing: "0.05em",
              padding:       "12px 18px",
              outline:       "none",
              width:         280,
              transition:    "border-color 0.2s",
            }}
            onFocus={e => e.target.style.borderColor = G.ink}
            onBlur={e  => e.target.style.borderColor = G.rule}
          />
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 0, marginBottom: 48, borderBottom: `1px solid ${G.rule}`, flexWrap: "wrap" }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)}
              style={{
                background:    "none",
                border:        "none",
                borderBottom:  cat === c ? `2px solid ${G.accent}` : "2px solid transparent",
                cursor:        "pointer",
                fontFamily:    "'DM Mono', monospace",
                fontSize:      11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         cat === c ? G.accent : G.inkLight,
                padding:       "12px 20px",
                marginBottom:  -1,
                transition:    "all 0.2s",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project list — editorial table style */}
        <div>
          {filtered.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ padding: "60px 0", textAlign: "center" }}>
            <span className="label">No projects match — try adjusting filters</span>
          </div>
        )}

      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: `1px solid ${G.rule}`, animation: `fadeUp 0.5s ease ${index * 0.06}s both` }}>
      {/* Row header — always visible */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display:    "grid",
          gridTemplateColumns: "60px 1fr auto auto",
          gap:        24,
          padding:    "28px 0",
          cursor:     "pointer",
          alignItems: "center",
          transition: "background 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.paddingLeft = "12px"}
        onMouseLeave={e => e.currentTarget.style.paddingLeft = "0"}
      >
        {/* Index */}
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: G.inkLight }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title + tech */}
        <div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", color: G.ink, marginBottom: 4 }}>
            {project.title}
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {project.tech.map(t => (
              <span key={t} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.08em", color: G.inkLight }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Category + year */}
        <div style={{ textAlign: "right" }}>
          <div style={{
            display: "inline-block",
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: G.accent,
            border: `1px solid ${G.accent}33`,
            padding: "3px 10px",
            marginBottom: 4,
          }}>
            {project.category}
          </div>
          <div className="label">{project.year}</div>
        </div>

        {/* Toggle */}
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 18, color: G.inkLight, width: 24, textAlign: "center" }}>
          {open ? "−" : "+"}
        </span>
      </div>

      {/* Expanded details */}
      {open && (
        <div style={{
          padding:    "0 0 32px 84px",
          animation:  "fadeUp 0.3s ease",
          display:    "grid",
          gridTemplateColumns: "1fr auto",
          gap:        40,
          alignItems: "start",
        }}>
          <p style={{ fontSize: "0.95rem", color: G.inkMid, lineHeight: 1.8, fontWeight: 300, maxWidth: 560 }}>
            {project.description}
          </p>
          <div style={{ display: "flex", gap: 16, flexShrink: 0 }}>
            {project.demo && (
              <a href={project.demo} style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: G.ink, textDecoration: "none", textTransform: "uppercase", borderBottom: `1px solid ${G.ink}`, paddingBottom: 2 }}>
                Live Demo ↗
              </a>
            )}
            <a href={project.github} style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", color: G.inkMid, textDecoration: "none", textTransform: "uppercase", borderBottom: `1px solid ${G.rule}`, paddingBottom: 2 }}>
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
