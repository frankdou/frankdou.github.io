---
title: docker-tips
date: 2016-10-02 21:33:35
categories: docker
tags:
    - mac
    - docker
---
<blockquote class="blockquote-center">docker-tips</blockquote>
<!-- more -->

### 基本操作
#### 加载image
```
docker load < ~/Downloads/desktop.tar.gz
```

#### 创建容器,并进入
```
docker run -ti -v ~/workspace/xxx:/root/xxx -p 3000:3000 image的名称 /bin/bash
```

#### 查看容器 list
```
docker ps -l
```

#### 删除容器
```
docker rm bbc64d143406
```

#### 执行脚本，并自动删除容器

##### 添加start.sh（项目文件夹外）
```
docker run -ti -v ~/workspace/xxxx:/root/xxxx -p 3000:3000 image的名称 bash /root/xxxx/run.sh
```

##### 添加run.sh（项目文件夹内）
```
npm start
```

##### 运行
```
sh start.sh
```

停止后，会自动删除容器


### 基于已有容器，创建image
在很多情况下，有新的依赖需要安装，我们可以基于已有的容器，安装完依赖后，创建新的image，供后续开发。

#### 安装新的依赖
进入了容器，装完新的依赖后，退出
```
exit
```
#### 查看运行中的容器
```
docker ps -l
```
#### 创建新的image
```
docker commit -m 'xxxxxx' a2799a24605c 'latest-xx'   （a2799a24605c指容器id）
```
#### 查看images
通过
```
docker images 
```
会发现`latest-xx`
#### 使用新的images
修改`start.sh`, 或直接执行
```
docker run -ti --rm -v ~/workspace/xxxx:/root/xxxx -p 3000:3000 latest-xx bash /root/xxxx/run.sh```
```
