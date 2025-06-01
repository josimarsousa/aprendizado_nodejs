const express = require('express')
const { engine } = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Fridoca84*',
    database: 'nodejs'
})

conn.connect(function(err) {
    if (err){
        console.log(err)
    }
    
    console.log("Conectou ao Mysql!")
    
    app.listen(3000)
})