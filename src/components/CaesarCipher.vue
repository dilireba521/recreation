<template>
  <div class="caesar_wrap">
    <m-button value="清空"></m-button>
    <br />
    <div class="l-pb10">
      <label for="" class="l-pr5">正常文本</label>
      <m-input></m-input>
      <m-input width="40px"></m-input>
    </div>
    <div>
      <label for="" class="l-pr5">翻译文本</label>
      <m-input></m-input>
    </div>
  </div>
</template>
<script>
import mInput from "@/components/input/input.vue";
import mButton from "@/components/button/button";
export default {
  data() {
    return {};
  },
  components: { mInput, mButton },
};
</script>
<style scoped>
.caesar_wrap {
  text-align: left;
}
</style>