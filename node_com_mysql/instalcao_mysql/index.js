const express = require('express')
const { engine } = require('express-handlebars')
const mysql = require('mysql2')

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

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (bookName, pages) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }
        console.log("Livro cadastrado com sucesso!")
        res.redirect('/')
    } )
})

app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"

    conn.query(sql, function(err, data){
        if(err) {
            console.log(err)
            return
        }
        const books = data
        console.log(books)

        res.render('books', { books })
    })
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