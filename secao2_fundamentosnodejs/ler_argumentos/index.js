console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]
const idade = args[1].split('=')[1]
const profissao = args[2].split('=')[1]
//digitado no terminal: node index.js --nome=josimar --idade=43 --profissao=programador
console.log(nome, idade, profissao)