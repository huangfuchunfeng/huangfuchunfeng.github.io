---
layout: post
title: 'Typescript 面试题'
date: 2024-02-28
categories: TypeScript
author: 皇甫春风
tags: js ts
---

 # Typescript 面试题
## 1. 什么是 TypeScript，它与 JavaScript 有何不同？提供 TypeScript 代码示例。


 TypeScript 是 JavaScript 的超集，为该语言添加了静态类型。它允许开发人员定义变量、函数参数和返回值的数据类型，这有助于在编译时而不是运行时捕获错误。

## 2. 解释 TypeScript 中静态类型的概念及其好处

TypeScript 中的静态类型可以在开发过程中指定变量、函数参数和返回值的数据类型。这有助于及早捕获与类型相关的错误，从而提高代码质量和可维护性。

好处是拥有更好的代码文档、增强的工具支持以及提高的开发人员生产力。

## 3.  TypeScript 中的接口是什么？举个例子。

  TypeScript的核心原则之一是对值所具有的结构进行类型检查 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

  TypeScript 中的接口定义了对象结构的契约，指定其属性和方法的名称和类型。它们促进强大的类型检查并实现更好的代码组织
  
  ### 可选属性
  ``` ts

    interface SquareConfig {
      color?: string;
      width?: number;
    }
  ```


  ### 只读属性
   ``` ts
    interface Point {
      readonly x: number;
      readonly y: number;
    }
   ```

  ### 函数类型
  ```ts
    interface SearchFunc {
      (source: string, subString: string): boolean;
    }
  ```

  ###  可索引类型
  ``` ts
    interface StringArray {
      [index: number]: string;
    }
    
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    
    let myStr: string = myArray[0];
  ```

  ### class类型
  ```ts
    interface ClockInterface {
      currentTime: Date;
      setTime(d: Date): void;
    }
    
    class Clock implements ClockInterface {
      currentTime: Date = new Date();
      setTime(d: Date) {
        this.currentTime = d;
      }
      constructor(h: number, m: number) {}
    }
  ```


  ### 扩展接口
  ```ts
    interface Shape {
      name: string;
    }
   
    interface Color {
      color: string;
    }
     // 单继承
    interface Square extends Shape {
      sideLength: number;
    }
    //多继承
    interface Circle extends Color, Shape {
      radius: number;
    }
    let square = {} as Square;
    square.color = "blue";
    square.sideLength = 10;
  ```
  ### 混合类型
   一个对象可以同时做为函数和对象使用，并带有额外的属性
   ```ts
      interface Counter {
          (start: number): string;
          interval: number;
          reset(): void;
      }

      function getCounter(): Counter {
          let counter = <Counter>function (start: number) { };
          counter.interval = 123;
          counter.reset = function () { };
          return counter;
      }

      let c = getCounter();
      c(10);
      c.reset();
      c.interval = 5.0;
   ```
   ### 接口继承类
   当接口继承了一个类类型时，它会继承类的成员但不包括其实现

   ## TypeScript 中 interface 和 type 的差别是什么

   ### 相同点

  - 都可以描述一个对象或者函数
   ```ts
      interface User {
          name: string age: number
      }
      interface SetUser { (name: string, age: number) : void;
      }

      type User = {
          name: string age: number
      };
      type SetUser = (name: string, age: number) = >void;
   ```
   - 都允许拓展（extends）interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同。

   ```ts
   // 1、interface extends interface
    interface Name { 
      name: string; 
    }
    interface User extends Name { 
      age: number; 
    }

    // 2、type extends type
    type Name = { 
      name: string; 
    }
    type User = Name & { age: number  };

    // 3、interface extends type
    type Name = { 
      name: string; 
    }
    interface User extends Name { 
      age: number; 
    }

    // 4、type extends interface
    interface Name { 
      name: string; 
    }
    type User = Name & { 
      age: number; 
    }
  ```

  ### 不同点

  - type 可以而 interface 不行

  - type 可以声明基本类型别名，联合类型，元组等类型

  ```ts
    // 基本类型别名
    type Name = string

    // 联合类型
    interface Dog {
        wong();
    }
    interface Cat {
        miao();
    }

    type Pet = Dog | Cat

    // 具体定义数组每个位置的类型
    type PetList = [Dog, Pet]
```

  - type 语句中还可以使用 typeof 获取实例的 类型进行赋值

  ```ts
  // 当你想获取一个变量的类型时，使用 typeof
    let div = document.createElement('div');
    type B = typeof div
    
    type StringOrNumber = string | number; 
    type Text = string | { text: string }; 
    type NameLookup = Dictionary<string, Person>; 
    type Callback<T> = (data: T) => void; 
    type Pair<T> = [T, T]; 
    type Coordinates = Pair<number>; 
    type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
  ```
  - interface 能够声明合并
  
  ```ts
      interface User {
        name: string
        age: number
      }

      interface User {
        sex: string
      }
      /*
      User 接口为 {
        name: string
        age: number
        sex: string 
      }
      */
  ```