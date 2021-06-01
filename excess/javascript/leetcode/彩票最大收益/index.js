/*
 * @Description: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @Autor: GaoSong
 * @Date: 2020-03-09 12:58:16
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-09 13:26:02
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxNum = 0;
    for (let i = prices.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            let num = prices[i] - prices[j];
            if (num >= 0) {
                maxNum = maxNum > num ? maxNum : num;
            }
        }
    }
    return maxNum;
};
let array = [7,1,5,3,6,4];
console.log(maxProfit(array))