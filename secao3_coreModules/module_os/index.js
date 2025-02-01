const os = require('os')

console.log('quantidade de cpus', os.cpus())
console.log(os.freemem())
console.log(os.homedir())
console.log(os.type())