const postsControllers = require('./posts.controllers')

const getAllPosts = (req,res)=> {
    postsControllers.findAllPosts()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json({message: 'Bad request', err})
    })
}

const getPostsById = (req,res) => {
    const id = Number(req.params.id)
    postsControllers.findPostsId(id)
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

const postNewPosts = (req,res) => {
    const postObj = req.body
    postsControllers.createNewPost(postObj)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(404).json({message:'Bad request',err})
    })
}

const patchPost = (req,res) => {
    const id = Number(req.params.id)
    const postObj = req.body

    postsControllers.updatePost(id,postObj)
    .then(data => {
        if(!data) return res.status(404).json({message:'Invalid ID'})
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({message:'Bad request',err})
    })
}

const deletePost = (req,res) => {
    const id = Number(req.params.id)
    postsControllers .deletePost(id)
    .then(data => {
         if(!data) return res.status(404).json({message:'Invalid ID post'})

        res.status(204).json(data)
    })
    .catch(err => {
        res.status(404).json({message:'Bad request',err})
    })
}

module.exports={
    getAllPosts,
    getPostsById,
    postNewPosts,
    patchPost,
    deletePost

}