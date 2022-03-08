<template>
  <h1 class="title">Eoapi</h1>
  <p class="desc">一个轻量的开源 API 工具</p>
  <div class="download-links-list f_row f_jc_ac">
    <div
      onclick="downloadPackage('winX64_exe')"
      class="download-links-card-item"
    >
      <div class="item-icon-show">
        <i class="iconfont">&#xec89;</i>
        <i class="iconfont icon-download">&#xe83a;</i>
      </div>
      <span class="item-text-show">Windows 客户端</span>
    </div>
    <div
      onclick="downloadPackage('macOs_exe')"
      class="download-links-card-item"
    >
      <div class="item-icon-show">
        <i class="iconfont icon-mac">&#xe6bf;</i>
        <i class="iconfont icon-download">&#xe83a;</i>
      </div>
      <span class="item-text-show">macOS 客户端</span>
    </div>
  </div>
  <img
    src="https://raw.githubusercontent.com/eolinker/eoapi/main/wiki/preview_1.png?token=GHSAT0AAAAAABRGKRUBJ634JVP7XL7KWAECYP3J36Q"
  />
</template>

<script>
export default {
  name: "home",
};
</script>
<style lang="stylus" scoped>
.title {
  text-align: center;
  font-size: 60px;
}

.f_row {
  display: flex;
}

.desc {
  text-align: center;
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

.download-links-list .download-links-card-item:hover .item-icon-show .iconfont {
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
