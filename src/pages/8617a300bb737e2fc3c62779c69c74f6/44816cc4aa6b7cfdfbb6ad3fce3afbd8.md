---
title: tips
size: 2699
---
打开多个窗口
```js
const { app, BrowserWindow } = require("electron/main")
const path = require("path")
const mainWindow = new BrowserWindow({
	autoHideMenuBar: true // 关闭左侧顶部菜单栏
})
const secondaryWindow = new BrowserWindow()

mainWindow.loadFile(path.join(__dirname, 'index.html'))
secondaryWindow.loadURL("http://xxxx")
```

开启进程
```js
...
electron.whenReady().then(() => {
    const serverPath = path.join(__dirname, "index.js");
    console.log('Server script path:', serverPath);
    expressProcess = spawn(nodePath, [serverPath]);
})
...
```

正确读取创建文件
```js
const fs = require('fs')
const path = require('path')

const userDataPath = app.getPath('userData')
const documentsPath = app.getPath('documents')
const downloadsPath = app.getPath('downloads')

const content = 'Hello World!';
const filePath = path.join(userDataPath, 'test.txt');

fs.writeFile(filePath, content, (err) => {
  if (err) console.error('Error writing file:', err);
  else console.log('File created successfully');
})
```

electron环境判断
```
process.versions['electron']
或
window?.process?.type
```


通过默认浏览器打开页面
```js

//main.js
const { BrowserWindow, shell } = require('electron');

// ... (创建 BrowserWindow 的代码) ...

mainWindow.webContents.setWindowOpenHandler((details) => {
  // 检查 URL 是否是外部链接 (以 http 或 https 开头)
  if (details.url.startsWith('http')) {
    // 使用系统的默认浏览器打开 URL
    shell.openExternal(details.url);
  }
  // 阻止 Electron 窗口打开这个链接
  return { action: 'deny' };
})

// index.html
<a href="https://www.google.com" target="_blank">在浏览器中打开 Google</a>
```

日志
```js
const log = require('electron-log')
const path = require("path")
const { app } = require("electron/main")

// 存放位置
log.transports.file.resolvePathFn = () => path.join(app.getPath('userData'), 'logs/main.log')

// 日志分割，默认为1mb，超过后现有的日志文件变为main.old.log
log.transports.file.maxSize = 5 * 1024 * 1024; // 5 MB

// 自定义分割
log.transports.file.archiveLogFn = xxx

// Use it
log.info('Hello, log')
log.warn('Some problem appears')
log.error('Very bad news')
```

windows平台，调用语音播放接口window.speechSynthesis，不能按照设定的语言播放，但网页播放正常。原因在于，相关的语言包缺失，需要手动安装。

window.speechSynthesis，报错not-allowed，这个错误表示语音合成操作被浏览器或设备阻止了，
这通常是出于安全和用户体验的考虑，没有用户交互就尝试播放语音。

ref
- https://github.com/electron/electron/issues/2288
