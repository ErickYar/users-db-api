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

const getUsersById = (req,res) => {
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
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(404).json({message:'Bad request',err})
    })
}


const patchUser = (req,res)=>{
    const id = Number(req.params.id)
    const userObj = req.body
    userController.updateUser(id,userObj)
    .then(data => {
        if(!data) return  res.status(404).json({message:'Invalid ID'})
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({message:'Bad request',err})
    })
}

const deleteUser = (req,res) => {
    const id = Number(req.params.id)
    userController.deleteUser(id)
    .then(data => {
        if (!data) return  res.status(204).json({message:'Invalid ID users'})
        res.status(204).json(data)
    })
    .catch(err => {
        res.status(404).json({message:'Bad request',err})
    })
}
module.exports = {
    getAllUsers,
    getUsersById,
    postUser,
    patchUser,
    deleteUser
}