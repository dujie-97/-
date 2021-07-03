<template>
  <div id="app">
    <Icon type="success" />
  </div>
</template>

<script>
import Icon from "./index.vue";

export default {
  name: "App",
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 20px;
  color: red;
}
</style>
