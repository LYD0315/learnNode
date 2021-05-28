/*
流式文件读取适用于一些大文件，分多次将文件读取到内存当中
* */

let fs = require("fs")
//创建可读流
let rs = fs.createReadStream("hello.jpg",)
//创建可写流
let ws = fs.createWriteStream('cphello1.jpg')
//可监听流开启和关闭

rs.once('open', () => {
    console.log('可读流打开')
})

rs.once('close', () => {
    console.log('可读流关闭')
})

ws.once('open', () => {
    console.log('可写流打开')
})

ws.once('close', () => {
    console.log('可写流关闭')
})
// pipe 将可读流内容直接输出到可写流
rs.pipe(ws)

