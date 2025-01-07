#!/bin/bash

# 部署参数
REPO_URL="git@github.com:Wshaoqing/crypto-react.git"
PROJECT_DIR="/var/wsq/crypto-react"
NGINX_DIR="/usr/share/nginx/html"
BRANCH="main"                                       # 拉取的分支

# 输出分隔符
echo "==========================================="
echo "Starting deployment ..."
echo "==========================================="

# 检查是否安装 Git 和 Node.js
if ! command -v git &> /dev/null || ! command -v npm &> /dev/null; then
    echo "Git and Node.js are required but not installed. Exiting."
    exit 1
fi

# 拉取最新代码
if [ -d "$PROJECT_DIR" ]; then
    echo "Directory $PROJECT_DIR exists. Pulling latest code..."
    cd $PROJECT_DIR
    git fetch origin $BRANCH
    git reset --hard origin/$BRANCH
else
    echo "Cloning repository..."
    git clone -b $BRANCH $REPO_URL $PROJECT_DIR
    cd $PROJECT_DIR
fi

# 安装依赖
npm install

# 构建项目
echo "Building the project..."
npm run build

# 检查构建是否成功
if [ ! -d "$PROJECT_DIR/build" ]; then
    echo "Build failed."
    exit 1
fi

# 备份现有的 Nginx 文件
TIMESTAMP=$(date +%Y%m%d%H%M%S)
if [ -d "$NGINX_DIR" ]; then
    echo "Backing up current Nginx directory..."
    mv $NGINX_DIR "${NGINX_DIR}_backup_$TIMESTAMP"
fi

# 部署新文件
echo "Deploying files to Nginx dir..."
cp -r $PROJECT_DIR/build/* $NGINX_DIR

# 检查 Nginx 配置并重启服务
echo "Testing Nginx configuration..."
if nginx -t; then
    echo "Reloading Nginx..."
    systemctl reload nginx
else
    echo "Nginx configuration test failed. Please check your settings."
    exit 1
fi

# 完成
echo "complete！"