const sellerProduct = require('../models/seller-products')

exports.getProducts = (req, res, next) => {
    sellerProduct.findAll()
        .then((result) => {
            res.json(result)
        })
        .catch(err => console.log(err))
}
exports.postProduct = (req, res, next) => {
    const ProductName = req.body.ProductName;
    const ProductPrice = req.body.ProductPrice;
    sellerProduct.create({
            ProductName: ProductName,
            ProductPrice: ProductPrice
        })
        .then(result => {
            res.json(result)
        })
        .catch(err =>
            console.log(err)
        )
}
exports.deleteProduct = (req, res, next) => {
    const productId = req.params.productId;
    sellerProduct.findByPk(productId)
        .then((product) => {
            product.destroy()
        })
        .catch((err) => {
            console.log(err)
        })
}