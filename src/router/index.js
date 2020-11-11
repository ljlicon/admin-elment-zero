import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../pages/login/index.vue' 

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/login'},
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      hidden: true
    }
  },
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
