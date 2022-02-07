

# 说明

> 在官网的 主题 ----  默认主题配置 ---- 首页 中提到了一个 **根级 README.md**，指的是 docs/README.md

> YAML front matter 中 `heroImage: /hero.png` 其中的 '/' 指的是 docs/.vuepress/public 所以图片应该放在 public 文件夹中



## 富文本

这是一个插槽，名为 footer，声明格式如下
```md
::: slot footer
MIT Licensed | Copyright © 2018-present [Evan You](https://github.com/yyx990803)
:::
```
然后使用组件可以渲染出该内容，组件如下
```vue
<Content slot-key="footer"/>
```
最终效果如下

::: slot footer
MIT Licensed | Copyright © 2018-present [Evan You](https://github.com/yyx990803)
:::
<Content slot-key="footer"/>

## markdown 扩展

* 链接跳转

```md
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
```
> [Home](/) <!-- 跳转到根部的 README.md -->

> [foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->

* Emoji

> [Emoji](/foo/emoji)

* 为当前 md 文档生成目录

```text
[[toc]]
```
输出效果：
[[toc]]

* 特殊提示

```md
  ::: tip
  这是一个提示
  :::

  ::: warning
  这是一个警告
  :::

  ::: danger
  这是一个危险警告
  :::

  ::: details
  这是一个详情块，在 IE / Edge 中不生效
  :::

  ::: danger STOP
  危险区域，禁止通行
  :::

  ::: details 点击查看代码
    ```js
    console.log('你好，VuePress！')
    ```
  :::

```

------------------------------

效果：

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::


* 代码行高亮

