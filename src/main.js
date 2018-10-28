import Vue from 'vue'
import App from './App.vue'
import router from './router'

import spaceSearch from './services/spaceSearch'
import VueParticles from 'vue-particles'
import Lightbox from 'vue-pure-lightbox'

Vue.use(Lightbox)
Vue.use(spaceSearch)
Vue.use(VueParticles)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false
Vue.config.devtools = false
