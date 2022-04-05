window.addEventListener("load", function (event) {
  console.log("load");
  let observer = new MutationObserver(() => {
    mediumZoom(document.querySelectorAll("img"),{
      background:  "rgba(0, 0, 0, 0.5)",
    });
  });
  let options = {
    childList: true,
    subtree: true,
  };
  observer.observe(document.getElementById("app"), options);
});
