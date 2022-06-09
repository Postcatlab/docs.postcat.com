const version = "1.0.3",
  resourceUrl = "https://github.com/eolinker/eoapi/releases/latest/download";
export let packages = [
  {
    id: "win",
    text: "Windows",
    icon: "windows",
    link: `${resourceUrl}/eoapi-Setup-${version}.exe`,
    target: "_self",
  },
  {
    id: "mac",
    text: "MacOS(Intel)",
    icon: "mac",
    link: `${resourceUrl}/eoapi-${version}.dmg`,
    target: "_self",
  },
  {
    id: "mac",
    text: "MacOS(M1)",
    icon: "mac",
    link: `${resourceUrl}/eoapi-${version}-arm64.dmg`,
    target: "_self",
  },
];
// const getDynamicLink = {
//   findLinkInSingleAssets(assets, item) {
//     let result = "";
//     let assetIndex = assets.findIndex(
//       (asset) =>
//         new RegExp(`${item.suffix}$`, "g").test(asset.browser_download_url) &&
//         (!item.keyword || asset.browser_download_url.includes(item.keyword))
//     );
//     if (assetIndex === -1) {
//       return result;
//     }
//     result = assets[assetIndex].browser_download_url;
//     assets.splice(assetIndex, 1);
//     return result;
//   },
//   findLink(allAssets, item) {
//     let result = "";
//     allAssets.some((assets) => {
//       result = this.findLinkInSingleAssets(assets, item);
//       return result;
//     });
//     return result;
//   },
//   getDownloadResource() {
//     fetch("https://api.github.com/repos/eolinker/eoapi/releases")
//       .then((response) => response.json())
//       .then((data) => {
//         [...this.resourceInfo]
//           .sort((a1, a2) => a2.suffix.length - a1.suffix.length)
//           .forEach((item) => {
//             item.link = this.findLink(
//               data.map((val) => val.assets),
//               item
//             );
//           });
//         // console.log(this.resourceInfo);
//       });
//   },
// };
// let resourceInfo = [
//   {
//     id: "win",
//     name: "Windows 客户端",
//     icon: "windows",
//     keyword: "Setup",
//     suffix: "exe",
//     link: `${resourceUrl}/eoapi-Setup-${version}.exe`,
//   },
//   {
//     id: "mac",
//     name: "macOS(Intel) 客户端",
//     icon: "mac",
//     suffix: "dmg",
//     link: `${resourceUrl}/eoapi-${version}.dmg`,
//   },
//   {
//     id: "mac",
//     name: "macOS(M1) 客户端",
//     icon: "mac",
//     suffix: "arm64.dmg",
//     link: `${resourceUrl}/eoapi-${version}-arm64.dmg`,
//   },
// ];
