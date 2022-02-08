module.exports = {
  title: 'test VuePress',
  description: 'Just playing around',
  evergreen: true,
  base: '/vuepress/', // https://linhieng.github.io/vuepress/
  // dest: '/dist', // 直接在盘符根目录下
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: '/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FOO', link: '/foo/'},
      { text: 'External', link: 'https://github.com/linhieng' },
      {
        text: '下拉列表标题',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Group1', 
            items: [
              { text: 'Group1 HOME', link: '/' },
              { text: 'Group1 BAR', link: '/bar/', target:'_blank' },
              { text: 'Group1 item3', link: 'https://github.com/linhieng' },
            ] 
          },          
        ],
      },
    ],
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
  },
}