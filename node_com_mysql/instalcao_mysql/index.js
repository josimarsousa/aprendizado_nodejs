const express = require('express')
const { engine } = require('express-handlebars')
const pool = require('./connection/db/conn.js')

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

    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = [ 'booName', 'pages', title, pageqty]

    pool.query(sql, data, function(err){
        if(err){
            console.log(err)
        }
        console.log("Livro cadastrado com sucesso!")
        res.redirect('/')
    } )
})

app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"

    pool.query(sql, function(err, data){
        if(err) {
            console.log(err)
            return
        }
        const books = data
        console.log(books)

        res.render('books', { books })
    })
})

app.get('/books/:id', (req, res) => {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE idbooks = ${id}`

    pool.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE idbooks = ${id}`

    pool.query(sql, function(err, data){
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]
        res.render('editbook', { book })
    })
})

app.post('/books/updatebook', (req, res) => {
    
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET bookName = '${title}', pages = '${pageqty}' WHERE idbooks = ${id}`

    pool.query(sql, function(err) {
        if(err){
            console.log(err)
            return
        }
        res.redirect('/books')
    })

})

app.post('/books/delete/:id', (req, res) =>{

    const id = req.params.id

    const sql = `DELETE FROM books WHERE idbooks = ${id}`

    pool.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.listen(3000)