
# 导入

可以使用导入类插件将其他平台的数据导入到 Eoapi 。

## 示例代码

[eoapi to openapi](https://github.com/eolinker/eoapi-extensions/tree/main/packages/feature/import/openapi)

## 配置

```javascript
// index.js

// * 导出方式必须是命名导出，方法名需要与配置中的 action 字段一致
export const importFunc = (data = {}) => {
  // * 传入参数是其他平台（如openapi）的API数据结构
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
  "description": "The import extension of eoapi",
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
      "action": "importFunc", // 需要与 index.js 中的主函数名保持一致
      "label": "Data(.json)", // 显示在 UI 上导入区域的名称
      "description": "", // 插件的简要描述
      "icon": "",
    }
  }
}
```

当用户触发导入行为后，主系统会调用相应的导入函数（在本例中是`importFunc`）, 并将导入后的数据即时显示在API列表中。

## 导入格式