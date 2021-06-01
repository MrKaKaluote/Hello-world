### loader

定义：

loader为源码转换模块，为一个函数，默认接受一个参数source，并将处理后的源代码返回

loder的执行顺序为：从右向左，从下向上

![image-20210405150348953](/Users/gaosong/Library/Application Support/typora-user-images/image-20210405150348953.png)

```javascript
/*
 * descript: loader
 * @params source 源码
 */
function loader(source) {
  console.log('handler fomart source')
  return source
}

loader.pitch = function() {
  console.log('loader1~')
}
module.exports = loader
```

**如果loader由pitch**

![image-20210405151416521](/Users/gaosong/Library/Application Support/typora-user-images/image-20210405151416521.png)

![image-20210405151026004](/Users/gaosong/Library/Application Support/typora-user-images/image-20210405151026004.png)

**loader的特点**

是最后一个执行的loader要返回一个js脚本，因为要用eval执行

![image-20210405151453229](/Users/gaosong/Library/Application Support/typora-user-images/image-20210405151453229.png)





## 一个打包结束上传静态文件的plugin

```javascript
/*
 * @Description:自动上传静态文件到服务器
 * @Autor: ruyun
 * @Date: 2021-04-05 17:21:02
 * @LastEditors: ruyun
 * @LastEditTime: 2021-04-05 20:08:48
 */

// 使用
new AutoUploadFiles({
  user: 'gaosong',
  password: '123456789',
  url: '192.168.162.66'
})

// 插件开发webpack3.0版本
function upload(fileName) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
     resolve(fileName + '===> ok')
    },100)
  })
}

 class AutoUploadFiles {
   constructor(options) {
     const {user,password,url} = options
     this.user = user
     this.password = password
     this.url = url
     console.log(111,options)
   }
   apply(compiler) {
    if (compiler.hooks) {
      compiler.hooks.afterEmit.tapPromise('Upload',this.afterEmit)
    } else {
      compiler.plugin('after-emit', this.afterEmit);
    }
   }
   afterEmit(compliation, cb) {
      let assets = compliation.assets
      let promises = []
      Object.keys(assets).forEach(fileName => {
        promises.push(upload(fileName))
      })
      Promise.all(promises).then((...args) => {
        console.log(...args)
        console.log('hahaha upload finished!')
        cb()
      })
   }
 }

 module.exports = AutoUploadFiles
```

