import './lib/css'
import './lib/script'
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

/* eslint-disable no-new */
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
