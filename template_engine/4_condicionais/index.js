const express = require('express') 
const exphbs= require("express-handlebars") 

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {

    const user = {
        name: "josimar",
        surname: "jose",
        age: "30"
    }

    const palavra = "Pagina de testes"
    //verificacao de autenticacao
    // se condicao for falsa
    //if const auth = false nao aparece link para navegacao
    const auth = true

    res.render('home', {user: user, palavra, auth})
})

app.listen(3000, () => {
    console.log('App funcionando!!!!')
})
