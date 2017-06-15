// Import 3rd party libraries
//require('../node_modules/material-design-lite/material.min')

// CSS
//require('./sass/app.scss')

// Vue setup
var Vue = require('vue')
var Vuex = require('vuex')
var VueRouter = require('vue-router')
var VueFilter = require('vue-filter')
var VueResource = require('vue-resource')
import { router } from './routes'

//Vue.use(Vuex)
Vue.use(VueFilter)
Vue.use(VueResource)
Vue.use(VueRouter)

// Config
Vue.config.devtools = true

// Import custom extensions
//require('./extensions/vue-custom-filters.js')

import App from './app.vue'
//import store from './vuex/store'

// Start the app
const app = new Vue({
	el: '#app',
	router,
	render: h => h(App)
	/*store,
	vuex: {
		getters: {
			auth: state => state.auth
		},
		actions: {
            logout
		}
	}*/
})

// Expose the app, the router and potentially the store.
// Not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router/*, store*/ }