# 可贡献功能点

目前支持的插件类别：

- Feature

## Feature

Feature 插件的配置，除了在`package.json` 文件中包含如`main`、`moduleID`、`moduleName`等插件的必要配置外，还需要额外配置`features`字段下的`apimanager.{type}`，`type`根据插件类别不同可以是`export`或`sync`。

### 导出

- 导出方式：`Named Exports`（命名导出）
- 导出类型：Function
- 方法名：自定义，但需要与配置中的 `action` 字段保持一致
- 传入参数：EoApi 的 API 对象
- 返回值：合法的`JSON`对象
- 配置中的必要字段：
  - `action`：主函数名称
  - `label`：显示在 UI 上导出区域的名称
  - `filename`：导出的文件名

目前，导出后写入文件的操作由主系统完成，因此导出的插件只返回想要导出的值即可。

### 导入

:::warning

开发中

:::

### 同步到其他平台

- 导出方式：`Named Exports`（命名导出）
- 导出类型：`Function`
- 方法名：自定义，但需要配置中的` action` 字段保持一致
- 传入参数：EoApi 的 API 对象
- 返回值：`null`
- 配置中的必要字段：
  - `action`：主函数名称
  - `label`：显示在 UI 上导出区域的名称

推送到其他平台的工作由插件自行完成，由于推送是在浏览器环境下进行，因此只能通过`http`协议进行。

### 文档自动生成代码
