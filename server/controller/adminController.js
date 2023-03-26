
const adminModel = require('../model/adminModel')

module.exports = {
    
    doLogin:async (req,res)=>{

        console.log('admin login',req.body)

        let admin = await adminModel.findOne({email:req.body.email})
          
        console.log(admin)

        if(!admin) return res.status(404).json({message:'Invalid Email'})
    
        let passwordCheck = req.body.password === admin.password


        if(!passwordCheck) return res.status(401).json({message:'Incorrect Password'})

        res.status(200).json(admin)
    }
}