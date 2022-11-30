import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '/src/components/HomeView.vue'
import DashboardView from '/src/views/DashboardView.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: DashboardView,
  },
  {
      path: "/post",
      name: "DashboardView",
      component: DashboardView,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router