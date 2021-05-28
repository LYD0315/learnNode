/*
模块化
    -在node中,一个js文件就是一个模块
    -在node中,每一个js中的文件中的js代码都是独立运行在一个函数中的
        而不是全局作用域，一个模块中的函数和变量无法在别的模块中访问
* */
console.log("I am module 2 !");

var x = 10 ;
var y = 20 ;

//向外部暴露属性和方法
//可以通过exports暴露
//只需要将暴露的变量和方法设置 exports属性
exports.x = x;
exports.y = y;