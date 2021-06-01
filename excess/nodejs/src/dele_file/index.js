const fs = require('fs');
const path = require('path');

function removeDir(dir) {
    let dirs = fs.readdirSync(dir);
    for(let d of dirs) {
        let innerPath = path.resolve(dir, d);
        let stat = fs.statSync(innerPath);
        if (stat.isDirectory()) {
            // 文件夹
            removeDir(innerPath);
        }
        if (stat.isFile()) {
            // 是文件
            fs.unlinkSync(innerPath);
        }
    }
    //删除空文件夹
    fs.rmdirSync(dir);
}

removeDir('./demo');