/*
 * @Description: https://leetcode-cn.com/problems/distribute-candies-to-people/
 * @Autor: GaoSong
 * @Date: 2020-03-05 12:54:04
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-05 13:41:20
 */
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let arr = new Array(num_people).fill(0), len = arr.length, j = 1;
    for (let i = 0; i < len; i++) {
        if (candies - j < 0) {
            arr[i] += candies;
            i = len;
        } else {
            arr[i] += j;
            candies -= j;
            j++;
            if (i === (len -1) && candies > 0) {
                i = -1;
            }
        }
    }
    return arr;
};

console.log(distributeCandies(7, 4));