/*
 * @Description: 打印出1-10000之间所有对称数。如121、1331等
 * @Autor: ruyun
 * @Date: 2021-06-04 10:49:22
 * @LastEditors: ruyun
 * @LastEditTime: 2021-06-04 10:55:51
 */

function getNums(maxNum) {
    const result = []
    for(let i = 1; i < maxNum; i++) {
        let num = (i + '').split('')
        if ((i + '') === num.reverse().join('')) result.push(i)
    }
    return result
}

console.log(getNums(10000))