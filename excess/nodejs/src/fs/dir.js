const fs = require('fs');

try {
    fs.appendFileSync('message.txt', '追加的数据1');
    console.log('数据已追加到文件');
  } catch (err) {
    console.log(err)
    /* 处理错误 */
  }
try {
    fs.appendFileSync('message.txt', '追加的数据2');
    console.log('数据已追加到文件');
  } catch (err) {
    console.log(err)
    /* 处理错误 */
  }
try {
    fs.appendFileSync('message.txt', '追加的数据3');
    console.log('数据已追加到文件');
  } catch (err) {
    console.log(err)
    /* 处理错误 */
  }
try {
    fs.appendFileSync('message.txt', '追加的数据4');
    console.log('数据已追加到文件');
  } catch (err) {
    console.log(err)
    /* 处理错误 */
  }