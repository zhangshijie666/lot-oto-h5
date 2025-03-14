module.exports = {
  '**/*.{js,vue,css,scss,html,json}': filenames => {
    const ignoredDirs = ['uni_modules', 'node_modules', 'dist']
    return filenames
      .filter(file => !ignoredDirs.some(dir => file.includes(dir)))
      .map(file => `prettier --write "${file}"`)
  }
}
