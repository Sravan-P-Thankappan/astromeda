
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt')

module.exports = {

    doSignup: async (req, res) => {

        try {

            let existingUser = await userModel.findOne({ email: req.body.email })

            if (existingUser) {
                return res.status(401).json({ message: 'Email is already exist' })
            }

            let hashedPassword = await bcrypt.hash(req.body.password, 10)

            req.body.password = hashedPassword

            let newUser = await userModel.create(req.body)

            res.status(201).json({ message: 'Account created' })

        } catch (error) {

            res.status(500).json({ message: error.message })

        }
 
    },


    doLogin: async (req, res) => {

        console.log('login',req.body)

        try {

            let user = await userModel.findOne({ email: req.body.email })

            if (!user) return res.status(404).json({ message: 'Invalid Email' })
           
            let status = await bcrypt.compare(req.body.password,user.password)

            if (!status) return res.status(404).json({ message: 'Incorrect Password' })

            res.status(200).json(user)


        } catch (error) {
              
            res.status(500).json({message:error.message})
        }

    },
   

    



}