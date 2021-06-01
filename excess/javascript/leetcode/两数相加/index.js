/*
 * @Description: https://leetcode-cn.com/problems/add-two-numbers/
 * @Autor: GaoSong
 * @Date: 2020-03-12 12:53:49
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-12 13:02:04
 * 不知道为啥做错了
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function(l1, l2) {
//     let arr = [];
//     for(let i = 0; i < l1.length; i++) {
//         let num = l1[i] + l2[i];
//         if (num < 10) {
//             arr.push(num);
//         } else {
//             arr.push(num % 10);
//             l1[i+1]++;
//         }
//     }
//     return arr;
// };

// console.log(addTwoNumbers([2,4,3],[5,6,4]));