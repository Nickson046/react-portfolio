import { useState } from "react";
import { G } from "../theme";

// ── Real skills from Nickson's CV ─────────────────────────────────────────────
const SKILL_GROUPS = [
  {
    category: "Programming",
    skills: [
      { name: "JavaScript (Node.js, Express.js)", level: 82 },
      { name: "Python",                            level: 78 },
      { name: "Java",                              level: 70 },
      { name: "C / C++",                           level: 60 },
      { name: "SQL & MATLAB",                      level: 65 },
    ],
  },
  {
    category: "Web & Frameworks",
    skills: [
      { name: "HTML & CSS",   level: 90 },
      { name: "React",        level: 80 },
      { name: "AngularJS",    level: 60 },
      { name: "Spring Boot",  level: 55 },
      { name: "Spring Security", level: 50 },
    ],
  },
  {
    category: "Tools & IDEs",
    skills: [
      { name: "Git & GitHub",              level: 85 },
      { name: "Visual Studio Code",        level: 92 },
      { name: "IntelliJ IDEA / Eclipse",   level: 70 },
      { name: "PyCharm / Jupyter",         level: 72 },
      { name: "Thonny",                    level: 65 },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "Object-Oriented Programming", level: 80 },
      { name: "REST APIs",                   level: 78 },
      { name: "Networking & Systems",        level: 72 },
      { name: "Databases (SQL/NoSQL)",       level: 70 },
      { name: "CLI & Linux",                 level: 68 },
    ],
  },
];

const SOFT_SKILLS = [
  "Active Listening",
  "Verbal & Non-verbal Communication",
  "Empathy & Conflict Resolution",
  "Constructive Feedback",
  "Adaptability & Time Management",
  "Team Collaboration",
];

const LANGUAGES = [
  {
    lang: "English",
    flag: "🇬🇧",
    level: "Native",
    color: G.accent,
    bars: { listening: 100, reading: 100, speaking: 100, interaction: 100, writing: 100 },
  },
  {
    lang: "Latvian",
    flag: "🇱🇻",
    level: "A2 / B1",
    color: "#4A7FBF",
    bars: { listening: 30, reading: 45, speaking: 30, interaction: 30, writing: 30 },
  },
];

function SkillBar({ name, level, accent }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontFamily: "'Manrope'", fontSize: "0.88rem", color: G.ink, fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: G.inkLight }}>{level}%</span>
      </div>
      <div style={{ height: 2, background: G.rule, position: "relative" }}>
        <div style={{
          position:   "absolute",
          left:       0, top: 0,
          height:     "100%",
          width:      `${level}%`,
          background: accent || G.accent,
          transition: "width 1.2s ease",
        }} />
      </div>
    </div>
  );
}

function Skills() {
  const [activeGroup, setActiveGroup] = useState("Programming");
  const current = SKILL_GROUPS.find(g => g.category === activeGroup);

  return (
    <section id="skills" className="section" style={{ background: G.bg }}>
      <div className="container">

        <div className="section-index"><span>02</span> Skills & Expertise</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 80, alignItems: "end" }} className="two-col">
          <h2 className="heading">What I know<br /><span className="heading-italic">and how well.</span></h2>
          <p style={{ fontSize: "0.95rem", color: G.inkMid, lineHeight: 1.8, fontWeight: 300 }}>
            A breakdown of my technical stack — built through coursework, personal projects, and relentless self-study.
          </p>
        </div>

        <div className="rule" style={{ marginBottom: 60 }} />

        {/* Technical skills */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 }} className="two-col">

          {/* Category tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {SKILL_GROUPS.map(g => (
              <button key={g.category} onClick={() => setActiveGroup(g.category)}
                style={{
                  background:    activeGroup === g.category ? G.ink : "transparent",
                  color:         activeGroup === g.category ? G.inkInverse : G.inkMid,
                  border:        "none",
                  fontFamily:    "'DM Mono', monospace",
                  fontSize:      11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding:       "12px 16px",
                  textAlign:     "left",
                  cursor:        "pointer",
                  transition:    "all 0.2s",
                  borderLeft:    activeGroup === g.category ? `3px solid ${G.accent}` : "3px solid transparent",
                }}
              >
                {g.category}
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <div style={{ animation: "fadeUp 0.4s ease" }}>
            <div className="label" style={{ marginBottom: 32 }}>{current.category} Skills</div>
            {current.skills.map(s => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>

        <div className="rule" style={{ margin: "80px 0" }} />

        {/* Soft skills + Languages row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }} className="two-col">

          {/* Soft skills */}
          <div>
            <div className="label" style={{ marginBottom: 32 }}>Interpersonal & Communication</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {SOFT_SKILLS.map(s => (
                <span key={s} style={{
                  fontFamily:    "'DM Mono', monospace",
                  fontSize:      11,
                  letterSpacing: "0.08em",
                  color:         G.ink,
                  border:        `1px solid ${G.rule}`,
                  padding:       "8px 14px",
                  transition:    "all 0.2s",
                  cursor:        "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = G.accent; e.currentTarget.style.color = G.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = G.rule; e.currentTarget.style.color = G.ink; }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="label" style={{ marginBottom: 32 }}>Language Proficiency</div>
            {LANGUAGES.map(lang => (
              <div key={lang.lang} style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: 20 }}>{lang.flag}</span>
                  <span style={{ fontFamily: "'Manrope'", fontWeight: 700, fontSize: "1rem", color: G.ink }}>{lang.lang}</span>
                  <span style={{
                    fontFamily:    "'DM Mono', monospace",
                    fontSize:      10,
                    letterSpacing: "0.1em",
                    color:         lang.color,
                    border:        `1px solid ${lang.color}`,
                    padding:       "2px 8px",
                  }}>
                    {lang.level}
                  </span>
                </div>
                {/* CEFR breakdown */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
                  {[
                    { label: "Listen",  val: lang.bars.listening },
                    { label: "Read",    val: lang.bars.reading },
                    { label: "Speak",   val: lang.bars.speaking },
                    { label: "Interact",val: lang.bars.interaction },
                    { label: "Write",   val: lang.bars.writing },
                  ].map(b => (
                    <div key={b.label}>
                      <div style={{ height: 48, background: G.rule, position: "relative", marginBottom: 6 }}>
                        <div style={{
                          position:   "absolute",
                          bottom:     0, left: 0, right: 0,
                          height:     `${b.val}%`,
                          background: lang.color,
                          opacity:    0.85,
                          transition: "height 1s ease",
                        }} />
                      </div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: G.inkLight, textAlign: "center" }}>{b.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
