const router = require('express').Router()

const userController = require('../controller/userController')


router.post('/signup',userController.doSignup)

router.post('/login',userController.doLogin)



module.exports = router