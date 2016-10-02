---
title: mac搭建java开发环境
date: 2016-08-10 22:57:32
categories: mac
tags:
    - mac
    - java
---
<blockquote class="blockquote-center">mac搭建java开发环境</blockquote>
<!-- more -->

### 基本步骤
1.安装java（默认最新版）

```
brew cask install java
```

2.安装旧版本

```
brew tap caskroom/versions
brew cask install java7
```

3.安装java版本管理软件

```
brew install jenv
```

4.jenv需要

```
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc
```

5.config

```
jenv add /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
  oracle64-1.6.0.39 added
jenv add /Library/Java/JavaVirtualMachines/jdk17011.jdk/Contents/Home
  oracle64-1.7.0.11 added
```

6.显示java版本

```
jenv versions
  system
  oracle64-1.6.0.39
* oracle64-1.7.0.11
```

7.安装maven，tomcat
8.Eclipse market安装svn
