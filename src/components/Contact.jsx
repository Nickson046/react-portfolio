import { useState } from "react";
import { G } from "../theme";

function Contact() {
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [errors,  setErrors]  = useState({});
  const [sent,    setSent]    = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())                               e.name    = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email   = "Valid email required";
    if (form.message.length < 10)                        e.message = "Too short";
    return e;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setForm({ name: "", email: "", message: "" }); }, 1800);
  };

  const handleChange = (field, value) => {
    setForm(p => ({ ...p, [field]: value }));
    setErrors(p => ({ ...p, [field]: "" }));
  };

  const fieldStyle = (field) => ({
    width:      "100%",
    background: G.white,
    border:     `1px solid ${errors[field] ? G.accent : G.rule}`,
    color:      G.ink,
    fontFamily: "'Manrope', sans-serif",
    fontSize:   "0.95rem",
    fontWeight: 400,
    padding:    "14px 16px",
    outline:    "none",
    transition: "border-color 0.2s",
  });

  return (
    <section id="contact" className="section" style={{ background: G.bg }}>
      <div className="container">

        <div className="section-index"><span>05</span> Get in Touch</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="two-col">

          {/* Left — heading + contact info */}
          <div>
            <h2 className="heading" style={{ marginBottom: 32 }}>
              Let's work<br /><span className="heading-italic">together.</span>
            </h2>
            <p style={{ fontSize: "0.95rem", color: G.inkMid, lineHeight: 1.8, fontWeight: 300, marginBottom: 48 }}>
              Whether it's an internship, a collaboration, a freelance project, or just a conversation about tech — I'm always open to connecting with the right people.
            </p>

            {/* Contact details */}
            {[
              { label: "Email",    value: "nickson@email.com",           href: "mailto:nickson@email.com" },
              { label: "GitHub",   value: "github.com/nicksonmugerwa",   href: "#" },
              { label: "LinkedIn", value: "linkedin.com/in/nickson",     href: "#" },
              { label: "Location", value: "Riga, Latvia 🇱🇻",            href: null },
            ].map(c => (
              <div key={c.label} style={{ display: "flex", gap: 24, paddingBottom: 20, marginBottom: 20, borderBottom: `1px solid ${G.rule}`, alignItems: "center" }}>
                <span className="label" style={{ minWidth: 72 }}>{c.label}</span>
                {c.href ? (
                  <a href={c.href} style={{ fontFamily: "'Manrope'", fontSize: "0.9rem", color: G.ink, textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = G.accent}
                    onMouseLeave={e => e.currentTarget.style.color = G.ink}
                  >
                    {c.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: "'Manrope'", fontSize: "0.9rem", color: G.inkMid, fontWeight: 400 }}>{c.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Right — form */}
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 0", animation: "fadeUp 0.6s ease" }}>
              <div style={{ fontFamily: "'Bebas Neue'", fontSize: "4rem", color: G.accent, lineHeight: 1, marginBottom: 16 }}>Message Sent.</div>
              <p style={{ color: G.inkMid, fontSize: "0.95rem", marginBottom: 32 }}>Thanks for reaching out — I'll get back to you soon.</p>
              <button onClick={() => setSent(false)}
                style={{ background: "none", border: `1px solid ${G.rule}`, color: G.inkMid, fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", padding: "10px 20px", cursor: "pointer", width: "fit-content" }}>
                Send another
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gap: 20 }}>
              {[
                { field: "name",    label: "Your Name",      type: "text",  placeholder: "e.g. Jane Smith" },
                { field: "email",   label: "Email Address",  type: "email", placeholder: "jane@example.com" },
              ].map(f => (
                <div key={f.field}>
                  <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: G.inkMid, display: "block", marginBottom: 8 }}>{f.label}</label>
                  <input type={f.type} value={form[f.field]} placeholder={f.placeholder}
                    onChange={e => handleChange(f.field, e.target.value)}
                    onFocus={e => e.target.style.borderColor = G.ink}
                    onBlur={e  => e.target.style.borderColor = errors[f.field] ? G.accent : G.rule}
                    style={fieldStyle(f.field)}
                  />
                  {errors[f.field] && <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: G.accent, marginTop: 4 }}>⚠ {errors[f.field]}</div>}
                </div>
              ))}

              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: G.inkMid, display: "block", marginBottom: 8 }}>Message</label>
                <textarea rows={5} value={form.message} placeholder="Tell me about your project..."
                  onChange={e => handleChange("message", e.target.value)}
                  onFocus={e => e.target.style.borderColor = G.ink}
                  onBlur={e  => e.target.style.borderColor = errors.message ? G.accent : G.rule}
                  style={{ ...fieldStyle("message"), resize: "vertical" }}
                />
                {errors.message && <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: G.accent, marginTop: 4 }}>⚠ {errors.message}</div>}
              </div>

              <button onClick={handleSubmit} disabled={sending}
                style={{
                  background:    sending ? G.inkLight : G.ink,
                  color:         G.white,
                  border:        "none",
                  fontFamily:    "'DM Mono', monospace",
                  fontSize:      12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding:       "16px 32px",
                  cursor:        sending ? "not-allowed" : "pointer",
                  width:         "100%",
                  transition:    "background 0.2s",
                }}
                onMouseEnter={e => { if (!sending) e.currentTarget.style.background = G.accent; }}
                onMouseLeave={e => { if (!sending) e.currentTarget.style.background = G.ink; }}
              >
                {sending ? "Sending..." : "Send Message →"}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Contact;
