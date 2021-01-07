<template>
  <div class="btn">{{ value }}</div>
</template>
<script>
export default {
  name: "mButton",
  props: {
    value: {
      type: String,
      default: "按钮",
    },
  },
  data() {
    return {};
  },
};
</script> 

<style lang="sass" scoped>
.btn
  display: inline-block
  min-width: 46px
  padding: 4px 8px
  margin-bottom: 10px
  border: 1px solid $black75
  border-radius: 6px
  cursor: pointer

  &:hover
    background: $black15
</style>
