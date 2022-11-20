// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    //Client only import script
    if (!import.meta.env.SSR) {
      import("../lib/setDownload.js");
      await import("../lib/medium-zoom.js");
      import("../lib/zoom-image.js");
    }
  },
};
