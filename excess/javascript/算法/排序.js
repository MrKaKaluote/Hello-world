/*
 * @Description: 各种排序
 * @Autor: ruyun
 * @Date: 2021-05-16 10:25:54
 * @LastEditors: ruyun
 * @LastEditTime: 2021-05-16 10:49:26
 */

 const numbers = [1,2,8,5,6,3,4]

/**
 * @description: 插入排序，每次去数组里拿一个值，放入新的数组里面比较并排序，时间复杂度o(n2)
 * @param {*} arr
 * @return {*} result
 * @author: ruyun
 */
function insertSort(arr) {
    if (!Array.isArray(arr)) throw('请传入一个数组类型')
    if (!arr.length) return []
    if (arr.length === 1) return arr
    debugger
    for(let i=0;i<arr.length;i++) {
        const target = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > target) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = target
    }
}

insertSort(numbers)
console.log(numbers)
