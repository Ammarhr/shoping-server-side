'use strict';
const users = require('../user-data-flow');

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {

        res.status(203);
        next('you must log in');
        return;
    }
    const bearerToken = req.headers.authorization.split(' ').pop();
    // console.log('this is the token=----------->', bearerToken);
    users.verifyToken(bearerToken).then(userInfo => {
        req.user = userInfo;
        next();
    }).catch(err => {
        console.log(err, 'this is error from barer');
        next('Invalid User Token')
    });
};