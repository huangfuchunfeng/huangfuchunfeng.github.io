---
layout: post
title: 'async await function 异步函数'
date: 2024-02-28 00:00:00
categories: JavaScript
author: 皇甫春风
tags: js
---

# 异步函数

>  `async function` 声明创建一个绑定到给定名称的新异步函数。
   函数体内允许使用 `await` 关键字，这使得我们可以更简洁地编写基于 promise 的异步代码，并且避免了显式地配置 promise 链的需要。

> 也可以使用 async function 表达式来定义异步函数。


## 示例

``` js

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();

```

## 语法

```js 

async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}

```

## 描述

async function 声明创建一个 `AsyncFunction` 对象。每次调用异步函数时，都会返回一个新的 Promise 对象，该对象将会被解决为异步函数的返回值，或者被拒绝为异步函数中未捕获的异常。

异步函数可以包含零个或者多个 await 表达式。await 表达式通过暂停执行使返回 promise 的函数表现得像同步函数一样，直到返回的 promise 被兑现或拒绝。返回的 promise 的解决值会被当作该 await 表达式的返回值。使用 async/await 关键字就可以使用普通的 try/catch 代码块捕获异步代码中的错误。

> 备注： await 关键字只在常规 JavaScript 代码中的异步函数内有效。如果你在异步函数体之外使用它，则会抛出 SyntaxError。
  await 可以单独与 JavaScript 模块(import() 返回一个promise)一起使用。

>  **async/await 的目的在于简化使用基于 promise 的 API 时所需的语法**


即使异步函数的返回值看起来像是被包装在了一个 Promise.resolve 中，但它们不是等价的。

如果给定的值是一个 promise，异步函数会返回一个不同的引用，而 Promise.resolve 会返回相同的引用，

当你想要检查一个 promise 和一个异步函数的返回值是否等价时，这可能是一个麻烦。

``` js
const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false

```

异步函数的函数体可以被看作是由零个或者多个 await 表达式分割开来的。从顶层代码直到（并包括）第一个 await 表达式（如果有的话）都是同步运行的。因此，不包含 await 表达式的异步函数是同步运行的。然而，如果函数体内包含 await 表达式，则异步函数就一定会异步完成。

如果你希望在并发执行的两个或多个任务完成后安全地执行其他任务，那么在这些任务开始前，你必须等待对 [`Promise.all()`](https://huangfuchunfeng.github.io/2024/02/28/Promise.all-Promise.allSettled)  或 Promise.allSettled() 的调用。

***别忘记处理异常***