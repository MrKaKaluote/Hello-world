/*
 * @Description: test
 * @Autor: GaoSong
 * @Date: 2020-04-17 08:17:05
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-04-17 09:20:21
 */


/**
 * 节流
 * @param {*} fn 
 * @param {*} delay 
 */
function jieliu(fn, delay) {
    let pre = 0; // 上一次的默认值
    // 先返回一个函数
    return function() {
        let now = Date.now();
        if (now - pre > delay) {
            fn.apply(this, arguments);
            pre = now;
        }
    }
}


function fangdou(fn, wait) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, wait);
    }
}

 let btn = document.getElementById("btn");
 function logger(e) {
    console.log(e);
 }
 btn.addEventListener('click', fangdou(logger, 1000));



