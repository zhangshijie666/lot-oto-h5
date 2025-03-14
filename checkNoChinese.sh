#!/usr/bin/env sh

# 查找项目中的中文（忽略 i18n 目录）
if grep -rnI --exclude-dir=node_modules --exclude-dir=i18n -E '[\p{Han}]' .; then
  echo "❌ 代码文件中不允许包含中文！请移除！"
  exit 1
fi

exit 0
