const mysql = require('mysql2')

const pool = mysql.createPool({
    connectionLimit: 10,
    
})