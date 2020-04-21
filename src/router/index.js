import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import DomainList from '../views/DomainList.vue';
import DomainDetail from '../views/DomainDetail.vue';
import MarkList from '../views/MarkList.vue';
import MarkDetail from '../views/MarkDetail.vue';
import CompanyList from '../views/CompanyList.vue';
import CompanyDetail from '../views/CompanyDetail.vue';
import BrandList from '../views/BrandList.vue';
import BrandDetail from '../views/BrandDetail.vue';
import IntentionDomain from '../views/intention/IntentionDomain.vue';
import IntentionMark from '../views/intention/IntentionMark.vue';
import IntentionSbsj from '../views/intention/IntentionSbsj.vue';
import IntentionBhfs from '../views/intention/IntentionBhfs.vue';
import IntentionGjsb from '../views/intention/IntentionGjsb.vue';
import IntentionSbbg from '../views/intention/IntentionSbbg.vue';
import IntentionSbzr from '../views/intention/IntentionSbzr.vue';
import IntentionSbxz from '../views/intention/IntentionSbxz.vue';
import IntentionXkba from '../views/intention/IntentionXkba.vue';
import IntentionBzcz from '../views/intention/IntentionBzcz.vue';
import IntentionSbyy from '../views/intention/IntentionSbyy.vue';
import IntentionSbcx from '../views/intention/IntentionSbcx.vue';
import IntentionWxxg from '../views/intention/IntentionWxxg.vue';
import IntentionYydb from '../views/intention/IntentionYydb.vue';
import IntentionCxdb from '../views/intention/IntentionCxdb.vue';
import IntentionWxdb from '../views/intention/IntentionWxdb.vue';
import IntentionGszc from '../views/intention/IntentionGszc.vue';
import IntentionCsjz from '../views/intention/IntentionCsjz.vue';
import IntentionGwjz from '../views/intention/IntentionGwjz.vue';
import IntentionVisj from '../views/intention/IntentionVisj.vue';
import IntentionPpzx from '../views/intention/IntentionPpzx.vue';
import IntentionPptg from '../views/intention/IntentionPptg.vue';
import IntentionPpwq from '../views/intention/IntentionPpwq.vue';
import IntentionPpyy from '../views/intention/IntentionPpyy.vue';
import MyConsole from '../views/MyConsole.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: '品牌生活广场，传递品牌价值 | 外推网',
    },
  },
  {
    path: '/domain_list',
    name: 'DomainList',
    component: DomainList,
    meta: {
      title: '域名市场 - 域名交易就是这么简单 | 外推网',
    },
  },
  {
    path: '/domain_detail/:domain_name_str',
    name: 'DomainDetail',
    component: DomainDetail,
    meta: {
      title: '域名详情页 | 外推网',
    },
  },
  {
    path: '/mark_list',
    name: 'MarkList',
    component: MarkList,
    meta: {
      title: '商标市场 - 让商标转让更简单 | 外推网',
    },
  },
  {
    path: '/mark_detail/:regno_md',
    name: 'MarkDetail',
    component: MarkDetail,
    meta: {
      title: '商标详情页 | 外推网',
    },
  },
  {
    path: '/company_list',
    name: 'CompanyList',
    component: CompanyList,
    meta: {
      title: '企业名录 - 企业工商信息一手掌握 | 外推网',
    },
  },
  {
    // 这里一定要加注释或者后面的参数不能为company_id,不然eslint报错,不知道为什么
    path: '/company_detail/:company_id',
    name: 'CompanyDetail',
    component: CompanyDetail,
    meta: {
      title: '企业详情页 | 外推网',
    },
  },
  {
    path: '/brand_list',
    name: 'BrandList',
    component: BrandList,
    meta: {
      title: '品牌大全 - 中国品牌推荐 | 外推网',
    },
  },
  {
    path: '/brand_detail/:brand_id',
    name: 'BrandDetail',
    component: BrandDetail,
    meta: {
      title: '品牌详情页 | 外推网',
    },
  },
  {
    path: '/intention/domain',
    name: 'IntentionDomain',
    component: IntentionDomain,
    meta: {
      title: '域名代理服务 | 外推网',
    },
  },
  {
    path: '/intention/mark',
    name: 'IntentionMark',
    component: IntentionMark,
    meta: {
      title: '商标代理服务 | 外推网',
    },
  },
  {
    path: '/intention/sbsj',
    name: 'IntentionSbsj',
    component: IntentionSbsj,
    meta: {
      title: '商标设计 | 外推网',
    },
  },
  {
    path: '/intention/bhfs',
    name: 'IntentionBhfs',
    component: IntentionBhfs,
    meta: {
      title: '商标驳回复审 | 外推网',
    },
  },
  {
    path: '/intention/gjsb',
    name: 'IntentionGjsb',
    component: IntentionGjsb,
    meta: {
      title: '国际商标 | 外推网',
    },
  },
  {
    path: '/intention/sbbg',
    name: 'IntentionSbbg',
    component: IntentionSbbg,
    meta: {
      title: '商标变更 | 外推网',
    },
  },
  {
    path: '/intention/sbzr',
    name: 'IntentionSbzr',
    component: IntentionSbzr,
    meta: {
      title: '商标转让 | 外推网',
    },
  },
  {
    path: '/intention/sbxz',
    name: 'IntentionSbxz',
    component: IntentionSbxz,
    meta: {
      title: '商标续展 | 外推网',
    },
  },
  {
    path: '/intention/xkba',
    name: 'IntentionXkba',
    component: IntentionXkba,
    meta: {
      title: '商标许可备案 | 外推网',
    },
  },
  {
    path: '/intention/bzcz',
    name: 'IntentionBzcz',
    component: IntentionBzcz,
    meta: {
      title: '补注册证 | 外推网',
    },
  },
  {
    path: '/intention/sbyy',
    name: 'IntentionSbyy',
    component: IntentionSbyy,
    meta: {
      title: '商标异议 | 外推网',
    },
  },
  {
    path: '/intention/sbcx',
    name: 'IntentionSbcx',
    component: IntentionSbcx,
    meta: {
      title: '商标撤销 | 外推网',
    },
  },
  {
    path: '/intention/wxxg',
    name: 'IntentionWxxg',
    component: IntentionWxxg,
    meta: {
      title: '商标无效宣告 | 外推网',
    },
  },
  {
    path: '/intention/yydb',
    name: 'IntentionYydb',
    component: IntentionYydb,
    meta: {
      title: '异议答辩 | 外推网',
    },
  },
  {
    path: '/intention/cxdb',
    name: 'IntentionCxdb',
    component: IntentionCxdb,
    meta: {
      title: '撤销答辩 | 外推网',
    },
  },
  {
    path: '/intention/wxdb',
    name: 'IntentionWxdb',
    component: IntentionWxdb,
    meta: {
      title: '无效宣告答辩 | 外推网',
    },
  },
  {
    path: '/intention/gszc',
    name: 'IntentionGszc',
    component: IntentionGszc,
    meta: {
      title: '公司注册 | 外推网',
    },
  },
  {
    path: '/intention/csjz',
    name: 'IntentionCsjz',
    component: IntentionCsjz,
    meta: {
      title: '财税记账 | 外推网',
    },
  },
  {
    path: '/intention/gwjz',
    name: 'IntentionGwjz',
    component: IntentionGwjz,
    meta: {
      title: '官网建站与小程序开发 | 外推网',
    },
  },
  {
    path: '/intention/visj',
    name: 'IntentionVisj',
    component: IntentionVisj,
    meta: {
      title: '企业VI形象视觉设计 | 外推网',
    },
  },
  {
    path: '/intention/ppzx',
    name: 'IntentionPpzx',
    component: IntentionPpzx,
    meta: {
      title: '品牌发展咨询 | 外推网',
    },
  },
  {
    path: '/intention/pptg',
    name: 'IntentionPptg',
    component: IntentionPptg,
    meta: {
      title: '品牌营销推广 | 外推网',
    },
  },
  {
    path: '/intention/ppwq',
    name: 'IntentionPpwq',
    component: IntentionPpwq,
    meta: {
      title: '品牌确权维权 | 外推网',
    },
  },
  {
    path: '/intention/ppyy',
    name: 'IntentionPpyy',
    component: IntentionPpyy,
    meta: {
      title: '品牌代运营 | 外推网',
    },
  },
  {
    // 这里一定要加注释,不然eslint报错,不知道为什么
    path: '/my_console',
    name: 'MyConsole',
    component: MyConsole,
    meta: {
      title: '控制台 | 外推网',
    },
  },
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

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
