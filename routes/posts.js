const express = require('express')
const router = express.Router()
const {createPost} = require('../controllers/createPost')
const {validate} = require('../helper/validate')


// router.get('/', getPosts)
// router.get('/:id', getPost)
router.post('/', validate, createPost)
// router.patch('/:id', patchPost)
// router.delete('/:id', deletePost)

module.exports= router