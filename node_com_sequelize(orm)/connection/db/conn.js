const mysql = require('mysql2')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Fridoca84*', 
    database: 'nodejs'

})

module.exports = pool