const router = require('express').Router()

const userServices = require('./user.servicios')

router.get('/users',userServices.getAllUsers)
router.get('/users/:id',userServices.getUsersById)
router.post('/users',userServices.postUser)

module.exports=router