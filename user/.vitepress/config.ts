import { packages } from "../../global.model";
// import WindiCSS from "vite-plugin-windicss";
export default {
  lang: "zh-Hans",
  title: "用户使用文档 - Postcat",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {
        src: "https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/icons_10812_9.04dec48becbe244b12f6eca51b76db33.js",
      },
    ],
  ],
  themeConfig: {
    lastUpdatedText: "最后更新",
    outlineTitle: "目录",
    siteTitle: " ",
    algolia: {
      appId: "DWNA8Q7OW9",
      apiKey: "74082b5eb9ea2c675445503c70f6b4e2",
      indexName: "eoapi",
    },
    nav: [
      { text: "文档", link: "/index", activeMatch: "/docs" },
      { text: "Live Demo", link: "https://postcat.com/" },
      { text: "Github", link: "https://github.com/Postcatlab/postcat" },
      // { text: "博客", link: "/release/monthly", activeMatch: "/release" },
      {
        text: "下载",
        ariaLabel: "Download",
        items: packages,
      },
    ],
    sidebar: {
      "/release": [
        {
          text: "博客",
          items: [
            {
              text: "月报",
              link: "/release/index",
              items: [{ text: "耗时半年，Eoapi 正式发布插件广场", link: "/release/extension-market" }],
            },

            { text: "我们为什么要做 Postcat", link: "/release/why-eoapi" },
          ],
        },
      ],
      "/": [
        {
          text: "产品手册",
          items: [
            { text: "产品简介", link: "/index" },
            {
              text: "联系我们",
              link: "/docs/contact",
            },
            {
              text: "基础功能",
              items: [
                {
                  text: "接口测试",
                  link: "/docs/apitest",
                  items: [
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
              items: [{ text: "离线安装", link: "/docs/local-install-extension" }],
            },
            { text: "常见问题", link: "/docs/FAQ" },
          ],
        },
      ],
    },
    repo: "Postcatlab/postcat",
    logo: "/images/logo.svg",
    editLink: {
      pattern: "https://github.com/eolinker/docs.postcat.com/edit/main/user/:path",
      text: "编辑此文档",
    },
  },
  srcExclude: ["README.md"],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "iconpark-icon",
      },
    },
  },
};
