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
