export default [
  {
    path: '/interface_info/:id',
    name: '查看接口',
    icon: 'smile',
    component: './InterfaceInfo',
    hideInMenu: true,
  },
  { name: '欢迎',
    path: '/welcome',
    icon: 'smile',
    component: './Index'
  },
  {
    name: '登录',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  {
    // path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理页',
    routes: [
      { name: '接口管理', path: '/admin/interface_info', icon: 'table', component: './Admin/InterfaceInfo' },
      { name: '接口分析', path: '/admin/interface_analysis', icon: 'table', component: './Admin/InterfaceAnalysis' },
    ],
  },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
