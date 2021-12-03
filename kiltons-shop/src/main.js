import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import { store } from './store/store'

Vue.config.productionTip = false

let data = {
  balance: 0,
  cart: []
}

new Vue({
  router,
  data,
  store,
  render: h => h(App)
}).$mount('#app')
