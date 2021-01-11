<template>
  <input
    :value="value"
    class="l-input"
    :style="'width:' + setting['width'] || '100%'"
    :placeholder="setting['placeholder'] || ''"
    :type="setting['type'] || 'type'"
    @change="changeVal"
  />
</template>
<script>
export default {
  name: "mInput",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: [String, Number],
      default: function () {
        return null;
      },
    },
    setting: {
      type: Object,
      default: function () {
        return {
          type: "text",
          placeholder: "",
          width: "",
        };
      },
    },
  },
  data() {
    return {
      mValue: null,
    };
  },
  created() {
    this.mValue = this.value || null;
  },
  methods: {
    changeVal(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>