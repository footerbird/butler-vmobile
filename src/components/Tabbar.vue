<template>
<div class="footer">
    <div class="footer-container">
        <router-link class="item" :class="{'cur':is_index}" to="/">首页</router-link>
        <router-link class="item" :class="{'cur':is_domain}" to="/domain_list">域名</router-link>
        <router-link class="item" :class="{'cur':is_mark}" to="/mark_list">商标</router-link>
        <router-link class="item" :class="{'cur':is_account}" to="/my_console">我的</router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    path: String,
  },
  computed: {
    // 下面的写法是es6对象的扩展-》1.属性的简洁表示法
    is_index() {
      return this.path === 'index';
    },
    is_domain() {
      return this.path === 'domain_list';
    },
    is_mark() {
      return this.path === 'mark_list';
    },
    is_account() {
      return this.path === 'my_console';
    },
  },
};
</script>

<style>
</style>
