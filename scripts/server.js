/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-22 17:27:56
 * @LastEditTime: 2019-04-22 18:44:59
 */
const static = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');

const { readFileList, readFileCont, writeFile } = require('./utils/local_root');

const staticPath = '../www';

// creatFile();
// async function creatFile() {
//   //读取文件列表
//   fs.readdir(path.join(__dirname, staticPath), (err, files) => {
//     if (err) {
//       console.error('error:\n' + err);
//       return;
//     }
//     console.log(files);
//   });
// }

app.use(static(path.join(__dirname, staticPath)));

app.use(async (ctx, next) => {
  const html = fs.readFileSync(
    path.join(__dirname, staticPath, 'index.html'),
    'utf-8'
  );
  ctx.body = html;
  await next();
});

const port = 3380;
app.listen(port, '0.0.0.0', () => {
  console.log(`server is starting at port ${port}`);
  console.log(`服务已经启动,请在浏览器中输入 http://localhost:${port} `);
});
