<template>
  <div class="caesar_wrap">
    <m-button class="l-mr5" @click.native="translate" value="翻译"></m-button>
    <m-button @click.native="clearText" value="清空"></m-button>
    <br />
    <div class="l-pb10">
      <label for="" class="l-pr5">正常文本</label>
      <m-input v-model="value1"></m-input>
      <m-input v-model="value2" :setting="settingNumber"></m-input>
    </div>
    <div>
      <label for="" class="l-pr5">翻译文本</label>
      <m-input v-model="value3"></m-input>
    </div>
  </div>
</template>
<script>
import mInput from "@/components/input/input.vue";
import mButton from "@/components/button/button";
export default {
  data() {
    return {
      settingNumber: {
        type: "number",
        width: "40px",
      },
      value1: "", //正常文本
      value2: 1, //间隔
      value3: "", //翻译文本
    };
  },
  components: { mInput, mButton },
  methods: {
    //清空文本框
    clearText() {
      this.value1 = "";
      this.value2 = 1;
      this.value3 = "";
    },
    //翻译
    translate() {
      console.log(this.value1);
      console.log(this.value2);

      if (this.value1.length > 0 && this.value2.toString().length > 0) {
        this.value3 = this.Caesar(this.value1, this.value2);
      }
    },
    /**
     * {String|str} 需要进行加密｜解密的数据
     * {num|number} 需要进行移动的位数，为非负数时内容进行加密，否则为解密
     */
    Caesar(str, num) {
      var newStr = ""; //接收结果
      var _num = Number(num);
      debugger;
      for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
          //加密时内容为从前向后解析，解密时内容为从后向前解析，
          // str.charCodeAt(i) + _num 找到当前字符与移动位置后的ASII码位置
          // (str.charCodeAt(i) + _num - 65 + 26)%26  判断字符在26个字母中的最终位置
          newStr += String.fromCharCode(
            ((str.charCodeAt(i) + _num - 65 + 26) % 26) + 65
          ); //在ASII码中找到对应字符，并添加到将返回的字符中
        } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
          //同上理
          newStr += String.fromCharCode(
            ((str.charCodeAt(i) + _num - 97 + 26) % 26) + 97
          );
        } else {
          //特殊符号不做处理
          newStr += String.fromCharCode(str.charCodeAt(i));
        }
      }
      return newStr;
    },
  },
};
</script>
<style scoped>
.caesar_wrap {
  text-align: left;
}
</style>