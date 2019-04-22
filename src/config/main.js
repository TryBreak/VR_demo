/* eslint-disable no-console */
/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-04-15 19:58:02
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie9';
import BaseRouter from './BaseRouter';
import 'normalize.css';
import '@assets/style/reset.less';

console.log(
  `%c当前程序版本--${process.env.REACT_APP_VERSION}`,
  'font-size:10;color:green;font-weight:bold;'
);

ReactDOM.render(<BaseRouter />, document.getElementById('root'));

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();
