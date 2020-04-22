const help = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载，当路由被访问时才会加载相应的css和js，项目打包的时候会多生成一个相应的css和js文件
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于我们 | 外推网',
    },
  },
  {
    path: '/agreement',
    name: 'Agreement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载，当路由被访问时才会加载相应的css和js，项目打包的时候会多生成一个相应的css和js文件
    component: () => import(/* webpackChunkName: "about" */ '../views/Agreement.vue'),
    meta: {
      title: '用户协议 | 外推网',
    },
  },
  {
    path: '/problem',
    name: 'Problem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载，当路由被访问时才会加载相应的css和js，项目打包的时候会多生成一个相应的css和js文件
    component: () => import(/* webpackChunkName: "about" */ '../views/Problem.vue'),
    meta: {
      title: '常见问题 | 外推网',
    },
  },
];

export default help;
