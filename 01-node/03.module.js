// 引入其他模块
/*
在node中，通过require()引入其他module
require可以传递文件的路径为参数，node将自动根据路径来引入该外部模块
这里的路径必须已 . or  ..开头

使用require引入模块以后，该函数会返回一个对象，这个对象代表的是我们引入的对象

使用require()引入外部模块时，使用的就是模块标识，通过模块标识来找到对应模块

模块两大类：
    - 核心模块
    node引擎提供的模块
    核心模块的标识就是模块的名字
    - 文件模块
    由用户自己创建的模块
    文件模块标识就是文件的路径（一般是相对路径）

*/
const a = 10;
const b = 20;
const md = require("./02.module");
const md1 = require("./math");
let fs = require('fs')

// console.log(md.x)
console.log(md1.add(a, b));

// console.log(fs);