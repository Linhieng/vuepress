---
home: true
heroImage: /hero.png
heroText: 首页标题
tagline: 首页副标题，设置为 null 可禁用
actionText: 按钮，点击跳转到 actionLink 指定的位置
actionLink: /foo/
features:
- title: features 标题1
  details: features 标题1 的内容
- title: features 标题2
  details: YAML front matter 之后额外的内容将会以普通的 markdown 被渲染，并插入到 features 的后面。
- title: features 标题3
  details: features 标题2 的内容
footer: MIT Licensed | Copyright © 2018-present Evan You
---

::: tip 详细文档查看官网
[vuepress 中文官网](https://v1.vuepress.vuejs.org/zh/)
:::

## 快速开始

1. 起步初始化

```bash

$ mkdir vuepress-starter && cd vuepress-starter

$ yarn init

$ yarn add -D vuepress

$ mkdir docs && echo '# Hello VuePress' > docs/README.md
需要注意编码需要是 UTF-8

```
2. 推荐在 package.json 中添加一些 script
```json
/* package.json */
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

3. 本地预览

```bash
yarn docs:dev
```
