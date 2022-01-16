export default [
  {
    component: 'CNavGroup',
    name: 'Công việc đơn vị',
    to: '/task',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Dashboard công việc đơn vị',
        to: '/unit-work/dashboard',
      },
      {
        component: 'CNavItem',
        name: 'Danh sách công việc đơn vị',
        to: '/unit-work/worklist',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Công việc cá nhân',
    to: '/task',
    icon: 'cil-notes',
    items: [
      {
        component: 'CNavItem',
        name: 'Dashboard công việc cá nhân',
        to: '/personal-work/dashboard',
      },
      {
        component: 'CNavItem',
        name: 'Danh sách công việc cá nhân',
        to: '/personal-work/worklist',
      },
      {
        component: 'CNavItem',
        name: 'Mẫu công việc',
        to: '/personal-work/task-template',
      },
      {
        component: 'CNavItem',
        name: 'Mẫu quy trình',
        to: '/personal-work/task-process-template',
      },
      {
        component: 'CNavItem',
        name: 'Danh sách quy trình',
        to: '/personal-work/task-list',
      },
    ],
  },
]
