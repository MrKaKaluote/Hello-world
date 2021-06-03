/*
 * @Description: https://leetcode-cn.com/problems/continuous-subarray-sum/
 * @Autor: ruyun
 * @Date: 2021-06-03 10:17:10
 * @LastEditors: ruyun
 * @LastEditTime: 2021-06-03 10:20:19
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var checkSubarraySum = function(nums, k) {
    let map = new Map(),remd = 0
    map.set(0, -1)
    for(let i = 0; i < nums.length; i++) {
        remd += nums[i]
        let tt = remd % k
        if (map.has(tt)) {
            if (i - map.get(tt) >=2) {
                return true
            }
        } else {
            map.set(tt, i)
        }
    }
    return false
};

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
//  var checkSubarraySum = function(nums, k) {

//     var map = new Map()
//     map.set(0, -1);
//     var sum = 0
//     for(var i = 0 ; i < nums.length; i++){
//         sum+= nums[i]
//         if(k != 0){
//             sum = sum % k   // 先取余再加一个数=两数相加取余（23%6 + 2） % 6 === （23+2）% 6
//         }
//         if(map.has(sum)){
//             if(i - map.get(sum) > 1){
//                 return true
//             }
//         }else {
//            map.set(sum, i) 
//         }          
//     }
//     return false
// };