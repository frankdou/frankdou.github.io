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

1. cd ~/Library/Application\ Support/Dock
2. 删除.db的文件

### 磁盘验证有问题

- 重启系统command ＋ R 修复
- 上面办法不管用的情况下， 系统偏好 > 安全与隐私 > 关闭｀file Vault｀，再进行修复

### 重启virtualbox

```
sudo /Library/StartupItems/VirtualBox/VirtualBox restart
```

### youtube download

```
youtube-dl --proxy http://127.0.0.1:8087 https://www.youtube.com/watch\?v\=xxxxxxxx
```

### 修改dns设置
sudo vim /etc/resolve.conf

### Mac开启关闭SIP（系统完整性保护）

移动硬盘不显示、PD安装有问题

- 在终端中输入csrutil status，查看是enabled还是disabled
- 关闭/开启
  - 重启MAC，按住cmd+R直到屏幕上出现苹果的标志和进度条，进入Recovery模式
  - 在屏幕最上方的工具栏找到实用工具（左数第3个），打开终端，输入：csrutil disable
  - 关掉终端，重启mac
  - 重启以后可以在终端中查看状态确认

### Bundle ID(com.google.Chrome) 查找方法：
 * 右键『应用.app』-> 显示包内容
 * Contents/Info.plist -> BundleIdentifier