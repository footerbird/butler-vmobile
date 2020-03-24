import Vue from 'vue';
import FastClick from 'fastclick';
import axios from 'axios';
import qs from 'qs';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/vant';
import { getStore } from './util/util';

Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;

FastClick.attach(document.body);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // 如果localStorage中有用户信息但是state中没有，则将localStorage中的用户信息赋给state
  if (getStore('userinfo') && !store.state.userinfo) {
    // 如果localStorage中的登录信息超时，超过一天，则清除localStorage中的用户信息
    const timeDiff = new Date().getTime() - getStore('logintime');
    if (timeDiff > 86400000) { // 1000*60*60*24
      store.commit('logout');
      next({ path: '/my_console' });
      return false;
    }
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
