const express = require('express')
const app = express()
const port = 3001

const path = require('path')
const basePaht = 

app.get('/', (req, res) => {
    res.send('Olá mundo!')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})