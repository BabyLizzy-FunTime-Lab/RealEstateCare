import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';

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
    path: '/active-task',
    component: () => import('../views/bottomToolbarViews/ActiveTaskView.vue')
  },
  {
    path: '/search',
    component: () => import('../views/bottomToolbarViews/SearchView.vue')
  },
  {
    path: '/information',
    component: () => import('../views/bottomToolbarViews/InformationView.vue')
  },
  {
    path: '/scheduled',
    component: () => import('../views/homeViews/ScheduledView.vue')
  },
  {
    path: '/completed',
    component: () => import('../views/homeViews/CompletedView.vue')
  },
  {
    path: '/knowledge-base',
    component: () => import('../views/homeViews/KnowledgeBaseView.vue')
  },
  {
    path: '/settings',
    component: () => import('../views/homeViews/SettingsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
