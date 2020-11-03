---
title: git+ssh
date: 2016-08-10 17:23:11
categories: git
tags:
  - git
---
<blockquote class="blockquote-center">通过ssh方式操作git</blockquote>
<!-- more -->

### **需要在`~/.ssh`文件夹下操作**

1.ssh-keygen -t rsa -f coding -C 'coding.net'

t代表type，f代表文件名，C代表注释

2.配置~/.ssh/config文件
```bash
###########
###GIHUB###
###########
Host github.com
    HostName github.com
    User xxxx@xxx.com
    IdentityFile ~/.ssh/github

###########
###CODING##
###########
Host git.coding.net
    HostName git.coding.net
    User xxx@xxx.com
    IdentityFile ~/.ssh/coding
```

3.添加公共key到相关网站


### 不同路径走不同的配置
[includeIf "gitdir:~/Workspace/"]
    path = ~/.gitconfig-workspace
[includeIf "gitdir:~/Home/"]
    path = ~/.gitconfig-home
