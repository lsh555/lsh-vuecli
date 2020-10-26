const program = require('commander');

const { createProjectAction,
        addCpnAction, 
        addPageAndRouteAction,
        addStoreAction } 
        = require('./actions')

const createCommands = () => {
       //创建
       program
              .command('create <project> [others...]')
              //描述
              .description('clone a repository into a folder')

              //执行
              .action(createProjectAction);
       //创建
       program
              .command('addcpn <name>')
              //描述
              .description('add vue component,例如:lsh addcpn helloword -d src/components')

              //执行
              .action((name) => {
                     addCpnAction(name, program.dest || 'src/components')
              });
       program
              .command('addpage <page>')
              .description('add vue page and router config, 例如: why addpage Home [-d src/pages]')
              .action((page) => {
                     addPageAndRouteAction(page, program.dest || 'src/pages')
              })
       program
              .command('addstore <store>')
              .description('add vue page and router config, 例如: why addpage Home [-d src/pages]')
              .action((store) => {
                     addStoreAction(store, program.dest || 'src/store/modules')
              })
}

module.exports = createCommands