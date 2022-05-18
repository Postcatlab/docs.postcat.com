module.exports = {
  lang: "zh-Hans",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Eoapi",
      description: "一个可拓展的开源 API 工具",
    },
    "/en/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "Eoapi",
      description: "An extensible open source API tool",
    },
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { src: "/lib/medium-zoom.js" }],
    ["script", { src: "/zoom-image.js" }],
  ],
  lastUpdated: true,
  themeConfig: {
    algolia: {
      appId: "DWNA8Q7OW9",
      apiKey: "74082b5eb9ea2c675445503c70f6b4e2",
      indexName: "eoapi",
    },
    locales: {
      "/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "贡献此文档",
        lastUpdated: "最后更新",
        nav: [
          { text: "首页", link: "/index" },
          { text: "文档", link: "/docs/about" },
          // { text: "API", link: "/api/module" },
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
                { text: "接口测试", link: "/docs/apitest" },
                { text: "接口文档", link: "/docs/apidoc" },
                { text: "测试环境", link: "/docs/env" },
                {
                  text: "插件广场",
                  link: "/docs/extensions",
                },
                {
                  text: "数据源",
                  link: "/docs/storage",
                },
                { text: "常见问题", link: "/docs/FAQ" },
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
      "/en/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Contribute to this document",
        nav: [
          { text: "Home", link: "/en/index" },
          { text: "Document", link: "/en/docs/about" },
          {
            text: "Download",
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
          "/en/docs/": [],
        },
      },
    },
    docsRepo: "eolinker/eoapi-docs",
    docsBranch: "main",
    repo: "eolinker/eoapi",
    logo: "/images/logo.svg",
    editLinks: true,
  },
  srcExclude: ["README.md"],
};
