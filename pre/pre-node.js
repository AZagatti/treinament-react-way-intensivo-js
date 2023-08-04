import fs from 'fs'

const json = fs.readFileSync('./file.json', 'utf-8')
console.log(json)
