const fs = require('fs')

fs.readFile('arquivo.txt', 'utf-8', (err, data) =>{
    //se tiver um erro entra aqui
    if(err){
        console.log(err)
    }

    //senao imprime os dados desejados
    console.log(data)
})