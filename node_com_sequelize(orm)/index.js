const express = require('express')
const { engine } = require('express-handlebars')
const conn = require('./connection/db/conn.js')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})


app.listen(3000)