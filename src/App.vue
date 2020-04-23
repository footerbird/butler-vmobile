<template>
  <div id="app">
    <keep-alive>
        <!-- 需要缓存的视图组件 -->
        <router-view v-if="isRouterAlive && $route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="isRouterAlive && !$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      const that = this;
      that.isRouterAlive = false;
      that.$nextTick(() => {
        that.isRouterAlive = true;
      });
    },
  },
};
</script>

<style>
* {
  margin:0;
  padding:0;
}
html {
  font-size:50px;
}
html,body {
  height:100%;
}
body {
  font-size:16px;
  color:#333;
  line-height: 1.6;
  font-family:-apple-system-font,arial,verdana,helvetica,'PingFang SC','HanHei SC',
  STHeitiSC-Light,Microsoft Yahei,sans-serif;
  background:#f7f7f7;
}
#app {
  height:100%;
}
li {
  list-style:none;
}
img {
  display:block;
}
address,cite,dfn,em,var,i {
  font-style:normal;
}
/* 将斜体扶正 */

input,textarea {
  font-family:-apple-system-font,arial,verdana,helvetica,'PingFang SC','HanHei SC',
  STHeitiSC-Light,Microsoft Yahei,sans-serif;
}
</style>
