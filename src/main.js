import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-pure-lightbox/dist/VuePureLightbox.css'
import VuePureLightbox from 'vue-pure-lightbox'

import spaceSearch from './services/spaceSearch'
import VueParticles from 'vue-particles'

Vue.use(spaceSearch)
Vue.use(VueParticles)

new Vue({
  router,
  render: h => h(App),
  components: {
    VuePureLightbox
  }
}).$mount('#app')

Vue.config.productionTip = false
Vue.config.devtools = false
