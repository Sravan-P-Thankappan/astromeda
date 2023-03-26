
const router = require('express').Router()
const adminController = require('../controller/adminController')


router.post('/login',adminController.doLogin)



module.exports = router