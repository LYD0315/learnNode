/*
* 同步，异步，简单都不适合大文件的写入，性能较差，容易导致内存溢出
* 解决方法，流式文件写入
* fs.createReadStream(path,options) 可读流
* fs.createWriteStream() 可写流
* */

let fs = require("fs")
//创建一个可写流
let ws = fs.createWriteStream("hello3.txt")
//通过监听流 open和close 事件监听打开和关闭

/*
on(事件名，回调) 为对象创建一个绑定事件
once(事件名，回调) 为事件绑定一个一次性事件，事件将在出发一次后自动失效
* */
ws.once("open", function () {
    console.log("流打开")
})

ws.once("close", function () {
    console.log("流关闭")
})

//通过ws向文件输出内容

ws.write("可写流写入内容1")
ws.write("可写流写入内容2")
ws.write("可写流写入内容3")

//关闭流 用close会进行异步操作把流从写入文件断开，文件可能写不完
ws.end(() => {

})