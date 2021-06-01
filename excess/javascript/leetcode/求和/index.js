/*
 * @Description: 
 * @Autor: GaoSong
 * @Date: 2020-03-02 13:12:14
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-03 17:33:38
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let dif = target-nums[i]
        if (obj[dif] !== undefined) {
            return [obj[dif], i]
        }
        obj[nums[i]] = i;
    }
};
let arr = [3,2,4], target = 6;
console.log(twoSum(arr, target));