# README

本文档由 [VitePress](https://vitepress.vuejs.org/) 搭建

### 项目结构

```bash
.
├── README.md						# 本文档
├── components/					# markdown 文档中需要运行的vue组件，例如定制化的首页
├── deploy.sh						# 自动化脚本
├── docs
│   ├── xxx.md					# 具体文档
│   ├── assets/					# 静态资源，主要是方式图片
│   └── .vitepress/			# vitepress配置，构建后的静态资源也在该文件夹下。
├── package.json				# 依赖配置
└── yarn.lock						# 依赖配置
```

### 如何开始编辑

#### 第一步

运行 VitePress 环境

```bash
$ yarn docs:dev
```

运行成功后，可以在`localhost:3000/`实时查看编辑结果。

#### 第二步

用编辑器打开项目 `/docs/` 目录下需要编辑的`.md`文档，或新建`.md`文档，进行编辑。`.md`文件和`.vue`的变动，都可以在步骤一所打开的页面上实时看到最终效果。

#### 文档中的配置

VitePress 提供了一些配置选项，用于控制`.md`文档的细节，目前本项目所用不多，如需要查阅，可参考官方的[Frontmatter](https://vitepress.vuejs.org/guide/frontmatter.html)。

#### 文档中的静态资源

在`.md`文件中的图片，目前约定放置在`/docs/assets/`文件夹下，在`.md`文件中使用相对路径引入即可。

#### 如何在 markdown 嵌入 vue 组件

在`.md`文件中嵌入 vue 组件的语法非常简单，只需要使用相对路径引入需要的 Vue 组件后，通过标签语法直接使用即可。

在`.vue`组件中可以使用 css 预编译器描述样式，本项目选用了`stylus`。

```markdown
...markdown 语法内容...

<script setup>
import Home from '../components/Home.vue'
</script>

<Home />

...markdown 语法内容...
```

具体可以参照官方文档的[Using Vue in Markdown](https://vitepress.vuejs.org/guide/using-vue.html#using-components)。具体例子可参照`/docs/index.md`文件。

### 如何构建

构建命令为：

```bash
$ yarn docs:build
```

构建成功后，会在`/.vitepress`下创建名为 `dist/`的文件夹，其中内容即是构建后的静态资源，如果需要在本地预览，可以运行`yarn docs:serve`命令，在本地临时启动一个静态资源服务器，即可预览构建后的最终效果。

也可以将`dist/`中的内容放置到正式服务器上浏览。
