var express = require('express');
var router = express.Router();
var products = require('../data/products.json').products;

router.get('/products/:id', function(req,res){
    const idParam = req.params.id;
    const ret = products.find(function(product) {
        return product._id === idParam
    });
    res.json(ret)
});

module.exports = router;