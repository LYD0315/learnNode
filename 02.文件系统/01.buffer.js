/*
    buffer - 缓冲区
    - buffer 的结构和数组很像，操作方法基本一致
    - 数组不能存储二进制文件，buffer可以用来弥补数组的不足，存储二进制文件
    - 使用buffer不需要引入模块，直接使用
    - buffer存储的都是二进制数据，显示的都是十六进制，比较短
    - buffer每一个元素的大小从00到ff 0 - 255
    - 00000000 - 11111111

    计算机中一个0 或一个1 称为一位（1bit） ，8 bit = 1 byte
    1024byte = 1Kb
    1024Kb = 1Mb
    1024Mb = 1Gb
    1024Gb = 1Tb

    buffer的一个元素占用一个字节
    buffer的大小一旦确定不能再进行修改,实际上是对底层内存的直接操作

* */

let str = "hello 刘逸东 !"

let buf = Buffer.from(str)

// console.log(buf.length) // 占用内存的大小
// console.log(str.length) // 字符串的长度
// console.log(buf)

// 创建制定大小的buffer,

//buffer所有的构造函数都不推荐使用

// let buf2 = new Buffer(10); // 10 byte 的buffer

let buf2 = Buffer.alloc(10)

// 通过索引来对buffer进行赋值

buf2[0] = 22

buf2[1] = 255

buf2[2] = 0xaa

// buf2[10] = 16 //不起作用，加不进去
//
// buf2[3] = 256 //空
//
// buf2[4] = 554 //错误

//   0010 1010 只取了后8位
//10 0010 1010

//只要数字在控制台输出，一定是10进制
// console.log(buf2[2].toString(16));

//和数组基本一致可以遍历
// for (let i = 0 ;i<buf2.length ;i++ ){
//     console.log(buf2[i])
// }

//Buffer.allocUnsafe(size) 创建一个制定大小的buffer，但是buffer中可能含有敏感数据
// let buf3 = Buffer.allocUnsafe(1024) //分配空间时，不清空内存数据 alloc分配空间，同时清空数据（性能低些）
//
// console.log(buf3)

/*
* Buffer.from(str) 将一个英文字符转换为buffer
* Buffer.alloc(size) 创建一个大小为size的空buffer
* Buffer.allocUnsafe(size) 创建一个大小为size的，内存不清空的buffer
*
*
* */