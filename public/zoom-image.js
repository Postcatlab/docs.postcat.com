window.addEventListener("load", function (event) {
  console.log("load");
  let observer = new MutationObserver(() => {
    mediumZoom(document.querySelectorAll("img"));
  });
  let options = {
    childList: true,
    subtree: true,
  };
  observer.observe(document.getElementById("app"), options);
});
