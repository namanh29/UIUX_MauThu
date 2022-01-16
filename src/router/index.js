import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/personal-work/task-template',
    children: [
      {
        path: '/unit-work',
        name: 'Công việc đơn vị',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/unit-work/dashboard',
        children: [
          {
            path: '/unit-work/dashboard',
            name: 'Dashboard công việc đơn vị',
            component: () => import('@/views/base/Cards.vue'),
          },
          {
            path: '/unit-work/worklist',
            name: 'Danh sách công việc đơn vị',
            component: () => import('@/views/base/Carousels.vue'),
          },
        ],
      },
      {
        path: '/personal-work',
        name: 'Công việc cá nhân',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/personal-work/task-template',
        children: [
          {
            path: '/personal-work/dashboard',
            name: 'Dashboard công việc cá nhân',
            component: () => import('@/views/base/Collapses.vue'),
          },
          {
            path: '/personal-work/worklist',
            name: 'Danh sách công việc cá nhân',
            component: () => import('@/views/base/ListGroups.vue'),
          },
          {
            path: '/personal-work/task-template',
            name: 'Mẫu công việc',
            component: () => import('@/views/base/TaskTemplate.vue'),
          },
          {
            path: '/personal-work/task-process-template',
            name: 'Mẫu quy trình',
            component: () => import('@/views/base/TaskProcessTemplate.vue'),
          },
          {
            path: '/personal-work/task-list',
            name: 'Danh sách quy trình',
            component: () => import('@/views/base/Navs.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
