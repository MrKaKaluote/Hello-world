

### 简易版同步promise

![image-20210219204625652](/Users/gaosong/Library/Application Support/typora-user-images/image-20210219204625652.png)

```javascript
const STATUS = {
  PENDING: 'PENDING',
  FULLFILLED: 'FULLFILLED',
  REJECTED: 'REJECTED'
}
class Promise{
  constructor(exector){
    // 静态变量
    this.state = STATUS.PENDING
    this.fullValue = undefined
    this.rejectReson = undefined
    
    const resolve = (value) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.FULLFILLED
      	this.fullValue = value
      }
    }
    
    const reject = (reason) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.REJECTED
      	this.rejectReson = reason
      }
    }
    
    try {
      exector(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(resolve, reject) {
    if (this.state === STATUS.FULLFILLED) {
      resolve(this.fullValue)
    }
    if (this.state === STATUS.REJECTED) {
      reject(this.rejectReson)
    }
  }
}


const P = new Promise((resolve,reject) => { // resolve, reject为回调函数
  throw new Error('')
  resolve('success')
  reject('fail')
}).then((value) => {
  console.log(value)
}, (reason) => {
  console.log(reason)
})
```

### 异步promise

```javascript
const STATUS = {
  PENDING: 'PENDING',
  FULLFILLED: 'FULLFILLED',
  REJECTED: 'REJECTED'
}
class Promise{
  constructor(exector){
    // 静态变量
    this.state = STATUS.PENDING
    this.fullValue = undefined
    this.rejectReson = undefined
    // 使用发布订阅模式，异步执行then里的resolve和reject方法
    this.ONFULLCALLBACKS = []
    this.ONREJECTCALLBACKS = []
    
    const resolve = (value) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.FULLFILLED
      	this.fullValue = value
        this.ONFULLCALLBACKS.forEach(fn => fn()) // 发布成功回调函数
      }
    }
    
    const reject = (reason) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.REJECTED
      	this.rejectReson = reason
        this.ONFULLCALLBACKS.forEach(fn => fn()) // 发布失败回调函数
      }
    }
    
    try {
      exector(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(resolve, reject) {
    if (this.state === STATUS.FULLFILLED) {
      resolve(this.fullValue)
    }
    if (this.state === STATUS.REJECTED) {
      reject(this.rejectReson)
    }
    
    // 异步的时候会走这里
    if (this.state === STATUS.PENDING) {
      this.ONFULLCALLBACKS.push(() => { // 订阅成功回调函数
        resolve(this.fullValue)
      })
      this.ONREJECTCALLBACKS.push(() => { // 订阅失败回调函数
        reject(this.rejectReson)
      })
    }
  }
}

const P = new Promise((resolve,reject) => { // resolve, reject为回调函数
  setTimeout(() => { // 因为then方法里只处理了成功和失败的状态，因为是异步resolve，此时的状态仍然是pending，需要在then里处理pending状态
    resolve('success')
  },1000)
}).then((value) => {
  console.log(value)
}, (reason) => {
  console.log(reason)
})


```



### 链式调用

![image-20210220073740355](/Users/gaosong/Library/Application Support/typora-user-images/image-20210220073740355.png)

```javascript
const STATUS = {
  PENDING: 'PENDING',
  FULLFILLED: 'FULLFILLED',
  REJECTED: 'REJECTED'
}
class Promise{
  constructor(exector){
    // 静态变量
    this.state = STATUS.PENDING
    this.fullValue = undefined
    this.rejectReson = undefined
    // 使用发布订阅模式，异步执行then里的resolve和reject方法
    this.ONFULLCALLBACKS = []
    this.ONREJECTCALLBACKS = []
    
    const resolve = (value) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.FULLFILLED
      	this.fullValue = value
        this.ONFULLCALLBACKS.forEach(fn => fn()) // 发布成功回调函数
      }
    }
    
    const reject = (reason) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.REJECTED
      	this.rejectReson = reason
        this.ONFULLCALLBACKS.forEach(fn => fn()) // 发布失败回调函数
      }
    }
    
    try {
      exector(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(onResolve, onReject) {
    return new Promise((innerResolve, innerReject) => { // 返回一个promise，实现链式调用
      if (this.state === STATUS.FULLFILLED) {
        try{
          let result = onResolve(this.fullValue)
          innerResolve(result)
        } catch(e) {
          innerReject(e)
        }
      }
      if (this.state === STATUS.REJECTED) {
        try {
          let result = onReject(this.rejectReson)
          innerResolve(result)
        } catch(e) {
          innerReject(e)
        }
      }

      // 异步的时候会走这里
      if (this.state === STATUS.PENDING) {
        this.ONFULLCALLBACKS.push(() => { // 订阅成功回调函数
          try{
            let result = onResolve(this.fullValue)
            innerResolve(result)
          } catch(e) {
            innerReject(e)
          }
        })
        this.ONREJECTCALLBACKS.push(() => { // 订阅失败回调函数
          try {
            let result = onReject(this.rejectReson)
            innerResolve(result)
          } catch(e) {
            innerReject(e)
          }
        })
      }
    })
  }
}


```

### 如果then方法中的onResolve中返回的是promise，则需要拿到resolve的值

```javascript
const STATUS = {
  PENDING: 'PENDING',
  FULLFILLED: 'FULLFILLED',
  REJECTED: 'REJECTED'
}
const resolvePromise = (result, promise, resolve, reject) => {
  if (result == promise) return reject(new TypeError('error cycle use promise'))
  
  if (typeof result === 'object' && x!== null || typeof result === 'function') {
    try{
      let then = result.then 
      if (typeof then === 'function') { // 如果result有then函数，则result是promise对象
        // 此时将result的状态返回出去
        then.call(result,(data) => { // 调用返回的promise，用他的结果作为下一次then的结果
          // 返回来的值依然可能是个promise，递归检测直到最后的返回来的不是一个promise对象
          resolvePromise(data, promise, resolve, reject)
        }, (reason) => {
          reject(reason)
        })
      } else {
        resolve(result) // 否则result作为普通对象resolve出去
      }
    } catch(e) {
      reject(e)
    }
  } else {
    resolve(result) // 普通值 直接resolve出去
  }
}


class Promise{
  constructor(exector){
    // 静态变量
    this.state = STATUS.PENDING
    this.fullValue = undefined
    this.rejectReson = undefined
    // 使用发布订阅模式，异步执行then里的resolve和reject方法
    this.ONFULLCALLBACKS = []
    this.ONREJECTCALLBACKS = []
    
    const resolve = (value) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.FULLFILLED
      	this.fullValue = value
        this.ONFULLCALLBACKS.forEach(fn => fn()) // 发布成功回调函数
      }
    }
    
    const reject = (reason) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.REJECTED
      	this.rejectReson = reason
        this.ONFULLCALLBACKS.forEach(fn => fn()) // 发布失败回调函数
      }
    }
    
    try {
      exector(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(onResolve, onReject) {
    // 此处需要检测onResolve，onReject的值，不传的话给默认值 
    onResolve = typeof onResolve === 'function' ? onResolve : data => data
    onReject = typeof onResolve === 'function' ? onReject : err => {throw err}
    
    let promise2 = new Promise((innerResolve, innerReject) => { // 返回一个promise，实现链式调用
      if (this.state === STATUS.FULLFILLED) {
        setTimeout(() => {
          try{
            let result = onResolve(this.fullValue)
            resolvePromise(result, promise2, innerResolve, innerReject)
          } catch(e) {
            innerReject(e)
          }
        }, 0)
      }
      if (this.state === STATUS.REJECTED) {
        setTimeout(() => {
          try {
            let result = onReject(this.rejectReson)
            // 判断result和promise2的关系
            resolvePromise(result, promise2, innerResolve, innerReject)
          } catch(e) {
            innerReject(e)
          }
        }, 0)
      }

      // 异步的时候会走这里
      if (this.state === STATUS.PENDING) {
        this.ONFULLCALLBACKS.push(() => { // 订阅成功回调函数
          setTimeout(() => {
            try{
              let result = onResolve(this.fullValue)
              resolvePromise(result, promise2, innerResolve, innerReject)
            } catch(e) {
              innerReject(e)
            }
          }, 0)
        })
        this.ONREJECTCALLBACKS.push(() => { // 订阅失败回调函数
          setTimeout(() => {
            try {
              let result = onReject(this.rejectReson)
              resolvePromise(result, promise2, innerResolve, innerReject)
            } catch(e) {
              innerReject(e)
            }
          }, 0)
        })
      }
      return promise2
    })
  }
}
```

### 实现promise中的其他方法

```javascript
const STATUS = {
  PENDING: 'PENDING',
  FULLFILLED: 'FULLFILLED',
  REJECTED: 'REJECTED'
}
const resolvePromise = (result, promise, resolve, reject) => {
  if (result == promise) return reject(new TypeError('error cycle use promise'))
  
  if (typeof result === 'object' && x!== null || typeof result === 'function') {
    try{
      let then = result.then 
      if (typeof then === 'function') { // 如果result有then函数，则result是promise对象
        // 此时将result的状态返回出去
        then.call(result,(data) => { // 调用返回的promise，用他的结果作为下一次then的结果
          // 返回来的值依然可能是个promise，递归检测直到最后的返回来的不是一个promise对象
          resolvePromise(data, promise, resolve, reject)
        }, (reason) => {
          reject(reason)
        })
      } else {
        resolve(result) // 否则result作为普通对象resolve出去
      }
    } catch(e) {
      reject(reason)
    }
  } else {
    resolve(result) // 普通值 直接resolve出去
  }
}


class Promise{
  constructor(exector){
    // 静态变量
    this.state = STATUS.PENDING
    this.fullValue = undefined
    this.rejectReson = undefined
    // 使用发布订阅模式，异步执行then里的resolve和reject方法
    this.ONFULLCALLBACKS = []
    this.ONREJECTCALLBACKS = []
    
    const resolve = (value) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.FULLFILLED
      	this.fullValue = value
        this.ONFULLCALLBACKS.forEach(fn => fn()) // 发布成功回调函数
      }
    }
    
    const reject = (reason) => {
      if (this.state === STATUS.PENDING) {
        this.state = STATUS.REJECTED
      	this.rejectReson = reason
        this.ONFULLCALLBACKS.forEach(fn => fn()) // 发布失败回调函数
      }
    }
    
    try {
      exector(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(onResolve, onReject) {
    // 此处需要检测onResolve，onReject的值，不传的话给默认值 
    onResolve = typeof onResolve === 'function' ? onResolve : data => data
    onReject = typeof onResolve === 'function' ? onReject : err => {throw err}
    
    let promise2 = new Promise((innerResolve, innerReject) => { // 返回一个promise，实现链式调用
      if (this.state === STATUS.FULLFILLED) {
        setTimeout(() => {
          try{
            let result = onResolve(this.fullValue)
            resolvePromise(result, promise2, innerResolve, innerReject)
            innerResolve(result)
          } catch(e) {
            innerReject(e)
          }
        }, 0)
      }
      if (this.state === STATUS.REJECTED) {
        setTimeout(() => {
          try {
            let result = onReject(this.rejectReson)
            // 判断result和promise2的关系
            resolvePromise(result, promise2, innerResolve, innerReject)
          } catch(e) {
            innerReject(e)
          }
        }, 0)
      }

      // 异步的时候会走这里
      if (this.state === STATUS.PENDING) {
        this.ONFULLCALLBACKS.push(() => { // 订阅成功回调函数
          setTimeout(() => {
            try{
              let result = onResolve(this.fullValue)
              resolvePromise(result, promise2, innerResolve, innerReject)
            } catch(e) {
              innerReject(e)
            }
          }, 0)
        })
        this.ONREJECTCALLBACKS.push(() => { // 订阅失败回调函数
          setTimeout(() => {
            try {
              let result = onReject(this.rejectReson)
              resolvePromise(result, promise2, innerResolve, innerReject)
            } catch(e) {
              innerReject(e)
            }
          }, 0)
        })
      }
      return promise2
    })
  }
  catch(err) { // 默认只有失败，没有成功
    return this.then(null, err)
  }
  static all(promises) { // all方法，等所有的promise执行完了才走all
    return new Promise((reslove, reject) => {
      const result = []
			const times = promises.length
      for(let i = 0; i < promises.length; i++) {
        if (promises[i] instanceof Promise) {
					promises[i].then(data => {
            result[i] = data
            if (--times === 0) {
              reslove(result)
            }
          }, reject)
        } else {
					result[i] = promises[i]
          if (--times === 0) {
            reslove(result)
          }
        }
      }
    })
  }
  static reslove(val) { // promise静态方法，返回一个promise
    return new Promise((reslove,reject) => {
      reslove(val)
    })
  }
  static reject(reason) { // promise静态方法，返回一个promise
    return new Promise((resolve,reject) => {
      reject(reason)
    })
  }
}
```

### promisify 将一部方法

![image-20210223213833917](/Users/gaosong/Library/Application Support/typora-user-images/image-20210223213833917.png)

![image-20210223214346962](/Users/gaosong/Library/Application Support/typora-user-images/image-20210223214346962.png)

### 没搞懂的知识点

1. new Promise().finally 没搞懂，去熟悉一下promise的finally的用法
2. 实现中断Promise的方法，使用p.about？

