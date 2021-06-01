const fs = require('fs');
const path = require('path');

// 查找出文件中大于5kb的文件，并以数组的形式输出
function findBigFile(dir) {
    let bigFile = [];
    let dirs = fs.readdirSync(dir);
    for (let d of dirs) {
        if (d.indexOf('.') != 0) {  //去除隐藏文件
            let innerPath = path.resolve(dir, d);
            let stat = fs.statSync(innerPath);
            if (stat.isDirectory()) {
                bigFile = bigFile.concat(findBigFile(innerPath));
            }
            if (stat.isFile() && stat.size > 5000) {
                bigFile.push(`name:${d} => size:${stat.size / 1000}kb`);
            }
        }
    }
    return bigFile;
}

console.log(findBigFile('./demo'));