<template>
  <div class="test-container">
    <Empty :text="text" />
  </div>
</template>

<script>

import Empty from './index.vue';

export default {

  components: {
    Empty,
  },
  data() {
      return {
          text:'empty'
      }
  },
};
</script>

<style lang="less" scoped>
.test-container{
  width: 200px;
  height: 200px;
  border: 1px solid;
  position: relative;
}
</style>
