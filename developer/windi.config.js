import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  extract: {
    include: ["components/*.{vue,ts,md}"],
    exclude: ["node_modules", ".git"]
  }
});
