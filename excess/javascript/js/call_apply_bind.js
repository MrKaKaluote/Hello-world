/*
 * @Description: 手动实现call、apply、bind
 * @Autor: GaoSong
 * @Date: 2020-04-16 07:53:31
 * @LastEditors: ruyun
 * @LastEditTime: 2021-05-31 14:28:43
 */


 function fn1(name, age, desc) {
     this.say = desc;
     console.log(this)
    //  console.log(arguments)
 }

 let obj = {
     name: 'gs',
 }

// function fn2() {
//     console.log(this,2);
// }


/**
 * bind
 * 1、返回一个函数
 * 2、后发执行
 * 3、如果绑定的函数被new了，当前函数的this应该指向实例，而不是obj
 */

 Function.prototype.mybind = function(context) {
     let args = [].slice.call(arguments, 1);
     let _that = this;
     function fuc() {
         // 如果被new了，这里的this就是指向的实例
         let innerArgs = [].slice.call(arguments);
         _that.apply(this instanceof fuc ? this : context, args.concat(innerArgs));
     }
     // 给构造函数绑定原型方法
     fuc.prototype = Object.create(_that.prototype);
     return fuc;
 }

 fn1.prototype.run = 'run';

let fn = fn1.mybind(obj, 'gss', 26);

let fn2 = new fn('haha');

console.log(fn2.say);
console.log(fn2.run);


 /**
  * call
  * 1、修改this指向
  * 2、执行函数
  */


  Function.prototype.mycall1 = function(context,...args) {
      context = Object(context) || window
      context[fn] = this
      const result = context[fn](...args)
      delete context[fn]
      return result
  }

//   Function.prototype.mycall = function (context){
//     context = context ? Object(context) : window;
//     // 函数内的this指向调用者
//     context.fn = this;
//     let arr = [];
//     for(let i = 1; i < arguments.length; i++) {
//         arr.push(arguments[i]);
//     }
//     // let r = eval(`context.fn(${arr})`)
//     // delete context.fn;
//     // return r;
//     context.fn(arr.toString()); // arr.toString将数组转为1，2，3
//     delete context.fn;
//   }
//   fn1.mycall(obj,1,2,3);
// 第一次调用call，this指向了fn2，执行下一次的时候则直接调用了fn2
// fn1.mycall.mycall(fn2)

/**
 * apply
 * 1、修改this指向
 * 2、执行函数
 * 3、传值为array
 */
// Function.prototype.myapply = function (context){
//     context = context ? Object(context) : window;
//     // 函数内的this指向调用者
//     context.fn = this;
//     let arr = arguments[arguments.length - 1];
//     // let r = eval(`context.fn(${arr})`)
//     // delete context.fn;
//     // return r;
//     context.fn(arr.toString()); // arr.toString将数组转为1，2，3
//     delete context.fn;
//   }
//   fn1.mycall(obj,[1,2,3]);