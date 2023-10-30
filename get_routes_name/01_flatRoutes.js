const { dir } = require('./data/D0_routesName')
const { routes } = require('./data/D1_routesConfig')
const fs = require('fs')

var BlankView = "view.blank"


/**
 * flat routesConfig
 */
function ergodic(array, parentFile = null) {
  let arr = []
  array.forEach(item => {
    let obj = {}
    const { path, name, component } = item
    obj.path = path
    obj.name = name
    item.meta && item.meta.icon && (obj.icon = item.meta.icon)
    // console.log("obj.icon",obj);
    let fn = parentFile ? `() => import('@/page/${parentFile}/${path}')` : `() => import('@/page/${path}')`
    obj.component = typeof component == "function" ? fn : component  //! 后续修改viewBlank
    // console.log('fnnnnnn',fn);

    // item.children && arr.push(item.children)
    arr.push(obj)
    if (item.children) {
      arr.push(...ergodic(item.children, path))
    }
  });
  // console.log(arr);
  return arr
}

/**
 *
 * @param {*} array   flatRoutesConfig
 * path -> key
 * name,icon,component -> value
 */
function changeObject(array) {

  let routesObj = array.reduce((object, item, index) => {
    object[item.path] = {
      name: item.name,
      component: item.component
    }
    item.icon && (object[item.path].icon = item.icon)
    return object
  }, {})
  return routesObj
}


function matchRoutes(configObj, asyncArray) {
  let keysArray = Object.keys(configObj)
  keysArray.forEach(item => {
    !asyncArray.includes(item) && delete configObj[item]
  });
  return configObj
}

function main(array) {
  let result = []
  result = ergodic(array)
  console.log("arr:::", result);
  let resultObj = changeObject(result)
  console.log("resultObjjjjj:", resultObj);
  // delete routesObj.login
  let asyncArray = dir.flat()
  let resultRoutesObj = matchRoutes(resultObj,asyncArray)
  console.log("resultRoutesObj", resultRoutesObj);

  let routesCompletePath = './R0_routesComplete.js'
  fs.writeFile(routesCompletePath, JSON.stringify(resultRoutesObj), 'utf8', (err) => {
    err && console.error(err)
    console.log('文件已成功写入', routesCompletePath);
  })
}

main(routes)

