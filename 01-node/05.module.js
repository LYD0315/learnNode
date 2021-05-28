let hello = require("./helloNode")
/*
exports只能通过 . 的形式向外部暴露对象
module.exports可以通过 . 也可以通过直接赋值
exports.xx = xx

module.exports.xx = xx
module.exports = {
xx: xx
}
* */

console.log(hello.name);
console.log(hello.age);
hello.sayName()