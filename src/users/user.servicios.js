const userController = require('./user.controllers')

const getAllUsers = (req, res) => {
    userController.findAllUser()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}
const getUsersId = (req,res) => {
    const id = Number(req.params.id)
    userController.findUserId(id)
    .then(data => {
        if(!data){
            return res.status(404).json({message:`users with id: ${id}, not sound`})
        }
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({message:'Bad request',err})
    })
}
const postUser = (req,res) => {
    const NewUser = req.body
    userController.createUsers(NewUser)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({message:'Bad request',err})
    })
}
module.exports = {
    getAllUsers,
    getUsersId,
    postUser
}