<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank"> </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="less">
@import url("./styles/base.less");
@import url("./styles/imgs.less");
.logo {
  height: 600px;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
