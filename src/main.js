import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import App from './App.vue'

import Home from './components/Home';
import Resources from './components/Resources';
import Account from './components/Account';

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/resources', component: Resources },
    { path: '/account', component: Account }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
