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
      { text: "Demo", link: "https://demo.eoapi.io/" }
    ]
  },
  srcExclude: ["README.md"]
};
