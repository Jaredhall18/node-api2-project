// implement your posts router here
const express = require('express')
const router = express.Router()

const Post = require('./posts-model')

// #### 1 [GET] /api/posts
router.get('/', async (req, res) => {
    try {
        // throw new Error("testing catch")
        const posts = await Post.find(req.query)
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({
            message: "The posts information could not be retrieved"
        })
    }
})

// #### 2 [GET] /api/posts/:id
router.get('/:id', async (req, res) => {
    try{
        // throw new Error("testing catch")
        const post = await Post.findById(req.params.id)
        if(!post) {
            res.status(404).json({
                message: 'The post with the specified ID does not exist'
            })
        } else {
            res.status(200).json(post)
        }
    } catch (err) {
        res.status(500).json({
            message: "The post information could not be retrieved"
        })
    }
})


module.exports = router