// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";
export default DefaultTheme;
import mediumZoom from "medium-zoom";
window.addEventListener("load", function (event) {
  let observer = new MutationObserver(() => {
    mediumZoom(document.querySelectorAll("img"));
    console.log(document.querySelectorAll("img"))
  });
  let options = {
    childList: true,
    subtree: true,
  };
  observer.observe(document.getElementById("app"), options);
});
