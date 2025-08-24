import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import Router from "./routes";


Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Router,
  mode: 'history'
})

//Custom Directive
// Vue.directive('rainbow', {
//   bind(el, binding,) {
//     el.style.background = '#' + Math.random().toString().slice(2,8)
//   }
// })

Vue.directive('theme', {
  bind(el, bind, __) {
    if (bind.value === 'wide') {
      el.style.maxWidth = '1200px'
    } else if (bind.value === 'narrow') {
      el.style.maxWidth = '560px'
    } else if (bind.value === 'max') {
      el.style.maxWidth = '1920px'
    }
    if (bind.arg === 'op') {
      el.style.opacity = '0.9'
    }
  }
})

// Filters
// Vue.filter('toUppercase', value => {
//   return value.toUpperCase()
// })

// Vue.filter('snippet', value => {
//   return value.slice(0, 100) + '...'
// })

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
