---
title: Object.defineProperty
date: 2022-05-12T12:27:37.826Z
size: 2239
---
`Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象

```js
var user = {}

Object.defineProperty(user, 'name', {
    enumerable: true,
    configurable:true,
    set: function(newVal) {
        this._name = newVal 
        console.log('set: ' + this._name)
    },
    get: function() {
        console.log('get: ' + this._name)
        return this._name
    }
})

user.name = 'an' // set: an
console.log(user.name) // get: an
```

完整的对变量的每一个子属性进行监听

```js
// 监视对象
function observe(obj) {
   // 遍历对象，使用 get/set 重新定义对象的每个属性值
    Object.keys(obj).map(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, k, v) {
    // 递归子属性
    if (typeof(v) === 'object') observe(v)
    
    // 重定义 get/set
    Object.defineProperty(obj, k, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            console.log('get: ' + v)
            return v
        },
        // 重新设置值时，触发收集器的通知机制
        set: function reactiveSetter(newV) {
            console.log('set: ' + newV)
            v = newV
        },
    })
}

let data = {a: 1}
// 监视对象
observe(data)
data.a // get: 1
data.a = 2 // set: 2
```

##### 缺陷

- IE8 及更低版本 IE 是不支持的
- 无法检测到对象属性的**新增或删除**
- 如果修改数组的 `length` （ `Object.defineProperty` 不能监听数组的长度），以及数组的 `push` 等变异方法是无法触发 `setter` 的

##### vue2.x 中如何监测数组变化

将 data 中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组 api 时，可以通知依赖更新

##### vue2.x 怎么解决给对象新增属性不会触发组件重新渲染的问题

- 初始化实例时对属性执行 `getter/setter` 转化
- vm.$set
  - 如果目标是数组,使用 vue 实现的变异方法 `splice` 实现响应式
  - 如果目标是对象,判断属性存在,即为响应式,直接赋值
  - 如果属性不是响应式,则调用方法进行响应式处理
