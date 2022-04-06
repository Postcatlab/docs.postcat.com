module.exports = {
  lang: "zh-Hans",
  title: "EOAPI",
  description: "一个可拓展的开源 API 工具",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { src: "/lib/medium-zoom.js" }],
    ["script", { src: "/zoom-image.js" }],
  ],
  lastUpdated: true,
  themeConfig: {
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
    docsRepo: "eolinker/eoapi-docs",
    docsBranch: "main",
    repo: "eolinker/eoapi",
    logo: "/images/logo.svg",
    editLinks: true,
    editLinkText: "贡献文档",
    lastUpdated: "最后更新",
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
            link: "https://github.com/eolinker/eoapi/releases/download/v0.0.1-beta/eoapi-0.0.1-beta.dmg",
            target: "_self",
          },
          {
            text: "Windows",
            link: "https://github.com/eolinker/eoapi/releases/download/v0.0.1-beta/eoapi-Setup-0.0.1-beta.exe",
            target: "_self",
          },
        ],
      },
      { text: "Live Demo", link: "https://demo.eoapi.io/" },
      { text: "Github", link: "https://github.com/eolinker/eoapi" },
    ],
    sidebar: {
      "/docs/": [
        {
          text: "产品手册",
          children: [
            { text: "产品简介", link: "/docs/about" },
            {
              text: "API 管理",
              link: "/docs/apimanage",
              children: [
                { text: "接口测试", link: "/docs/apitest" },
                { text: "接口文档", link: "/docs/apidoc" },
                { text: "测试环境", link: "/docs/env" },
              ],
            },
            {
              text: "插件广场",
              link: "/docs/extensions",
            },
            { text: "概念", link: "/docs/concepts" },
          ],
        },
        {
          text: "联系我们",
          link: "/docs/contact",
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
