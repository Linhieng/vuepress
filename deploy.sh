#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 因为网络问题，当只有 push 不成功时，传入一个参数，代表不需要重新生成静态文件
if [ $# == 0 ]
then
  # 生成静态文件
  npm run docs:build
  # 先推送到 main 分支
  git push -f origin main
elif [ $# == 1 ]
then
  git push -f origin main
fi

# 前面出现错误时，后面就不会执行了，后面的 push 无论如何都是会需要执行的
# 如果前面 push 成功，只有后面 push 失败，则传入多个参数（大于一个）

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 发布到 https://<USERNAME>.github.io/<REPO> 
# git push -f https://github.com/<USERNAME>/<REPO>.git <DEFAULT_BRANCH>:<ROMATE_BRANCH>
git push -f https://github.com/Linhieng/vuepress.git main:gh-pages

# 打印成功结果！！！1
echo "执行成功"