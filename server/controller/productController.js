
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

        try {

            let newProduct = await productModel.create(req.body)

            res.status(201).json({ message: 'Product Added' })

        } catch (error) {

        }

    }

    
}