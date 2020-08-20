---
layout: post
title: 'js数据缓存详解'
date: 2019-07-25 14:43:00
categories: JavaScript
author: 皇甫春风
tags: JavaScript localStorage cookie sessionStorage session
---

# cookie localStorage session sessionStorage

|      特性      |                            Cookie                            | localStorage                                                 |                       sessionStorage                        |
| :------------: | :----------------------------------------------------------: | :----------------------------------------------------------- | :---------------------------------------------------------: |
|  数据的生命期  | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存                                     |      仅在当前会话下有效 ；   关闭页面或浏览器后被清除       |
|  存放数据大小  |                            4K左右                            | 一般为5MB                                                    |                          一般为5MB                          |
| 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信           |     仅在客户端（即浏览器）中保存，不参与和服务器的通信      |
|     易用性     |          需要程序员自己封装，源生的Cookie接口不友好          | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持； | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持 |

## cookie

待续

## session

待续

## localStorage

localStorage 接替了 Cookie 管理购物车的工作，可以监听**Storage**变化实时同步购物车

相关方法：

localStorage.setItem('key','value')  设置key/value本地存储

localStorage.getItem('key') ：获取指定key本地存储 ，不存在返回 null

localStorage.removeItem('key')：删除指定key本地存储 

localStorage.clear()：清除所有的key/value

## sessionStorage

仅在当前会话下有效，标签之间不共享（超链接打开新标签除外），关闭页面或浏览器后被清除,
