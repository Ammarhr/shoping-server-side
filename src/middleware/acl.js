const users = require('../user-data-flow');

module.exports = (role) => {

    return (req, res, next) => {
        try {
            if (req.user.role_name === role) {
                next()
            } else {
                res.status(403)
                next('You should be an admin')
            }

        } catch (err) {
            next(err)
        }
    }
}