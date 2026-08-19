import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/MyRecipe/",
  plugins: [react()],
  build: {
    outDir: "site",
    emptyOutDir: true,
  },
});

