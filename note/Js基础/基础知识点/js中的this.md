## js中的this相关

**this是指函数执行主体（不是上下文），就是谁吧函数执行的，那么执行主体就是谁**

1. 给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的this就是当前操作的元素本身
2. 当方法执行的时候，我们看方法前面是否有点，没有‘点’的this就是指window或者undefined；有‘点’，‘点’前面是谁，this就是谁
3. 自执行函数中的this，指向window

```javascript
let obj = {
  fn:(function(n){
    console.log(this) // => window
    return function() {
      console.log(this) // => obj
    }
  })(10)
}

obj.fn()
```