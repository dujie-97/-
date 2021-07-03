<template>
  <div class="image-loader-container">
    <img
      :src="src"
      alt=""
      @load="handleLoaded"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
    <img v-if="!everythingDone" :src="placeholder" class="placeholder" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originLoaded: false, //原图是否加载完成
      everythingDone: false, //是否一切都完成
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    //原图加载完成后
    handleLoaded() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw); //模糊
  }
}
</style>