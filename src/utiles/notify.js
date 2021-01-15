// 题目1】实现一个Vue插件，使得：
// 能够通过Vue.use( 这个插件 )；
// 并且可以在任意vue组件中 使用 this.$notify() 来在页面上生成一个提示框；
// 且this.$notify可以传入自定义模板作为参数并显示在提示框中。
export default {
  install(Vue, option) {
    Vue.prototype.$notify = function (setting) {
      if (setting instanceof Object && typeof (setting) == "object" && !Array.isArray(setting)) {
        const mLayer = Vue.extend({
          props: {
            settings: {
              type: Object,
              default: () => {
                return setting
              }
            }
          },
          render: function (createElement) {
            return createElement('div', {
              style: {
                position: 'absolute',
                top: '5%', right: '2%',
                padding: '10px',
                minHeight: '40px',
                minWidth: '100px',
                boxSizing: 'borderBox',
                background: 'red'
              }
            }, [
              createElement('div',
                {
                  domProps: {
                    innerHTML: this.settings.content || '提示',
                  },
                })
            ])
          }
        })
        const mLayerDom = new mLayer().$mount();
        let timer
        document.body.appendChild(mLayerDom.$el)
        timer = setTimeout(() => {
          document.body.removeChild(mLayerDom.$el)
        }, 3000)
      } else {
        alert("参数类型要是Object")
      }

    }
  }
}