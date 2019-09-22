# umi-example-electron

Electron example with [umi](https://github.com/umijs/umi/) and [dva](https://github.com/dvajs/dva/).

## 参考

* [Electron 应用实战 (架构篇)](https://github.com/sorrycc/blog/issues/13)
* https://github.com/sorrycc/dva-boilerplate-electron
* https://www.electron.build/configuration/configuration

## 使用

安装依赖。

```bash
# 安装依赖
$ npm i

# 安装 app 的 electron 依赖
$ cd app
$ npm i
$ cd ../
```

启动本地调试。

```bash
# 调试web
$ npm start

# 调试electron
$ npm run dev:electron

# 打标前独立的预编译electron
$ npm run compile:electron
```

打包。

```bash
# 打包web
$ npm run build:web

# 打包electron(根据)
$ npm run pack:electron

# 不打 dmg、exe 包，本地验证时用
$ npm run pack:electron:dir


```

## 截图

<img src="https://gw.alipayobjects.com/zos/rmsportal/EHDQdNKjUrVxTGfBTMVv.png" width="600" />

## 目录结构

采用 [Two package.json Structure](https://www.electron.build/tutorials/two-package-structure)，之后可能会切到 Single package.json Structure 。

```
+ app
  - package.json             // 生产依赖，存 dependencies
+ build                      // 打包文件
  + electron                 // pack:electron输出目录，linux_unpack, .dmg, .exe, .zip, .app 等文件
  + web                      // build:web输出目录，web版本
+ dist                       // compile:electron输出目录，分 main 和 renderer
+ src                        // src 源码
  + main                     // main
  + renderer                 // renderer
+ static                     // static
- electron-webpack.json      // electron-webpack 配置
- package.json               // 开发依赖，存 devDependencies
- webpack.main.additong.js   // 给 main 用的 webpack 配置
```

几点说明：

* /src/main -> /app/dist/main，是基于 roadhog 打包
* /src/renderer -> /app/dist/renderer，是基于 umi 做打包
* /webpack.config.js 等 roadhog 支持 APP_ROOT 环境变量之后会迁到 /src/main 下

## FAQ

### 如何在 renderer 端引用 electron、node 原生模块、以及 app 里的依赖？

直接 import 就好，已处理好 externals。
