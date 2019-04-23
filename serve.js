const Koa = require("koa");
const path = require("path");
const static = require("koa-static");
const app = new Koa();

//设置静态资源的路径
const staticPath = "./www";

app.use(static(path.join(__dirname, staticPath)));

app.use(async ctx => {
  ctx.body = "<h1>hello world</h1>";
});

app.listen(2333, "0.0.0.0", () => {
  console.log("server is starting at port 2333");
  console.log("服务已经启动,请在浏览器中输入 http://localhost:2333 ");
});

/*
这么写则可以监听外网端口
app.listen(2333,'0.0.0.0',() => {
  console.log('server is starting at port 3000')
})

操作步骤:
  windows下打开命令行工具输入  ipconfig
  在打印出来的字符串下找到 IPv4地址
  长这样   192.168.2.332
  然后启动 node 服务之后在浏览器输入

  http://192.168.2.332:2333/demo.html

  只要你的设备和PC处于同一局域网内,则可以访问,
  比如你的电脑和手机都处于同一个 wifi 下,则都可以访问这个网址

  如果你购买了私人服务器,将代码部署到服务器上,再反向代理到英特网 ,那么全世界所有人都可以通过这个地址访问到你的服务了


相关说明和教程
https://blog.csdn.net/hnhkj/article/details/52384041
 */
