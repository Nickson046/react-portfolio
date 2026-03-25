// ─── vite.config.js ───────────────────────────────────────────────────────────
// Vite is the build tool that runs your React app locally and bundles it
// for production. This is the minimal config needed for a React project.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // enables JSX support and React fast refresh
});
