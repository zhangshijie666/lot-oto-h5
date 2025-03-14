module.exports = {
  '**/*.{js,vue,css,scss,html,json}': filenames => {
    const ignoredDirs = ['node_modules', 'dist']
    return filenames
      .filter(file => !ignoredDirs.some(dir => file.includes(dir)))
      .map(file => `prettier --write "${file}"`)
  }
}
