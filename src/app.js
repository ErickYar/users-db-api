const express = require('express')
const cors = require('cors')
require('dotenv').config()

const usersRouter = require('./users/user.router')
const app = express()

const PORT = process.env.PORT || 4298

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
