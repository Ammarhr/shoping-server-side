'use strict';

const router = require('express').Router();
const berar = require('../middleware/berarauth');
const user = require('../users/user_model');

router.post('/product', berar, (req, res) => {
    let productInfo = {
        category_id: req.body.category_id,
        title: req.body.title,
        over_view: req.body.over_view,
        price: req.body.price,
        img_url: req.body.img_url,
        quantity: req.body.quantity,
    }


});