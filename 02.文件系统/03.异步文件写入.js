/*
    异步文件写入
    fs.open(path[, flags[, mode]], callback)
    - 没有返回的描述符
    - 结果是从回调函数的参数返回
    - err 错误对象| fd 文件描述符 （错误优先）
 */

let fs = require("fs")

// 打开文件
fs.open("hello.txt","w",function (err,fd) {
    if(!err){
        //如果没有出错，则对文件进行写入
        fs.write(fd,"异步写入内容",function (err) {
            if(!err){
                console.log("写入成功")
            }
            fs.close(fd,function () {
                if (!err){
                    console.log("文件已关闭")
                }
            })
        })
    }else{
        console.log(err)
    }
})


