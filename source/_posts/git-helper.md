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
#### 使用vscode做为mergetool
1、通过vscode，进行PATH设置
2、~/.gitconfig， 添加mergetool的配置
```
[merge]
tool = vscode
[mergetool "vscode"]
cmd = code --wait $MERGED
[diff]
tool = vscode
[difftool "vscode"]
cmd = code --wait --diff $LOCAL $REMOTE
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

#### 撤回某个commit提交
```
git revert --strategy resolve <commit>
```

#### 修改本地commit信息
```
git commit --amend
```

#### 删除远程仓库维护的分支
```
git push --delete origin xxx
```

#### 推送单个tag
```
git push origin v1.2
```

#### 删除所有已经不在远程仓库维护的分支
```
git fetch -p && for branch in `git branch -vv | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done
```

#### 删除本地除了master以外的分支
```
git branch | grep -v "master" | xargs git branch -D 
```

#### 跨仓库进行cherry-pick
```
git remote add xxx https://example.link/repository.git
git fetch xxx

git cherry-pick xxxxx
```

#### 统计某个分支commit之间的提交记录
```
git log 分支名 commitId..commitId --oneline --no-merges > commits.md
```

#### 删除本地所有tags
```
git tag | xargs -n1 git tag -d
```

#### 获取远程所有tags
```
git fetch --tags
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
