---
title: tips
size: 2132
---
使用`electron-builder`打包
```json
package.json
{
	...
	"main": "src/electron.js",
	"scripts": {
		"start": "electron .",
		"build": "electron-builder",
		"build:win": "electron-builder --win --x64",
	},
	"build": {
        "appId": "com.electron.demo",
        // 应用名
        "productName": "ElectronApp",
        // 应用文件名
        "artifactName": "${productName}-${version}.${ext}",
        // 应用图标
        "icon": "./build/icon.png",
        "files": [
            "src/**/*",
            "package.json",
            ...
        ],
        "directories": {
            "output": "dist"
        },
        "mac": {
            "target": "dmg"
        },
        "win": {
            "target": "nsis"
        }
    },
	...
}
```

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

windows平台，调用语音播放接口window.speechSynthesis，不能按照设定的语言播放，但网页播放正常。原因在于，相关的语言包缺失，需要手动安装

ref
- https://github.com/electron/electron/issues/2288
