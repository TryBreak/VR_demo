import _import from '@utils/_import';

const basePath = '/Demo';

const routes = [
  {
    path: '/style_demo',
    name: '样式演示',
    description: '样式演示demo',
    title: '二级路由-样式演示',
    component: _import(basePath + '/StyleDemo'),
    children: {
      routes: _import(basePath + '/StyleDemo/routes'),
    },
  },
  {
    path: '/request_demo',
    name: '请求演示',
    description: '请求演示demo',
    title: '二级路由-请求演示',
    component: _import(basePath + '/RequestDemo'),
  },
  {
    path: '/mobox_demo',
    name: 'Mobx演示',
    description: '状态管理演示',
    title: '二级路由-Mobox',
    component: _import(basePath + '/MobxDemo/'),
  },
];

export default routes;
