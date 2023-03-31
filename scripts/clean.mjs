try {
  console.log(chalk.bgGreen('-----------文件夹置空-----------'))
  fs.emptyDirSync('src/pages/')

  console.log(chalk.bgGreen('-----------必要文件还原-----------'))
  await $`git checkout src/pages/index.md src/pages/_document.js src/pages/_app.js`

  console.log(chalk.bgCyan('<<<<<<<清理完成>>>>>>>'))
} catch (error) {
  console.log(chalk.bgRed(error.message))
}