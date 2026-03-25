import { G } from "./theme";

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Manrope:wght@300;400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --accent:  ${G.accent};
    --ink:     ${G.ink};
    --bg:      ${G.bg};
    --inkMid:  ${G.inkMid};
    --rule:    ${G.rule};
  }

  html { scroll-behavior: smooth; font-size: 16px; }

  body {
    font-family: 'Manrope', sans-serif;
    background: ${G.bg};
    color: ${G.ink};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: ${G.surface}; }
  ::-webkit-scrollbar-thumb { background: ${G.accent}; }

  /* ── Keyframes ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes expandWidth {
    from { width: 0; } to { width: 100%; }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Typography scale ── */
  .display {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(4.5rem, 12vw, 10rem);
    line-height: 0.9;
    letter-spacing: -0.02em;
  }
  .heading {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.1;
  }
  .heading-italic {
    font-family: 'DM Serif Display', serif;
    font-style: italic;
    color: ${G.accent};
  }
  .mono {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .label {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${G.inkLight};
  }

  /* ── Layout utilities ── */
  .container { max-width: 1280px; margin: 0 auto; padding: 0 5vw; }
  .section    { padding: 120px 0; }

  /* ── Horizontal rule ── */
  .rule { height: 1px; background: ${G.rule}; }
  .rule-dark { height: 1px; background: ${G.ruleDark}; }

  /* ── Index number style (01, 02, 03...) ── */
  .section-index {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    color: ${G.accent};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  .section-index::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: ${G.accent};
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .hide-mobile  { display: none !important; }
    .show-mobile  { display: block !important; }
    .two-col      { grid-template-columns: 1fr !important; }
    .three-col    { grid-template-columns: 1fr !important; }
    .section      { padding: 80px 0; }
  }
  @media (min-width: 769px) {
    .show-mobile { display: none !important; }
  }
`;

export default globalCSS;
