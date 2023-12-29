/*
 * @Author: YiY
 * @Date: 2023-12-29 09:42:55
 * @LastEditTime: 2023-12-29 09:42:55
 */
const fs = require('fs');
const { resolve } = require('path');

// 异步读取
function readMDFile(path) {
  return new Promise(resolve => {
    fs.readFile(path, 'utf8', function (err, data) {
      err && console.error(err)
      resolve(data.toString())
    });
  })
}

async function writeMDFile(array, writePath) {
  let wrap = "\n"
  let titles = []
  console.log("array:::",array);
  let allData = array.map(item => {
    titles.push(FileName(item))
    return readMDFile(item)
  })
  console.log("titles:::",titles);
  console.log("allData", allData);
  let result = []
  try {
    result = await Promise.all(allData)
  } catch (error) {
    console.log('errrorrr!!!');
  }
  let month = writePath.match(/.*\\(.*)\\.*/)
  const Month = {
    Sept:'九',
    Oct:'十',
    Nov:'十一',
    Dec:'十二',
    Jan:'一'
  }
  let content = `# ${Month[month[1]]}月份 Diary`
  result.forEach((item, index) => {
    content += wrap + titles[index] + wrap + item + wrap
  });

  fs.writeFile(writePath, content, 'utf8', (err) => {
    err && console.error(err)
    console.log('文件已成功写入', writePath);
  })
}

function FileName(path) {
  let reg = /(\d{1,2})_(\d{2}\w*).md/
  // let match = path.match(reg)
  let match = reg.exec(path)
  // console.log(match);
  return !!match ? `### 2023年${match[1]}月${match[2]}日` : "### 2023Title"
}

// console.log(FileName("D:\\Diary\\Sept\\fuliShop.md"));
module.exports = {
  writeMDFile
}
// (excel)pandas