#!/bin/bash

# 获取提交消息
commit_msg=$(cat "$1")

# 正则表达式：确保提交信息是全中文
pattern="^[\u4e00-\u9fa5]+$"

if [[ ! "$commit_msg" =~ $pattern ]]; then
  echo "错误: 提交信息必须是全中文。"
  echo "例子："
  echo "修复了登录页的按钮显示问题"
  exit 1
fi
