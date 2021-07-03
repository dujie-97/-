<template>
  <img
    :src="url"
    class="avatar-container"
    alt="这是头像"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true, //是否必传
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>

<style scoped>
.avatar-container{
  border-radius: 50%;
  object-fit: cover; /*防止图片变形*/
  display: block;
}
</style>