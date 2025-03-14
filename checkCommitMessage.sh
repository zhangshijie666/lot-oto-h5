#!/usr/bin/env sh

commit_msg=$(cat "$1")

# 使用 `awk` 检查是否包含中文字符
if echo "$commit_msg" | awk '/[\xE4-\xE9]/ {exit 0} END {exit 1}'; then
  exit 0
fi

echo "❌ 提交信息必须包含至少一个中文字符。"
echo "例子："
echo "修复了登录页的按钮显示问题"
exit 1
