let path = require('path')
let ejsExcel = require('ejsexcel')
let fs = require('fs')
// xlsx 路径
let exBuf = fs.readFileSync(__dirname + '/1.xlsx')
//导出json的路径
let newfilepath = path.join(__dirname, '/excel.json')
let _data = {}
ejsExcel
	.getExcelArr(exBuf)
	.then((exlJson) => {
		//获取excel数据
		let workBook = exlJson
		//获取excel第一张表 sheet1
		let workSheets = workBook[0]
		//遍历第一张表的的每一行数据
		workSheets.forEach((item, index) => {
			// 往_data里加入键值对
			_data['' + item[0] + ''] = '' + item[1]||'' + ''
		})
		//写入js文件
		fs.writeFileSync(newfilepath, JSON.stringify(_data))
	})
	.catch((error) => {
		console.log('读取错误!')
		console.log(error)
	})
