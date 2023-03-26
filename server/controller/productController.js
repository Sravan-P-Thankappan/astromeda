
const productModel = require('../model/productModel')

module.exports = {

    getProducts: async (req, res) => {

        try {
            let products = await productModel.find()

            res.status(200).json(products)

        } catch (error) {

            res.status(500).json({ message: error.message })
        }
    },



    addProduct: async (req, res) => {

        req.body.image = req.file.filename
        try {

            await productModel.create(req.body)
            res.status(201).json({ message: 'Product Added' })

        } catch (error) {

            res.status(500).json({ message: error.message })
        }

    },


    getProduct: async (req, res) => {

        try {
            const pId = req.params.id

            let product = await productModel.findById(pId)

            res.status(200).json(product)
        } catch (error) {

            res.status(500).json({ message: error.message })
        }

    },

    updateProduct: async (req, res) => {

        try {
            let product = await productModel.findById(req.params.id)

            product.name = req.body.name
            product.price = req.body.price
            product.brand = req.body.brand
            product.category = req.body.category

            if (req.file) {
                product.image = req.file.filename
            }

            await product.save()

            res.status(200).json({ message: 'updated' })

        } catch (error) {

            res.status(500).json({ message: error.message })
        }

    },


    deleteProduct: async (req, res) => {
          
        console.log('delete',req.params.id)
        try {

            let id = req.params.id

            await productModel.findByIdAndDelete({ _id: id })

            res.status(200).json({ message: 'deleted' })

        } catch (error) {

            res.status(500).json({ message: error.message })

        }

    }


}