import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
