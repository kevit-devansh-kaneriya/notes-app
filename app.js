const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// const msg = getNotes()
// console.log(msg)

// console.log(validator.isEmail('example.com'))
// console.log(validator.isURL('https://www.npmjs.com/package/validator'))
// console.log(chalk.green.inverse.bold('Success!'))
// console.log(chalk.blue.inverse.bold('Success!'))



// console.log(process.argv)
// console.log(yargs.argv)


yargs.version('1.1.0')

yargs.command({
  command:'add',
  describe:'Add a new note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'Note Body',
      demandOption:true,
      type:'string'
    },
  },
  handler: function(argv){
    console.log('Title:',argv.title)
    console.log('Body:',argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function(){
    console.log('Removing the note')
  }
})

yargs.command({
  command:'list',
  describe:'List your notes',
  handler:function(){
    console.log('Reading a note')
  }
})

yargs.parse()