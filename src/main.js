import Vue from 'vue';
import FastClick from 'fastclick';
import axios from 'axios';
import qs from 'qs';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/vant';
import { getStore } from './util/util';

require('./mock/index');

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前，往请求头添加token
  if (getStore('userinfo') && JSON.parse(getStore('userinfo')).user_token) {
    config.headers.Authorization = JSON.parse(getStore('userinfo')).user_token;
  }
  return config;
}, (error) => {
  // 对请求错误做些什么
  console.log(error);
  return Promise.reject(error);
});
Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;

FastClick.attach(document.body);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // 如果页面需要登录授权
  if (to.meta.requireAuth) {
    // 如果localStorage中没有用户信息或者登录超时(超过一天)，则跳去登录页面
    let overTime = false;
    if (!getStore('logintime')) {
      overTime = true;
    } else {
      const timeDiff = new Date().getTime() - getStore('logintime');
      if (timeDiff > 86400000) { // 1000*60*60*24
        overTime = true;
      }
    }
    if (!getStore('userinfo') || overTime) {
      store.commit('logout');
      next({ path: '/my_console' });
      return false;
    }
  }

  if (getStore('userinfo') && !store.state.userinfo) {
    // 如果localStorage中有用户信息但是state中没有，则将localStorage中的用户信息赋给state
    const userinfo = JSON.parse(getStore('userinfo'));
    store.commit('login', userinfo);
  }

  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
