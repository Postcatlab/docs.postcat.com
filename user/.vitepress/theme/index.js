// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import { onMounted } from "vue";
import mediumZoom from "medium-zoom";

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    });
  },
};
