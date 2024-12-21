console.log('olá, mostrando o arquivo abaixo')

const fs = require('fs')

fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
    //se erro entra aqui
    if(err){
        console.log(err)
    }
    //se tudo certo aqui
    console.log(data)
})