# ⚡ Nickson Mugerwa — Portfolio

Cyberpunk-themed personal portfolio built with **React + Vite**.

---

## 🚀 How to Run (3 steps)

### 1. Install Node.js
Download from https://nodejs.org (choose the LTS version)

### 2. Install dependencies
Open a terminal inside the `portfolio/` folder and run:
```bash
npm install
```
This reads `package.json` and downloads React, Vite, and all required packages into a `node_modules/` folder.

### 3. Start the dev server
```bash
npm run dev
```
Then open your browser at **http://localhost:5173** — your portfolio is live! 🎉

Changes you make to any `.jsx` file will update in the browser instantly (this is called **Hot Module Replacement**).

---

## 📁 Project Structure

```
portfolio/
 ├── index.html              ← HTML shell (React mounts here)
 ├── vite.config.js          ← Vite build tool config
 ├── package.json            ← project info + dependencies
 │
 └── src/
      ├── main.jsx           ← React entry point
      ├── App.jsx            ← root component (imports everything)
      ├── theme.js           ← 🎨 all colors — edit here to retheme
      ├── styles.js          ← global CSS + keyframe animations
      │
      ├── data/
      │    └── projects.js   ← ✏️  ADD YOUR REAL PROJECTS HERE
      │
      └── components/
           ├── Navbar.jsx
           ├── Hero.jsx
           ├── About.jsx
           ├── Skills.jsx
           ├── Projects.jsx
           ├── Timeline.jsx
           └── Contact.jsx
```

---

## ✏️ How to Customize

| What to change | Where to edit |
|---|---|
| Your name / intro text | `src/components/Hero.jsx` |
| Bio & info cards | `src/components/About.jsx` |
| Skills & percentages | `src/components/Skills.jsx` |
| **Your projects** | `src/data/projects.js` ← start here! |
| Timeline entries | `src/components/Timeline.jsx` |
| Social links (GitHub, LinkedIn) | `src/components/Hero.jsx` |
| Colors / neon theme | `src/theme.js` |

---

## 🌐 Deploy for Free (share your portfolio online)

```bash
npm run build
```
Upload the generated `dist/` folder to:
- **Netlify** → netlify.com (drag & drop the dist folder)
- **Vercel** → vercel.com (connect your GitHub repo)
- **GitHub Pages** → free with a GitHub account

---

Built with React 18 + Vite 5 ⚡
