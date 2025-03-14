#!/usr/bin/env sh

# 安全模式：遇到错误立即退出
set -eu

# 获取暂存区文件列表（正确处理含空格文件名）
git diff --cached --name-only -z | while IFS= read -r -d '' file; do
  # 跳过删除操作的文件
  [ -e "$file" ] || continue

  # 排除指定目录（支持相对路径）
  case "$file" in
    node_modules/*|i18n/*) continue ;;
  esac

  # 检查文件类型是否为文本（排除二进制文件）
  if ! git check-attr --cached text "$file" | grep -q 'text: set'; then
    continue
  fi

  # 检查暂存区内容（而非工作区）
  if git show :"$file" | grep -qE '[一-龥]'; then
    echo >&2 "❌ 文件 '$file' 包含中文字符！请移除！"
    exit 1
  fi
done

exit 0