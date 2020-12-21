<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body{margin: 0;padding: 0;background-color: rgb(245,246,247)}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

/* 浏览器滚动条样式 */
/* 宽度 */
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

/* 滚动条空白地方 */
::-webkit-scrollbar-track {
  background: rgb(245,246,247);
  border-radius: 8px;
}




/* 滚动条颜色 */
::-webkit-scrollbar-thumb {
  background: rgb(167, 167, 168);
  border-radius: 8px;
}

/* 滚动条鼠标放上去 */
::-webkit-scrollbar-thumb:hover {
  background: rgb(100, 100, 101);
}
</style>
