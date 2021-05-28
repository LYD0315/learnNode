// module.exports.name = 'lyd'
// module.exports.age = 18
// module.exports.sayName = function (){
//     console.log("I am lyd")
// }

// module.exports = {
//     name: 'zml',
//     age: 18,
//     sayName: function () {
//         console.log("I am zml")
//     }
// }

//变量存在栈内存，变量对应值
// let a = 10
// let b = a
// a++
//
// console.log("a=" + a)
// console.log("b=" + b)

//对象存在堆内存，值对应内存地址
//指向某个对象，也就是指向某个地址


let obj = new Object()
obj.name = 'lyd'

var obj2 = obj

obj2.name = 'zml'

obj2 = null ;

console.log(obj.name)
console.log(obj2)
