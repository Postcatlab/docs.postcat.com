import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  extract: {
    include: ["**/*.{vue,ts,md}", ".vitepress/**/*.{vue,ts,md}"],
    exclude: ["node_modules", ".git"]
  }
});
