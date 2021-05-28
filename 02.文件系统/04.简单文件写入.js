/*
* 简单文件写入
* fs.writeFile(file, data[, options], callback)
*   -file 操作文件的路径
*   -data 制定要写入的数据
*   -options 对写入进行一些设置 （可选）
*   -callback 回调
* fs.writeFileSync(file, data[, options])
*
*
*
*
* */
let fs = require("fs")

//C:\\Users\\刘逸东\\Desktop\\hello.txt


fs.writeFile("C:\\Users\\刘逸东\\Desktop\\hello.txt","写入内容2",{flag:'w'},function (err) {
    if(!err){
        console.log("写入成功")
    }
})

fs.writeFileSync("lll.txt","test data")