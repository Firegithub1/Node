const fs = require('fs');
const path = require('path');


function getSubfolders(dir) {
  const result = [];
  const folders = fs.readdirSync(dir);

  folders.forEach(folder => {
    const folderPath = path.join(dir, folder);
    const subfolders = fs.readdirSync(folderPath);

    if (subfolders.length > 0) {
      result.push([folder]);
      subfolders.forEach(subfolder => {
          result[result.length - 1].push(subfolder);
      });
    }
  });

  let routesNamePath = './data/routesName.js'
  fs.writeFile(routesNamePath,JSON.stringify(result),'utf8',(err)=>{
    console.log('写入成功', routesNamePath);
  })
  return result;
}


const dir = 'D:\\Desk\\Remote\\GitLab\\custom-tailored-admin-2023\\src\\pages';
console.log(getSubfolders(dir));
