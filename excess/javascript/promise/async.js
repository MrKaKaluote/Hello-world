/*
 * @Description: 
 * @Autor: ruyun
 * @Date: 2021-05-28 10:58:08
 * @LastEditors: ruyun
 * @LastEditTime: 2021-05-28 11:09:21
 */
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}



async function test() {
    // for (let i = 0; i < list.length; i++) {
    //     (async function () {
    //         const res = await square(list[i])
    //         console.log(res)
    //     })(i)
    // }
  list.forEach(x=> {
    const res = await square(x)
    console.log(res)
  })
}
test()