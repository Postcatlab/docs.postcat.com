import { packages } from "../../global.model";
// import WindiCSS from "vite-plugin-windicss";
export default {
  lang: "zh-Hans",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "用户使用文档 - Eoapi",
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
    [
      "script",
      {
        src: "https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/icons_10812_9.04dec48becbe244b12f6eca51b76db33.js",
      },
    ],
    ["script", { src: "/lib/medium-zoom.js" }],
    ["script", { src: "/lib/setDownload.js" }],
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
          { text: "文档", link: "/", activeMatch: "/" },
          { text: "Live Demo", link: "https://eoapi.io/" },
          { text: "Github", link: "https://github.com/eolinker/eoapi" },
          {
            text: "下载",
            ariaLabel: "Download",
            items: packages,
          },
        ],
        sidebar: {
          "/": [
            {
              text: "产品手册",
              children: [
                { text: "产品简介", link: "/index" },
                {
                  text: "联系我们",
                  link: "/docs/contact",
                },
                {
                  text: "基础功能",
                  children: [
                    {
                      text: "接口测试",
                      link: "/docs/apitest",
                      children: [
                        // { text: "前后置脚本", link: "/docs/script-function" },
                      ],
                    },
                    { text: "接口文档", link: "/docs/apidoc" },
                    { text: "测试环境", link: "/docs/env" },
                    { text: "全局变量", link: "/docs/global-variable" },
                    { text: "Mock", link: "/docs/mock" },
                  ],
                },
                {
                  text: "插件广场",
                  link: "/docs/extensions",
                  children: [{ text: "离线安装", link: "/docs/local-install-extension" }],
                },
                {
                  text: "团队协作",
                  link: "/docs/collaborate",
                  children: [
                    { text: "云端服务", link: "/docs/storage" },
                    { text: "API 分享", link: "/docs/apiShare" },
                  ],
                },
                { text: "常见问题", link: "/docs/FAQ" },
              ],
            },
          ],
        },
      },

      // "/en/": {
      //   selectText: "Languages",
      //   label: "English",
      //   editLinkText: "Contribute to this document",
      //   nav: [
      //     { text: "Document", link: "/en/docs/about" },
      //     { text: "Live Demo", link: "https://eoapi.io/" },
      //     { text: "Github", link: "https://github.com/eolinker/eoapi" },
      //     {
      //       text: "Download",
      //       ariaLabel: "Download",
      //       items: packages,
      //     },
      //   ],
      //   sidebar: {
      //     "/en/docs/": [],
      //   },
      // },
    },
    docsRepo: "https://github.com/eolinker/docs.eoapi.io",
    docsDir: "user",
    docsBranch: "main",
    repo: "eolinker/eoapi",
    logo: "/images/logo.svg",
    editLinks: true,
  },
  srcExclude: ["README.md"],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "iconpark-icon",
      },
    },
  },
  // vite: {
  //   plugins: [WindiCSS()]
  // },
};
