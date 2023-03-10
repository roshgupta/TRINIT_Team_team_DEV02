const mongoose=require('mongoose')
const schema=mongoose.Schema

const LinksSchema=new schema({
    
    date:{
        type:Date,
        default: Date.now()
    },
    visited:{
        type:[{
            url:String,
            value:Number,
            carbon:Number
        }]
    }


},{timestamps:true})

module.exports= mongoose.model('Link',LinksSchema)