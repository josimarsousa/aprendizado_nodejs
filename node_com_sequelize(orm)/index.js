const express = require('express')
const { engine } = require('express-handlebars')
const conn = require('./connection/db/conn.js')

const User = require('./Models/User.js')
const Address = require('./Models/Address.js')

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

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    }

    console.log(req.body)
    await User.create({ name, occupation, newsletter})

    res.redirect('/')

    })

app.get('/', async (req, res) => {

    const users = await User.findAll({raw: true})

    console.log(users)

    res.render('home', {users: users})
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    try {

        const user = await User.findOne({ raw: true, where: { id: id }})
        res.render('userview', { user }) 

    } catch (error) {

        console.log(error)
        
    }

    
})

app.post('/users/delete:id', async (req, res) => {

    const id = req.params.id

    const users = await User.destroy({where: {id: id}})

    res.redirect('/')
})

app.get('/users/edit/:id', async (req, res) => {

    const id = req.params.id

    const user = await User.findOne({include: Address, where: {id: id}})

    res.render('useredit', {user: user.get({plain: true}) })
})

app.post('/users/update', async (req, res) => {

    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }

    const userData = {
        id, 
        name,
        occupation,
        newsletter
    }

    await User.update(userData, { where: { id: id}})

    res.redirect('/')
})

app.post('/address/create', async (req, res) => {

    const UserId = req.body.UserId
    const street = req.body.street
    const number = req.body.number
    const city = req.body.city

    const address = {
        UserId,
        street,
        number,
        city
    }

   await Address.create(address)

   res.redirect(`/users/edit/${UserId}`)

})

app.post('/address/delete', async (req, res) => {
    const UserId = req.body.UserId
    const id = req.body.id

    await Address.destroy({
        where: { id: id},
    })

    res.redirect(`/users/edit/${UserId}`)
})

conn
    .sync()
    //.sync({force: true})
    .then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando em http://localhost:3000')
    })
})
.catch((err) => {
    console.log('Erro ao conectar ao banco de dados',err)
})