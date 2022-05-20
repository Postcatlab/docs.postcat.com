# 快速开始

此篇文档介绍插件开发的流程，开发前，请确保你的电脑已经安装了 [Node.js](https://nodejs.org/en/)。
## 开发

命令行工具可以帮助你调试，当插件开发完成后，你也需要用它上传开发好的插件信息到插件广场。

安装命令行工具

```bash
$ npm i -g @eoapi/cli
```

现在你可以在全局范围内使用 `eo` 命令了。

### 创建插件模板

现在可以创建一个最简单的模板，它会包含最基本的构建配置，如有需要你可以修改配置、甚至完全使用自己的配置。

```bash
$ eo g foo
# or
$ eo generate foo
```

> 目前仅支持创建 feature 类型的插件

![create-extension](../assets/images/create-extension.svg)

它会在当前目录创造一个npm工程，安装好默认的依赖后即可开始正式开发。

```
$ cd foo
$ npm i
```

> 该命令与下面介绍的 `debug、undebug、upload` 等命令都在同一层级运行，foo 指的是 npm 工程文件夹，与 package.json 中的字段无关。

### 文件介绍

```js
// src/index.js
export const start = () => {
  return {};
};
```

最终会构建出一个 `umd` 规范的 JS 包，它至少导出一个主函数（命名导出）。

请注意：主函数的名称（在本例中是`start`）需要与 `package.json` 中的 `features.apimanage.export.action` 字段的值保持一致：

```json
// package.json
{
  "features": {
    "apimanage.export": {
      "action": "start"
    }
  }
}
```

### 配置介绍

关于插件暴露出来的所有配置项，都在 `package.json` 文件中，除了 `npm schema` 本身的规范字段外，与 `eoapi` 插件相关的主要有以下字段，这里以导出类型的插件为例：

```json
{
  "version": "{npm包的版本号，同时也作为插件的版本号}",
  "description": "{插件的描述}",
  "main": "{入口文件}",
  "module": "{入口文件}",
  "moduleID": "{插件ID}",
  "moduleName": "{显示在插件广场的名称}",
  "moduleType": "{插件类型：feature}",
  "logo": "{显示在插件广场的Logo}",
  // 在keywords中填写关键字段，利于在插件广场中搜索
  "keywords": [],
  "author": "{作者}",
  "features": {
    "apimanage.export": {
      "action": "{导出的主函数名}",
      "label": "{用户在功能区域看的标识}"
      // ... 其他个性化配置项
    }
  }
}
```

系统在运行插件时，会获取 `feature.apimanage.export` 下的 `action` 得到函数名。进而从插件的包内容中导入该函数并执行。

## 调试

当我们开发了一个叫 `foo` 的插件后，需要将它映射到本地，并让 Eoapi 能够识别它。我们已经帮你做了一些工作，你只需要运行以下命令，即等效于正式安装了插件在本地。

```bash
$ eo debug foo
```

:::warning
目前部分插件需要重启 Eoapi 后才能看到更新，我们正在尽快开发体验良好的热更新功能。
:::
## 上传
1. 请将插件发布到`npm`平台，因为目前插件是以 `npm` 的形式安装的，具体文档可以参考：[创建并发布一个npm 包
](https://juejin.cn/post/6987695534504935438)
2. 开发完成并构建后，通过以下命令将插件上传到官方的插件广场。

```bash
$ eo upload foo
```

经过官方审核后，才能在真正在插件广场中看到，整个过程通常需要一天的时间。
