const DataUsers = [
    {
id:1,
name:'roxana',
email:'roxana@gmail.com',
password:'root'
},
{
    id:2,
    name:'trey',
    email:'trey@gmail.com',
    password:'root'
    },
    {
        id:3,
        name:'emily',
        email:'emily@gmail.com',
        password:'root'
        },
]

let IDuser = 3


const findAllUser = async ()=>{
   
    return DataUsers
}

const findUserId = async (id)=>{
const data = DataUsers.find(user=>user.id===id)
console.log('---*-*-*-*')
return data
}

const createUsers = async (UserObj) => {
    const NewUsers = {
        id: IDuser++,
        name: UserObj.name,
        email: UserObj.email,
        password: UserObj.password
    }
    DataUsers.push(NewUsers)
    return NewUsers
}

module.exports = {findAllUser, findUserId, createUsers}
