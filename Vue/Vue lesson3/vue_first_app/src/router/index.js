import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component:  () => import("../views/Home.vue")
  },
    {
    path: "/works",
    name: "works",
    component:  () => import("../views/Works.vue")
  },
  {
    path: "/features",
    name: "Features",
    component:  () => import("../views/Features.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
