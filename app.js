// const fs = require('fs')
// fs.appendFileSync('notes.txt'," Devansh hello")
// fs.writeFileSync('notes.txt','This file was created by Node.js')

// require('./utils')
// const name ='Devansh'
// console.log(name)

const getNotes = require('./notes')
const message = getNotes('Your notes')
console.log(message)