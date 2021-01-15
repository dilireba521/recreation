import Vue from 'vue'
import App from './App.vue'


import "./utiles/filters"   //global filter
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });

//自定义指令
import notify from "./utiles/notify";
import layer from "./utiles/layer";

Vue.use(layer)
Vue.use(notify)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
