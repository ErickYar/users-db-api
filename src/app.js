const express = require('express')
const cors = require('cors')
require('dotenv').config()

const usersRouter = require('./users/user.router')
const postRouter = require('./posts/post.router')

const db = require ('./utils/database')
const initModels = require('./models/initModels')
const app = express()

const PORT = process.env.PORT || 4298


//? validar la conexión 
db.authenticate()
.then(()=>console.log('Data Authenticated'))
.catch(err=>console.log(err))

db.sync({force:false})
.then(()=>console.log('Database Synced!'))
.catch(err => console.log(err))
 
initModels()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
res.json({message:'Server Nuevo',
         myMessage:process.env.MESSAGE,
         myPort:process.env.PORT || PORT
        })
})

app.use('/',usersRouter)
app.use('/',postRouter)

app.listen(PORT,()=>{
    console.log(`la practica hace el maestro ${PORT}`)
})
