const fs = require('fs');


// // 异步写法，可能导致回掉地狱
// fs.readFile('./message.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// // 同步写法
// try {
//     const data = fs.readFileSync('message.txt');
//     console.log(data);
// } catch(err) {
//     if (err) throw err;
// }


//用promise用来执行异步任务，可以解决上面所说的回调地狱问题，
var promise = new Promise((resolve,reject) => {
  fs.readFile('./message.txt', (err, data) => {
    if (err) {
        reject(err);
    }
    resolve(data);
  })
});

promise.then(res => {
    console.log(res)
});