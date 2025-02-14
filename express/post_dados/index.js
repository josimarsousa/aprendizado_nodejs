const express = require('express')
const app = express()
const port = 3001

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {

    const id = req.params.id

    //leitura da tabela users, resgatar um usuário 
    console.log(`Estamos buscando pelo usario ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})

app.get('/users/add', (req, res)  => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {

})