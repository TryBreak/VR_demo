/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-04-15 22:27:24
 */
const _import = url => {
  let Template = require('.' + url);
  if (Template && Template['default']) {
    return Template['default'];
  } else {
    console.error('页面路由组件引用出现了问题!! -- ' + url);
  }
};

const routes = [
  {
    path: '/css_style_demo',
    name: 'css样式演示',
    description: 'css样式演示',
    title: '三级路由-样式演示',
    component: _import('/CssStyleDemo'),
  },
  {
    path: '/js_style_demo',
    name: 'js样式演示',
    description: 'js样式演示',
    title: '',
    component: _import('/JsStyleDemo'),
  },
];

export default routes;
