<template>
  <div class="l-btn">{{ value }}</div>
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
