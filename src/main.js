import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import  {createPinia}  from 'pinia'
loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(createPinia())
  .mount('#app')


