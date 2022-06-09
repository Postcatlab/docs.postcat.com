<template>
  <div class="f_row_ac container_0">
    <div class="container_0_left f_shrink_0 f_column">
      <h1 class="title">一个可拓展的<br />开源 API 工具</h1>
      <div class="f_row_ac container_0_btn_box">
        <div class="download_btn_container f_row_ac">
          <a download :href="currentResource.link">
            <button type="button" class="eo_btn download_btn download_btn_left">
              下载 {{ currentResource.text }}
            </button>
          </a>
          <div class="download_btn_right_container">
            <button
              type="button"
              class="eo_btn download_btn download_btn_right"
            >
              <i class="iconfont icon-chevron-down"></i>
            </button>
            <div class="btn_group_list_container">
              <ul class="btn_group_list">
                <a
                  v-for="item in resourceInfo"
                  :key="item.id"
                  download
                  :href="item.link"
                  class="item-icon-show"
                >
                  <li>
                    {{ item.text }}
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <a class="eo_link" href="https://demo.eoapi.io" target="_blank"
          ><button class="eo_btn eo_btn_default" type="button">
            Live Demo
          </button></a
        >
      </div>
    </div>
    <div class="image_demo_container">
      <img class="image_demo" src="/images/eoapi-demo.jpg" />
    </div>
  </div>
  <div class="f_row_ac container_1">
    <div class="card_wrap">
      <div class="card_item">
        <span class="iconfont icon-windows"></span>
        <text>开源</text>
      </div>
      <div class="card_item">
        <span class="iconfont icon-windows"></span>
        <text>API 文档</text>
      </div>
      <div class="card_item">
        <span class="iconfont icon-windows"></span>
        <text>API 调试</text>
      </div>
      <div class="card_item">
        <span class="iconfont icon-windows"></span>
        <text>插件广场</text>
      </div>
    </div>
  </div>
  <div class="container_2">
    <div class="function_container">
      <img src="/images/api-test.png" />
      <div>
        <h2>轻松 API 调试</h2>
        <p>纯 UI 操作，仅需一次点击即可获取清晰完整的 API 测试信息。</p>
        <p>无需安装任何插件，支持对 API 本地/在线调试。</p>
        <p>记录所有 API 的测试历史，一键回溯测试。</p>
      </div>
    </div>
    <div class="function_container">
      <div>
        <h2>友好的 API 文档</h2>
        <p>请放弃丑陋且格式不统一的 API 文档</p>
        <p>支持规范化的文档、提供友好的阅读界面以及清晰的分类</p>
        <p>还可以通过文档自动生成 Mock，协作无烦恼</p>
      </div>
      <img src="/images/api-design.png" />
    </div>
    <div class="function_container">
      <img src="/images/extension-market.png" />
      <div>
        <h2>插件广场</h2>
        <p>将功能选择权交到你的手中，组装出最适合自己的 API 工具</p>
        <p>支持安装导入 Swagger 等格式的 API</p>
        <p>还可以一键同步到其他平台等插件。</p>
        <p>特定需求无法满足？还可以自己动手，保证提供流畅的开发体验</p>
      </div>
    </div>
  </div>
  <div class="container_3">
    <div class="download_container download-links-list f_row f_jc_ac">
      <div
        v-for="item in resourceInfo"
        :key="item.id"
        class="download-links-card-item"
      >
        <a :href="item.link" class="item-icon-show">
          <i class="iconfont" :class="`icon-${item.icon}`"></i>
          <i class="iconfont icon-download"></i>
        </a>
        <span class="item-text-show">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { packages } from "../global.model";
import { getOS } from "../global";
let os = getOS();
let currentResource =
  packages.find((item) => item.text.includes(os)) || packages[0];
export default {
  name: "home",
  data() {
    return {
      resourceInfo: packages,
      currentResource: currentResource,
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="stylus" scoped>
.f_row {
  display: flex;
}

.f_row_ac {
  display: flex;
  align-items: center;
}

.image_demo {
  width: 850px;
}

.f_shrink_0 {
  flex-shrink: 0;
}

.f_column {
  display: flex;
  flex-direction: column;
}

.fs12 {
  font-size: 12px;
}

.eo_link {
  color: #0098ff;
}

.eo_btn {
  font-size: 16px;
  height: 35px;
  border: 0 none;
  cursor: pointer;
  border-radius: 3px;
}

.download_btn {
  background-color: #00785a;
  color: #fff;
}

.eo_btn_default {
  background-color: #fff;
  color: #2057cb;
  border: 1px solid #2057cb;
}

.container_0 {
  width: 1200px;
  margin: 50px auto;
  justify-content: space-between;

  .container_0_left {
    margin-right: 60px;
  }

  .container_0_btn_box {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .download_btn_container {
    margin-right: 15px;
  }

  .download_btn_left {
    padding: 5px 10px;
    border-radius: 3px 0 0 3px;
    min-width: 70px;
  }

  .download_btn_right {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0 3px 3px 0;
  }

  .btn_group_list_container {
    position: absolute;
    display: none;
    padding-top: 10px;

    .btn_group_list {
      margin: 0;
      text-align: left;
      padding: 5px 0;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 3px;

      li {
        padding: 0 15px;
        list-style-type: none;
      }
    }
  }

  .download_btn_right_container:hover {
    .btn_group_list_container {
      display: block;
      margin-left: -98px;
    }
  }
}

.container_1 {
  background-color: rgba(21, 120, 90, 0.16);

  .card_wrap {
    color: #15785a;
    display: flex;
    width: 1000px;
    margin: 0 auto;
    justify-content: space-between;
  }

  .card_item {
    display: flex;
    flex-direction: column;
    padding: 50px;
    text-align: center;

    .iconfont {
      font-size: 60px;
    }

    text {
      font-size: 20px;
      font-weight: bold;
    }
  }
}

.container_2 {
  margin: 0 auto;
  width: fit-content;

  // .function_container:nth-child(2n) {
  // background-color: #f8f8f8;
  // }
  .function_container {
    display: flex;
    align-items: center;
    margin: 50px auto;
    justify-content: space-between;
    width: 1000px;

    img {
      width: 450px;
      z-index: -1;
    }
  }
}

.title {
  font-size: 38px;
  line-height: 60px;
  font-weight: bolder;
  text-align: center;
}

.container_3 {
  background-color: #f8f8f8;
  padding: 50px;

  .download-links-list {
    justify-content: center;
    margin-right: -40px;

    .download-links-card-item {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-right: 48px;
    }

    .download-links-card-item:hover .item-icon-show .iconfont {
      display: none;
    }

    .download-links-card-item:hover .item-icon-show .iconfont.icon-download {
      animation: scale-out 0.5s;
      animation-fill-mode: forwards;
      display: block;
    }

    .download-links-card-item .item-icon-show {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      text-decoration: none;
      height: 100px;
      background-color: #fff;
      box-shadow: 0 2px 16px rgba(28, 76, 186, 0.08);
      margin-bottom: 24px;
      font-size: 14px;
      color: #51565d;
    }

    .download-links-card-item .item-icon-show .iconfont {
      font-size: 48px;
      color: #018e59;
    }

    .download-links-card-item .item-icon-show .icon-download {
      display: none;
    }
  }

@media screen and (max-width: 750px) {
    .container_0 {
      width: fit-content;
    }

    .image_demo_container, .container_0_btn_box {
      display: none;
    }
  }
}
</style>
