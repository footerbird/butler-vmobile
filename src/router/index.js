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
import IntentionDomain from '../views/IntentionDomain.vue';
import IntentionMark from '../views/IntentionMark.vue';
import MyConsole from '../views/MyConsole.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/domain_list',
    name: 'DomainList',
    component: DomainList,
  },
  {
    path: '/domain_detail/:domain_name_str',
    name: 'DomainDetail',
    component: DomainDetail,
  },
  {
    path: '/mark_list',
    name: 'MarkList',
    component: MarkList,
  },
  {
    path: '/mark_detail/:regno_md',
    name: 'MarkDetail',
    component: MarkDetail,
  },
  {
    path: '/company_list',
    name: 'CompanyList',
    component: CompanyList,
  },
  {
    // 这里一定要加注释或者后面的参数不能为company_id,不然eslint报错,不知道为什么
    path: '/company_detail/:company_id',
    name: 'CompanyDetail',
    component: CompanyDetail,
  },
  {
    path: '/brand_list',
    name: 'BrandList',
    component: BrandList,
  },
  {
    path: '/brand_detail/:brand_id',
    name: 'BrandDetail',
    component: BrandDetail,
  },
  {
    path: '/intention_domain',
    name: 'IntentionDomain',
    component: IntentionDomain,
  },
  {
    path: '/intention_mark',
    name: 'IntentionMark',
    component: IntentionMark,
  },
  {
    // 这里一定要加注释,不然eslint报错,不知道为什么
    path: '/my_console',
    name: 'MyConsole',
    component: MyConsole,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/agreement',
    name: 'Agreement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Agreement.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
