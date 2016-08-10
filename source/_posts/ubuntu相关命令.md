---
title: ubuntu相关命令
date: 2016-08-10 23:28:54
categories: ubuntu
tags:
    - ubuntu
---
<blockquote class="blockquote-center">ubuntu相关命令</blockquote>
<!-- more -->

### 查看已安装包

```
dpkg --get-selections | grep -v deinstall
```

### 全部群组列表

```
getent group | cut -d: -f1
```

### 查看群组成员

```
sudo apt-get install members
members xx
```

### 查看系统版本

```
cat /etc/issue
```

### 查看系统内核

```
uname -r
```
