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
import MyConsole from '../views/MyConsole.vue';
import intention from './intention';
import help from './help';

Vue.use(VueRouter);

const main = [
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
    // 这里一定要加注释,不然eslint报错,不知道为什么
    path: '/my_console',
    name: 'MyConsole',
    component: MyConsole,
    meta: {
      title: '控制台 | 外推网',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...main,
    ...intention,
    ...help,
  ],
});

export default router;
