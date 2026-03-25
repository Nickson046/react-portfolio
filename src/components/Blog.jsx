// ─── COMPONENT: Blog.jsx ─────────────────────────────────────────────────────
// Blog section for posting about IT trends, programming languages, and tech news.
// To add a new post: add an object to the POSTS array below — that's it!

import { useState } from "react";
import { G } from "../theme";

// ── Blog posts data ───────────────────────────────────────────────────────────
// ✏️ Add your own posts here! Copy one object and fill in your content.
const POSTS = [
  {
    id:       1,
    title:    "Why Python Remains the King of AI & Data Science",
    excerpt:  "Despite newer languages emerging, Python's ecosystem — NumPy, PyTorch, TensorFlow — keeps it irreplaceable in machine learning pipelines.",
    content:  "Python's dominance in AI isn't accidental. Its readable syntax lowers the barrier for researchers who aren't professional developers, while its library ecosystem is unmatched. PyTorch and TensorFlow alone power the majority of modern AI research. Add Jupyter notebooks for interactive exploration and you have a complete research environment. As someone studying IT, understanding Python deeply is one of the highest-ROI skills you can develop right now.",
    category: "Programming Languages",
    date:     "March 2025",
    readTime: "3 min read",
    tag:      "Python",
  },
  {
    id:       2,
    title:    "The Rise of Edge Computing: Why the Cloud Isn't Always Enough",
    excerpt:  "As IoT devices multiply and latency becomes critical, edge computing is moving processing closer to the data source — reshaping network architecture.",
    content:  "Cloud computing revolutionized IT infrastructure, but it introduced a new problem: latency. For applications like autonomous vehicles, industrial sensors, and real-time medical devices, sending data to a distant server and waiting for a response is simply too slow. Edge computing solves this by processing data locally — on the device or nearby servers. This shift has massive implications for network engineers and systems architects. Understanding edge infrastructure is becoming a core skill for modern IT professionals.",
    category: "IT Trends",
    date:     "February 2025",
    readTime: "4 min read",
    tag:      "Networking",
  },
  {
    id:       3,
    title:    "TypeScript in 2025: Is JavaScript Without Types Still Acceptable?",
    excerpt:  "TypeScript adoption has exploded across the industry. But does it actually make you a better developer, or just a slower one?",
    content:  "TypeScript adds static typing to JavaScript, catching bugs at compile time rather than runtime. In large codebases, this is genuinely transformative — you get autocomplete, refactoring safety, and self-documenting code. The trade-off is added complexity and a steeper learning curve. For solo projects or small scripts, plain JavaScript is still perfectly fine. But if you're aiming for professional development roles, TypeScript is now essentially an industry standard. The sooner you learn it, the better positioned you'll be.",
    category: "Programming Languages",
    date:     "January 2025",
    readTime: "5 min read",
    tag:      "JavaScript",
  },
  {
    id:       4,
    title:    "Cybersecurity in 2025: The Threats Every IT Student Should Know",
    excerpt:  "From AI-powered phishing to supply chain attacks, the threat landscape is evolving faster than most defenses. Here's what matters right now.",
    content:  "The biggest shift in cybersecurity recently is the weaponization of AI by attackers. Phishing emails are now virtually indistinguishable from legitimate ones. Deepfake audio is being used in social engineering. Supply chain attacks — like the XZ Utils backdoor — show that even trusted open-source software can be compromised. As IT professionals, we need to understand not just how to configure firewalls, but how attackers think. Threat modeling, zero-trust architecture, and security-first development practices are no longer optional knowledge.",
    category: "IT Trends",
    date:     "December 2024",
    readTime: "6 min read",
    tag:      "Security",
  },
];

const CATEGORIES = ["All", "IT Trends", "Programming Languages"];

// Tag colors
const TAG_COLORS = {
  Python:     "#3776AB",
  Networking: "#E8603E",
  JavaScript: "#F7DF1E",
  Security:   "#C84B31",
};

function Blog() {
  const [filter,   setFilter]   = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = filter === "All"
    ? POSTS
    : POSTS.filter(p => p.category === filter);

  return (
    <section id="blog" className="section" style={{ background: G.surface }}>
      <div className="container">

        {/* Header */}
        <div className="section-index"><span>06</span> Blog</div>
        <div style={{
          display:       "flex",
          justifyContent: "space-between",
          alignItems:    "flex-end",
          marginBottom:  64,
          flexWrap:      "wrap",
          gap:           24,
        }}>
          <h2 className="heading">
            Thoughts on<br />
            <span className="heading-italic">tech & the future.</span>
          </h2>
          <p style={{ fontSize: "0.9rem", color: G.inkMid, lineHeight: 1.8, fontWeight: 300, maxWidth: 360 }}>
            Writing about what I'm learning — trends in IT, programming languages, and the ideas shaping our industry.
          </p>
        </div>

        {/* Category filter */}
        <div style={{
          display:      "flex",
          gap:          0,
          marginBottom: 48,
          borderBottom: `1px solid ${G.rule}`,
          flexWrap:     "wrap",
        }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              style={{
                background:    "none",
                border:        "none",
                borderBottom:  filter === cat ? `2px solid ${G.accent}` : "2px solid transparent",
                cursor:        "pointer",
                fontFamily:    "'DM Mono', monospace",
                fontSize:      11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color:         filter === cat ? G.accent : G.inkLight,
                padding:       "12px 20px",
                marginBottom:  -1,
                transition:    "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap:                 1,
          background:          G.rule,
        }}>
          {filtered.map((post, i) => (
            <BlogCard
              key={post.id}
              post={post}
              index={i}
              isExpanded={expanded === post.id}
              onToggle={() => setExpanded(expanded === post.id ? null : post.id)}
            />
          ))}
        </div>

        {/* CTA to write more */}
        <div style={{
          marginTop:   64,
          padding:     "40px",
          border:      `1px dashed ${G.rule}`,
          textAlign:   "center",
          animation:   "fadeUp 0.6s ease both",
        }}>
          <div className="label" style={{ marginBottom: 12 }}>More posts coming soon</div>
          <p style={{ fontSize: "0.9rem", color: G.inkMid, fontWeight: 300 }}>
            Follow along as I document my learning journey through IT and computer systems.
          </p>
        </div>

      </div>
    </section>
  );
}

// ── Individual blog card ──────────────────────────────────────────────────────
function BlogCard({ post, index, isExpanded, onToggle }) {
  const tagColor = TAG_COLORS[post.tag] || G.accent;

  return (
    <div
      style={{
        background: G.bg,
        padding:    32,
        animation:  `fadeUp 0.5s ease ${index * 0.08}s both`,
        transition: "background 0.2s",
        cursor:     "pointer",
      }}
      onMouseEnter={e => e.currentTarget.style.background = G.white}
      onMouseLeave={e => e.currentTarget.style.background = G.bg}
      onClick={onToggle}
    >
      {/* Top meta */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <span style={{
          fontFamily:    "'DM Mono', monospace",
          fontSize:      9,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color:         G.white,
          background:    tagColor,
          padding:       "3px 10px",
        }}>
          {post.tag}
        </span>
        <span className="label">{post.readTime}</span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily:   "'DM Serif Display', serif",
        fontSize:     "1.15rem",
        color:        G.ink,
        lineHeight:   1.4,
        marginBottom: 12,
      }}>
        {post.title}
      </h3>

      {/* Excerpt */}
      <p style={{
        fontSize:     "0.875rem",
        color:        G.inkMid,
        lineHeight:   1.75,
        fontWeight:   300,
        marginBottom: 20,
      }}>
        {post.excerpt}
      </p>

      {/* Expanded full content */}
      {isExpanded && (
        <div style={{
          borderTop:   `1px solid ${G.rule}`,
          paddingTop:  20,
          marginTop:   8,
          animation:   "fadeUp 0.3s ease",
        }}>
          <p style={{
            fontSize:   "0.9rem",
            color:      G.inkMid,
            lineHeight: 1.85,
            fontWeight: 300,
          }}>
            {post.content}
          </p>
        </div>
      )}

      {/* Footer */}
      <div style={{
        display:        "flex",
        justifyContent: "space-between",
        alignItems:     "center",
        marginTop:      20,
        paddingTop:     16,
        borderTop:      `1px solid ${G.rule}`,
      }}>
        <span className="label">{post.date}</span>
        <span style={{
          fontFamily:    "'DM Mono', monospace",
          fontSize:      10,
          letterSpacing: "0.1em",
          color:         G.accent,
          textTransform: "uppercase",
        }}>
          {isExpanded ? "Collapse ↑" : "Read more ↓"}
        </span>
      </div>
    </div>
  );
}

export default Blog;