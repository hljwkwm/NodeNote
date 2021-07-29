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
