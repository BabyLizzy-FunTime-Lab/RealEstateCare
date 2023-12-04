import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: HomePage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/active-task',
    name: 'Active-Task',
    component: () => import('../views/bottomToolbarViews/ActiveTaskView.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/bottomToolbarViews/SearchView.vue')
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import('../views/bottomToolbarViews/InformationView.vue')
  },
  {
    path: '/scheduled',
    name: 'Scheduled',
    component: () => import('../views/homeViews/ScheduledView.vue')
  },
  {
    path: '/completed',
    name: 'Completed',
    component: () => import('../views/homeViews/CompletedView.vue')
  },
  {
    path: '/knowledge-base',
    name: 'Knowledge-Base',
    component: () => import('../views/homeViews/KnowledgeBaseView.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/homeViews/SettingsView.vue')
  },
  {
    path: '/user-info',
    name: 'User-Info',
    component: () => import('../views/topToolbarViews/UserInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
