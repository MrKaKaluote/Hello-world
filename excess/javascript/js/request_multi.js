/*
 * @Description: 
 * @Autor: ruyun
 * @Date: 2021-05-31 14:30:41
 * @LastEditors: ruyun
 * @LastEditTime: 2021-05-31 15:03:01
 */


 function multiRequest(urls, maxNum) {
     if (urls.length < maxNum) throw 'maxNum should >= urls.length'
     return Promise((reslove,rej) => {
         const result = []
         let count = 0, maxCount = maxNum
         for(let i = 0; i < maxNum; i++) { // 按照最大限制发送请求
            request(urls[i]).then(res => {
                setResult(i, res)
            }, err => rej(err))
         }

         function setResult(index, res) {
            count++
            result[index] = res
            if (count === urls.length) { // 当count等于urls的length的时候，返回result结果
                reslove(result)
            } else {
                request(urls[++maxCount]).then(innres => {
                    setResult(maxCount, innres) // 递归发送
                }, err => rej(err))
            }
         }

         /** 请求函数 */
         function request() {}
     })
 }

 multiRequest(['url1,url2,url3,url4,url5,url6'], 3).then(res => {
     console.log(res)
 })
