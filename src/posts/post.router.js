const router = require('express').Router()

const postServices = require('./posts.services')


router.route("/posts")
    .get(postServices.getAllPosts)
    .post(postServices.postNewPosts)


router.route("/posts/:id")
    .get(postServices.getPostsById)
    .patch(postServices.patchPost)
    .delete(postServices.deletePost)

module.exports = router