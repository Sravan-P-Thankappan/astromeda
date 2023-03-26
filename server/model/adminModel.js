
const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
  
    email:{
       type:String,
       required:true
    },
    password:{
        type:String,
        required:true
    },
    
    admin:{
        type:Boolean,
        default:true
    }
})

module.exports = mongoose.model('admin',adminSchema) 