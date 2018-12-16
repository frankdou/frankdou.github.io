---
title: mac网络-tips.md
date: 2018-12-16 17:55:13
categories: mac
tags:
    - mac
---
<blockquote class="blockquote-center"></blockquote>
<!-- more -->

#### 查询当前wifi的mac地址

```sh
ifconfig en0 |grep ether
```

#### 设置当前wifi的mac地址

```sh
sudo ifconfig en0 ether aa:bb:cc:dd:ee:ff
```

#### 查询设备所有的的mac地址

```sh
networksetup -listallhardwareports
```

#### 查看当前wifi所有链接

```sh
/System/Library/PrivateFrameworks/Apple80211.framework/Resources/airport -s
```


#### 暂停网络连接

```sh
sudo /System/Library/PrivateFrameworks/Apple80211.framework/Resources/airport -z
```

#### 重新启动网络连接

```sh
networksetup -detectnewhardware
```

