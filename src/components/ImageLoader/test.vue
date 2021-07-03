<template>
  <div class="test-container">
    <ImageLoader :src="src" :placeholder="placeholder" :duration="duration" @load="handleLoad" />
  </div>
</template>

<script>

import ImageLoader from './index.vue';

export default {
  
  components: {
    ImageLoader,
  },
  data() {
      return {
          placeholder:'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100',
          src: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304',
          duration: 600
      }
  },
  methods: {
    handleLoad(){
      console.log('图片加载完成');
    }
  },
};
</script>

<style lang="less" scoped>
.test-container{

  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>
