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

# 2、NodeJS起步

## 2.1、安装Node环境

查看当前Node环境的版本号：`node --version`

下载：https://nodejs.org/en/

确认Node环境是否安装成功：`node --version`

## 2.2、Hello World

1、创建编写JavaScript脚本文件

```javascript
var foo = 'foo'
console.log(foo)
```

2、打开终端，定位到脚本文件所属目录

3、输入`node 文件名` 执行对应的文件

注意：文件名不要以`node.js`来命名，而且最好也不要使用中文。

Node中没有DOM和BOM：

```javascript
// 在node中，采用EcmaScript进行编码
// 没有BOM和DOM
// 和浏览器中的JS不一样
console.log(window)
console.log(document)

/*
* ReferenceError: window is not defined
    at Object.<anonymous> (/Users/admin/Documents/GitMe/NodeNote/day01/src/01-没有bom和dom.js:1:13)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/

```

## 2.3、读取文件

浏览器中的`JavaScript`是没有文件操作的能力的，但是Node中的`JavaScript`具有文件操作的能力。

`fs`是`file-system`的简写，就是文件系统的意思，在`Node`中如果想要进行文件操作，就必须引入`fs`这个核心模块，在`fs`这个核心模块中，就提供了所有的文件操作相关的API，例如：`fs.readFile`就是用来读取文件的。

```javascript
// 1. 使用require方法加载fs核心模块
var fs = require('fs')

// 2. 读取文件
//    第一个参数就是要读取的文件路径
//    第二个参数是一个回调函数
//
//        成功
//          data 数据
//          error null
//        失败
//          data undefined
//          error 错误对象
fs.readFile('./data/a1.txt', function (error, data) {
    // <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73 0d 0a>
    // 文件中存储的其实都是二进制数据
    // 这里为什么看到的不是0和1呢？原因是二进制转为16进制了
    // 但是无论是二进制还是16进制，人类都不认识
    // 所以我们可以通过toString方法把其转为我们能认识的字符
    console.log('data: ', data)
    console.log('error: ', error)

    // 在这里就可以通过判断error来确认是否有错误发生，友好的处理错误
    if (error) {
        console.log('读取文件失败了')
    } else {
        console.log(data.toString())
    }
})

```

## 2.4、写文件

```javascript
var fs = require('fs')

// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
//    error
//    成功：
//      文件写入成功
//      error 是 null
//    失败：
//      文件写入失败
//      error 就是错误对象
fs.writeFile('./data/你好.md', '大家好，给大家介绍一下，我是Node.js', function (error) {
    // 这样写不够友好
    // console.log('文件写入成功')
    // console.log(error)

    // 这样可以友好的处理错误
    if (error) {
        console.log('写入失败')
    } else {
        console.log('写入成功了')
    }
})

```

## 2.5、创建一个服务器

接下来，我们要干一件使用Node很有成就感的一件事儿，你可以使用Node非常轻松的构建一个Web服务器，在Node中专门提供了一个核心模块：http，http这个模块的职责就是帮你创建编写服务器的。

```javascript
// 1. 加载 http 核心模块
var http = require('http')

// 2. 使用 http.createServer() 方法创建一个 Web 服务器
//    返回一个 Server 实例
var server = http.createServer()

// 3. 服务器要干嘛？
//    提供服务：对 数据的服务
//    发请求
//    接收请求
//    处理请求
//    给个反馈（发送响应）

//    注册 request 请求事件
//    当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数：回调处理函数
server.on('request', function () {
  console.log('收到客户端的请求了')
})

// 4. 绑定端口号，启动服务器
server.listen(3000, function () {
  console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问')
})

```

接下来处理请求和响应：

server.on中为request的回调函数，有两个参数，一个是request，一个是response。request请求对象，请求对象可以用来获取客户端的一些请求信息，例如请求路径；response响应对象，响应对象可以用来给客户端发送响应消息。

response对象有一个方法write，可以用来给客户端发送响应数据，write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待。

```javascript
let http = require('http')

let server = http.createServer()

// request 请求事件处理函数，需要接收两个参数：
//    Request 请求对象
//        请求对象可以用来获取客户端的一些请求信息，例如请求路径
//    Response 响应对象
//        响应对象可以用来给客户端发送响应消息
server.on('request', (request, response) => {
    // http://127.0.0.1:3000/ /
    // http://127.0.0.1:3000/a /a
    // http://127.0.0.1:3000/foo/b /foo/b
    console.log('收到客户端的请求了，请求路径是：', request.url)

    // response 对象有一个方法：write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
    response.write('hello')
    response.write(' nodejs')
    // 告诉客户端，我的话说完了，你可以呈递给用户了
    response.end()
    // 由于现在我们的服务器的能力还非常的弱，无论是什么请求，都只能响应 hello nodejs
})

server.listen(3000, () => {
    console.log('服务器启动成功了，可以通过http://localhost:3000/来访问。')
})

```













