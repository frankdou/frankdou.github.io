---
title: 新mac的配置记录
date: 2016-08-10 23:52:19
categories: mac
tags:
    - mac
---
<blockquote class="blockquote-center">新mac的配置记录</blockquote>
<!-- more -->
### 软件列表
* Mas (AppStore命令行安装工具)
* Iterm2 
    *git log可通过滚轮使用 https://stackoverflow.com/questions/14437979/iterm2-scroll-less-output-with-mouse
* Clipy
* CheatSheet（快捷键提示工具）
* cheat (命令行helper)
* mpv
* The Unarchiver
* Xcode
* Chrome
* switchHosts
* Docker
* EasyFind
* Irvue(壁纸)
* typora(markdown editor)
* 滴答清单
* 幕布

### git diff工具设置
```
xcode-select: error: tool 'opendiff' requires Xcode
	1.	Install Xcode
	2.	Run sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

### homebrew
```bash
brew install autojump git git-extras tree youtube-dl
brew tap homebrew/services  > brew命令行启动关闭服务（比如数据库）
```

### [cask预览插件](https://github.com/sindresorhus/quick-look-plugins)

### [nvm](https://github.com/creationix/nvm)

### node以及相关模块
```bash
npm i nrm -g & nrm use taobao
npm i serve -g
```
