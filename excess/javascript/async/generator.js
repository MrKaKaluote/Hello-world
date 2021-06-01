/*
 * @Description: 
 * @Autor: GaoSong
 * @Date: 2020-03-02 14:54:21
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-09 16:32:20
 */

let asyncFun = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('123')
    }, 2000)
})

// function asyncFun() {
//     setTimeout(() => {
//         console.log(123)
//         loader.next();
//     }, 2000)
// }

// function* fun() {
//     console.log('start...');
//     yield asyncFun();
//     console.log('end...');
// }

// var loader = fun();

// loader.next();


async function fun() {
    try{
        let res = await asyncFun();
        console.log(res);
    } catch(err) {
        console.log(err);
    }
}

fun();