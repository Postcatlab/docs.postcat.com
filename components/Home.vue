<template>
  <div class="f_row_ac container_0">
    <div class="container_0_left f_shrink_0 f_column">
      <h1 class="title">一个可拓展的<br />开源 API 工具</h1>
      <div>
        <div>
          <button type="button" class="item_download">下载</button>
          <button type="button">
            <i class="iconfont icon-chevron-down"></i>
          </button>
        </div>
        <ul>
          <li v-for="item in resourceInfo" :key="item.id">
            <a :href="item.link" class="item-icon-show">
              {{ item.name }}
            </a>
          </li>
        </ul>
        <a class="eo_link">Live Demo，体验一下</a>
      </div>
    </div>
    <img data-zoomable src="/images/eoapi-demo.jpg" />
  </div>
  <div class="f_row_ac container_1">
    <div>
      <h2>开源</h2>
    </div>
    <div>
      <h2>API 设计</h2>
    </div>
    <div>
      <h2>API 调试</h2>
    </div>
    <div>
      <h2>插件广场</h2>
    </div>
  </div>
  <div class="container_2">
    <div>
    <img data-zoomable src="/images/api-design.png" />
    </div>
  </div>
  <div class="container_3">
  </div>
  <div class="download-links-list f_row f_jc_ac">
    <div
      v-for="item in resourceInfo"
      :key="item.id"
      class="download-links-card-item"
    >
      <a :href="item.link" class="item-icon-show">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>
        <i class="iconfont icon-download"></i>
      </a>
      <span class="item-text-show">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
let version = "1.0.2",
  resourceUrl = "https://packages.eoapi.io";
export default {
  name: "home",
  data() {
    return {
      resourceInfo: [
        {
          id: "win",
          name: "Windows 客户端",
          icon: "windows",
          keyword: "Setup",
          suffix: "exe",
          link: `${resourceUrl}/eoapi-Setup-${version}.exe`,
        },
        {
          id: "mac",
          name: "macOS(Intel) 客户端",
          icon: "mac",
          suffix: "dmg",
          link: `${resourceUrl}/eoapi-${version}.dmg`,
        },
        {
          id: "mac",
          name: "macOS(M1) 客户端",
          icon: "mac",
          suffix: "arm64.dmg",
          link: `${resourceUrl}/eoapi-${version}-arm64.dmg`,
        },
      ],
    };
  },
  methods: {
    findLinkInSingleAssets(assets, item) {
      let result = "";
      let assetIndex = assets.findIndex(
        (asset) =>
          new RegExp(`${item.suffix}$`, "g").test(asset.browser_download_url) &&
          (!item.keyword || asset.browser_download_url.includes(item.keyword))
      );
      if (assetIndex === -1) {
        return result;
      }
      result = assets[assetIndex].browser_download_url;
      assets.splice(assetIndex, 1);
      return result;
    },
    findLink(allAssets, item) {
      let result = "";
      allAssets.some((assets) => {
        result = this.findLinkInSingleAssets(assets, item);
        return result;
      });
      return result;
    },
    getDownloadResource() {
      fetch("https://api.github.com/repos/eolinker/eoapi/releases")
        .then((response) => response.json())
        .then((data) => {
          [...this.resourceInfo]
            .sort((a1, a2) => a2.suffix.length - a1.suffix.length)
            .forEach((item) => {
              item.link = this.findLink(
                data.map((val) => val.assets),
                item
              );
            });
          // console.log(this.resourceInfo);
        });
    },
  },
  mounted() {
    // this.getDownloadResource();
  },
};
</script>
<style lang="stylus" scoped>
.title {
  font-size: 30px;
}

.eo_theme_btn_success {
  border-radius: 3px 0 0 3px;
  min-width: 70px;
  word-wrap: none;
  border: 0 none;
  background-color: #00785a;
  color: #fff;
}

.f_row {
  display: flex;
}

.container_0 {
  margin-top: 80px;
}

.f_row_ac {
  display: flex;
  align-items: center;
}

.f_shrink_0 {
  flex-shrink: 0;
}

.container_0_left {
  margin-right: 60px;
}

.f_column {
  display: flex;
  flex-direction: column;
}

.fs12 {
  font-size: 12px;
}

.desc {
  text-align: center;
  font-size: 20px;
}

.eo_link {
  color: #0098ff;
}

.download-links-list {
  margin-top: 40px;
  margin-bottom: 55px;
  justify-content: center;
  margin-right: -40px;
}

.download-links-list .download-links-card-item {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 48px;
}

.download-links-list .download-links-list .download-links-card-item:hover .item-icon-show .iconfont {
  display: none;
}

.download-links-list .download-links-card-item:hover .item-icon-show .iconfont.icon-download {
  animation: scale-out 0.5s;
  animation-fill-mode: forwards;
  display: block;
}

.download-links-list .download-links-card-item .item-icon-show {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 2px 16px rgba(28, 76, 186, 0.08);
  margin-bottom: 24px;
  font-size: 14px;
  color: #51565d;
}

.download-links-list .download-links-card-item .item-icon-show .iconfont {
  font-size: 48px;
  color: #018e59;
}

.download-links-list .download-links-card-item .item-icon-show .icon-download {
  display: none;
}

.download-links-list .download-links-card-item .item-icon-hover {
  display: none;
}
</style>
