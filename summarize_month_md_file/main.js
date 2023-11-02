const { getFilePaths } = require('./util/filePath/getPath.js')
const { writeMDFile } = require('./util/fileContent/promiseMonthMDSort.js')
const fs = require('fs');

async function main(path, fileName = "sort") {
  const folderPath = path; // 替换为你要获取文件路径的文件夹路径
  fileName = `${fileName}${path.slice(path.lastIndexOf('\\') + 1)}.md` //文件夹名称+写入文件名
  let writePath = path + "\\" + fileName //写入文件的路径
  fs.existsSync(writePath) && fs.unlinkSync(writePath)
  let res = await getFilePaths(folderPath) // filesPath
  writeMDFile(res, writePath)
}

let path = 'D:\\Diary\\Oct'
let fileName = "000Sort"

main(path,fileName )