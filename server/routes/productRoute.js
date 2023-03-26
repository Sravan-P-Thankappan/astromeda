const router = require('express').Router()
const productController = require('../controller/productController')


router.get('/products',productController.getProducts)

router.post('/product',productController.addProduct)




module.exports = router