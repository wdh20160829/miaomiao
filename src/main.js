import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios


Vue.filter('setWH',(url, arg)=>{
  return url.replace(/w\.h/,arg)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Vue是一个大的对象，通过赋值到prototype上来方便用过this使用axios



// $mount 是手动将实例化的vue挂载到指定的dom元素上  
// 与el的区别是 :
// 如果在实例化vue的时候指定el，则该vue将会渲染在此el对应的dom中，反之，若没有指定el，则vue实例会处于一种“未挂载”的状态，
// 此时可以通过$mount来手动执行挂载。