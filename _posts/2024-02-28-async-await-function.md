---
layout: post
title: 'async await function 异步函数'
date: 2024-02-28 00:00:00
categories: Nginx
author: 皇甫春风
tags: js Nginx
---
# windows nginx 简单配置

1. 下载 
   - windows 版本的 nginx [下载地址](http://nginx.org/en/download.html)
   - [nginx-1.19.0.zip](http://nginx.org/download/nginx-1.19.0.zip)

2. 安装
   - 解压 `nginx-1.19.0.zip` 
   - 拷贝至自己指定的目录（D/nginx-1.19.0）

3. 启动nginx
   - 双击 目录下 `nginx.exe ` cmd会闪一下
   - 命令启动也行 ` start nginx`
   - 检查是否启动成功 `http://localhost:80` 出现 Welcome to nginx! 页面就代表成功了
   
4.  单页面应用路由配置

   ```markdown
     location / {
   		    root   html;
   		    index /index.html;
               try_files $uri $uri/ /index.html;
           }
   ```

5. 开启gzip

   ```
     location / {
   		    root   html;
   		    index /index.html;
               try_files $uri $uri/ /index.html;
   			gzip_static on;
           }
   ```

   



## nginx 常用命令

- 启动 ` start nginx`
- 关闭  `nginx -s stop`
- 重启  `nginx -s reopen`
- 重新载入配置文件  `nginx -s reload` 