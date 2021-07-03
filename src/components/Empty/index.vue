<template>
  <div class="empty-container">
      <Icon type="empty" />
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";

.empty-container {
  .self-center(); //水平垂直居中函数
  text-align: center;
  color: @gray;
}
.icon-container{
  font-size: 72px;
}
</style>