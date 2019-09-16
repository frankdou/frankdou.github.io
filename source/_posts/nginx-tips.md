---
title: nginx-tips
date: 2019-05-17 15:06:06
categories:
tags:
---
<blockquote class="blockquote-center"></blockquote>
<!-- more -->

### cookie代理（将cookie写入地址，从from变成to）
```bash
proxy_pass
proxy_cookie_domain from to
``` 

### websocket代理
```bash
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection $connection_upgrade;
``` 

