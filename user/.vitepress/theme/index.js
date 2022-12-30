// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import { inBrowser, useRoute } from "vitepress";
import { nextTick, watch } from "vue";
import mediumZoom from "medium-zoom";

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    //Client only import script
    if (!import.meta.env.SSR) {
      import("../lib/setDownload.js");
    }
  },
  setup() {
    const route = useRoute();
    watch(
      () => route.path,
      () =>
        nextTick(() => {
          if (inBrowser) {
            mediumZoom(".main img");
          }
        }),
      { immediate: true }
    );
  },
};
