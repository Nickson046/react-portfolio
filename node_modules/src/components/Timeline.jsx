import { useState } from "react";
import { G } from "../theme";

const TIMELINE = [
  { year: "2022", title: "Enrolled in IT & Computer Systems", place: "University", desc: "Began the journey into computer architecture, OS fundamentals, and foundational programming in Python and Java." },
  { year: "2023", title: "First Web Development Projects",    place: "Self-study + Coursework", desc: "Built first React apps, learned REST APIs, and discovered a genuine passion for frontend development and clean UI." },
  { year: "2024", title: "Systems, Networking & Backend",     place: "University + Personal Projects", desc: "Focused on networking principles, OS internals, and backend development. Built CLI tools, explored Java Spring Boot." },
  { year: "2025", title: "AI Integration & Full Stack",       place: "Projects & Hackathons", desc: "Exploring machine learning, natural language processing, and integrating AI capabilities into full-stack applications." },
];

function Timeline() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="timeline" className="section" style={{ background: G.bgDark }}>
      <div className="container">

        <div className="section-index" style={{ color: G.accent }}><span>04</span> Experience</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 80, alignItems: "end" }} className="two-col">
          <h2 className="heading" style={{ color: G.inkInverse }}>
            The road<br /><span className="heading-italic">so far.</span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#A0A0A0", lineHeight: 1.8, fontWeight: 300 }}>
            Every year has brought new challenges, new tools, and deeper understanding of what it means to build real systems.
          </p>
        </div>

        <div className="rule-dark" style={{ marginBottom: 0 }} />

        {TIMELINE.map((item, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${G.ruleDark}`, animation: `fadeUp 0.5s ease ${i * 0.1}s both` }}>
            <div
              onClick={() => setExpanded(expanded === i ? null : i)}
              style={{
                display:    "grid",
                gridTemplateColumns: "100px 1fr auto",
                gap:        40,
                padding:    "36px 0",
                cursor:     "pointer",
                alignItems: "center",
                transition: "padding-left 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.paddingLeft = "8px"}
              onMouseLeave={e => e.currentTarget.style.paddingLeft = "0"}
            >
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: G.accent, lineHeight: 1 }}>
                {item.year}
              </span>
              <div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", color: G.inkInverse, marginBottom: 4 }}>
                  {item.title}
                </div>
                <div className="label" style={{ color: "#606060" }}>{item.place}</div>
              </div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 20, color: "#606060" }}>
                {expanded === i ? "−" : "+"}
              </span>
            </div>

            {expanded === i && (
              <div style={{ padding: "0 0 32px 140px", animation: "fadeUp 0.3s ease" }}>
                <p style={{ fontSize: "0.95rem", color: "#A0A0A0", lineHeight: 1.8, fontWeight: 300, maxWidth: 560 }}>
                  {item.desc}
                </p>
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}

export default Timeline;
