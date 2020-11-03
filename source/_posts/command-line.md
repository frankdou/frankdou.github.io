---
title: 命令行笔记
date: 2016-08-11 01:31:32
categories: command-line
tags:
    - command-line
---
<blockquote class="blockquote-center">命令行笔记</blockquote>
<!-- more -->

### kill process
```bash
kill -9 xxx
```
### 输出最后，一般用来看log
```bash
tail xxx.xx
```
### 输出树形结构
```bash
tree -L x (x为层级)
```

### 启动服务
```bash
service xxxx start (xxxx一般指nginx，mongodb等)
```

### 递归给权限
```bash
sudo chown -R xxx workspace (xxx指用户名，workspace指文件夹)
```

### 递归创建目录
```bash
mkdir -p tomcat/xxx/xxx
```

### 写入md5
```bash
md5sum node-v6.9.1-linux-x64.tar.gz > md5sum.txt
```

### ssh免密码登录
添加公匙到`.ssh/authorized_keys`，或`/home/admin/.ssh/authorized_keys`(管理权限)

### 使用端口进行请求
```bash
nc 100.100.100.2 8388
```

### 创建文件（强制覆盖）
```bash
echo > xxxxx.js
```

### 传入的参数export为环境变量
需要通过以下方式来执行脚本
```bash
. xx.sh arg1 arg2
source xx.sh arg1 arg2
```

### 批量替换文件后缀
```bash
for file in **/**/*.scss; do mv "$file" "${file%.*}".less; done
```
https://gist.github.com/larshaendler/723d2ec447c3c694b71dc6e3bc3aadc9
https://stackoverflow.com/questions/965053/extract-filename-and-extension-in-bash