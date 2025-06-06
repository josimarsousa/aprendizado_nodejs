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

app.use(express.json)

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))