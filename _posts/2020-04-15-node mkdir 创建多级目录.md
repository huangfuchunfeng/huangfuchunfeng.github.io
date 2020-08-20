---
layout: post
title: 'node.js mkdir 创建多级目录'
date: 2020-04-15 18:02:00
categories: JavaScript
author: 皇甫春风
tags: JavaScript
---

# node.js mkdir 创建多级目录

```javascript
// 异步
function mkdirs(dirname, callback) {
	fs.exists(dirname, function (exists) {
		if (exists) {
			callback()
		} else {
			mkdirs(path.dirname(dirname), function () {
				fs.mkdir(dirname, callback)
			})
		}
	})
}

// 同步
function mkdirsSync(dirname) {
	if (fs.existsSync(dirname)) {
		return true
	} else {
		if (mkdirsSync(path.dirname(dirname))) {
			fs.mkdirSync(dirname)
			return true
		}
	}
}
```
