<template>
  <h1>Eoapi</h1>
  <p>一个轻量的开源 API 工具</p>
  <div class="download-links-list f_row f_jc_ac">
    <div
      onclick="downloadPackage('winX64_exe')"
      class="download-links-card-item"
    >
      <div class="item-icon-show">
        <svg
          t="1646643243715"
          class="icon icon-windows"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="16532"
          width="128"
          height="128"
        >
          <path
            d="M514.54917146 544.75299073L514.54917146 843.39228821 907.5078125 907.5078125 907.5078125 544.75299073Z"
            p-id="16533"
          ></path>
          <path
            d="M907.5078125 479.24700927L907.5078125 116.4921875 514.54917146 181.68917847 514.54917146 479.24700927Z"
            p-id="16534"
          ></path>
          <path
            d="M448.6569519 479.24700927L448.6569519 192.50384521 116.4921875 247.65864563 116.4921875 479.24700927Z"
            p-id="16535"
          ></path>
          <path
            d="M116.4921875 544.75299073L116.4921875 778.42704011 448.6569519 832.57762146 448.6569519 544.75299073Z"
            p-id="16536"
          ></path>
        </svg>
        <svg
          t="1646643205475"
          class="icon icon-download"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="16383"
          width="128"
          height="128"
        >
          <path
            d="M859.61428833 772.71071625v86.90357208H164.38571167v-217.25893021h86.90357208v130.35535813h521.4214325v-130.35535813h86.90357208v130.35535813zM555.45178603 540.98234129L714.78948546 381.64464188 772.71071625 439.56587267l-260.71071625 260.71071626-260.71071625-260.71071626L309.21051454 381.64464188 468.54821397 540.98234129V164.38571167h86.90357206v376.59662962z"
            p-id="16384"
          ></path>
        </svg>
      </div>
      <span class="item-text-show">Windows 客户端</span>
    </div>
    <div
      onclick="downloadPackage('macOs_exe')"
      class="download-links-card-item"
    >
      <div class="item-icon-show">
        <svg
          t="1646643162040"
          class="icon icon-mac"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="16089"
          width="128"
          height="128"
        >
          <path
            d="M876.736 720.768c-1.152 3.392-18.688 64.768-61.952 127.872-37.44 54.464-76.096 109.312-137.216 110.272-60.096 1.088-79.296-35.84-147.968-35.84-68.48 0-90.048 34.88-146.816 36.864-58.688 2.432-103.872-59.456-141.44-113.6C164.672 735.36 105.6 531.904 184.832 395.52c38.976-68.224 109.12-111.616 185.408-112.768 57.536-1.088 112.256 38.976 147.2 38.976 35.904 0 102.08-48.448 171.968-41.216 29.248 1.216 110.976 12.224 163.776 88.576-4.16 2.816-97.856 58.112-96.896 170.688 1.408 135.936 119.232 180.48 120.448 180.992zM643.648 207.68c31.488-38.4 52.224-91.2 46.72-143.68-44.928 1.792-99.712 29.888-132.288 68.032-28.736 33.344-54.144 86.976-47.04 138.816 49.92 3.072 101.248-26.176 132.608-63.168z"
            p-id="16090"
          ></path>
        </svg>
        <svg
          t="1646643205475"
          class="icon icon-download"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="16383"
          width="128"
          height="128"
        >
          <path
            d="M859.61428833 772.71071625v86.90357208H164.38571167v-217.25893021h86.90357208v130.35535813h521.4214325v-130.35535813h86.90357208v130.35535813zM555.45178603 540.98234129L714.78948546 381.64464188 772.71071625 439.56587267l-260.71071625 260.71071626-260.71071625-260.71071626L309.21051454 381.64464188 468.54821397 540.98234129V164.38571167h86.90357206v376.59662962z"
            p-id="16384"
          ></path>
        </svg>
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
.first_view {
}

.f_row_ac {
  display: flex;
}

.left_content {
  flex-shrink: 0;
}
.download-links-list {
  margin-top: 40px;
  margin-bottom: 55px;
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
