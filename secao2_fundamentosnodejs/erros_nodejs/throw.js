//const x = '10'
const x = 10

//checar se x é um número
if(!Number.isInteger(x)){
    throw new Error('O valor não é um número inteiro!')
}
console.log('O valor é um número inteiro')
console.log('continuando o programa!')