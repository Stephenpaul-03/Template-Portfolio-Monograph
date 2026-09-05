import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages serves project sites from /<repository-name>/.
  // Keep the root path for local development so Vite behaves normally.
  base: mode === "development" ? "/" : "/Template-Portfolio-Monograph/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
