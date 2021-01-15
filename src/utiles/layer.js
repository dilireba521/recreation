// 题目1】实现一个Vue插件，使得：
// 能够通过Vue.use( 这个插件 )；
// 并且可以在任意vue组件中 使用 this.$notify() 来在页面上生成一个提示框；
// 且this.$notify可以传入自定义模板作为参数并显示在提示框中。

export default {
    install(Vue, option) {
        Vue.prototype.$layer = function (setting) {
            if (setting instanceof Object && typeof (setting) == "object" && !Array.isArray(setting)) {
                let mLayer = Vue.extend({
                    data:function(){
                        return {}
                    },
                    props: {
                        settings: {
                            type: Object,
                            default: () => {
                                return setting
                            }
                        }
                    },
                    template:'<div>layer</div>',
                })
                let mLayerDom =  new mLayer().$mount()
                document.body.appendChild(mLayerDom.$el)
            } else {
                alert("参数类型要是Object")
            }

        }
    }
}