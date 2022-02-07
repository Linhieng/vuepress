# 侧边栏分组

文件结构应该是这样的： '.' 代表 docs
```text
.
├─ README.md
├─ directory.md
├─ other.md
│
├─ foo/
│  ├─ README.md
│  ├─ slider.md
│  └─ emoji.md
│
└─ bar/
   ├─ README.md
   ├─ one.md
   └─ two.md

```

config.js 中也应该进行对应的配置

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Group 1 foo',   // 必要的
        // path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/foo/',
          '/foo/emoji',
          '/foo/slider',
        ]
      },
      {
        title: 'Group 2 bar',   // 必要的
        // path: '/bar/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/bar/',
          '/bar/one',
          '/bar/two',
        ]
      },
      {
        title: 'Group 2 /',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          ['/', 'HOME'],
          ['/other', 'other'],
          ['/directory', 'directory'],
        ]
      },
    ],
  }
}
```
