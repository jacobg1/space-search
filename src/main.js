import Vue from 'vue'
import App from './App.vue'
import router from './router'
import spaceSearch from './services/spaceSearch'

Vue.use(spaceSearch)
Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
