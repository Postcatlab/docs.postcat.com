# 可拓展的功能点

## Feature

Feature 代表功能级别的插件，除了[必填的配置项](/api/get-started.html#%E9%85%8D%E7%BD%AE%E4%BB%8B%E7%BB%8D)，我们需要根据你想拓展的功能额外配置 `features` 字段，格式如下：

```json
//package.json
{
  "name": "{插件名称}",
  //... 其他必填字段
  "features": {
    "apimanage.export": {
      "action": "{导出的主函数名}",
      "label": "{导出功能标题}"
      // ... 其他配置项
    }
  }
}
```

支持拓展的功能
| features | 描述 |
| ---- | ---- |
| apimanage.export | 自定义导出 API 数据 |
| apimanage.sync | 将 API 数据推送到其他各个平台 |

### 1. 导出

可以使用导出类插件定期备份数据、与其他平台同步数据；

#### 示例代码

[eoapi to openapi](https://github.com/eolinker/eoapi-extensions/tree/main/packages/feature/export/openapi)

#### 配置

```javascript
// index.js

// * 导出方式必须是命名导出，方法名需要与配置中的 action 字段一致
export const exportFunc = (data = {}) => {
  // * 传入参数是 Eoapi 的API数据结构
  return {
    name: 'eoapi',
  }
}
```

```json
// package.json
{
  "name": "eoapi-foo", // npm包名称
  "version": "1.0.0",
  "description": "The export extension of eoapi",
  "main": "dist/index.js",
  "moduleID": "eoapi-foo", // 插件ID，可以自定义
  "moduleName": "eoapi-foo", // 插件名称，可以自定义
  "moduleType": "feature",
  "logo": "https://s3.bmp.ovh/imgs/2022/05/18/d8d200e3dc050831.png",
  "scripts": {
    "build": "rollup -c rollup.config.js",
    "build:watch": "rollup -w -c rollup.config.js"
  },
  "devDependencies": {
    "rollup": "^2.70.2"
  },
  "features": {
    "apimanage.export": {
      "action": "exportFunc", // 需要与 index.js 中的主函数名保持一致
      "label": "Data(.json)", // 显示在 UI 上导出区域的名称
      "description": "", // 插件的简要描述
      "icon": "",
      "filename": "data.json" // 导出后生成的文件名
    }
  }
}
```

目前，导出后写入文件的操作由核心系统完成，因此导出的拓展只需要返回导出的文件内容。

### 2. 推送

推送类插件允许我们将 Eoapi 上的数据一键推送到各个应用平台，例如：

- 推送到网关上完成 API 上线
- 和低代码平台结合，将 API 快速变成低代码平台中可使用的组件等。

#### 示例代码

一键将 API 推送到其他平台：[eoapi push eolink](https://github.com/eolinker/eoapi-extensions/tree/main/packages/feature/push/eolink)

#### 代码说明

```javascript
// index.js

export const exportFunc = (data = {}) => {
  return {
    name: 'eoapi',
  }
}
// * 导出方式必须是命名导出，方法名需要与配置中的 action 字段一致
export const sync_to_remote = async (data = {}, { url, token }) => {
  // * 传入参数是 Eoapi 的API数据结构
  const formData = new FormData()
  formData.append(
    'file',
    // * 将数据转成文件流
    new Blob([JSON.stringify(data)], {
      type: 'application/json',
    })
  )
  // * 地址在eoapi中配置
  const response = await fetch(url, {
    method: 'POST',
    headers: { token },
    body: formData,
  })
  return await response.json()
}
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
  "moduleType": "feature",
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
    }
  },
  "contributes": {
    "configuration": {
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

### 3. 功能预告

:::warning
以下插件功能将会在后续支持，敬请期待。
:::

- 导入插件
- API 文档生成代码
- API 信息生成数据
- 语言包
- 主题
- 快捷键
<!-- - 文档变更推送通知(需要用户系统) -->


你想要拓展的功能不在我们的计划上？请在 [Issue](https://github.com/eolinker/eoapi/issues) 提出你的需求，十分感谢。
