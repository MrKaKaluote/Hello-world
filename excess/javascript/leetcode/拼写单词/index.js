/*
 * @Description: https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/
 * @Autor: GaoSong
 * @Date: 2020-03-17 13:24:22
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-03-17 13:31:58
 */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let str = '';
    for(let i =0; i < words.length; i++) {
        let flag = true, str1 = chars;
        for(let j = 0; j < words[i].length; j++) {
            if (!str1.includes(words[i].substring(j, j+1))) {
                flag = false;
                j = words[i].length;
            } else {
                str1 = str1.replace(words[i].substring(j, j+1), "");
            }
        }
        if (flag) str+=words[i];
    }
    return str.length;
};

console.log(countCharacters(["cat","bt","hat","tree"], "atach"));