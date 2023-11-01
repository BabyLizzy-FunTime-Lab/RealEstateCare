import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import BottomTabs from "@/components/nav/BottomTabs.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/',
    component: BottomTabs,
    children: [
      {
        path: 'tabs/active-task',
        component: () => import('../views/TabViews/ActiveTaskView.vue')
      },
      {
        path: 'tabs/search',
        component: () => import('../views/TabViews/SearchView.vue')
      },
      {
        path: 'tabs/information',
        component: () => import('../views/TabViews/InformationView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
