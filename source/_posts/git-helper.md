---
title: git-helper
date: 2016-08-10 18:01:03
categories: git
---
<blockquote class="blockquote-center">git设置，操作命令</blockquote>

*   [设置](#settings)
*   [操作命令](#operation)

<h2 id="settings">设置</h2>
1.使用系统存储的密码
> git config --global credential.helper osxkeychain

2.使用默认diff工具
> git config --global merge.tool opendiff

3.查看已有配置信息
> git config --list

4.全局配置信息文件
> ~/.gitconfig

5.开读写权限
> chmod 600 ~/.ssh/config

<h2 id="operation">操作命令</h2>
1.撤销commit
> git reset --hard <sha1-commit-id>

2.恢复某个commit
> git cherry-pick <sha1-commit-id>

3.删除所有本地修改
> git reset --hard

4.删除所有本地添加的文件，文件夹
> git clean -f

5.删除所线上有tag
> git tag -l | xargs git push origin --delete

6.删除本地所有tag
> git tag -l | xargs git tag -d

7.切换远程branch
> git checkout --track origin/dev.sp1
