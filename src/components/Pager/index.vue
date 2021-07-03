<template>
  <!-- 只有总页数大于1时才显示 -->
  <div class="pager-container" v-if="totalPage > 1">
    <!-- 回到第一页 -->
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;
    </a>
    <!-- 上一页 -->
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">
      &lt;&lt;
    </a>
    <!-- 中间页 -->
    <a
      v-for="(n, i) in pageNumbers"
      :key="i"
      :class="{ active: current === n }"
      @click="handleClick(n)"
    >
      {{ n }}
    </a>
    <!-- 下一页 -->
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === totalPage }"
    >
      &gt;&gt;
    </a>
    <!-- 回到最后一页 -->
    <a
      @click="handleClick(totalPage)"
      :class="{ disabled: current === totalPage }"
    >
      &gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    totalPage() {
      //总页数 = 总数据量  / 页容量
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      //得到显示的最小页数 = 当前页数 - 中间页数
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      //得到显示的最大页数 = 可见页数 + 最小页数 - 1
      let max = this.visibleNumber + this.visibleMin - 1;
      if (max > this.totalPage) {
        max = this.totalPage;
      }
      return max;
    },
    pageNumbers() {
      //得到显示的所有页数
      let arr = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage < 1;
      }
      if (newPage > this.totalPage) {
        newPage = this.totalPage;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    text-decoration: none;
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>