'use strict';

const router = require('express').Router();
const berar = require('../middleware/berarauth');
const product = require('../collection/_product');

router.post('/product', berar, (req, res) => {
    let productInfo = {
        category_id: req.body.category_id,
        title: req.body.title,
        over_view: req.body.over_view,
        price: req.body.price,
        img_url: req.body.img_url,
        quantity: typeof req.body.quantity == "string" ? parseInt(req.body.quantity) : req.body.quantity,
    }
    product.createProduct(productInfo)
        .then(result => {
            res.status(201).send(result);
        }).catch(err => {
            console.log(err, 'message');
            res.status(206);
        })
});

router.get('/product', (req, res) => {
    product.getProducts()
        .then(result => {
            res.status(200).send(result.rows);
        }).catch(err => {
            console.log(err, 'message');
            res.status(206);
        })
});

router.delete('/product/:id', berar, (req, res) => {

    let _id = req.params.id;
    product.deleteProduct(_id)
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err, 'message');
            res.status(206);
        })
});

router.put('/product/:id', berar, (req, res) => {
    let productInfo = {
        category_id: req.body.category_id,
        title: req.body.title,
        over_view: req.body.over_view,
        price: req.body.price,
        img_url: req.body.img_url,
        quantity: typeof req.body.quantity == "string" ? parseInt(req.body.quantity) : req.body.quantity,
    }
    let _id = req.params.id;
    product.updateProduct(_id, productInfo)
        .then(result => {
            res.status(201).send(result);
        }).catch(err => {
            console.log(err, 'message');
            res.status(206);
        })
});

module.exports = router;