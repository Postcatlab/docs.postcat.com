<template>
  <h1 class="title">Postcat</h1>
  <p class="desc">An extensible open source API tool</p>
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
  <img data-zoomable src="/images/postcat-demo.png" />
</template>

<script>
export default {
  name: "home",
  data() {},
  methods: {},
  mounted() {
    console.log(1);
  },
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
  font-size: 20px;
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
