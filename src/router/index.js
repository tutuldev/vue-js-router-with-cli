import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactVue from '../views/ContactVue.vue'
import TestVue from '@/views/TestVue.vue'
import edit from '@/views/Edit.vue'
import LoginVue from '@/views/Login.vue'
import dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
    {
    path: '/contact',
    name: 'ContactVue',
    component:ContactVue
 
  },
     {
    path: '/test',
    name: 'test',
    component:TestVue
 
  },
     {
    path: '/edit-category/:id',
    name: 'edit',
    component:edit
 
  },
     {
    path: '/login',
    name: 'login',
    component:LoginVue
 
  }
  ,
     {
    path: '/dashboard',
    name: 'dashboard',
    component:dashboard
 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
