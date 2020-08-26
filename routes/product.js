
const express = require('express')
const router = express.Router()
const productModel = require('../models/product')


router.get('/', (req, res) => {

    productModel
        .find()
        .then(docs => {
            res.json({
                message: "Successfully find a date",
                count: docs.length,
                products: docs
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })

})


router.get('/:productId', (req, res) => {

    productModel
        .findById(req.params.productId)
        .then(doc => {
            res.json({
                message: "Successfully get product at " + req.params.productId,
                productInfo: doc
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })
})


router.post('/', (req, res) => {
    const newProduct = new productModel({
        name: req.body.productname,
        price: req.body.productprice
    })

    newProduct
        .save()
        .then(doc => {
            res.json({
                message: 'saved product',
                productInfo: doc
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })
})


router.put('/', (req, res) => {

})


router.delete('/:productId', (req, res) => {

    productModel
        .findByIdAndDelete(req.params.productId)
        .then(() => {
            res.json({
                message: "Successfully deleted product"
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })

})


module.exports = router