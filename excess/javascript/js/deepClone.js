/*
 * @Description: 深拷贝
 * @Autor: GaoSong
 * @Date: 2020-04-12 09:44:56
 * @LastEditors: GaoSong
 * @LastEditTime: 2020-04-12 16:31:48
 */


let obj = {
    name: 'gs',
    like: {
        book: 'js',
        car: 'dazhong',
        has: ['name','favo']
    },
    have: ['name','favo'],
    fn: function () {
        console.log('hahah')
    },
}
obj.duixiang = obj;

function deepClone(oldobj, map = new WeakMap()) {
    let obj;
    if (typeof oldobj !== 'object') return oldobj;
    // 查看map里是否已经存在拷贝过的属性，有的话直接返回，无的话则设置
    if (map.get(oldobj)) return map.get(oldobj);
    map.set(oldobj, oldobj);
    if (Array.isArray(oldobj)) {
        obj = [];
        for (let i = 0; i < oldobj.length; i++)  {
            obj.push(deepClone(oldobj[i]), map);
        }
        return obj;
    }


    if (typeof (oldobj) === 'object') {
        obj = {};
        for (let key in oldobj) {
            if (typeof (oldobj[key]) === 'object' ) {
                obj[key] = deepClone(oldobj[key], map);
            } else {
                obj[key] = oldobj[key];
            }
        }
        return obj;
    }
}

let obj1 = deepClone(obj);

obj1.like.book = 'css';

obj1.have.push('sing');
console.log(obj);

console.log(obj1);