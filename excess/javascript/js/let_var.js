/*
 * @Description: function
 * @Autor: GaoSong
 * @Date: 2020-04-12 15:44:14
 * @LastEditors: ruyun
 * @LastEditTime: 2021-05-31 13:48:12
 */

 /**
var声明的变量会挂到window上，而let和const不会
var声明的变量存在变量提升，而let和const不会
let和const声明形成块作用域，只能在块作用域里访问，不能跨块访问，也不能跨函数访问
同一作用域下let和const不能声明同名变量，而var可以
暂时性死区，let和const声明的变量不能在声明前被使用

作者：写代码像蔡徐抻
链接：https://juejin.cn/post/6844904116552990727
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
 /** 使用es5实现let */
// (function() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i)
//     }
// })()
// console.log(i)

/** 使用es5实现const */
function _const(key, value) {
    Object.defineProperty(window, key, {
        writable: false,
        value,
    })
}
_const('obj', {a:11})

console.log(obj)