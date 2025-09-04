const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node_mvc', 'root', 'Fridoca84*', {
    host: 'localhost',
    dialect: 'mysql'
} )

try {
    
    sequelize.authenticate()
    console.log('Conectamos ao banco node_mvc no mysql!')
    
}catch(error){
    console.log('Não foi possível conectar ao banco de dados node_mvc!')
}

module.exports = sequelize