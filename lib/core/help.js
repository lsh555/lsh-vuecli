const program = require('commander');

const helpOptions = () => {
  //增加自己的options
  program.option('-l --lsh', 'a lsh cli')
  //可选 -d,类似--save
  program.option('-d --dest <dest>', 'a destination folder,例如:-d /src/components')
  //拉取不一样的框架，例如vue,react
  program.option('-f --framework <framework>', 'your framework')

  program.on('--help', function () {
    console.log('others')
  })
}

module.exports = helpOptions

