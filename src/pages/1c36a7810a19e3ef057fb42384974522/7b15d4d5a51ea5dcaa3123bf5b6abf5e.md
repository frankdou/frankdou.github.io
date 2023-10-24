---
title: 加速下载
size: 905
---
##### 只clone部分文件夹
```shell
git clone --depth=1 --filter=blob:none --no-checkout https://github.com/grpc/grpc.git

cd grpc

git sparse-checkout init --cone

echo "examples/node/*" >> .git/info/sparse-checkout

git checkout
```
-   `--depth=1`: 只克隆最新的一次提交和相关的文件，不克隆历史记录
-   `--no-checkout`: 在克隆时不执行 checkout 操作。
-   `git sparse-checkout init --cone`：初始化 sparse checkout 模式（稀疏检出）。
-   `echo "examples/node/*" >> .git/info/sparse-checkout`：将需要下载的目录添加到配置文件里面。
-   `git checkout`: 执行 checkout 命令使我们指定的文件夹下载到本地。
##### 加速下载，只下载最新的版本
```
git clone --depth 1 https://github.com/facebook/react
```

refs
- https://unix.stackexchange.com/questions/233327/is-it-possible-to-clone-only-part-of-a-git-project
