import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'
import spaceSearch from './services/spaceSearch'
import VueSilentbox from 'vue-silentbox'
import MasonryWall from '@yeger/vue-masonry-wall'

import 'vue-silentbox/dist/style.css'

const app = createApp(App)

app.use(router)
app.use(VueSilentbox)

app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine)
  }
})
app.use(spaceSearch)
app.use(MasonryWall)

app.mount('#app')
