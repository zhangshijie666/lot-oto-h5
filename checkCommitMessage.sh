#!/usr/bin/env sh

commit_msg=$(cat "$1")

# 方法一：使用兼容性更好的正则（支持 macOS 和 Linux）
if echo "$commit_msg" | grep -qE '[一-龥]'; then
  exit 0
fi

# 方法二：使用 Perl 兼容模式（需要确认 grep 支持 -P）
# if echo "$commit_msg" | grep -Pq '[\x{4e00}-\x{9fa5}]'; then
#   exit 0
# fi

echo "❌ 提交信息必须包含至少一个中文字符。"
echo "例子："
echo "修复了登录页的按钮显示问题"
exit 1