const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('example.com'))
console.log(validator.isURL('https://www.npmjs.com/package/validator'))
console.log(chalk.green.inverse.bold('Success'))