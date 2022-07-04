const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('./collection/user_model');

require('dotenv').config();
let SECRET = process.env.SECRET;

class UserDataFlow {

    async hashPassword(pass) {
        if (pass) {
            return pass = await bcrypt.hash(pass, 5)
        } else {
            throw 'there is no password';
        }
    }
    getToken(user) {
        let token = jwt.sign({ user_name: user.user_name }, SECRET);
        return token;
    }
    async basicAuth(userName, pass) {
        const dataUser = await user.readUser(userName);
        let logPass = await dataUser.rows[0].user_password;
        let valid = await bcrypt.compare(pass, logPass)
        return valid ? dataUser.rows[0] : Promise.reject();
    }

    verifyToken = async function(token) {

        return jwt.verify(token, SECRET, async function(err, decoded) {
            if (err) {

                console.log('Error :INVALID SECRET OR TOKEN');
                return Promise.reject(err);
            }
            let username = decoded.user_name;
            let dataRecord = await user.readUser(username);
            if (dataRecord) {
                return Promise.resolve(decoded);
            }
            return Promise.reject();
        });
    };

};

module.exports = new UserDataFlow();