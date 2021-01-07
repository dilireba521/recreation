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
    <div class="restart" @click="handleRestart">重新开局</div>
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

<style>
.restart {
  display: inline-block;
  padding: 4px 8px;
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 6px;

  cursor: pointer;
}
.restart:hover {
  background: rgba(128, 128, 128, 0.1);
}
.list {
  overflow: auto;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  width: 10%;
  height: 100%;
  padding: 20px 0;
  border-right: 1px solid lightblue;
  background-color: #ffffff;
}
.cell {
  border-bottom: 1px solid gray;
  padding: 4px 8px;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cell:hover {
  background: rgb(11, 179, 142, 0.1);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
