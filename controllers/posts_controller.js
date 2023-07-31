const Post=require('../models/post')




module.exports.create=async(req,res)=>{
     let post=await Post.create({
        content:req.body.content,
        user:req.user._id,
     })
     return res.redirect('back');
}