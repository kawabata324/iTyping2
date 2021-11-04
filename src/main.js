import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExpandArrowsAlt, faMinus, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes,faMinus,faExpandArrowsAlt)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).directive('focus', {
  mounted(el) {
    el.focus()
  }
}).mount('#app')
