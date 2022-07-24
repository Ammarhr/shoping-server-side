'use strict';

const router = require('express').Router();
const user = require('../collection/user_model');
const barerAuth = require('../middleware/berarauth');
const acl = require('../middleware/acl');


router.put('/updaterole', barerAuth, acl('admin'), (req, res) => {

    user.updateUser(req.body.user_name, req.body.role_name).then(result => {

        res.status(201).json(`${result.rows[0].user_name} has assigned as ${result.rows[0].role_name}`);
    }).catch(err => {
        res.status(403).send(err.msg)
        console.log('error', err)
    });
})
router.delete('/deleteuser/:user_name', barerAuth, acl('admin'), (req, res) => {

    user.deleteUser(req.params.user_name).then(result => {

        res.status(201).json({ message: req.params.user_name + 'deleted' });
    }).catch(err => {
        res.status(403).send(err.msg)
        console.log('error', err)
    });
})

router.get('/getusers', barerAuth, acl('admin'), (req, res) => {
    user.getAllUsers().then(result => {

        res.status(200).send(result.rows);
    }).catch(err => {
        res.status(403).send(err.msg)
        console.log('error', err)
    });
})
module.exports = router;