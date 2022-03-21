import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Basic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Basics',
    component: () => import("../views/Basic.vue")
  },
  {
    path: '/CLI',
    name: 'CLI',
    component: () => import("../views/CLI.vue")
  },
  {
    path: '/Components',
    name: 'Components',
    component: () => import("../views/Components.vue")
  },
  {
    path: '/directives',
    name: 'directives',
    component: () => import("../views/Directives.vue")
  },
  {
    path: '/FiltersMixins',
    name: 'FiltersMixins',
    component: () => import("../views/FiltersMixins.vue")
  },
  {
    path: '/Forms',
    name: 'Forms',
    component: () => import("../views/Forms.vue")
  },
  {
    path: '/vuelidate',
    name: 'vuelidate',
    component: () => import("../views/Vuelidate.vue")
  },
  {
    path: '/Routing',
    name: 'Routing',
    component: () => import("../views/Routing.vue")
  },
  {
    path: '/server',
    name: 'server',
    component: () => import("../views/Server.vue")
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import("../views/VueX.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
