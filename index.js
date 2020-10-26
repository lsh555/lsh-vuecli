#!/usr/bin/env node

// 1. 配置环境变量,package.json里面的，  
// "bin": {
//   "lsh": "index.js"
// },
// npm link

// 2.npm i commander


const program = require('commander')

const helpOptions = require('./lib/core/help.js')
const createCommands = require('./lib/core/create.js')


//版本号
program.version(require('./package.json').version,'-v,--version')
//但是想让-V也生效的话得写2个
// program.version(require('./package.json').version,'-v,--version')
// program.version(require('./package.json').version)

//帮助和可选信息
helpOptions()

//创建其他指令
createCommands()

program.parse(process.argv)

