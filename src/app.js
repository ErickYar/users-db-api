const express = require('express')
const cors = require('cors')
require('dotenv').config()

const usersRouter = require('./users/user.router')
const db = require ('./utils/database')
const app = express()

const PORT = process.env.PORT || 4298


//? validar la conexión 
db.authenticate()
.then(()=>console.log('Data Authenticated'))
.catch(err=>console.log(err))

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
res.json({message:'Server Nuevo',
         myMessage:process.env.MESSAGE,
         myPort:process.env.PORT || PORT
        })
})

app.use('/',usersRouter)

app.listen(PORT,()=>{
    console.log(`la practica hace el maestro ${PORT}`)
})
