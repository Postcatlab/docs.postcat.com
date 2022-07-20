
# 导出

可以使用导出类插件定期备份数据、与其他平台同步数据；

## 示例代码

[eoapi to openapi](https://github.com/eolinker/eoapi-extensions/tree/main/packages/feature/export/openapi)

## 配置

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