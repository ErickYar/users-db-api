const Users = require('../models/user.model')

const findAllUser = async () => {
    const users = await Users.findAll()
    return users
}

const findUserId = async (id) => {
    const data = await Users.findOne({
        where:{
            id:id,
        }
    })
    return data
}

const createUsers = async (UserObj) => {
    const NewUsers = await Users.create({
        firstName: UserObj.firstName,
        lastName: UserObj.lastName,
        email: UserObj.email,
        password: UserObj.password
    })
    return NewUsers
}

const updateUser = async (id,UserObj)=>{
const selectedUser =await Users.findOne({
where:{
    id:id
}
})

if(!selectedUser)return null

const modifiedUser = await selectedUser.update(UserObj)
return modifiedUser
}

const deleteUser = async(id) => {
    const user = await Users.destroy({
        where:{
            id:id
        }
    })
}

module.exports = { 
    findAllUser, 
    findUserId, 
    createUsers,
    updateUser,
    deleteUser
 }
