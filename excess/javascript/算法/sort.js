/*
 * @Description: 各种排序
 * @Autor: ruyun
 * @Date: 2021-05-16 10:25:54
 * @LastEditors: ruyun
 * @LastEditTime: 2021-06-02 12:11:41
 */

 const numbers = [1,2,8,5,6,3,4]

// /**
//  * @description: 插入排序，每次去数组里拿一个值，放入新的数组里面比较并排序，时间复杂度o(n2)
//  * @param {*} arr
//  * @return {*} result
//  * @author: ruyun
//  */
// function insertSort(arr) {
//     if (!Array.isArray(arr)) throw('请传入一个数组类型')
//     if (!arr.length) return []
//     if (arr.length === 1) return arr
//     for(let i=0;i<arr.length;i++) {
//         const target = arr[i]
//         let j = i - 1
//         while(j >= 0 && arr[j] > target) {
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = target
//     }
// }

// insertSort(numbers)
// console.log(numbers)


/**
 * @description: 归并排序
 * @param {*}
 * @return {*}
 * @author: ruyun
 */
 var group= [1,9,3,5,0,4,2,8];


 function mergeSort(list) {
     var length = list.length;
     if(length==1){ //结束条件
         return list;
         }
     var mid = Math.floor(length/2);
     var left = list.slice(0,mid);
     var right = list.slice(mid,length);
     return merge(mergeSort(left),mergeSort(right));//递归
 };
 
 function merge(left,right) {
     var result = [];
     var nl = 0;
     var nr =0;
     while(nl<left.length && nr<right.length){
         if(left[nl]<right[nr]){//按从小到大的顺序排列新的组合数组
             result.push(left[nl++]);//扔进去之后迭代
         }else{
             result.push(right[nr++]);
         }
 
     }
     while(nl<left.length){//剩下的一股脑儿扔进去。
         result.push(left[nl++]);
 
     }
     while(nr<right.length){
         result.push(right[nr++]);
 
     }
 
     return result;
 }
 
console.log(mergeSort(numbers))
