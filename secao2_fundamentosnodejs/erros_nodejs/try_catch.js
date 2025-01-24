const x = 10
//verifica uma condicao legal ou ilegal e retorna o erro
//nao e permitido a alteracao do valor da constante por isso retorna o erro
try {
    x = 2
} catch(err) {
    console.log(`Erro: ${err}`)
    return
}
console.log('continuando o programa!')