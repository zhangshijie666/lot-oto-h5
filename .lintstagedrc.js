module.exports = {
  '**/*.{js,vue,css,scss,html,json}': filenames => {
    const ignoredDirs = ['uni_modules', 'node_modules', 'dist']
    return filenames
      .filter(file => !ignoredDirs.some(dir => file.includes(dir)))
      .map(file => `prettier --write "${file}"`)
  }
  //指定提交描述格式
  // 'git commit': ['sh ./checkCommitMessage.sh']
  // '**/*.{js,vue,ts,scss,css,html}': 'sh checkNoChinese.sh'
}
