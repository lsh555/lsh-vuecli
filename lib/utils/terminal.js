// 执行终端命令相关的代码

//子进程
const { spawn } = require('child_process')

const commandSpawn = (...args) =>{
return new Promise((resolve,reject)=>{
  const childProcess = spawn(...args)
  childProcess.stdout.pipe(process.stdout)
  childProcess.stderr.pipe(process.stderr)
  //执行完了
  childProcess.on('close',()=>{
     resolve()
  })
})
}

module.exports = {
  commandSpawn
}