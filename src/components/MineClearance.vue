<template>
  <div>
    <m-button value="弹框" @click.native="layer"></m-button>

    扫雷{{ data }}</div>
</template>
<script>
import Mock from "mockjs";
import mButton from "@/components/button/button.vue";

export default {
  data() {
    return {
      data: null,
      count:0
    };
  },
  created() {
    this.data = Mock.mock("@name");
  },
  components: {mButton},
  methods:{
    layer(){
      this.count++
      this.$notify({
        content:
                "<div style='color:#00e0a1;padding:20px;'>这里是内容信息！"+ this.count +"</div>",
      });
    }
  }
};
</script>