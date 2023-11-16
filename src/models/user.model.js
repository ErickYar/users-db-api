const {DataTypes} = require('sequelize')

const db = require('../utils/database')

 const Users = db.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull: true 
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull: true 
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false, 
        unique:true,
        validate: {
            isEmail:true,
            len:[7,255]
        }
    },
    password:{ 
         type:DataTypes.STRING,
        allowNull: true 
     }
 })

module.exports= Users



