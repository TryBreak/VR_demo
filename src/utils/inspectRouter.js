/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-04-17 10:37:03
 */
import routes from '@pages/routes';

export const getMainRoute = path => {
  return '/' + path.split('/')[1];
};

//将路径切分为标准数组
export const splitPath = path => {
  const pathArr = [];
  const path_split = path.split('/');
  if (path === '/') {
    pathArr.push('/');
    return pathArr;
  }
  for (let i = 0; i < path_split.length; i++) {
    const el = path_split[i];
    if (el) {
      pathArr.push('/' + el);
    }
  }
  return pathArr;
};

export const inspect404 = ({ pathname }) => {
  const nowPath = getMainRoute(pathname);
  const find = routes.find(item => {
    return nowPath === item.path;
  });
  if (nowPath === '/inbox') {
    return true;
  }
  return find;
};

export const recursion = pathArr => {
  const degree = pathArr.length;

  let returnRoutes = routes;
  let count = 0;
  if (degree === 1) {
    return returnRoutes;
  } else {
    find();
    return returnRoutes;
  }
  function find() {
    let path = '/' + pathArr[count];
    for (let i = 0; i < returnRoutes.length; i++) {
      const el = returnRoutes[i];
      if (path === el.path) {
        if (el.children && el.children.routes) {
          returnRoutes = el.children.routes;
          break;
        }
      }
    }
    count++;
    if (count < degree) {
      find();
    }
  }
};

export const inspectRouter = ({ pathname }) => {
  const pathArr = pathname.split('/');
  const routeList = recursion(pathArr);

  return routeList;
};

//匹配和查找路由,返回路由的配置信息
export const fondRoute = pathname => {
  const pathArr = splitPath(pathname);
  let nowRoutes = '';
  const degree = pathArr.length;
  let count = 0;

  const firstPath = pathArr[0];
  for (let i = 0; i < routes.length; i++) {
    const el = routes[i];
    if (el.path === firstPath) {
      nowRoutes = el;
      break;
    }
  }
  if (degree === 1) {
    return returnData();
  } else if (nowRoutes) {
    find();
  }

  function find() {
    const path = pathArr[count];
    const routeList = nowRoutes.children && nowRoutes.children.routes;
    for (let i = 0; i < routeList.length; i++) {
      const el = routeList[i];
      if (el.path === path) {
        nowRoutes = el;
        break;
      } else {
      }
    }
    count++;
    count < degree && find();
  }

  return returnData();

  function returnData() {
    if (nowRoutes.path === pathArr[pathArr.length - 1]) {
      return nowRoutes;
    } else {
      return false;
    }
  }
};
