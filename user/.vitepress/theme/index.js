// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "../lib/setDownload.js";
import { inBrowser, useRoute } from "vitepress";
import { nextTick, watch } from "vue";
import mediumZoom from "medium-zoom";

export default {
  ...DefaultTheme,
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
