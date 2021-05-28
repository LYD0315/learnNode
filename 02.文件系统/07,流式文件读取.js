/*
流式文件读取适用于一些大文件，分多次将文件读取到内存当中
* */

let fs = require("fs")
//创建可读流
let rs = fs.createReadStream("hello.jpg",)
//创建可写流
let ws = fs.createWriteStream('cphello.jpg')
//可监听流开启和关闭

rs.once('open', () => {
    console.log('可读流打开')
})

rs.once('close', () => {
    console.log('读流关闭')
    ws.end()
})

ws.once('open', () => {
    console.log('写流打开')
})

ws.once('close', () => {
    console.log('写流关闭')
})

//读取一个可读流，必须为可读流绑定 data事件，绑定完毕自动开始读取，读取完自己关闭

rs.on("data", (data) => {
    //console.log(arguments)
    // console.log(data)
    // 打印结果来看分了两次读取，一次是64KB
     ws.write(data)


})
