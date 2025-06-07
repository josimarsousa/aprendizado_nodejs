const express = require('express')
const { engine } = require('express-handlebars')
const conn = require('./connection/db/conn.js')

const User = require('./Models/User.js')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
    res.render('addUser')
})

app.post('/users/create', (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    }

    })

app.get('/', (req, res) => {
    res.render('home')
})

conn
    .sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando em http://localhost:3000')
    })
})
.catch((err) => {
    console.log('Erro ao conectar ao banco de dados',err)
})