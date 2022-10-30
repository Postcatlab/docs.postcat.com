# 推送

推送类插件允许我们将 Eoapi 上的数据一键推送到各个应用平台，例如：

- 推送到网关上完成 API 上线
- 和低代码平台结合，将 API 快速变成低代码平台中可使用的组件等。

## 示例代码

一键将 API 推送到其他平台：[eoapi push eolink](https://github.com/eolinker/eoapi-extensions/tree/main/packages/feature/push/eolink)

## 配置

```javascript
// index.js

export const exportFunc = (data = {}) => {
  return {
    name: "eoapi",
  };
};
// * 导出方式必须是命名导出，方法名需要与配置中的 action 字段一致
export const sync_to_remote = async (data = {}, { url, token }) => {
  // * 传入参数是 Eoapi 的API数据结构
  const formData = new FormData();
  formData.append(
    "file",
    // * 将数据转成文件流
    new Blob([JSON.stringify(data)], {
      type: "application/json",
    })
  );
  // * 地址在eoapi中配置
  const response = await fetch(url, {
    method: "POST",
    headers: { token },
    body: formData,
  });
  return await response.json();
};
```

```json
// package.json
{
  "name": "eoapi-foo", // npm包名称
  "version": "1.0.0",
  "description": "Eoapi extension for push api data",
  "main": "dist/index.js",
  "moduleID": "eoapi-foo", // 插件ID，可以自定义
  "moduleName": "eoapi-foo", // 插件名称，可以自定义
  "logo": "https://s3.bmp.ovh/imgs/2022/05/18/d8d200e3dc050831.png",
  "scripts": {
    "build": "rollup -c rollup.config.js",
    "build:watch": "rollup -w -c rollup.config.js"
  },
  "devDependencies": {
    "rollup": "^2.70.2"
  },
  "features": {
    "apimanage.sync": {
      "action": "sync_to_remote", // 需要与 index.js 中的主函数名保持一致
      "label": "Target", // 显示在 UI 上推送区域的名称
      "description": "", // 插件的简要描述
      "icon": "",
      "extestion": ""
    },
    "configuration": {
      // 插件的配置信息
      "type": "object",
      "title": "Push",
      "properties": {
        "eolink.remoteServer.url": {
          "type": "string",
          "required": true,
          "default": "http://127.0.0.1",
          "label": "远程服务器地址",
          "description": ""
        },
        "eolink.remoteServer.token": {
          "type": "string",
          "required": false,
          "default": "XXXXXXXX",
          "label": "Token",
          "description": ""
        }
      }
    }
  }
}
```
