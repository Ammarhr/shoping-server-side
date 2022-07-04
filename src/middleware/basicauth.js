const base64 = require('base-64');
const userDataFlow = require('../user-data-flow');

module.exports = (req, res, next) => {
    // check he headers if exist
    if (req.headers.authorization) {
        let basic = req.headers.authorization.split(' ').pop();
        const [user, pass] = base64.decode(basic).split(':');

        // check the basic authorization(username & password)
        userDataFlow.basicAuth(user, pass)
            .then((validUser) => {
                req.token = userDataFlow.getToken(validUser);
                next();
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('wrong password');
            })
    } else {
        next('Invalid Login');
    }
}