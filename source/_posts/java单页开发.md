---
title: java-with-spa
date: 2016-10-02 22:31:38
categories: mac
tags:
    - mac
    - java
---
<blockquote class="blockquote-center">java单页开发</blockquote>
<!-- more -->
通常，有两种方式：

## 偏前端方式
- 前后端纯粹的分开，nginx给前端静态资源起服务，api反向代理，避免跨域问题。登录状态，前端根据http的异常来判断。页面所有的跳转都由前端来进行控制。
- 后端专注api层面，通过http状态码，抛出错误异常给前端。

nginx配置大致如下:
```bash
server {

    listen  80;

    server_name www.xxx.com;

    root /xxxxxx/dist/;

    location / {
        try_files $uri $uri.html;
    }
    
    location /api {
        proxy_pass http://xx.xxx.xx.xx:8080;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_intercept_errors on;
    }

    location ~.*(js|css|png|gif|jpg|mp3|ogg|ttf|woff|woff2|html)$ {
        expires 30d;
    }
}
```
## 偏后端方式
- 前端服务由tomcat起, 用户初始的登录状态由后端判断并跳转
- 后期因为都是ajax，需要前端重定向。

这种方式下，前端"编译"、刷新频繁，但都为静态文件，不需要java的重新编译，为方便开发，需做以下设置：

### 设置要被检测变化的前端源码地址
`/usr/local/Cellar/tomcat/8.5.4/libexec/conf/Catalina/localhost/host-manager.xml` 

```xml
<?xml version="1.0" encoding="UTF-8"?>

<Context reloadable="true" antiResourceLocking="false" privileged="true" useHttpOnly="true">
  <WatchedResource>前端dist文件夹地址</WatchedResource>
</Context>
```
### 添加如下代码，设置为开发模式，并设定检查周期
`/usr/local/Cellar/tomcat/8.5.4/libexec/conf/web.xml`

```xml
<init-param>
    <param-name>development</param-name>
    <param-value>true</param-value>
</init-param>
<init-param>
    <param-name>checkInterval</param-name>
    <param-value>1</param-value>
</init-param>
```

### 添加如下代码，允许软连接
`/usr/local/Cellar/tomcat/8.5.4/libexec/conf/context.xml` 

```xml
<Resources allowLinking="true" />
```

### 删除tomcat > war包里的静态资源，并设置软链到自己的前端源码地址

```bash
rm -rf war包静态资源地址 && ln -s 前端源码地址 war包静态资源地址
```
