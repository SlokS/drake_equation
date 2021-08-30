import Vue from 'vue'
import App from './App.vue'
import './styles/main.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
