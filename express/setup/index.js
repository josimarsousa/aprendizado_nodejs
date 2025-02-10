const express = require('express')
const app = express() //variavel ambiente
const port = 3001

app.get('/', (req, res) => {
    res.send('Olá mundo')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})