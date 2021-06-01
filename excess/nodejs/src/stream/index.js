const fs = require('fs');
const format = require('date-format');

// 读文件流
let readFile = fs.createReadStream('./message.txt');
// 写文件
let writeFile = fs.createWriteStream('./output.txt');

let count = 0, str = '';
console.log(`${format('hh:mm:ss:SSS', new Date())}开始复制`);
readFile.on('data', (data) => {
    str+=data;
    count++;
});

readFile.on('end', ()=> {
    console.log(`读取文件执行次数${count}`);
    writeFile.write(str);
    // 标记文件末尾
    writeFile.end();
    // 写入结束
    writeFile.on('finish', () => {
        console.log(`${format('hh:mm:ss:SSS', new Date())}复制完成`);
    });
});

readFile.on('error', (err) => {
    console.log(err);
});
