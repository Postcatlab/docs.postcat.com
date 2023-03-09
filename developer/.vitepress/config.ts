import { packages } from "../../global.model";
// import WindiCSS from "vite-plugin-windicss";
export default {
  lang: "zh-Hans",
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
      { text: "文档", link: "/", activeMatch: "/" },
      { text: "Live Demo", link: "https://postcat.com/" },
      { text: "Github", link: "https://github.com/Postcatlab/postcat" },
      {
        text: "下载",
        ariaLabel: "Download",
        items: packages,
      },
    ],
    sidebar: {
      "/": [
        {
          text: "插件",
          link: "/",
          items: [
            { text: "快速开始", link: "/api/get-started" },
            {
              text: "可贡献功能点",
              link: "/api/feature-contribution/index",
              items: [
                {
                  text: "导入",
                  link: "/api/feature-contribution/import",
                },
                {
                  text: "导出",
                  link: "/api/feature-contribution/export",
                },
                {
                  text: "推送",
                  link: "/api/feature-contribution/push",
                },
                {
                  text: "主题",
                  link: "/api/feature-contribution/theme",
                },
                {
                  text: "多语言",
                  link: "/api/feature-contribution/i18n",
                },
              ],
            },
          ],
        },
      ],
    },
    repo: "Postcatlab/postcat",
    logo: "/images/logo.svg",
    editLink: {
      pattern: "https://github.com/eolinker/docs.postcat.com/edit/main/developer/:path",
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
