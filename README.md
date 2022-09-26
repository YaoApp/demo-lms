# YAO LMS DEMO

![Image](docs/images/intro.jpg)

[中文介绍](README.zh-CN.md)

Library Management System Demo

Documentation: [https://yaoapps.com/en-US/doc](https://yaoapps.com/en-US/doc/Introduction/Getting%20Started)

## USAGE

### Docker

```bash
docker run -d -p 5099:5099 --restart unless-stopped \
    -e YAO_INIT=reset \
    -e YAO_PROCESS_RESET=flows.menu \
    yaoapp/demo-lms:1.0.0-amd64
```

### Yao

#### Download source code

```bash
git clone https://github.com/YaoApp/demo-lms /app/path/lms

```

#### Set the environment variables

```bash
mkdir /app/path/lms/db
mkdir /app/path/lms/data
mkdir /app/path/lms/logs

cat << EOF
YAO_ENV=development # development | production
YAO_HOST="0.0.0.0"
YAO_PORT="5099"
YAO_SESSION="memory"
YAO_LOG="./logs/application.log"
YAO_LOG_MODE="TEXT"  #  TEXT | JSON
YAO_JWT_SECRET="bLp@bi!oqo-2U+hoTRUG"
YAO_DB_DRIVER=sqlite3 # sqlite3 | mysql
YAO_DB_PRIMARY="./db/yao.db"
EOF > /app/path/lms/.env
```

#### Initialization

```bash
cd /app/path/lms

# Create tables & set menu
yao migrate --reset
yao run flows.menu

```

#### Start the service

```bash
cd /app/path/lms
yao start
```

## ADMIN

Open the browser to visit the URL:

http://127.0.0.1:5099/xiang/login/admin

User Name: `xiang@iqka.com`
Password: `A123456p+`
