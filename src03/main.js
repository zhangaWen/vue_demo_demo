/**
 * 入口js
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
/* eslint-disable no-new */
//声明使用vue的插件
Vue.use(VueResource)
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
