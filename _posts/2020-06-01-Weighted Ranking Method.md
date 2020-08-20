---
layout: post
title: 'javascript 权重排序法'
date: 2020-06-01 00:00:00
categories: javascript
author: 皇甫春风
tags: js javascript
---

# 数字权重排序算法

## 需求

- 给一串数字，按照数字的权重排序 
- 输入 "56 65 74 100 99 68 86 180 90"，输出 "100 180 90 56 65 74 68 86 99"
- 规则  100 权重 1，56 权重 11，99权重 18。排序： 100 56 99

## 思路分析

- 首先需要一个计算权重的方法
   1. 将数字（字符串）拆分一个个数字（字符）。可以用 `Array.from` 将字符串转为数组
   2. 计算 ***1*** 数组里所有值的和。可以用 `Array.reduce` 

   具体代码如下

    ``` javascript
    /**
     * 计算权重
     * @param {String, Number} arg 待计算值
     * return  权重结果
     */
    function wd(arg){
        return Array.from(arg+'').reduce((acc,cur)=>acc + +cur,0)
    }

    ```

- 其次就是排序

  1. 先将字符串格式化为数组。可以用 `String.split`
  2. 然后排序计算。可以用 `Array.sort`
  3. 将排序的后数组再转换成字符串

    具体代码如下
    ``` javascript
    /**
     * 权重排序
    * @param {String} arg 
    */
    function wrm(arg){
         return arg.split(/\s+/g).sort((a,b)=>wd(a)-wd(b)).jion(' ')
    }
    ```



    ## 实现

    ``` javascript

    function wd(arg){
        return Array.from(arg+'').reduce((acc,cur)=>acc + +cur,0)
    }

    function wrm(arg){
       return arg.split(/\s+/g).sort((a,b)=>wd(a)-wd(b)).join(' ')
    }

    console.log(wrm('56 65 74 100 99 68 86 180 90'));

    ```