/**
 * 入口js
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App.vue'
/* eslint-disable no-new */
Vue.use(VueResource)


//创建事件总线对象，并保存到Vue的原型对象
Vue.prototype.$bus = new Vue()
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
