import { useState, useEffect } from "react";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import Timeline   from "./components/Timeline";
import CVDownload from "./components/CVDownload";
import Blog       from "./components/Blog";       // ← NEW
import Contact    from "./components/Contact";

import globalCSS from "./styles";
import { G }     from "./theme";

function Footer() {
  return (
    <footer style={{ background: G.bgDark, borderTop: `1px solid ${G.ruleDark}`, padding: "40px 5vw" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#404040", letterSpacing: "0.1em" }}>
          © 2025 Nickson Mugerwa — IT & Computer Systems
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#404040", letterSpacing: "0.1em" }}>
          Built with React + Vite ·{" "}
          <span style={{ color: G.accent }}>Technology is the future.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.35 }
    );
    // ← "blog" added to observed sections
    ["home", "about", "skills", "projects", "timeline", "blog", "contact"].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{globalCSS}</style>
      <Navbar active={active} setActive={setActive} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <CVDownload />
      <Blog />       {/* ← NEW */}
      <Contact />
      <Footer />
    </>
  );
}
