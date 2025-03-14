#!/usr/bin/env sh

# 获取暂存区中的文件
staged_files=$(git diff --cached --name-only)

# 遍历这些文件并检查是否包含中文
for file in $staged_files; do
  # 排除 node_modules 和 i18n 目录
  if echo "$file" | grep -Eq '^(node_modules|i18n)'; then
    continue
  fi

  # 使用 grep 检查文件中是否包含中文
  if grep -qP '[\x{4e00}-\x{9fff}]' "$file"; then
    echo "❌ 文件 '$file' 中包含中文字符！请移除！"
    exit 1
  fi
done

exit 0
