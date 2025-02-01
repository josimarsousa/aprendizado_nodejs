const fs = require('fs')

if(!fs.existsSync('./minhapasta')){
    console.log('Não existe!')
    fs.mkdirSync('minhapasta')
    console.log('pasta criada agora')
}else if(fs.existsSync('./minhapasta')){
    console.log('direotorio existente!')
}

