const router = require('express').Router()

const userServices = require('./user.servicios')

router.get('/users',userServices.getAllUsers)
router.get('/users/:id',userServices.getUsersId)
router.post('/users',userServices.postUser)

module.exports=router