<template>
  <div>扫雷{{ data }}</div>
</template>
<script>
import Mock from "mockjs";
export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.data = Mock.mock("@name");
  },
};
</script>