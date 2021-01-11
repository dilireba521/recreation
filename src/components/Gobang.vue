<template>
  <div>
    <div>
      <m-button value="重新开始" @click.native="restart"></m-button>
    </div>
    <div class="graid">
      <div v-for="(row, r_index) in graid" :key="r_index" class="row">
        <div
          v-for="(cell, c_index) in row"
          :key="cell.key"
          @click="select(r_index, c_index)"
          class="col"
        >
          <div :class="cell.type" class="cell"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mButton from "@/components/button/button.vue";

const graid = new Array(15).fill(1).map((_, r) => {
  return new Array(15).fill(1).map((_, c) => {
    return {
      key: `key-${r * 15 + c}`,
      type: "",
    };
  });
});
export default {
  data() {
    return {
      graid,
      step: 0,
      isWin: false,
    };
  },
  components: { mButton },
  methods: {
    select(r_index, c_index) {
      if (this.graid[r_index][c_index].type == "" && !this.isWin) {
        var isEven = this.step % 2 === 0;
        this.graid[r_index][c_index].type = isEven ? "b" : "w";
        if (this.validate(r_index, c_index)) {
          alert(`恭喜${isEven ? "黑" : "白"}棋赢得比赛！`);
          this.isWin = true;
        }
        this.step++;
      }
    },
    validate(r_index, c_index) {
      //记录串联棋子数
      let count = 0;
      //当前步类型
      var type = this.step % 2 === 0 ? "b" : "w";

      //横
      for (let i = 0; i < this.graid[r_index].length; i++) {
        if (this.graid[r_index][i].type == type) {
          count++;
          if (count == 5) {
            return true;
          }
        } else {
          count = 0;
        }
      }

      //竖
      for (let i = 0; i < this.graid.length; i++) {
        if (this.graid[i][c_index].type == type) {
          count++;
          if (count == 5) {
            return true;
          }
        } else {
          count = 0;
        }
      }

      //撇
      for (let i = 0; i < this.graid[0].length; i++) {
        let y = r_index + c_index - i;
        if (y >= 0 && y < this.graid.length && this.graid[y][i].type == type) {
          count++;
          if (count == 5) {
            return true;
          }
        } else {
          count = 0;
        }
      }

      //捺
      for (let i = 0; i < this.graid[0].length; i++) {
        let y = r_index - c_index + i;
        if (y >= 0 && y < this.graid.length && this.graid[y][i].type == type) {
          count++;
          if (count == 5) {
            return true;
          }
        } else {
          count = 0;
        }
      }

      return false;
    },
    //重新开局
    restart() {
      this.isWin = false;
      for (let i = 0; i < this.graid[0].length; i++) {
        for (let j = 0; j < this.graid.length; j++) {
          this.graid[i][j].type = "";
        }
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.graid
  display: inline-block
  background: lightgrey

.row
  line-height: 0

.col
  position: relative
  float: left
  width: 50px
  height: 50px
  line-height: 80px
  cursor: pointer

  &::before
    content: ""
    position: absolute
    top: 50%
    left: 0
    right: 0
    height: 1px
    margin-top: -0.5px
    background: gray

  &::after
    content: ""
    position: absolute
    top: 0
    bottom: 0
    left: 50%
    width: 1px
    margin-left: -0.5px
    background: gray

  .row &:first-child::before
    left: 50%

  .row &:last-child::before
    right: 50%

  .row:first-child &::after
    top: 50%

  .row:last-child &::after
    bottom: 50%

  & .cell
    z-index: 1
    position: absolute
    top: 50%
    left: 50%
    width: 50%
    height: 50%
    margin: -25% 0 0 -25%
    box-sizing: border-box
    border: 1px
    border-radius: 50%

  & .cell.w
    background: white

  & .cell.b
    background: $black
</style>