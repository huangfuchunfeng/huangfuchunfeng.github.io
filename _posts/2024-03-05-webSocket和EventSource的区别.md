---
layout: post
title: 'webSocket和EventSource的区别'
date: 2024-03-05
categories: web js
author: 皇甫春风
tags: html web js
---

# webSocket 和 EventSource 的区别

## EventSource

EventSource 接口是 web 内容与服务器发送事件通信的接口

一个 EventSource 实例会对 HTTP 服务器开启一个持久化的连接，以 text/event-stream 格式发送事件，此连接会一直保持开启直到通过调用 EventSource.close() 关闭。

一旦连接开启，来自服务端传入的消息会以事件的形式分发至你代码中。如果接收消息中有一个 event 字段，触发的事件与 event 字段的值相同。如果不存在 event 字段，则将触发通用的 message 事件。

> 与 WebSocket 不同的是，服务器发送事件是单向的。数据消息只能从服务端到发送到客户端（如用户的浏览器）。这使其成为不需要从客户端往服务器发送消息的情况下的最佳选择。例如，对于处理如社交媒体状态更新、消息来源（news feed）或将数据传递到客户端存储机制（如 IndexedDB 或 web 存储）之类的，EventSource 无疑是一个有效方案。

### 示例

在这个基本的例子中，创建了一个 EventSource 来从服务器接收未命名的事件；一个名为 sse.php 的页面负责生成这些事件。

```javascript
const evtSource = new EventSource('sse.php')
const eventList = document.querySelector('ul')

evtSource.onmessage = (e) => {
  const newElement = document.createElement('li')

  newElement.textContent = `message: ${e.data}`
  eventList.appendChild(newElement)
}
```

要监听具名事件，你需要为每种类型的事件添加一个监听器。

```javascript
const sse = new EventSource('/api/v1/sse')

/*
 * 这将仅监听类似下面的事件
 *
 * event: notice
 * data: useful data
 * id: someid
 */
sse.addEventListener('notice', (e) => {
  console.log(e.data)
})

/*
 * 同理，以下代码将监听具有字段 `event: update` 的事件
 */
sse.addEventListener('update', (e) => {
  console.log(e.data)
})

/*
 * “message”事件是一个特例，因为它可以捕获没有 event 字段的事件，
 * 以及具有特定类型 `event：message` 的事件。
 * 它不会触发任何其他类型的事件。
 */
sse.addEventListener('message', (e) => {
  console.log(e.data)
})
```

## WebSocket

WebSocket 是一种先进的技术。它可以在用户的浏览器和服务器之间打开交互式(双向)通信会话。使用此 API，你可以向服务器发送消息并接收事件驱动的响应，而无需通过轮询服务器的方式以获得响应。

```javascript
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080')

// Connection opened
socket.addEventListener('open', function (event) {
  socket.send('Hello Server!')
})

// Listen for messages
socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data)
})
```

- WebSocket 是一种双向通信协议，允许客户端和服务器之间进行实时双向通信
- EventSource 是一种服务器推送技术，只允许服务器向客户端发送消息
