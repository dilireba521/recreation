
<script>
// function Repeat(params) {
//   return <div>你好</div>;
// }
import mButton from "@/components/button/button.vue";
import Vue from "vue";
Vue.component("repeat", {
  template: "<div>你好</div>",
});

export default {
  render() {
    return (
      <div class="graid">
        {new Array(8).fill(1).map((_, r) => (
          <div class="row" key={r}>
            {new Array(8).fill(1).map((_, c) => (
              <div class="col" key={r - c}>
                {c}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
</script>
<style lang="sass" scoped>
.graid
  display: inline-block
  border: 1px solid $black50

.row:nth-child(odd) .col:nth-child(odd)
  background-color: $black50

.row:nth-child(even) .col:nth-child(even)
  background-color: $black50

.row
  line-height: 0

.col
  float: left
  width: 80px
  height: 80px
  line-height: 80px
  color: $green
</style>