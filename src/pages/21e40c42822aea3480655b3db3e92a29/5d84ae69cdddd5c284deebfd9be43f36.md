---
title: tips
date: 2022-04-17T15:32:40.210Z
size: 1322
---
#### 获得tomcat路径
运行
```
catalina --help
```
会得到，如下提示
```
Using CATALINA_BASE:   /usr/local/Cellar/tomcat/8.5.4/libexec
Using CATALINA_HOME:   /usr/local/Cellar/tomcat/8.5.4/libexec
Using CATALINA_TMPDIR: /usr/local/Cellar/tomcat/8.5.4/libexec/temp
....
```

#### 如何运行
##### 绑定host
```
127.0.0.1 dev.xxxx.com http://dev.xxxx.com
```
##### 产生war包
```
mvn clean -U package
```
##### 拷贝war包到tomcat
```
cp xxxx.war /usr/local/Cellar/tomcat/8.5.4/libexec/webapps
```
##### run tomcat
```
catalina run
```

#### 停掉java进程
```
jps

kill -9 xxxx
```

```
killall java
```

```
ps aux | grep java 
kill -9 xxx
```


#### 增加tomcat内存
文件`/usr/local/Cellar/tomcat/8.5.4/bin/catalina`
修改下面

```
JAVA_OPTS="$JAVA_OPTS $JSSE_OPTS" 
```
至
```
JAVA_OPTS="$JAVA_OPTS $JSSE_OPTS -server -Xms2048m -Xmx2048m -XX:PermSize=512M -XX:MaxPermSize=512m" 
```

#### 增加maven内存
文件`~/.zshrc`,添加如下内容
```
# maven memory
export MAVEN_OPTS="-Xms2048m -Xmx2048m"
```

#### eclipse 手动编译
1. config > covert to maven project
2. maven > update projects
3. refresh
4. clean
5. update projects
6. refresh
7. run as > run on server

#### 半手动编译
1. terminal
```
mvn clean install -Dmaven.test.skip=true
```
2. Eclipse
3. 手动servers > publish
