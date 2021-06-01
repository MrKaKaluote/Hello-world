/*
 * @Description: excess
 * @Autor: GaoSong
 * @Date: 2020-04-11 10:44:47
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-04-12 09:42:00
 */

//  let arr = [0,1,2,3,4,5,6,7,8,9];

//  // 返回一个新的数组，不会影响原数组，如果不加return的话则返回10个undefined，因为一个函数不写return的话默认会返回undefined
//  let arr1 = arr.map(item => {
//    return item * 2;
//  });


// // 返回一个新的数组，不会影响原数组，如果不加return的话，则返回空数组
//  let arr1 = arr.filter(item => {
//     item > 2 ;
//  });

// arr.forEach(item => {
//     item = item + 2 ;
//  });

// function main() {
//     console.log(111);
// }

// var fn = main();
//  console.log(fn);


let obj = {
    name: 'gs',
    like: {
        book: 'js',
        car: 'dazhong'
    }
}

let obj1 = Object.create(obj);

obj1.like.book = 'css';

console.log(obj, obj1)
// console.log(obj1)