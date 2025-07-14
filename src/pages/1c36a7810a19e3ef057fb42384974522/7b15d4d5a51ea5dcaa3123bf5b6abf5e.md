---
title: 加速下载
size: 571
---
###### 只clone部分文件夹
sparse-checkout 或者 Cone Mode (recommended for Git 2.25+)
```shell
mkdir nextra-docs
cd nextra-docs
git init
git remote add origin https://github.com/shuding/nextra.git
git sparse-checkout init --cone
git sparse-checkout set docs
git pull origin main # or master
```
###### 加速下载，只下载最新的版本、单个分支
```sh
git clone --branch main --single-branch --depth 1 git@github.com:remix-run/react-router.git
```

refs
- https://unix.stackexchange.com/questions/233327/is-it-possible-to-clone-only-part-of-a-git-project
