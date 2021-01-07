<template>
  <div id="app">
    <div class="list" v-if="mFiles != null">
      <div
        v-for="file in mFiles"
        :key="file"
        class="cell"
        @click="select(file)"
      >
        {{ file | filesName }}
      </div>
    </div>
    <component :is="mComponent"></component>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "App",
  data() {
    return {
      mFiles: null,
      mComponent: "",
    };
  },
  components: {},
  created() {
    this.loadingFiles();
  },
  methods: {
    //重新开局
    handleRestart() {},
    //加载文件
    loadingFiles() {
      const files = require.context("@/components", false, /.vue$/).keys();
      this.mFiles = files.map((item) => {
        item = item.replace(/\.\/|\.vue/g, "");
        Vue.component(item, require(`@/components/${item}.vue`).default);
        return item;
      });
    },
    //选择模块
    select(com) {
      this.mComponent = com;
    },
  },
};
</script>

<style lang="sass">
.list
  overflow: auto
  position: absolute
  bottom: 0
  top: 0
  left: 0
  width: 10%
  height: 100%
  padding: 20px 0
  border-right: 1px solid #black75
  background-color: #ffffff

.cell
  border-bottom: 1px solid #black75
  padding: 4px 8px
  cursor: pointer
  text-overflow: ellipsis
  white-space: nowrap

  &:hover
    background: $blue15

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
