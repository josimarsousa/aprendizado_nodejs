// mais de um valor

const x = 10
const y = 'Joao'
const z = [1, 2]

console.log(x, y, z)

//contagem de impressoes
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//variavel entre string
console.log('O nome é: %s, ele é programador', y)

//limpar o console apos 2 egundos
setTimeout(() => {
    console.clear()
}, 2000) 