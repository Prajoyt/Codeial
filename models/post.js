const mongoose=require('mongoose');


const postSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },

    //linking to user but these type is a refernce

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
},{
    timestamps:true,
})

const Post=mongoose.model('Post',postSchema); //name of model and schema

module.exports=Post