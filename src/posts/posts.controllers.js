const Posts = require('../models/posts.model')
const { post } = require('../users/user.router')

const findAllPosts = async () => {
    const posts = await Posts.findAll()
    return posts
}

const findUserId = async (id) => {
    const post = await Users.findOne({
        where:{
            id:id,
        }
    })
    return post
}

const createNewPost = async (postObj) => {
    const newPost = await Posts.create({
        title:postObj.title,
        content:postObj.content,
        category:postObj.category,
        userName:postObj.userName
    })
return newPost
}

const updatePost = async (id,postObj) => {
    const selectedPost = await Posts.findOne({
        where:{
            id:id
        }
    })

    if(!selectedPost) return null

    const updatePost =await selectedPost.update(postObj)
    return updatePost
}
const deletePost = async(id) => {
    const post = await Posts.destroy({
        where: {
            id
        }
    })
    return post
}
 module.exports = {
    findAllPosts,
    findUserId,
    createNewPost,
    updatePost,
    deletePost
 }