//局部变量
var a  =10;
//全局变量
a1 =10;

//在node 有个全局变量global ，和在网页中的window类似
//在全局变量中创建的变量都会作为global的属性保存
//在全局中创建的方法都会作为global的方法保存
/*
当node执行模块中的代码时，首先在最顶部添加：
function (exports, require, module, __filename, __dirname) {

在最底部添加： }

实际上模块中的代码都是包装在上述函数中执行，函数由nodejs引擎调用，函数调用时传递五个实参
exports,
    - 将内部变量和方法暴露
require,
    - 函数用来引入外部模块
module,
    - 代表当前模块自身
    - exports是module的属性
    - 可以使用exports导出，也可以使用module.exports导出
__filename,
    - 当前模块文件完整路径
__dirname
    - 当前模块文件所在文件夹的完整路径
* */

// console.log(global.a);

/*
arguments:函数实参
arguments.callee
保存的当前执行的函数对象
* */
 // console.log(arguments.callee.length)

// console.log(exports)
// console.log(module.exports)

console.log(__dirname)