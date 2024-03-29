import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExploreView from '../views/ExploreView.vue'
import MapPageView from '../views/MapPageView.vue'
import RoomPageView from '../views/RoomPageView.vue'
import AboutView from '../views/AboutView.vue'
import InfoUpdateView  from '../views/InfoUpdateView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExploreView
  },
  {
    path: '/mappage/:id',
    name: 'mappage',
    component: MapPageView
  },
  {
    path: '/roompage/:id/:room',
    name: 'roompage',
    component: RoomPageView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/infoupdate',
    name: 'InfoUpdateView',
    component: InfoUpdateView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  
]

const router = new VueRouter({
  routes
})

export default router
