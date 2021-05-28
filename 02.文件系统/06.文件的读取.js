/*
* 1.同步文件的读取 open read close
* 2.异步文件的读取 open read close
* 3.简单文件的读取
*  fs.readFile(path[, options], callback)
*
*  fs.readFileSync(path[, options])
*   - path 要读取的文件的路径
*   - option 可选项
*   - callback()
*   - err | data
* 4.流式文件的读取
* */

let fs = require("fs")

let path = "C:\\Users\\刘逸东\\Desktop\\和谐\\转正申请表.jpg"

fs.readFile("C:\\Users\\刘逸东\\Desktop\\和谐\\转正申请表.jpg",(err,data) =>{
    if (err) throw err;
    fs.writeFile("C:\\Users\\刘逸东\\Desktop\\和谐\\hello.jpg",data,(err) => {
        if(err)throw  err;
        console.log("文件写入成功")
    })
})