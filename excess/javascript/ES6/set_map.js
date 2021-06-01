/*
 * @Description: about Set Map WeakSet WeakMap
 * @Autor: GaoSong
 * @Date: 2020-03-04 15:36:37
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-04 15:45:15
 */


/**
 * Set迭代器：
 * keys()：返回一个包含集合中所有键的迭代器
 * values()：返回一个包含集合中所有值得迭代器
 * entries()：返回一个包含Set对象中所有元素得键值对迭代器
 * forEach(callbackFn, thisArg)：用于对集合成员执行callbackFn操作，如果提供了 thisArg参数，回调中的this会是这个参数，没有返回值
 * 原文链接：https://blog.csdn.net/zhang1339435196/article/details/100689161
 */
// let mySet = new Set([1, 2, 3, 2, 1]);
// console.log(mySet.keys());// SetIterator {1, 2, 3}
// console.log(mySet.values());// SetIterator {1, 2, 3}
// console.log(mySet.entries());// SetIterator {1, 2, 3}
// mySet.forEach(function(i){
//  console.log(i+'=>'+this);  // 11,12,13
// },10)



let Arr = [["name","jack"],["age","18"],["sex","man"]];
let myMap = new Map(Arr);
console.log(myMap); //jack
