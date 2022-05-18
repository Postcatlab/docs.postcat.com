# 可贡献功能点

## Feature

Feature 代表功能级别的插件，除了在 `package.json` 文件中包含如 `main`、`moduleID`、`moduleName` 等必要配置外；

需要额外配置 `features` 字段下的 `apimanager.{type}` ，`type`根据拓展类别不同可以是:
* `export`：拓展导出 API 数据
* `sync`：拓展将 API 数据同步到其他平台

```json
{
  "description": "{拓展的描述}",
  "main": "{入口文件}",
  "module": "{入口文件}",
  "moduleID": "{拓展ID}",
  //... 必填字端
  "features": {
    "apimanager.export": {
      "action": "{导出的主函数名}",
      "label": "{用户在功能区域看的标识}"
      // ... 其他个性化配置项
    }
  }
}
```

### 导出

- 导出方式：`Named Exports`（命名导出）
- 导出类型：Function
- 方法名：自定义，但需要与配置中的 `action` 字段保持一致
- 传入参数：Eoapi 的 API 对象
- 返回值：合法的`JSON`对象
- 配置中的必要字段：
  - `action`：主函数名称
  - `label`：显示在 UI 上导出区域的名称
  - `filename`：导出的文件名

目前，导出后写入文件的操作由主系统完成，因此导出的拓展只返回想要导出的值即可。

### 同步到其他平台

- 导出方式：`Named Exports`（命名导出）
- 导出类型：`Function`
- 方法名：自定义，但需要配置中的` action` 字段保持一致
- 传入参数：Eoapi 的 API 对象
- 返回值：`null`
- 配置中的必要字段：
  - `action`：主函数名称
  - `label`：显示在 UI 上导出区域的名称

推送到其他平台的工作由拓展自行完成，由于推送是在浏览器环境下进行，因此只能通过`http`协议进行。

### 插件功能预告
:::warning
以下插件功能将会在后续支持，敬请期待。
:::
* 导入插件
* API 文档生成代码
* 语言包
* 主题

你想要拓展其他功能不在我们的计划上？请在 [Issue](https://github.com/eolinker/eoapi/issues) 提出你的需求，十分感谢。
