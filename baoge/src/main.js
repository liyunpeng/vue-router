// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.prototype.$store = store // 注入仓库
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
app.$mount()
