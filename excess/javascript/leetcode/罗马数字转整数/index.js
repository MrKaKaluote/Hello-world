/*
 * @Description: https://leetcode-cn.com/problems/roman-to-integer/
 * @Autor: GaoSong
 * @Date: 2020-03-04 12:32:39
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-04 12:37:43
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
    }
    if (obj[s] !== undefined) return obj[s];
    let arr = s.split(''), num = 0;
    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "I":
                if (arr[i + 1]==='V' || arr[i + 1]==='X') {
                    num += obj[arr[i] + arr[i + 1]];
                    i++;
                } else {
                    num += obj[arr[i]];
                }
                break;
            case "X":
                if (arr[i + 1]==='L' || arr[i + 1]==='C') {
                    num += obj[arr[i] + arr[i + 1]];
                    i++;
                } else {
                    num += obj[arr[i]];
                }
                break;
            case "C":
                if (arr[i + 1]==='D' || arr[i + 1]==='M') {
                    num += obj[arr[i] + arr[i + 1]];
                    i++;
                } else {
                    num += obj[arr[i]];
                }
                break;
            default: num += obj[arr[i]]; break;
        }
    }
    return num;
};

console.log(romanToInt('III'));