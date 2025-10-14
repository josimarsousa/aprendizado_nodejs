const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Task = require('./models/Task')

const taskRoutes = require('./routes/tasksRoutes')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use('tasks', taskRoutes)

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(express.static('public'))
conn
    .sync()
    .then()
    .catch((err) => console.log(err) )

app.listen(3000)
