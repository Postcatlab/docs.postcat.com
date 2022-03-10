module.exports = {
  title: " ",
  description: "一个轻量的开源 API 工具",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    //   头部导航
    logo: "/images/logo.svg",
    nav: [
      { text: "首页", link: "/index" },
      { text: "文档", link: "/docs/about" },
      { text: "API", link: "/api/module" },
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
      { text: "Live Demo", link: "https://demo.eoapi.io/" },
      { text: "Github", link: "https://github.com/eolinker/eoapi" },
    ],
    sidebar: {
      "/docs/": [
        {
          text: "介绍",
          children: [{ text: "快速开始", link: "/docs/about" }],
        },
      ],
      "/api/": [
        {
          text: "API",
          children: [{ text: "模块开发指南", link: "/api/module" }],
        },
      ],
    },
  },
  srcExclude: ["README.md"],
};
