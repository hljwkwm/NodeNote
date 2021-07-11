# NodeJS介绍

## NodeJS是什么

nodeJS不是一门语言，也不是一个前端框架，也不是库，是一个JavaScript运行时环境，简单点来讲，NodeJS可以解析和执行JavaScript代码。而以前只有浏览器可以解析执行JavaScript代码，也就是说现在的JavaScript可以完全脱离浏览器来运行，一切都归功于NodeJS。

浏览器中的JS：EcmaScript（包含基本的语法），BOM，DOM。

NodeJS中的JavaScript：没有BOM，没有DOM（因为服务端不操作页面），它有EcmaScript，在Node的执行环境中，为JavaScript提供了一些服务器级别的操作API，例如文件的读写，网络服务的构建，网络通信等。

NodeJS是构建于Chrome的V8引擎之上的，代码只是具有特定格式的字符串而已，引擎可以认识这些代码，可以帮你解析和执行，Google Chrome的V8引擎是目前公认的解析执行JavaScript代码最快的。NodeJS的坐着把Chrome的V8引擎移植了出来，开发了一个独立的JavaScript运行时环境。

NodeJS是事件驱动，非阻塞I/O模型（异步），轻量和高效的。

npm是基于NodeJS开发的包管理工具，是世界上最大的开源库生态系统。绝大多数的JavaScript相关的包都存放在了npm上，为了让开发人员更方便的去下载使用，例如`npm install jquery`。

## NodeJS能做什么

- Web服务器后台
- 命令行工具，如npm，hexo等
- 对于前端开发工程师来说，接触的最多的是它的命令行工具，自己写的一般很少，一般都是使用别人开发好的工具，比如webpack，gulp，npm等等

## NodeJS的预备知识

HTML，CSS，JavaScript，简单的命令行操作，具有服务器开发经验更佳。

## NodeJS的一些资源

- 《深入浅出Node.JS》：作者朴灵，这本书偏理论，几乎没有任何实战性内容，对理解原理和底层很有帮助
- 《Node.JS权威指南》：API讲解比较好，也没有业务和实战
- JavaScript 标准参考教程（alpha）：https://javascript.ruanyifeng.com/
- Node入门：https://www.nodebeginner.org/index-zh-cn.html
- 官方API文档：https://nodejs.org/dist/latest-v14.x/docs/api/
- API中文文档：http://nodejs.cn/api/
- CNODE：https://cnodejs.org/
- CNODE新手入门：https://cnodejs.org/getstart

## 通过这门课能学到什么

- B/S编程模型：Browser - Server，任何的服务端技术这种BS模型都是一样的，和语言无关，Node只是作为我们学习BS编程模型的一个工具而已
- 模块化编程：RequireJS、SeaJS都是模块化编程，以前认知的JavaScript只能通过`Script`标签来加载，在Node中，可以像`@impot`一样，来引用加载JavaScript脚本文件。
- Node常见的API
- 异步编程：例如回调函数，Promise，async，generator等
- Express开发框架
- EcmaScript 6：它只是一种新的语法，浏览器里面也可以用
- 。。。。。。
- 学习NodeJS不仅可以帮助打开服务的黑盒子，还可以帮助学习以后的前端高级内容，比如Vue.js，React，Angular