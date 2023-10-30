const fs = require('fs');
const path = require('path');

function getFilePaths(dir) {
  return new Promise(resolve => {
    fs.readdir(dir, (err, files) => {
      err && console.error(err)
      files = files.filter(item => /.md$/.test(item))
      let filePaths = files.map(file => path.join(dir, file));
      resolve(filePaths);
    });
  })
}

// const folderPath = 'D:\\Diary\\Sept'; // 替换为你要获取文件路径的文件夹路径
// getFilePaths(folderPath)

module.exports = {
  getFilePaths
}