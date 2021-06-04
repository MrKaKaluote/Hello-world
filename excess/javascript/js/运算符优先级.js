/*
 * @Description: 
 * @Autor: ruyun
 * @Date: 2021-06-04 10:25:20
 * @LastEditors: ruyun
 * @LastEditTime: 2021-06-04 12:54:13
 */
// let a = {}, b = 1
// a.c = b = 5
// console.log(a, b)

var a = {n:1} // a指向堆内存：AAAABBBB0000
var b = a     // b指向堆内存：AAAABBBB0000
/**
 * 1，a.x优先级高，先解析a.x = undefined 
 * 2，执行赋值操作 a = {n:2}
 * 3，执行a.x = {n:2} 此时不在解析a.x，a.x依旧指向AAAABBBB0000，所以答案如下
 */
a.x = a = {n:2} 
console.log(a) // {n:2}
console.log(b) // {n:1,x:{n:2}}


/**
 * @description: 分析下面执行结果，此题涉及运算法优先级和变量提升    new() 和 ... . ...优先级相同为20，从左到右执行   new...优先级为19  优先执行优先级高的
 * @param {*}
 * @return {*}
 * @author: ruyun
 */
function Foo() {
    getName = function() {
        console.log(1)
    }
    return this
}
Foo.getName = function() {
    console.log(2)
}
Foo.prototype.getName = function() {
    console.log(3)
}
var getName = function() {
    console.log(4)
}
function getName() {
    console.log(5)
}
Foo.getName()           // Foo作为对象，访问Foo的getName函数 ==> 2
getName()               // 涉及到变量提升，此法解析阶段（1：function getName执行声明并赋值操作 2：var getName = function仅进行变量提升，不赋值）所以最后getName为console.log(4) ==> 4
Foo().getName()         // 对getName重新赋值为console.log(1) return this相当于return window 相当于调用window.getName() ==> 1
getName()               // 执行window.getName() ==> 1
new Foo.getName()       // new Foo.getName() new内部执行Foo.getName() ==> 2
new Foo().getName()     // 先执行new()操作，再执行.操作 所以console.log(3) ==> 3
new new Foo().getName() // 先执行new()操作 ==> new this.getName() ==> 3

// 2 4 1 1 2 3 3