const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        requerid: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }
})

module.exports = Task