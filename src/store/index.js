import Vue from 'vue';
import Vuex from 'vuex';
import { setStore, removeStore } from '../util/util';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userinfo: undefined,
    popup_login: false,
    popup_register: false,
    popup_findpwd: false,
  },
  mutations: {
    login(state, payload) {
      state.userinfo = payload;
      setStore('userinfo', JSON.stringify(payload));
      setStore('logintime', new Date().getTime());
    },
    logout(state) {
      state.userinfo = undefined;
      removeStore('userinfo');
      removeStore('logintime');
    },
    changePopupLogin(state, payload) {
      state.popup_login = payload;
      if (payload) {
        state.popup_register = false;
        state.popup_findpwd = false;
      }
    },
    changePopupRegister(state, payload) {
      state.popup_register = payload;
      if (payload) {
        state.popup_login = false;
        state.popup_findpwd = false;
      }
    },
    changePopupFindpwd(state, payload) {
      state.popup_findpwd = payload;
      if (payload) {
        state.popup_login = false;
        state.popup_register = false;
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
