const router = require('express').Router()
const productController = require('../controller/productController')
const upload = require('../configuration/multer')


//------------adding product---------------
router.post('/product',upload.single('image'),productController.addProduct)

//--------getting all products------------
router.get('/products',productController.getProducts)


//----getting single product--------------
router.get('/product/:id',productController.getProduct)


//----update product---------------

router.post('/updateproduct/:id',upload.single('image'),productController.updateProduct)


router.delete('/product/:id',productController.deleteProduct)

module.exports = router