/*
 * @Description: https://leetcode-cn.com/problems/reverse-integer/submissions/
 * @Autor: ruyun
 * @Date: 2021-06-04 12:53:22
 * @LastEditors: ruyun
 * @LastEditTime: 2021-06-04 13:04:54
 */
var reverse = function(x) {
    let result = 0
    const prefix = x < 0
    const nums = (Math.abs(x) + '').split('')
    for(let i = 0; i < nums.length / 2; i++ ) {
        [nums[i],nums[nums.length - i - 1]] = [nums[nums.length - i - 1],nums[i]]
    }
    result = prefix ? -(+(nums.join(''))) : +(nums.join(''))
    return result <= 2**31 - 1 && result >= -(2**31) ? result : 0
};
console.log(reverse(1234))