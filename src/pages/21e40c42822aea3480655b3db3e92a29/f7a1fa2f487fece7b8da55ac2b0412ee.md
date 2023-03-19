---
title: mac搭建java开发环境
date: 2022-05-12T12:27:37.000Z
size: 729
---
#### 基本步骤
##### 安装java（默认最新版）

```shell
brew cask install java
```

##### 安装旧版本

```shell
brew tap caskroom/versions
brew cask install java7
```

##### 安装java版本管理软件

```shell
brew install jenv
```

##### jenv需要

```shell
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc
```

##### config

```shell
jenv add /System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
  oracle64-1.6.0.39 added
jenv add /Library/Java/JavaVirtualMachines/jdk17011.jdk/Contents/Home
  oracle64-1.7.0.11 added
```

##### 显示java版本

```shell
jenv versions
  system
  oracle64-1.6.0.39
* oracle64-1.7.0.11
```

##### 安装maven，tomcat
