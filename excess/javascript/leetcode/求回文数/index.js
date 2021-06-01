/*
 * @Description: https://leetcode-cn.com/problems/palindrome-number/
 * @Autor: GaoSong
 * @Date: 2020-03-04 10:53:49
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-04 11:05:18
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let flag = true;
    let arr = x.toString().split('');
    for(let i =0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[(arr.length - 1) - i]) {
            flag = false;
        }
    }
    return flag;
};
let num = 232232;
console.log(isPalindrome(num));