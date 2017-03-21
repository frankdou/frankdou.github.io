---
title: git-helper
date: 2016-08-10 18:01:03
categories: git
tags:
  - git
---
<blockquote class="blockquote-center">git设置，操作命令</blockquote>
<!-- more -->

### 设置
#### 使用系统存储的密码
```
git config --global credential.helper osxkeychain
```
#### 使用默认diff工具
```
git config --global merge.tool opendiff
```
#### 查看已有配置信息
```
git config --list
```
#### 全局配置信息文件
```
~/.gitconfig
```
#### 开读写权限
```
chmod 600 ~/.ssh/config
```
### 操作命令
#### 撤销commit
```
git reset --hard <sha1-commit-id>
```
#### 恢复某个commit
```
git cherry-pick <sha1-commit-id>
```
#### 删除所有本地修改
```
git reset --hard
```
#### 删除所有本地添加的文件，文件夹
```
git clean -f
```
#### 删除所线上有tag
```
git tag -l | xargs git push origin --delete
```
#### 删除本地所有tag
```
git tag -l | xargs git tag -d
```
#### 切换远程branch
```
git checkout --track origin/dev.sp1
```

#### 查看所有远程branch
```
git branch -r
```

#### 取消本地最新的commit
```
git reset HEAD~
```

### git-configs
```
[push]
    default = current
[alias]
    st = status
    ci = commit
    co = checkout
    br = branch
[color "branch"]
    current = yellow bold
    local = green bold
    remote = cyan bold
[color "diff"]
    meta = yellow bold
    frag = magenta bold
    old = red bold
    new = green bold
    whitespace = red reverse
[color "status"]
    added = green bold
    changed = white bold
    untracked = red bold
[branch]
    autosetuprebase = always

```

### [git-tips](https://github.com/521xueweihan/git-tips)
