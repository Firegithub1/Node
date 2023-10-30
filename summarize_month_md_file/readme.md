# 读取 **本月所有** MD文件内容并写入 currentMonth.md 文件

## 1. 是否重复生成/文件名重复
  fs.existsSync(writePath) && fs.unlinkSync(writePath)

## 2. 获取目录所有md文件名称(readdir)
  fs.readdir(dir, (err, files) =>{})


## 3. 读取文件(readFile)
	1. 单个文件读取与写入
		读取：异步提高速度
	2. 所有文件读取
		Promise.all([array])
		写入summarize.md文件

## 4. 写入文件(writeFile)
	写入：同步确保顺序正确
