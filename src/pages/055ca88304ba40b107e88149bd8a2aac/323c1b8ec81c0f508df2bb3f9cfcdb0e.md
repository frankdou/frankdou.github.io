---
title: 提交规范配置
size: 426
---
https://github.com/conventional-changelog/commitlint
- @commitlint/cli Commitlint 命令行工具
- @commitlint/config-conventional 基于 Angular 的约定规范
```
// 依赖安装
npm i @commitlint/config-conventional @commitlint/cli -D

// 添加钩子
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

https://github.com/Zhengqbbb/cz-git
更轻量


https://github.com/typicode/husky
git hook
