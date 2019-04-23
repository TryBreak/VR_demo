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

- 新建文件 serve.js 或者直接拷贝我的

- 执行命令 node serve.js

- 在该目录下新建`www`文件夹, http://localhost:2333 则直接指向该文件夹,比如:

        http://localhost:2333/demo.html

一个静态服务器就搞定了~!
是不是很简单!!!

`注意:`

    .gitignore 是 git 的忽略配置文件,请勿将 node_modules 上传至 git 仓库!!!!

小提示 , 你可以将 node_serve 复制出来放到你喜欢的地方,然后在命令行中进入该目录然后执行对用操作;

> 当前本静态服务器使用方法:
>
> 进入目录,执行 `npm install` 待安装完成后执行 `npm run serve` 或者 `node serve.js`
