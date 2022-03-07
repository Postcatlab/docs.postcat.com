module.exports = {
  title: " ",
  description: "Just playing around.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    //   头部导航
    logo: "https://demo.eoapi.io/assets/images/logo.svg",
    nav: [
      { text: "首页", link: "/index" },
      { text: "文档", link: "/docs/about" },
      {
        text: "下载",
        ariaLabel: "Download",
        items: [
          {
            text: "MacOS",
            link: "https://github.com/eolinker/eoapi/releases/latest/download/eoapi-setup.dmg",
          },
          {
            text: "Windows",
            link: "https://github.com/eolinker/eoapi/releases/latest/download/eoapi-setup.exe",
          },
        ],
      },
      { text: "示例", link: "https://demo.eoapi.io/" },
      { text: "Github", link: "https://github.com/eolinker/eoapi" },
    ],
  },
  srcExclude: ["README.md"],
};
