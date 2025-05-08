import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import Sitemap from "vite-plugin-sitemap"

// https://vite.dev/config/
export default defineConfig({
  base: "/project-links/",
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://jackplowman.github.io/",
      basePath: "/project-links",
    }),
  ],
})
