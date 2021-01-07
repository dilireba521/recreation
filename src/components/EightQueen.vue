<template>
  <div>
    <div class="graid">
      <div v-for="(row, r_index) in graid" :key="r_index" class="row">
        <div
          v-for="(cell, c_index) in row"
          :key="cell.key"
          @click="select(r_index, c_index)"
          class="col"
        >
          <span v-if="cell.ok">Q</span>
        </div>
      </div>
    </div>
  </div>
</template>    
<script>
const graid = new Array(8).fill(1).map((_, r) => {
  return new Array(8).fill(1).map((_, c) => {
    return {
      key: `key-${r * 8 + c}`,
      ok: false,
    };
  });
});
export default {
  data() {
    return {
      graid,
    };
  },
  created() {
    // console.log(graid);
  },
  methods: {
    select(r_index, c_index) {
      console.log(r_index, c_index);
      if (this.validate(r_index, c_index)) {
        this.graid[r_index][c_index].ok = true;
      } else {
        alert("此处无法放皇后");
      }
    },
    validate(r_index, c_index) {
      //横
      for (let i = 0; i < this.graid[r_index].length; i++) {
        if (this.graid[r_index][i].ok) {
          return false;
        }
      }

      //竖
      for (let i = 0; i < this.graid.length; i++) {
        if (this.graid[i][c_index].ok) {
          return false;
        }
      }

      //撇
      for (let i = 0; i < this.graid[0].length; i++) {
        let y = r_index + c_index - i;
        if (y >= 0 && y < this.graid.length && this.graid[y][i].ok) {
          return false;
        }
      }

      //捺
      for (let i = 0; i < this.graid[0].length; i++) {
        let y = r_index - c_index + i;
        if (y >= 0 && y < this.graid.length && this.graid[y][i].ok) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>
<style scoped>
.graid {
  display: inline-block;
}
.row:nth-child(odd) .col:nth-child(odd) {
  background-color: gray;
}
.row:nth-child(even) .col:nth-child(even) {
  background-color: gray;
}
.row {
  line-height: 0;
}
.col {
  float: left;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border: 1px solid grey;
}
</style>