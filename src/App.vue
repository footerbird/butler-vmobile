<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

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
