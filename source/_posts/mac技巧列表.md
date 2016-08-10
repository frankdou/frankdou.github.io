---
title: mac技巧列表
date: 2016-08-10 23:10:28
categories: mac
tags:
    - mac
---
<blockquote class="blockquote-center">mac技巧列表</blockquote>
<!-- more -->

### 本地有的app，appstore为未安装的状态

> 1.cd ~/Library/Application\ Support/Dock
  2.删除.db的文件

### 磁盘验证有问题

> * 重启系统command ＋ R 修复
* 上面办法不管用的情况下， 系统偏好 > 安全与隐私 > 关闭｀file Vault｀，再进行修复

### 重启virtualbox

```
sudo /Library/StartupItems/VirtualBox/VirtualBox restart
```

### youtube download

```
youtube-dl --proxy http://127.0.0.1:8087 https://www.youtube.com/watch\?v\=xxxxxxxx
```

### SVN版本太低，且homebrew安装有错误提示，不能够link

```
sudo chown -R `whoami` /usr/local
```

### 修改dns设置
sudo vim /etc/resolve.conf
