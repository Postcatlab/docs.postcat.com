import { packages } from "../../global.model";
// import WindiCSS from "vite-plugin-windicss";
export default {
  lang: "zh-Hans",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "开发者文档 - Eoapi",
      description: "一个可拓展的开源 API 工具"
    },
    "/en/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "Eoapi",
      description: "An extensible open source API tool"
    }
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "script",
      {
        src: "https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/icons_10812_9.04dec48becbe244b12f6eca51b76db33.js"
      }
    ],
    ["script", { src: "/lib/medium-zoom.js" }],
    ["script", { src: "/zoom-image.js" }],
    [
      "script",
      {},
      `!function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.giocdn.com/2.1/gio.js","gio");
    gio('init','bd7645ddc19400a8', {});
  
  //custom page code begin here
  
  //custom page code end here
  
  gio('send');`
    ]
  ],
  lastUpdated: true,
  themeConfig: {
    algolia: {
      appId: "DWNA8Q7OW9",
      apiKey: "74082b5eb9ea2c675445503c70f6b4e2",
      indexName: "eoapi"
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
            items: packages
          }
        ],
        sidebar: {
          "/": [
            {
              text: "插件",
              link: "/",
              children: [
                { text: "快速开始", link: "/api/get-started" },
                {
                  text: "可贡献功能点",
                  link: "/api/feature-contribution/index",
                  children: [
                    {
                      text: "导入",
                      link: "/api/feature-contribution/import"
                    },
                    {
                      text: "导出",
                      link: "/api/feature-contribution/export"
                    },
                    {
                      text: "推送",
                      link: "/api/feature-contribution/push"
                    },
                    {
                      text: "多语言",
                      link: "/api/feature-contribution/i18n"
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
      // "/en/": {
      //   selectText: "Languages",
      //   label: "English",
      //   editLinkText: "Contribute to this document",
      //   nav: [
      //     { text: "Home", link: "/en/index" },
      //     { text: "Document", link: "/en/docs" },
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
    docsDir:"developer",
    docsBranch: "main",
    repo: "eolinker/eoapi",
    logo: "/images/logo.svg",
    editLinks: true
  },
  srcExclude: ["README.md"],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "iconpark-icon"
      }
    }
  }
};
