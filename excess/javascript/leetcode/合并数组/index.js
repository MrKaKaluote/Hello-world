/*
 * @Description: 
 * @Autor: GaoSong
 * @Date: 2020-03-03 10:44:37
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-03 17:37:55
 */
/**
 * @description: https://leetcode-cn.com/problems/sorted-merge-lcci/
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 * slice不会改变原数组，所以不对
 * splice改变了原数组，所以符合modify A in-place instead
 */
var merge = function (A, m, B, n) {
    var len1 = A.length,
        len2 = B.length;
    A.splice(m, len1 - m);
    B.splice(n, len2 - n);
    A.push(...B); // 如果使用concat则不会改变原数组，所以用push
    A.sort((a, b) => {
        return a - b;
    });

    // A = A.slice(0, m);
    // B = B.slice(0, n);
    // A = A.concat(B).sort();

    return A;

};
let A = [1, 2, 3, 0, 0, 0],
    m = 3,
    B = [2, 5, 6],
    n = 3;
merge(A, m, B, n);