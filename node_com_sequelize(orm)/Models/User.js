const { DataTypes } = require('sequelize')

const db = require('../connection/db/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = User