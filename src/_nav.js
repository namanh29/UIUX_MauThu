export default [
  {
    component: 'CNavGroup',
    name: 'Công việc cá nhân',
    to: '/task',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Mẫu công việc',
        to: '/task-template',
      },
      {
        component: 'CNavItem',
        name: 'Mẫu quy trình',
        to: '/task-process-template',
      },
    ],
  },
]
