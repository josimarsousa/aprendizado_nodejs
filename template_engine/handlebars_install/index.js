const express = require('express') 
const expressHandlebars = require("express-handlebars") 

const app = express()

app.engine('handlebars', expressHandlebars())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home', {layout: false})
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000 ')
})
