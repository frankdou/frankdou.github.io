---
title: mac-java-tips
date: 2016-10-02 19:58:35
categories: mac
tags:
    - mac
    - java
---
<blockquote class="blockquote-center">mac-java-tips</blockquote>
<!-- more -->


### 停掉java进程
1.
```
jps

kill -9 xxxx
```

2.
```
killall java
```

3.
```
ps aux | grep java 
kill -9 xxx
```


### 增加tomcat内存
文件`/usr/local/Cellar/tomcat/8.5.4/bin/catalina`
修改下面
```
JAVA_OPTS="$JAVA_OPTS $JSSE_OPTS" 
```
至
```
JAVA_OPTS="$JAVA_OPTS $JSSE_OPTS -server -Xms2048m -Xmx2048m -XX:PermSize=512M -XX:MaxPermSize=512m" 
```

### 增加maven内存
文件`~/.zshrc`,添加如下内容
```
# maven memory
export MAVEN_OPTS="-Xms2048m -Xmx2048m"
```

### eclipse 手动编译
1.config > covert to maven project
2.maven > update projects
3.refresh
4.clean
5.update projects
6.refresh
7.run as > run on server

### 半手动编译
1. Terminal
```
mvn clean install -Dmaven.test.skip=true
```

2. Eclipse
手动servers > publish
