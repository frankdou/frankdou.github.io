---
title: ES6笔记
date: 2016-08-15 11:17:46
categories: js
tags:
    - ES6
---
<blockquote class="blockquote-center">ES6学习笔记</blockquote>
<!-- more -->
[教程出处](https://egghead.io/lessons/arrow-function?course=learn-es6-ecmascript-2015)

### Arrow Function
> 可以简化代码，避免this指向错误

#### 可以省去function, return关键字， 自动return
```javascript
var test = function (msg, name) {
    return msg + name;
}

var arrowTest = (msg, name) => msg + name;
```

#### 单个参数，括号也可以省去
```javascript
var squared = x => x * x;

squared(2)

> 4

```
#### this指向更加符合期望， 不需要设置that之类的中间变量

```javascript
obj = {
    a() {
        console.log(this, 'xx');
    },
    b: ()=> {
        console.log(this, 'bbb');
    }
};

o.a() > Object {}
o.b() > Window
```

```javascript
var test = {
    name: 'frank',
    handler: function(msg, func) {
        func(msg);
    },
    showMsg: function() {
        var that = this;
        this.handler('Hello ', function(msg) {
            console.log(msg + that.name);
        })
    }
}

var test = {
    name: 'frank',
    handler: function(msg, func) {
        func(msg);
    },
    showMsg: function() {
        this.handler('Hello ', msg => console.log(msg + this.name))
    }
}
```
### let keywords
> 可以用在局部函数，cache内部数据，状态等, 与`const`的区别在于，const为类型不可变

####  let、const不会声明到全局上
```javascript
let a = 2;
const c =2
window.a;
window.c;
> undefined
> undefined
```

#### 一些temp变量在用的时候声明即可，使得代码维护性更好
```javascript
function varFunc() {
    var nPre = 0;
    var nCur = 1;
    var i;
    var temp;

    for (i = 0; i < 10; i++) {
        temp = nPre;
        nPre = nCur;
        nCur = temp + nCur;
    }
}

function letFunc() {
    let nPre = 0;
    let nCur = 0;

    for (let i = 0; i < 10; i++) {
        let temp = nPre;
        nPre = nCur;
        nCur = temp + nCur;
    }
}
```
#### let在循环中不断的创建了新i，而不像var使用的始终是一个变量，从而执行的时候显示的是最终积累的值

```javascript
var arr =[];

for (var i = 0; i < 10; i++) {
    arr.push(function () {
        console.log(i);
    })
}

arr.forEach(function (func) {
    func();
})

> 10

var arr =[];

for (let i = 0; i < 10; i++) {
    arr.push(function () {
        console.log(i);
    })
}

arr.forEach(function (func) {
    func();
})

> 0 1 2 3 4 5 6 7 8 9

```

### Default values
> 可以用在一些需要默认值的地方，比如默认的value，默认的回调方法

#### 可以预设默认值
```javascript
function greet(greeting, name) {
    console.log(greeting + ' , ' + name)
}
greet('hello');

> hello , undefined

function greet(greeting, name = 'frank') {
    console.log(greeting + ' , ' + name)
}
greet('hello');

> hello , frank
```
#### 可以预设默认函数

```javascript
function receive(done = function () {
    console.log('done');
}){
    done();
}

> done

function receive(done = () => console.log('done')) {
    done();
}

> done

let receive = (done = () => console.log('done')) => done();

> done
```

### const
> 可以用于一些read-only的地方，比如`const port = 8080; const API = 'xxxx';`

#### 不可改变value
```javascript
var value = 'hello';
value = 'test';
console.log(value);

> test

const value = 'test';
value = 'hello';
console.log(value);

> Uncaught TypeError: Assignment to constant variable.
```
#### 不可改变类型
```javascript
var value = {};
value = 'test';
console.log(value);

> test

const value = {};
value = 'hello';
console.log(value);

> Uncaught TypeError: Assignment to constant variable.
```
#### 内部的值、类型可变

```javascript
const value = {};
value.text = 'hello';
console.log(value);

> Object {text: "hello"}

value.text = 1;
console.log(value);

> Object {text: 1}
```

### shorthand ＋ object enhancements
> 简化代码

#### 数据合并
```javascript
let first = 'a';
let second = 'b';

let total = {first, second};

console.log(total);

> {first: "a", second: "b"}

let extra = 'c';

let combine = {total, extra};

console.log(combine);

> { total :{"first":"a","second":"b"}, extra :"c"}
```

#### 方法添加
```javascript
var color = 'red';
var speed = 10;
var go = function () {
    console.log('go');
};

var car1 = {
    color,
    speed,
    go
};

var car2 = {
    color,
    speed,
    go() {
        console.log('go');
    }
};

var car3 = {
    color,
    speed,
    ['go'] : function () {
        console.log('go');
    }
};
// 类似car3['go']

var rename = 'go';
var car4 = {
    color,
    speed,
    [rename] : function () {
        console.log('go');
    }
};

> car1-4的结果都如下
> red 10
> go

```

### spread operator
> 更便捷的array遍历操作

#### array遍历
```javascript
console.log(...[1,2,3]);
> 1 2 3
```
#### array，items合并
```javascript
let arr = [1,2,3];
let arr2 = [4,5,6];

arr.push(arr2);
console.log(arr);

> [1, 2, 3, [4,5,6]]

let arr = [1,2,3];
let arr2 = [4,5,6];

arr.push(...arr2);
console.log(arr);

> [1, 2, 3, 4, 5, 6]
```
#### array求和
```javascript
let arr = [1,2,3];

function caculate(a, b, c) {
    let total = a + b + c;
    console.log(total);
}

caculate(...arr);

> 6
```
#### array-map
```javascript
let arr = [1,2,3];
const aTmp = arr.map(item => item * 2);
console.log(aTmp);
> [2, 4, 6]
```

#### 多个参数
```javascript
const test = (...args) => {
    console.log(args);
};
> [1, 2, 3, 4, 5, 6, 7, 8, 9]

test(1,2,3,4,5,6,7,8,9)
```

### String Templates
> 字符串模板操作

#### 变量替换
```javascript
var name = 'frank';
var greeting = `Hello , ${name}`;
console.log(greeting);
> Hello, frank
```

#### 格式保持
```javascript
var name = 'frank';
var greeting = `
    Hi,
        ${name}
                blalblalbla
    Cheers
`;

console.log(greeting);

>
    Hi,
        frank
                blalblalbla
    Cheers
```

#### 表达式
```javascript
var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x+y}`;
console.log(equation);
> 1 + 2 = 3
```
#### 条件判断, 赋值
```javascript
var tag = function (aStr, ...aVal) {
    console.log(aStr);
    console.log(aVal);

    if (aVal[0] < 23) {
        aVal[1] = 'awake';
    } else {
        aVal[1] = 'sleep';
    }

    return `${aStr[0]}${aVal[0]}${aStr[1]}${aVal[1]}`
}

var msg = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(msg);

> ["It's ", " I'm ", "", raw: Array[3]]
> [16, ""]
> It's 16 I'm awake

```

### Destructuring Assignment
> 解构赋值(直译下来好晦涩!!!), 我的感觉它的作用更像filter ＋ 赋值

#### 基于object，声明变量并赋值
```javascript
var {color, sex} = {
    color : 'blue',
    state : 'new york',
    age : 20,
    sex : 'male'
}

console.log(color);
console.log(sex);

> blue
> male

////////////////

function gen() {
    return {
        color : 'blue',
        state : 'new york',
        age : 20,
        sex : 'male'
    }
}

var {color : first, age : second} = gen();

console.log(first, second);

> blue 20

console.log(color, age);

> color/age is not defined
```

#### 基于array，声明变量并赋值
```javascript
var [first,,,four] = [1,2,3,4]

console.log(first);
console.log(four);

> 1
> 4
```

#### collection取指定key的value(类似filter)
```javascript
var arr = [{
    name: "Martin Foo",
    age: 25
}, {
    name: "Joe Bar",
    age: 15
}, {
    name: "John Baz",
    age: 23
}];


// arr.forEach(function({age}) {
//     console.log(age);
// })

arr.forEach(({age}) => console.log(age))

> 25
> 15
> 23
```

#### 综合回顾
```javascript
var arr = [{
    name: "Martin Foo",
    age: 25
}, {
    name: "Joe Bar",
    age: 15
}, {
    name: "John Baz",
    age: 23
}];

var [,,john] = arr;

var showJohnAge = function ({age}) {
    console.log(age);
}

showJohnAge(john)

> 23
```
