/*
* 文件系统 （file system）
*   -通过node操作系统中的文件
*   -使用文件系统需要先引入fs模块,fs是核心模块，直接引入，无需下载
*   -文件的写入 文件的读取
*       -1.打开文件 fs.openSync(path[, flags, mode])
            -path 路径
            -flag 打开文件要做的操作类型
            * r 只读
            * w 可写
            * a 追加
            -mode 设置文件的操作权限,一般不传 像chmod 777
            - 返回值，该方法返回一个文件的描述符作为结果，可以通过描述符对文件进行各种操作
        -2.写入内容 fs.writeSync(fd, string[, position[, encoding]])
            -fd 文件的描述符,传入需要写入文件的描述符
            -string 需要写入的内容
            -position 写入起始位置
            -encoding 编码 默认:UTF-8
            *
        -3.保存关闭文件 fs.closedSync(fd)
            -fd 需要关闭文件的描述符
 */

//引入文件系统
let fs = require('fs')
//1.打开文件
let fd = fs.openSync("lyd.txt","w")
//2.写入内容
fs.writeSync(fd, "hello，lyd",2)
//3.关闭文件
fs.closeSync(fd)