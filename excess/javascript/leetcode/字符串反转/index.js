/*
 * @Description: 
 * @Date: 2020-03-03 11:28:02
 * @LastEditTime: 2020-03-03 17:32:03
 * @Autor: GaoSong
 * @LastEditors: GaoSong
 */
/**
 * @param {number} x
 * @return {number}
 * https://leetcode-cn.com/problems/reverse-integer/
 */
var reverse = function(x) {
    let arr = x.toString().split(''), len = arr.length, result;
    let f = arr[0];
    if (f === '-') {
        arr = arr.slice(1, len + 1);
    }
    for (let i = 0; i < len / 2; i++) {
        let j = arr[i];
        arr[i] = arr[len - i];
        arr[len - i] = j;
    }
    arr = arr.slice(1, len + 1);
    let str = arr.join('');
    if (f === '-') {
        result = -Number(str);
    } else {
        result = Number(str);
    }
    if (result < Math.pow(-2,31) || result > Math.pow(2,31) - 1) return 0;
    return result;
};
let num = 111986789;
console.log(reverse(num));
