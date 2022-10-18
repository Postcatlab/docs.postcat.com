const resourceInfo = [
  {
    id: "win",
    name: `Windows`,
    icon: "windows",
    keyword: "Setup",
    suffix: "exe",
    link: "",
  },
  {
    id: "mac",
    name: `MacOS(Intel)`,
    icon: "mac",
    suffix: "dmg",
    link: "",
  },
  {
    id: "mac",
    name: `MacOS(M1)`,
    icon: "mac",
    suffix: "arm64.dmg",
    link: "",
  },
];
function findLinkInSingleAssets(assets, item) {
  let result = "";
  const assetIndex = assets.findIndex((asset) => new RegExp(`${item.suffix}$`, "g").test(asset.browser_download_url) && (!item.keyword || asset.browser_download_url.includes(item.keyword)));
  if (assetIndex === -1) {
    return result;
  }
  result = assets[assetIndex].browser_download_url;
  assets.splice(assetIndex, 1);
  return result;
}

function findLink(allAssets, item) {
  let result = "";
  allAssets.some((assets) => {
    result = findLinkInSingleAssets(assets, item);
    return result;
  });
  return result;
}

function getClientResource() {
  fetch("https://api.github.com/repos/eolinker/eoapi/releases")
    .then((response) => response.json())
    .then((data = []) => {
      [...resourceInfo]
        .sort((a1, a2) => a2.suffix.length - a1.suffix.length)
        .forEach((item) => {
          item.link = findLink(
            data.map((val) => val.assets),
            item
          );
        });
      setTimeout(() => {
        let doms = document.getElementsByClassName("isExternal");
        [...doms].forEach((val) => {
          let resource = resourceInfo.find((resource) => resource.name === val.textContent);
          if (resource) {
            val.href = resource.link;
          } else {
            console.error(`can't find resource ${val.textContent}`);
          }
        });
      }, 500);
    });
}
getClientResource();
