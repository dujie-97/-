<template>
  <div id="app">
    <Layout>
      <template v-slot:left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template>
        <div class="main">
         <router-view></router-view>
        </div>
      </template>
    </Layout>
    <ToTop/>
  </div>
</template>

<script>
import SiteAside from "./components/SiteAside";
import Layout from "./components/Layout";
import ToTop from './components/ToTop'

export default {
  name: "App",
  components: {
    SiteAside,
    Layout,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import url("./styles/mixin.less");
#app {
  .self-fill(fixed); //撑满容器
  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>
