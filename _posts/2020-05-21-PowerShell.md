---
layout: post
title: 'windows 常用命令'
date: 2020-05-21 00:00:00
categories: windows
author: 皇甫春风
tags: shell
---



# 关闭某个端口进程

经常有端口被占用，找不到进程无法关闭的情况，这个时候重启电脑太麻烦，直接用命令就很简单了

如下查找端口：`3000`，并关闭其进程

1.查找端口`PID`

2.根据 `PID`,关闭进程

```powershell
> netstat -ano|findstr "3000"
 TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       9576
 TCP    [::]:3000              [::]:0                 LISTENING       9576
> taskkill/pid 9576 /F
  成功: 已终止 PID 为 9576 的进程。
```

