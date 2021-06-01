## vuex & 简单实践

1. vuex的作用
2. 在脚手架中使用vuex
3. vuex的state、mutations、actions的基本使用



<p style='color:red'>前提：在大家会使用vue写项目的前提下</p>

（首先在开始将我们今天的主角vuex之前，我们先来思考一个问题，我们在使用vue开发我们的项目的时候不可避免的会遇到一个问题，那就是vue中组件之间的通信问题，那么vue项目中组件通信的方式有哪些呢？有同学就说了，我知道，可以使用props，$emit的方式；也有的同学说可以使用$parent，$children来获取父子组件上的一些属性和方法，这些呢都没有问题，但是都只是适用于父子组件之间的通信，但是我们考虑以下场景：比如说我进到一个后台管理系统，首先需要登陆，点击了登陆按钮之后会拿到后台关于用户的姓名啊，性别啊之类的，这些用户的基本信息可能在整个系统的多个组件中都会使用到，这些组件之间并不是父子组件的关系，他们可能一点关联都没有，这个时候我要怎么办呢？肯定不能说在哪个组件中用到了快乐用户信息，我都要在组件的created中重新去拉取一次用户信息，那接下来我们将要讲的vuex，就可以很好的解决这个问题）

### vue中组件间的通信

##### 父子组件之间的通信

1. props，$emit
2. $parent，$children

（首先我们来了解一些vuex是什么，我们这里引用vuex官网的一句话）

### vuex是什么

Vuex 是一个**专为 Vue.js** 应用程序开发的状态管理模式**。它采用**集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

（我们先来理解一下这句话的意思，可以总结出来以下几个特点）

#### 特点

1. 专门为vue提供
2. 集中式存储

（说明它就像一个类似于window的全局变量一样，全局上下问只有一个，并且在代码中各个地方都可以访问到）

（根据它的第二个特性，在我们上面举的那个例子里，我们就可以将我们的用户信息放在vuex里，无论我们在我们应用程序的哪个组件里需要这些用户信息了，我们都可以从vuex中取出来使用）

（那么既然这么好用我们应该怎么在我们的vue项目中来使用vuex呢，下面我们使用vue-cli来快速构建一个简单的vue项目，来演示一下我们在项目中如何引入、注册并使用vuex）

#### vue-cli创建项目

```javascript
1. npm install -g @vue/cli
2. vue create hello-world
3. npm install vuex --save
```

（我们先来看一下，vuex中的几个常用的方法）

![vuex](https://vuex.vuejs.org/vuex.png)

（从上面这张图我们可以看到，vuex中主要State、Mutations、Actions组成，可以看到，state中的状态只能由提交mutaions中的commit来修改，而mutaions中又可以由actions中触发，其实我们可以简单的将state理解为vue组件中的data，mutaions和actions可以理解为组件中的methods）

（下面我们来看下，具体在项目中的使用）

(首先新建store目录，在store下新建index.js，因为vuex也是使用vue的插件机制进行注册的，所以我们引入vue以及vuex，并使用vue.use(vuex)注册vuex，我们需要导出一个store的实例，将其注册到vue的根实例；接下来分别创建state，mutaions、action）



(首先我们来说下state，刚刚我们前面说过，可以把它理解为组件中的data，所以它里面的数据是响应式的，用来存储我们的数据，我们可以在组件b里来打印出count的值，它既然是响应式的数据，那么我们通过computed来获取this.$store.state.count)



(下面是mutaions，我们可以理解为methods，从上图可以了解到它是改变state的唯一方式，我们新建一个chageCount方法，它接收两个参数，第一个参数为state，第二个参数为我们调用commit传来的参数，我们称之为*载荷*，下面我们在组件a里去点击按钮通过调用mutaions中的changeCount的方法来改变state中count的值)



（可以看到，当我们点击按钮去改变count的值的时候，组件b里的值也会相应的改变）



（接下来我们再来看下actions的用法）



（actions我们也可以理解为一个方法，不同于mutaions，actions里我们可以进行异步操作，然后在一步任务完成之后，调用commit去改变state的值）





（关于vuex的一些核心使用方法，大概就是这么多）