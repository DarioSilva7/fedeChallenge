const {postsModel} = require('../db')

exports.createPost= async (req,res)=>{
    const infoPost = await postsModel.create(req.body)
    res.send(infoPost)
}