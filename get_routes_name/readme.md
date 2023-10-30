1. 获取page目录及子目录
2. flat静态路由
3. 抽取path作为key,name,icon,component作为value
4. 匹配目录及子目录

``` js
 {
    path: 'aaaaa',
    name: 'aaaa中心',
    meta: {
      icon: 'database'
    },
    component: BlankView,
    children: [
      {
        path: 'aaaaaList',
        name: 'aaaa列表',
        meta: {
          page: {
            closable: false
          }
        },
        component: () => import('@/pages/aaaaa/aaaaaList'),
      },
      {
        path: 'bbbb',
        name: 'bbbb列表',
        meta: {
          page: {
            closable: false
          }
        },
        component: () => import('@/pages/aaaaa/bbbbList'),
      },
    ]
  },
  {
    path: 'ccccc',
    name: 'ccccc中心',
    meta: {
      icon: 'appstore'
    },
    component: BlankView,
    children: [
      {
        path: 'cccccList',
        name: 'ccccc列表',
        meta: {
          page: {
            closable: false
          }
        },
        component: () => import('@/pages/ccccc/cccccList'),
      },
      {
        path: 'ddddd',
        name: 'ccccc分类',
        meta: {
          page: {
            closable: false
          }
        },
        component: () => import('@/pages/ccccc/ddddd'),
      },
      {
        path: 'ddddd',
        name: 'eeee列表',
        meta: {
          page: {
            closable: false
          }
        },
        component: () => import('@/pages/ccccc/eeee'),
      },
    ]
  }
```