# 开发

安装命令行工具

命令行工具在开发中并不是必须的，你完全可以不依靠它开发出一个合法的插件，但最终你需要用它上传开发好的插件信息到插件市场。

```bash
$ npm i -g @eoapi/cli
```

现在你可以在全局范围内使用 `eo` 命令了。

### 创建插件模板

现在可以创建一个最简单的模板，它会包含最基本的构建配置，如有需要你可以修改配置、甚至完全使用自己的配置。

> 目前仅支持创建 feature 类型的插件

![create-extension](../assets/images/create-extension.svg)

### 文件介绍

```js
// src/index.js
export const start = () => {
  return {};
};
```

最终会构建出一个 `umd` 规范的 JS 包，它至少导出一个主函数。

请注意：函数的名称（在本例中是`start`）需要与 `package.json` 中的 `features.apimanager.export.action` 字段的值保持一致：

```json
// package.json
{
  "features": {
    "apimanager.export": {
      "action": "start"
    }
  }
}
```

### 配置介绍

关于插件暴露出来的所有配置项，都在 `package.json` 文件中，除了 `npm schema` 本身的规范字段外，与`eoapi`插件相关的主要有以下字段，这里以导出类型的插件为例：

```json
{
  "version": "{npm包的版本号，同时也作为插件的版本号}",
  "description": "{插件的描述}",
  "main": "{入口文件}",
  "module": "{入口文件}",
  "moduleID": "{插件ID}",
  "moduleName": "{显示在插件时长的名称}",
  "moduleType": "{插件类型：feature}",
  "logo": "{显示在插件市场的Logo}",
  // 在keywords中填写关键字段，利于在插件市场中搜索
  "keywords": [],
  "author": "{作者}",
  "features": {
    "apimanager.export": {
      "action": "{导出的主函数名}",
      "label": "{用户在功能区域看的标识}"
      // ... 其他个性化配置项
    }
  }
}
```

系统在运行插件时，会获取 `feature.apimanager.export` 下的 `action` 得到函数名。进而从插件的包内容中导入该函数并执行。

# 调试

::: warning

待续

:::

# 上传

开发完成并构建后，通过以下命令将插件上传到官方的插件市场。别忘了将插件发布到`npm`平台，因为目前插件是以 `npm` 的形式安装的。

```bash
$ eo upload foo
```
