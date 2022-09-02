window.addEventListener("load", function (event) {
  let observer = new MutationObserver(() => {
    mediumZoom(document.querySelectorAll("main img"), {
      background: "rgba(0, 0, 0, 0.5)",
    });
  });
  let options = {
    childList: true,
    subtree: true,
  };
  observer.observe(document.getElementById("app"), options);
});
