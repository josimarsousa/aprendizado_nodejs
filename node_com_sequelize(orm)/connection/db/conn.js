const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'Fridoca84*', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectamos com sucesso ao sequelize')
}catch (err){
    console.log('Não foi possível conectar ao banco de dados!', err)
}

module.exports =  sequelize