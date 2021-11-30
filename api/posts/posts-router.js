// implement your posts router here
const express = require('express')
const router = express.Router()

const Post = require('./posts-model')

// #### 1 [GET] /api/posts
router.get('/', async (req, res) => {
    try {
        // throw new Error("testing catch")
        
    } catch (err) {
        res.status(500).json({
            message: "The posts information could not be retrieved"
        })
    }
})

module.exports = router