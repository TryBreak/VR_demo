# node 搭建本地静态服务其指南

## 如何用 node 搭建一个静态服务器?

- 运行环境:

  - node v10.x + LTS
  - npm 6.x +

- 进入指定目录下依次运行如下命令

  ```bash shell

      npm init
          #看不懂英文没关系,一路回车就好了,它会帮你创建一个 package.json 文件

      npm install koa
          #安装 koa

      npm install koa-static
          #安装 koa-static

  ```

- 执行命令 node serve.js

- 在该目录下新建`www`文件夹, http://localhost:2333 则直接指向该文件夹,比如:

        http://localhost:2333/demo.html

