const path = require('path')

//path absoluto
console.log(path.resolve('teste.txt'))

//formar path

const midFolder = 'relatorios'
const fileName = 'josimar.txt'

//form finalpath e unindo tudo
const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)