const { promisify } = require('util')
const path = require('path')
// callback -> promisify(函数) -> Promise -> async await
const download = promisify(require('download-git-repo'));
const open = require('open')

const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal')
const { compile,writeToFile,createDirSync } = require('../utils/utils')

const createProjectAction = async (project) => {
  console.log('lsh loading create')
  // 1.clone项目
  await download(vueRepo, project, { clone: true });
  // 2.执行npm install
  //windows和其他mac,linux不同
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })
  // 3.运行npm run serve
  commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })
  // 4.打开浏览器
  open("http://localhost:8080/")
}

//添加组件的action

const addCpnAction = async (name, dest) => {
  // 1.编译ejs模块result
  const data = {name, lowerName: name.toLowerCase()};
  const result = await compile("vue-component.ejs", data)
  // 2.将result写入到.vue文件中
  const targetPath = path.resolve(dest,`${name}.vue`)
  writeToFile(targetPath,result)
  // 4.放到对应到文件夹中
}

// 添加组件和路由
const addPageAndRouteAction = async (name, dest) => {
  // 1.编译ejs模板
  const data = {name, lowerName: name.toLowerCase()};
  const pageResult = await compile('vue-component.ejs', data);
  const routeResult = await compile('vue-router.ejs', data);

  // 3.写入文件
  const targetDest = path.resolve(dest, name.toLowerCase());
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${name}.vue`);
    const targetRoutePath = path.resolve(targetDest, 'router.js')
    writeToFile(targetPagePath, pageResult);
    writeToFile(targetRoutePath, routeResult);
  }
}

const addStoreAction = async (name, dest) => {
  // 1.编译的过程
  const storeResult = await compile('vue-store.ejs', {});
  const typesResult = await compile('vue-types.ejs', {});

  // 2.创建文件
  const targetDest = path.resolve(dest, name.toLowerCase());
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${name}.js`);
    const targetRoutePath = path.resolve(targetDest, 'types.js')
    writeToFile(targetPagePath, storeResult);
    writeToFile(targetRoutePath, typesResult);
  }
}


module.exports = {
  createProjectAction,
  addCpnAction,
  addPageAndRouteAction,
  addStoreAction
}