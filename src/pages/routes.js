/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-04-17 10:38:48
 */
import _import from '@utils/_import';

const basePath = '';

const routes = [
  {
    path: '/',
    name: '首页',
    description: '这里是是首页落地页',
    title: '首页',
    component: _import(basePath + '/Home'),
  },
  {
    path: '/demo',
    name: 'Demo',
    description: '这里是演示页面',
    title: '演示',
    component: _import(basePath + '/Demo'),
    children: {
      routes: _import(basePath + '/Demo/routes'),
    },
  },
  {
    path: '/demo_test1',
    name: 'demo_test1',
    description: '这里是演示页面',
    title: '演示',
    component: _import(basePath + '/Demo'),
    children: {
      routes: _import(basePath + '/Demo/routes'),
    },
  },
  {
    path: '/demo_test2',
    name: 'demo_test2',
    description: '这里是演示页面',
    title: '演示',
    component: _import(basePath + '/Demo'),
    children: {
      routes: _import(basePath + '/Demo/routes'),
    },
  },
  {
    path: '/404',
    name: '404',
    description: '404',
    title: 'Not Found',
    component: _import(basePath + '/NotFound'),
  },
];

export default routes;
