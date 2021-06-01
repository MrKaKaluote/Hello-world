/*
 * @Description: 实现new
 * @Autor: GaoSong
 * @Date: 2020-04-16 09:03:15
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-04-16 09:25:05
 */


 function Persion(name) {
    this.name = name;
    return {
       name: 'xiaozi'
    }
 }

Persion.prototype.say = function() {
   return this.name;
}

let mynew = function() {
   let obj = {};
   let parent = [].shift.call(arguments); // parent为第一项，arguments则去除了第一项
   obj.__proto__ = parent.prototype;
   let result = parent.apply(obj, arguments);
   // 如果new内部返回一个复杂类型，则将复杂类型返回，否则返回obj
   return result instanceof Object ? result : obj;
}

 let stu = mynew(Persion,'wangwu');

 console.log(stu.name)
//  console.log(stu.say());