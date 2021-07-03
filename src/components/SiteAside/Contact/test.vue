<template>
  <div class="test-container">
    <Contact :qq="qq" :weixin="weixin" :github="github" :mail="mail" />
  </div>
</template>

<script>

import Contact from './index.vue';
import '@/styles/global.less';

export default {
  name: "App",
  data() {
      return {
          qq:'1029957143',
          weixin:'jack',
          github:'dujie-97',
          mail:'1029957143@qq.com'
      }
  },
  components: {
    Contact,
  },
 
};
</script>

<style lang="less" scoped>
.test-container{
  background-color: #000;
  width: 250px;
  height: 500px;
  padding-top: 200px;
  margin: 0 auto;
}
</style>
