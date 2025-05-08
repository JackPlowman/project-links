import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { generateSitemap } from "sitemap-ts"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: "/project-links/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "generate-sitemap",
      closeBundle() {
        generateSitemap({
          hostname: "https://jackplowman.github.io/",
          readable: true,
        })
      },
    },
  ],
})
