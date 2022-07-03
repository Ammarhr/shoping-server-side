'use strict';

const router = require('express').Router();
const berar = require('../middleware/berarauth');
const category = require('../collection/_category');

router.post('/category', berar, (req, res) => {
    let categoryInfo = {
        title: req.body.title,
    }

    category.createCategory(categoryInfo)
        .then(result => {
            res.status(201).send(result.rows);
        }).catch(err => {
            console.log(err, 'message');
            res.status(206);
        })
});

router.get('/category', (req, res) => {

    category.getCategories()
        .then(result => {
            res.status(200).send(result.rows);
        }).catch(err => {
            console.log(err, 'message');
            res.status(206);
        })
});

router.delete('/category/:id', berar, (req, res) => {

    let _id = req.params.id;

    category.deleteCategory(_id)
        .then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err, 'message');
            res.status(206);
        })
});

module.exports = router;