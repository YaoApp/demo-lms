# YAO LMS DEMO

![Image](docs/images/intro.jpg)

[English](README.md)

图书管理系统演示

参考文档: [https://yaoapps.com/doc](https://yaoapps.com/doc/%E4%BB%8B%E7%BB%8D/%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97)

## 下载安装

### 使用 Docker 运行

```bash
docker run -d -p 5099:5099 --restart unless-stopped \
    -e YAO_INIT=reset \
    -e YAO_PROCESS_RESET=flows.menu
    yaoapp/demo-lms:1.0.0-amd64
```

### 在本地运行

#### 下载源码

```bash
git clone https://github.com/YaoApp/demo-lms /app/path/lms

```

#### 设置环境变量

```bash
mkdir /app/path/lms/db
mkdir /app/path/lms/data
mkdir /app/path/lms/logs

cat << EOF
YAO_ENV=development # development | production
YAO_ROOT="/app/path/lms"
YAO_HOST="0.0.0.0"
YAO_PORT="5099"
YAO_SESSION="memory"
YAO_LOG="/app/path/lms/logs/application.log"
YAO_LOG_MODE="TEXT"  #  TEXT | JSON
YAO_JWT_SECRET="bLp@bi!oqo-2U+hoTRUG"
YAO_DB_DRIVER=sqlite3 # sqlite3 | mysql
YAO_DB_PRIMARY="/app/path/widget/db/yao.db"
EOF > /app/path/lms/.env
```

#### 项目初始化

```bash
cd /app/path/lms

# 创建数据表 & 设置菜单
yao migrate --reset
yao run flows.menu


```

#### 启动服务

```bash
cd /app/path/lms
yao start
```

## 管理后台

打开浏览器输入以下网址进入:

http://127.0.0.1:5099/xiang/login/admin

用户名: `xiang@iqka.com`
密码: `A123456p+`
