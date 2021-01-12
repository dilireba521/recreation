import Vue from "vue"

Vue.filter("filesName", function (val) {
  if (val == null || val.length == 0) {
    return ""
  }
  const obj = {
    "EightQueen": "八皇后",
    "Gobang": "五子棋",
    "MineClearance": "扫雷",
    "CaesarCipher": "凯撒密码",
    "LongestCommonPrefix": "最长公共前缀",
  }
  return obj[val] || val
})