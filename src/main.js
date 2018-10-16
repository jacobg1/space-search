import Vue from 'vue'
import App from './App.vue'
import router from './router'
import spaceSearch from './services/spaceSearch'
import VueMasonry from 'vue-masonry-css'

Vue.use(spaceSearch)
Vue.use(VueMasonry)
Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
