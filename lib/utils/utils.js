const fs = require('fs')

const path = require('path')
const ejs = require('ejs')

const compile = (templateName,data) =>{
  const remplatePosition = `../templates/${templateName}`
  const templatePath = path.resolve(__dirname,remplatePosition)
  
  return new Promise((resolve,reject)=>{
    ejs.renderFile(templatePath,{data},{}, (err,result)=>{
      if(err){
        console.log(err)
        reject(err);
        return;
      }
      resolve(result)
    })
  })
}

//addpage的时候，同时创建一个文件夹包裹.vue和router.js
// source/components/category/why
const createDirSync = (pathName) => {
  if (fs.existsSync(pathName)) {
    return true;
  } else {
    if (createDirSync(path.dirname(pathName))) {
      fs.mkdirSync(pathName);
      return true;
    }
  }
}

const writeToFile = (path,content) =>{
  // 判断path是否存在, 如果不存在, 创建对应的文件夹
  return fs.promises.writeFile(path,content)
}

module.exports = {
  compile,
  writeToFile,
  createDirSync
}

