<template>
  <div id="app">
      <Pager :total="total" :current="current" @pageChange="changeCurrent($event)" />
  </div>
</template>

<script>
import Pager from './index.vue';

export default {
  name: 'App',
  data() {
    return {
      total:300,
      current:2
    }
  },
  components: {
    Pager,
  },
  methods: {
    changeCurrent(val){
      this.current = val;
    }
  },
}
</script>

<style lang="less" scoped>

</style>