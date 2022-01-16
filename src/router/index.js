import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/task-template',
    children: [
      {
        path: '/task',
        name: 'Công việc cá nhân',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/task-template',
        children: [
          {
            path: '/task-template',
            name: 'Mẫu công việc',
            component: () => import('@/views/base/TaskTemplate.vue'),
          },
          {
            path: '/task-process-template',
            name: 'Mẫu quy trình',
            component: () => import('@/views/base/TaskProcessTemplate.vue'),
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
