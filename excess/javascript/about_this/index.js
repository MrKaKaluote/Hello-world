/*
 * @Description: 关于this的一些问题
 * @Autor: GaoSong
 * @Date: 2020-03-04 14:18:48
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-04 15:09:42
 * 
 * 浏览器全局作用域指向window对象
 * node中全局作用域指向一个空{}
 */



var age = 21;

let obj = {
    age: 20,
    info: function () {
        return () => { // 箭头函数锁定词法作用域this
            console.log(this.age);
        }
    }
}

// let obj = {
//     age: 20,
//     info: function() {
//         return function() {  // 外面执行this指向window
//             console.log(this.age);
//         }
//     }
// }

//  let person = {age: 20};
let info = obj.info();
//  obj.info()
info();