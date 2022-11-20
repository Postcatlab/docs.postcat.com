const zoomImage=() => {
  mediumZoom(document.querySelectorAll("main img"), {
    background: "rgba(0, 0, 0, 0.5)",
  });
}
zoomImage();
let observer = new MutationObserver(zoomImage);
let options = {
  childList: true,
  subtree: true,
};
observer.observe(document.getElementById("app"), options);


