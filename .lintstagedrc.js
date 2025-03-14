// .lintstagedrc.js
module.exports = {
  '**/*.{js,vue,css,scss,html,json}': files => {
    // 过滤掉包含 uni_modules 的文件路径
    const filteredFiles = files.filter(file => !file.includes('uni_modules'))
    return filteredFiles.length ? [`prettier --write ${filteredFiles.join(' ')}`] : []
  }
}
