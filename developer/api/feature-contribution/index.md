# 可拓展的功能点

## Feature

Feature 代表功能级别的插件，除了[必填的配置项](/api/get-started.html#%E9%85%8D%E7%BD%AE%E4%BB%8B%E7%BB%8D)，我们需要根据你想拓展的功能额外配置 `features` 字段，格式如下：

```json
//package.json
{
  "name": "{插件名称}",
  //... 其他必填字段
  "features": {
    "exportAPI": {
      "action": "{导出的主函数名}",
      "label": "{导出功能标题}"
      // ... 其他配置项
    }
  }
}
```

支持拓展的功能
名称| features | 描述 |
| ---- | ---- | ---- |
|[导入](/api/feature-contribution/import.html)| importAIP | 自定义导入 API 数据 |
|[导出](/api/feature-contribution/export.html)| exportAPI | 自定义导出 API 数据 |
|[推送](/api/feature-contribution/push.html)| pushAPI | 将 API 数据推送到其他各个平台 |
|[多语言](/api/feature-contribution/i18n.html)| i18n | 支持不同语言的插件显示 |
|[vscode postcat dracula](https://github.com/Postcatlab/postcat-extensions/tree/main/packages/vscode-postcat-dracula)|theme|自定义主题颜色|

## 功能预告

:::warning
以下插件功能将会在后续支持，敬请期待。
:::

- API 鉴权插件
- API 文档生成代码
- API 信息生成数据
- 数据备份插件
- 快捷键
<!-- - 文档变更推送通知(需要用户系统) -->

你想要拓展的功能不在我们的计划上？请在 [Issue](https://github.com/Postcatlab/postcat/issues/137) 提出你的需求，十分感谢。
